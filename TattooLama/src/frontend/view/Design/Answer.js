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
                                  <button className="btn btn-link collapsed text-2 p-0" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Question 1
                                  </button>
                                  <FontAwesomeIcon icon="angle-right" className="fas fa-angle-right float-right text-2 mt-1 collapsed arrow-accordion" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" />  
                                </h5>
                              </div>
                          
                              <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                        <h2 className="normal-text">Ha aperto a Milano il suo tattoo studio (aprendo al pubblico  anche  la sua collezione storica e antropologica) 
                                            uno dei primi  in Italia  e tuttora uno dei più qualificati; il  suo "Queequeg Tattoo Studio & Museo" in zona Brera. </h2>
                                </div>
                              </div>
                            </div>

                            <div className="card mt-2">
                              <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <button className="btn btn-link collapsed text-2 p-0" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Question 2
                                  </button>
                                  <FontAwesomeIcon icon="angle-right" className="fas fa-angle-right float-right text-2 mt-1 collapsed arrow-accordion" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" />   
                                </h5>
                              </div>
                              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="normal-text">Lorem ipsum..</h2>
                                </div>
                              </div>
                            </div>

                            <div className="card mt-2 mb-5">
                              <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <button className="btn btn-link collapsed text-2 p-0" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Question 3
                                  </button>
                                  <FontAwesomeIcon icon="angle-right" className="fas fa-angle-right float-right text-2 mt-1 collapsed arrow-accordion" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOne" />   
                                </h5>
                              </div>
                              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <h2 className="normal-text">Lorem ipsum..</h2>
                                </div>
                              </div>
                            </div>
                        </div>
                </div>
            );
    }
}

export default Answer;