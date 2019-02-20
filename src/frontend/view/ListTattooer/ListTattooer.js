import React from 'react';
import GrigliaTattooer from '../ListTattooer/GrigliaTattooer';

const ListTattooer = () => (
    <div>
        <div className="jumbotron jumbotron-fluid Jumbotron-list-tattooer">
            <div className="container">
                <h1 className="Text-1-Jumbotron-1">I MIGLIORI TATTOO ARTIST</h1>
                <h1 className="Text-2-Jumbotron-1">CHOOSE IT, <span className="Red">BOOK</span> IT</h1>
            </div>    
        </div> 

        <div className="container-wrapper">
            <h1 className="text-1">Tutti i migliori tatuatori</h1>
            <GrigliaTattooer></GrigliaTattooer>
        </div>
    </div>
  )
  
  export default ListTattooer