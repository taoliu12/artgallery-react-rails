import React, { Component, useState, useEffect } from 'react';
import './App.scss';
import Artworks from './Artworks';

import ArtworkForm from './ArtworkForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import About from '../components/About';
import ArtworkShow from './ArtworkShow';

import Challenges from './Challenges'; 

function Header() {
    const [ darkMode, setDarkMode ] = React.useState(false)
     
    React.useEffect(() => {
      const body = document.body
      const toggle = document.querySelector('.toggle-inner')
      
      // If dark mode is enabled - adds classes to update dark-mode styling.
      // Else, removes and styling is as normal.
      if( darkMode === true ) {
        body.classList.add('dark-mode')
        toggle.classList.add('toggle-active')
      } else {
        body.classList.remove('dark-mode')
        toggle.classList.remove('toggle-active')
      }
    }, [darkMode])
    
    return (
      <header>
        Dark Mode
        <div
          id="toggle"
          onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
        >
          <div className="toggle-inner"/>
        </div>
      </header>
    )
  }
  
//   function App() {
//     return (
//       <main>
//         <Header />
//         <div id="container">
//           <h1>Simple React Dark Mode.</h1>
//           <p>Uses state to set a class on the body if dark mode is enabled.</p>
//         </div>
//       </main>
//     )
//   }
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   )
  
class App extends Component {
    render() {
         return (
            <main>
              <Header />
              <div className='App' id="container">                 
              <h1>React Art Gallery</h1>
                 <Router>
                     <React.Fragment>
                         <NavBar /><br></br>
                         <Route exact path='/' component={Artworks} />
                         <Route exact path='/artworks' component={Artworks} />
                         <Route exact path='/artwork/new' component={ArtworkForm} />
                         <Route path='/artworks/:id'  component={ArtworkShow} />
                        {/* <Route exact path='/about' component={About} />
                         <Route exact path='/challenges' component={Challenges} /> */}
                     </React.Fragment>
                 </Router>
             </div>
            </main>
        )
    }
}

export default App;