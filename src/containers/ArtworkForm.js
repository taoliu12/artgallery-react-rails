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
        fetch(`http://localhost:3001/api/artworks`, {
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
      <form onSubmit={handleSubmit(onSubmit)}>
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
                cols={40}
                rows={1}  />
        </div>
        

        <div>
            <p>Description: {errors.description && <span className='formError'>(This field is required)</span>}</p>
           
            <textarea 
                type='textarea'
                name='description' 
                {...register("description", { required: true })}
                cols={40}
                rows={10}  />
        </div>
        

        <div>
            <p>Image URL: {errors.url && <span className='formError'>(This field is required)</span>}</p>
            <input 
                type='text'
                name='url' 
                {...register("url", { required: true })}
                cols={40}
                rows={2}  />
        </div>
        
        
        <input type="submit" />
        {isSuccessfullySubmitted && (
          <div className="success">Form submitted successfully</div>
        )}
      </form>
    );
  }



// class ArtworkForm extends Component {

//     handleOnChange = (e) => {
//         const name = e.target.name
//         const value = e.target.value
//         const updatedData = Object.assign({}, this.props.artworkFormData, { [name]: value });
//         this.props.updateArtworkFormData(updatedData);
//     }

//     handleOnSubmit = (e) => {
        
//         e.preventDefault();
//         this.props.createArtwork(this.props.artworkFormData);         
//         this.props.resetArtworkForm();
//     }

//     render() {
//         return (
//             <div className='submit-artwork-form'>
//                 <h3>Submit a new artwork</h3>

//                 <form onSubmit={this.handleOnSubmit}>
//                     <div>
//                         <p>Title:</p>
//                         <input 
//                             type='text'
//                             name='title' 
//                             value={this.props.artworkFormData.title}
//                             onChange={this.handleOnChange}
//                             />
//                     </div>
                    // <div>
                    //     <p>Artist:</p>
                    //     <input 
                    //         type='text'
                    //         name='author' 
                    //         value={this.props.artworkFormData.author}
                    //         onChange={this.handleOnChange}
                    //         cols={40}
                    //         rows={1}  />
                    // </div>
                    // <div>
                    //     <p>Description: </p>
                       
                    //     <textarea 
                    //         type='textarea'
                    //         name='description' 
                    //         value={this.props.artworkFormData.description}
                    //         onChange={this.handleOnChange}
                    //         cols={40}
                    //         rows={10}  />
                    // </div>
                    // <div>
                    //     <p>Image URL:  </p>
                    //     <input 
                    //         type='text'
                    //         name='url' 
                    //         value={this.props.artworkFormData.url}
                    //         onChange={this.handleOnChange}
                    //         cols={40}
                    //         rows={2}  />
                    // </div>
//                     <div>
//                         <input type='submit' value='Submit' />
//                     </div>
//                     <br />
//                 </form>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     artworkFormData: state.artworkFormData
// })

// export default connect(mapStateToProps, 
//     { 
//         updateArtworkFormData, 
//         createArtwork, 
//         resetArtworkForm 
//     })
//     (ArtworkForm)
