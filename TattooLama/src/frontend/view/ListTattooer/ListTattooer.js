import React from 'react';
import GrigliaTattooer from '../ListTattooer/GrigliaTattooer';
import MetaTags from 'react-meta-tags';

const ListTattooer = () => (
    <div>
        <MetaTags>
          <title>Tatuatori a Milano: i migliori tatuatori della città</title>
          <meta name="description" content="Richiedi informazioni ai migliori tatuatori di Milano. I più famosi Tattoo Artist in città per il proprio tatuaggio, scopri prezzi e dove farlo." />
        </MetaTags>
        <div className="jumbotron jumbotron-fluid Jumbotron-list-tattooer">
            <div className="container">
                <h1 className="Text-1-Jumbotron-1">I MIGLIORI TATTOO ARTIST</h1>
                <h1 className="Text-2-Jumbotron-1">CHOOSE IT, <span className="Red">BOOK</span> IT</h1>
            </div>    
        </div> 

        <div className="container">
            <h2 className="text-1">Tutti i migliori tatuatori</h2>
            <GrigliaTattooer></GrigliaTattooer>
        </div>
    </div>
  )
  
  export default ListTattooer