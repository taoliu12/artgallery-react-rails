import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function ArtworkForm() {
    const [artworkId, setArtWorkId] = useState(null)
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = React.useState(
        false
      );

    const onSubmit = artwork => {
        console.log('submit form data',artwork)
        fetch(`/api/artworks`, {
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
            setArtWorkId(artwork.id)
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
          <div className="success">
            <br/>
            <p>Artwork submitted successfully!   </p>
            <p><NavLink to={`/artworks/${artworkId}`}>View it here</NavLink>. </p>
          </div>
        )}
      </form>
    );
  }
