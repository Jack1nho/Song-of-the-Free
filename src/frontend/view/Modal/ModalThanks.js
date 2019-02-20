import React, {Component} from 'react';

class ModalThanks extends Component {

    render(){
        return(
            <div className="modal fade" id="myModalGrazie">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <div className=" modal-grazie">
                            <h1 className="grazie">Grazie!</h1>
                            <h1 className="mid-text">Abbiamo ricevuto la tua richiesta</h1>
                            <hr></hr>
                            <h2 className="little-text">Abbiamo inviato la tua richiesta di informazioni al tatuatore che hai scelto. 
                                Al più presto ti risponderà per dirti se è possibile e quando potrai fare il tatuaggio!</h2>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
    }
}

export default ModalThanks;