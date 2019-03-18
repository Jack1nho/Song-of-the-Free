import React, {Component} from 'react';

class ModalEmail extends Component {

    render(){
        return(
            <div className="modal fade" id="myModalEmail">
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <div className="modal-whatsapp">
                            <h1 className="text-3">Prenota il tattoo</h1>
                            <hr></hr>
                            <h2 className="little-text text-left">Invia una richiesta di prenotazione al tatuatore. L’artista, senza impegno, ti proporrà la data e l’orario per l’appuntamento.</h2>
                                <form className="my-1">

                                    <div className="form-group">
                                        <label className="label" htmlFor="inputNome">Nome:</label>
                                        <input type="text" className="form-control nome-form" id="inputNome" placeholder="Es. Mario"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="label" htmlFor="inputEmail">Email: </label>
                                        <input type="email" className="form-control email-form" id="inputEmail" placeholder="Es. mariorossi@example.com"/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-6">
                                            <label className="label" htmlFor="inputData">Seleziona la data</label>
                                            <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
                                                <input className="form-control datetimepicker-input data-form" data-target="#datetimepicker4" data-toggle="datetimepicker" id="inputData" placeholder="Qualsiasi data"/>   
                                            </div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label className="label" htmlFor="inputOrario">Seleziona l'orario</label>
                                            <div className="input-group date" id="datetimepicker3" data-target-input="nearest">
                                                <input type="text" className="form-control datetimepicker-input data-form" data-target="#datetimepicker3" data-toggle="datetimepicker" id="inputOrario" placeholder="Qualsiasi orario"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="label" htmlFor="inputZone">Indica la zona in cui vorresti tatuarti:</label>
                                        <input type="text" className="form-control zone-form" id="inputZone" placeholder="Es. Avambraccio, Quadricipite, Spalla"/>
                                    </div>

                                    <div className="form-group">
                                        <label className="label" htmlFor="areaInfo">Chiedi al tatuatore qualsiasi informazione! (opzionale)</label>
                                        <textarea className="form-control area-form" id="areaInfo" rows="3" placeholder="Es. Posso cambiare la dimensione?"></textarea>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                        <label className="custom-control-label" htmlFor="customCheck2">Accetto termini e condizioni del servizio</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-md-0 mb-5">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                        <label className="custom-control-label" htmlFor="customCheck3">Voglio iscrivermi alla newsletter di Tattoolama! (Opzionale)</label>
                                    </div>
                                        <button type="submit" className="btn bottone-whatsapp mt-4 d-none d-md-block">Richiedi informazioni</button>
                                </form>
                        </div>
                        <div className="row div-prezzo-modal d-md-none">
                            <div className="col-6 m-0"><h2 className="text-3 prezzo"><span className="grey">Prezzo: </span>€ {this.props.design.price}</h2></div>
                            <div className="col-6"><button type="button" className="btn bottone-richiesta" id="bottone-richiesta">Invia richiesta</button></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            );
    }
}

export default ModalEmail;