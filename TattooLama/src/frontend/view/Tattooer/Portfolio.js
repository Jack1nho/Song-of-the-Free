import React, {Component} from 'react';

class Portfolio extends Component {
    
    render(){
        return(
            <div class="portfolio" id="portfolio">
                                <h2 class="text-3 my-4">Ultimi tattoo di Gianmaurizio Fercioni</h2>
                                <div class="row row-grid">
                                        <div class="col-6 col-lg pb-3">
                                            <img id="myImg" class="square img1" src="https://via.placeholder.com/168x168.jpg/eae9e5" onclick="well(this.src)" alt=""/>
                                        </div>
                                        <div class="col-6 col-lg pb-sm-3">
                                            <img id="myImg" class="square img2" src="https://via.placeholder.com/168x168.jpg/eae9e9" onclick="well(this.src)" alt=""/>
                                        </div>
                                        <div class="col-6 col-lg">
                                            <img id="myImg" class="square img3" src="https://via.placeholder.com/168x168.jpg/d7dbe0" onclick="well(this.src)" alt=""/>
                                        </div>
                                        <div class="col-6 col-lg">
                                            <img id="myImg" class="square img4" src="https://via.placeholder.com/168x168.jpg/383838" onclick="well(this.src)" alt=""/>
                                        </div>

                                        <div id="myLightbox" class="lightbox">
                                            <span class="closeX"><i class="fas fa-times"></i></span>
                                            <span class="next"><i class="fa fa-angle-right"></i></span>
                                            <span class="prev"><i class="fa fa-angle-left"></i></span>
                                            <img class="modal-content-lightbox" id="img01" alt=""/>
                                        </div>
                                </div>
                                <div class="jumbotron jumbotron-fluid Jumbotron-artista my-5">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12 col-lg-10">
                                                <h2 class="text-1-jumbotron-artista">Vuoi una consulenza da Gianmaurizio Fercioni?</h2> 
                                                <h3 class="text-2-jumbotron-artista">Descrivi la tua idea di tattoo e Gianmaurizio Fercioni ti risponderà a breve!</h3> 
                                            </div>
                                            <div class="col-12 col-lg-2">
                                                <button type="button" class="btn bottone-consulenza-2 float-lg-right">Richiedi Consulenza</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                        </div>
        );
    }
}

export default Portfolio;