import React, {Component} from 'react';
import { Wizard, Steps, Step } from 'react-albus';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Line } from 'rc-progress';
import './Animation.css';
import 'rc-progress/assets/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)

class ModalEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', mail: ''};
    
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeName(event) {
        this.setState({name: event.target.value});
      }

      handleChangeMail(event) {
        this.setState({mail: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + this.state.mail);
        event.preventDefault();
      }

    render(){

        const width = {
            width: '100%' 
        }

        const widhtbotton = {   
            width: '223px'
        }
    
        return(
            <div className="modal fade" id="myModalEmail">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <div className="modal-whatsapp d-none d-md-block">
                            <h1 className="text-3">Prenota il tattoo</h1>
                            <hr></hr>
                            <h2 className="little-text text-left">Invia una richiesta di prenotazione al tatuatore. L’artista, senza impegno, ti proporrà la data e l’orario per l’appuntamento.</h2>
                                <form className="my-1" onSubmit={this.handleSubmit}>

                                    <div className="form-group">
                                        <label className="label" htmlFor="inputNome">Nome:</label>
                                        <input type="text" className="form-control nome-form" id="inputNome" placeholder="Es. Mario" value={this.state.name} onChange={this.handleChangeName}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="label" htmlFor="inputEmail">Email: </label>
                                        <input type="email" className="form-control email-form" id="inputEmail" placeholder="Es. mariorossi@example.com" value={this.state.mail} onChange={this.handleChangeMail}/>
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
                                        <label className=   "custom-control-label" htmlFor="customCheck2">Accetto termini e condizioni del servizio</label>
                                    </div>

                                    <div className="custom-control custom-checkbox mb-2">
                                        <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                        <label className="custom-control-label" htmlFor="customCheck3">Voglio iscrivermi alla newsletter di Tattoolama! (Opzionale)</label>
                                    </div>
                                        <button type="submit" value="Submit" className="btn bottone-whatsapp" data-toggle="modal" data-target="#myModalGrazie">Richiedi informazioni</button>
                                </form>
                        </div>
                        <div className="modal-whatsapp d-md-none">
                        <h1 className="text-3 text-center">Richiedi informazioni</h1>
                        <h2 className="little-text text-left mt-4">Invia una richiesta di prenotazione al tatuatore indicando le informazioni richiesti nei campi. La richiesta non è vincolante.</h2>
                            <Wizard
                                render={({ step, steps }) => (
                                    <div>
                                    <Line
                                        percent={(steps.indexOf(step) + 1) / steps.length * 100}
                                        strokeWidth="0.5"
                                        strokeColor="#d80e47"
                                        trailColor="#eeeeee"
                                        strokeLinecap="butt"
                                        trailWidth="0.5"
                                        className="line-step"
                                    />
                                    <TransitionGroup>
                                        <CSSTransition
                                        key={step.id}
                                        classNames="example"
                                        timeout={{ enter: 500, exit: 500 }}
                                        >
                                        <div className="">
                                            <Steps key={step.id} step={step}>
                                                <Step
                                                    id="one"
                                                    render={({ next }) => (
                                                    <div>
                                                        <h3 className="text-step text-center">1 di 2</h3>
                                                        <form className="my-1">
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="inputNome">Nome:</label>
                                                                <input type="text" className="form-control nome-form" id="inputNome" placeholder="Es. Mario" style={width}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="inputEmail">Email: </label>
                                                                <input type="email" className="form-control email-form" id="inputEmail" placeholder="Es. mariorossi@example.com" style={width}/>
                                                            </div>
                                                        </form>
                                                        <div className="text-center">
                                                            <button className="btn bottone-whatsapp mt-5"  onClick={next}>Continua<FontAwesomeIcon className="float-right mt-1" icon="angle-right"/></button>
                                                        </div>
                                                    </div>
                                                    )}
                                                />
                                                <Step
                                                    id="two"
                                                    render={({ previous }) => (
                                                    <div>
                                                        <h3 className="text-step text-center">2 di 2</h3>
                                                        <form className="my-1">
                                                            <div className="form-row">
                                                                <div className="form-group col-6">
                                                                    <label className="label" htmlFor="inputData">Seleziona la data</label>
                                                                    <div className="input-group date" id="datetimepicker4" data-target-input="nearest">
                                                                        <input className="form-control datetimepicker-input data-form" data-target="#datetimepicker4" data-toggle="datetimepicker" id="inputData" placeholder="Qualsiasi data"/>   
                                                                    </div>
                                                                </div>
                                                                <div className="form-group col-6 ">
                                                                    <label className="label" htmlFor="inputOrario">Seleziona l'orario</label>
                                                                    <div className="input-group date " id="datetimepicker3" data-target-input="nearest">
                                                                        <input type="text" className="form-control datetimepicker-input data-form" data-target="#datetimepicker3" data-toggle="datetimepicker" id="inputOrario" placeholder="Qualsiasi orario"/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="label" htmlFor="inputZone">Indica la zona in cui vorresti tatuarti:</label>
                                                                <input type="text" className="form-control zone-form" id="inputZone" placeholder="Es. Avambraccio, Quadricipite, Spalla" style={width}/>
                                                            </div>

                                                            <div className="form-group">
                                                                <label className="label" htmlFor="areaInfo">Chiedi al tatuatore qualsiasi informazione! (opzionale)</label>
                                                                <textarea className="form-control area-form" id="areaInfo" rows="3" placeholder="Es. Posso cambiare la dimensione?" style={width}></textarea>
                                                            </div>

                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                                                <label className="custom-control-label" htmlFor="customCheck2">Accetto termini e condizioni del servizio</label>
                                                            </div>

                                                            <div className="custom-control custom-checkbox mb-2">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                                                <label className="custom-control-label" htmlFor="customCheck3">Voglio iscrivermi alla newsletter di Tattoolama! (Opzionale)</label>
                                                            </div>
                                                            <div className="text-center">
                                                                <button type="submit" className="btn bottone-whatsapp mt-5" style={widhtbotton}>Richiedi informazioni<FontAwesomeIcon className="float-right mt-1" icon="angle-right"/></button>
                                                            </div>
                                                        </form>
                                                        
                                                    </div>
                                                    )}
                                                />
                                            </Steps>
                                        </div>
                                        </CSSTransition>
                                    </TransitionGroup>    
                                    </div>
                                )}
                            />
                        </div>
                        {/* <div className="row div-prezzo-modal d-md-none">
                            <div className="col-6 m-0"><h2 className="text-3 prezzo"><span className="grey">Prezzo: </span>€ {this.props.design.price}</h2></div>
                            <div className="col-6"><button type="button" className="btn bottone-richiesta" id="bottone-richiesta">Invia richiesta</button></div>
                        </div> */}
                    </div>
                </div>
                </div>
            </div>
            );
    }
}

export default ModalEmail;