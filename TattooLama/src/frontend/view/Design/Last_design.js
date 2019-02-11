import React, {Component} from 'react';

class LastDesign extends Component {
    render(){
        return(
            <div className="last-design">
                    <div className="text-3 mb-3">Ultimi design di: <span className="grey">Gianmaruizio Fercioni</span></div>

                    <div className="row row-grid">
                            <div className="col-6 col-sm-6 col-md-3 col-lg pb-3">
                                <img id="myImg" className="square img1" src="https://via.placeholder.com/168x168.jpg/eae9e5" onclick="well(this.src)" alt="" />
                            </div>
                            <div className="col-6 col-sm-6 col-md-3 col-lg pb-sm-3">
                                <img id="myImg" className="square img2" src="https://via.placeholder.com/168x168.jpg/eae9e9" onclick="well(this.src)" alt="" />
                            </div>
                            <div className="col-6 d-md-block col-md-3 col-lg">
                                <img id="myImg" className="square img3" src="https://via.placeholder.com/168x168.jpg/d7dbe0" onclick="well(this.src)" alt="" />
                            </div>
                            <div className="col-6 d-md-block col-md-3 col-lg">
                                <img id="myImg" className="square img4" src="https://via.placeholder.com/168x168.jpg/383838" onclick="well(this.src)" alt="" />
                            </div>
                            <div className="d-none d-lg-block col-lg">
                                    <img id="myImg" className="square img5" src="https://via.placeholder.com/168x168.jpg/383865" onclick="well(this.src)" alt="" />
                            </div>
                            

                            <div id="myLightbox" className="lightbox">
                                <span className="closeX"><i className="fas fa-times"></i></span>
                                <span className="next"><i className="fa fa-angle-right"></i></span>
                                <span className="prev"><i className="fa fa-angle-left"></i></span>
                                <img className="modal-content-lightbox" id="img01" alt="" />
                            </div>
                    </div>
            </div>
            );
    }
}

export default LastDesign;