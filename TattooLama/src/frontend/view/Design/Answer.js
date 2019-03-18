import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleRight)

class Answer extends Component {
    render(){
        return(
            <div className="answers">
                        <div className="text-3 my-4">Domande più Frequenti</div>

                        <div className="accordion" id="accordionExample">
                            <div className="card">
                              <div className="card-header" id="headingOne">
                                <h5 className="mb-0">
                                  <button className="answer btn btn-link collapsed text-2 p-0 pr-4" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Il prezzo del design cosa include?
                                  </button>
                                  <FontAwesomeIcon icon="angle-right" className="fas fa-angle-right float-right text-2 mt-1 collapsed arrow-accordion" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" />  
                                </h5>
                              </div>
                          
                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                        <h2 className="normal-text">Il prezzo del design include il design stesso e l'esecuzione dall'artista che l'ha disegnato.
                                         Il prezzo comprende anche piccole modifiche fatto al disegno (es. aggiunta o omissione di un elemento, cambio colore).  </h2>
                                </div>
                              </div>
                            </div>

                            <div className="card mt-2">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <button className="answer btn btn-link collapsed text-2 p-0 pr-4" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Posso farmi fare il disegno da un altro tatuatore?
                                  </button>
                                  <FontAwesomeIcon icon="angle-right" className="fas fa-angle-right float-right text-2 mt-1 collapsed arrow-accordion" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" />   
                                </h5>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="normal-text">No, non puoi. I disegni di Tattoolama possono essere fatti esclusivamente dagli artisti che l'hanno disegnato. 
                                    Dovresti diffidare di tutti i tatuatori che si propongono di copiare tatuaggi altrui. 
                                    Un tatuaggio è un'opera d'arte e deve essere esclusivamente della persona che se l'è tatuata.</h2>
                                </div>
                              </div>
                            </div>

                            <div className="card mt-2 mb-5">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <button className="answer btn btn-link collapsed text-2 p-0 pr-4" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Come posso sapere se il tatuatore sia abbastanza bravo da poter eseguire il disegno?
                                  </button>
                                  <FontAwesomeIcon icon="angle-right" className="fas fa-angle-right float-right text-2 mt-1 collapsed arrow-accordion" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOne" />   
                                </h5>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="normal-text">Prima di inserire un tatuatore nella piattaforma noi di Tattoolama facciamo dei controlli basati su: qualità dei disegni, recensioni, tatuaggi eseguiti. 
                                    Se i tatuatori rispettano tutti i requisiti allora possono far parte del nostro network.</h2>
                                </div>
                              </div>
                            </div>
                        </div>
                </div>
            );
    }
}

export default Answer;