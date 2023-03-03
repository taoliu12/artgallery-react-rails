import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateArtworkFormData, resetArtworkForm } from '../actions/artworkForm'
import { createArtwork } from '../actions/artworks'
// import * as React from "react";
// import "./styles.css";
import { useForm } from "react-hook-form";

export default function ArtworkForm() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState(
        false
      );

    const onSubmit = artwork => {
        console.log('submit form data',artwork)
        fetch(`http://localhost:3000/api/artworks`, {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artwork)
            }
        )
        .then(response => response.json())
        .then(artwork =>{
            console.log('response',artwork);
            setIsSuccessfullySubmitted(true);  
            reset({
                title: '', 
                author: '', 
                description: '', 
                url: '' })           
        })
    };
  
    // console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className='artworkForm' onSubmit={handleSubmit(onSubmit)}>
          <div> 
            <p>Title: {errors.title && <span className='formError'>(This field is required)</span>}</p>
            <input 
                type='text'
                name='title' 
                {...register("title", { required: true })}
                />
        </div>
                             
        <div>
            <p>Artist: {errors.author && <span className='formError'>(This field is required)</span>}</p>
            <input 
                type='text'
                name='author' 
                {...register("author", { required: true })}
                
                rows={1}  />
        </div> 

        <div>
            <p>Image URL: {errors.url && <span className='formError'>(This field is required)</span>}</p>
            <input 
                type='text'
                name='url' 
                {...register("url", { required: true })}
                
                rows={2}  />
        </div>
        <br></br>
        <input className='submitBtn' type="submit" />
        {isSuccessfullySubmitted && (
          <div className="success">Artwork submitted successfully!</div>
        )}
      </form>
    );
  }
