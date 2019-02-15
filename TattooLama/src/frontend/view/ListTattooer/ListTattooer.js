import React from 'react';
import GrigliaTattooer from '../ListTattooer/GrigliaTattooer';
//import load from '../../../images/Loading.gif';

const ListTattooer = () => (
    <div>
        <div class="jumbotron jumbotron-fluid Jumbotron-list-tattooer">
            <div class="container">
                <h1 class="Text-1-Jumbotron-1">I MIGLIORI TATTOO ARTIST</h1>
                <h1 class="Text-2-Jumbotron-1">CHOOSE IT, <span class="Red">BOOK</span> IT</h1>
            </div>    
        </div> 

        <div className="container-wrapper">
            <h1 class="text-1">Tutti i migliori tatuatori</h1>
            <GrigliaTattooer></GrigliaTattooer>
            {/* <div className="text-center my-4"><img style={{width: '6%'}} src={load} alt=""/></div> */}
        </div>
    </div>
  )
  
  export default ListTattooer