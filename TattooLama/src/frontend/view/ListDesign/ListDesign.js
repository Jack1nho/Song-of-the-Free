import React from 'react';
import GrigliaDesign from '../ListDesign/GrigliaDesign';

const ListDesign = () => (
    <div>
        <div className="jumbotron jumbotron-fluid Jumbotron-list-design">
            <div className="container">
                <h1 className="Text-1-Jumbotron-1">I MIGLIORI TATTOO DESIGN</h1>
                <h1 className="Text-2-Jumbotron-1">CHOOSE IT, <span className="Red">BOOK</span> IT</h1>
            </div>    
        </div> 

        <div className="container-wrapper container">
            <h2 className="text-1">Tutti i tattoo design</h2>
            <GrigliaDesign></GrigliaDesign>
        </div>
    </div>
  )
  
  export default ListDesign