import React, {Component} from 'react';
import Slider from '../Home/Slider';
import GrigliaHome from '../Home/GrigliaHome';
import img_tatuatore from '../../../images/tatuatore-tattoolama.jpg';
import { Link } from 'react-router-dom';

class Home extends Component {
    
  render(){
      return(
      <div>
            <div className="jumbotron jumbotron-fluid Jumbotron-1">
              <div className="container">
                  <h1 className="Text-1-Jumbotron-1">TROVA IL TUO TATUAGGIO PERFETTO</h1>
                  <h1 className="Text-2-Jumbotron-1">FLASH IT, <span className="Red">BOOK</span> IT</h1>
              </div>    
            </div>

              <div className="container-wrapper">
                <h1 className="text-1 mt-md-0 mt-4">Migliori tatuatori di Milano</h1>
                  <Slider></Slider>
                <div className="text-center text-md-left"><Link className="text-2" to='/list_tatuatori'>Vedi tutti i migliori tatuatori ></Link></div>
              </div>

              <div className="container-wrapper-2">
                <div className="jumbotron Jumbotron-2">
                    <h2 className="Text-Jumbotron-2">Una selezione di artisti verificati per<br></br><span className="Red-2">QUALITÀ E ORIGINALITÀ.</span></h2>
                </div>
              </div>

              <div className="container-wrapper">
                <h3 className="text-3 mb-3">Tutti i tattoo design</h3>
                <GrigliaHome></GrigliaHome>
                <div className="text-center text-md-left"><Link className="text-2" to='/list_design'>Vedi tutti i tatuaggi ></Link></div>
            
                <div className="row last-section">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-4">I migliori tatuatori della tua città</h2>
                                <h2 className="text-5">A PORTATA DI CLICK.</h2>
                            </div>

                            <div className="col-12 list-123 d-none d-md-block">
                                <div className="list">
                                    <h3 className="list-number"><span className="number">&thinsp;1.&nbsp;</span><strong>Scegli</strong> il tuo artista preferito</h3>
                                    <h3 className="list-number"><span className="number">2.&nbsp;</span><strong>Visualizza</strong> i migliori design disponibili</h3>
                                    <h3 className="list-number"><span className="number">3.&nbsp;</span><strong>Prenota</strong> il tattoo and get inked!</h3>
                                </div>
                                <div className="text-center text-md-left"><Link className="text-2" to='/list_tatuatori'>Vedi tutti i tatuatori ></Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-last-image">    
                        <img className="last-img img-fluid" src={img_tatuatore} alt=""/>
                    </div> 

                    <div className="col-12 list-123 d-md-none">
                            <div className="list">
                                <h3 className="list-number"><span className="number">&thinsp;1.&nbsp;</span><strong>Scegli</strong> il tuo artista preferito</h3>
                                <h3 className="list-number"><span className="number">2.&nbsp;</span><strong>Visualizza</strong> i migliori design <span className="d-none d-md-block">disponibili</span></h3>
                                <h3 className="list-number"><span className="number">3.&nbsp;</span><strong>Prenota</strong> il tattoo and get inked!</h3>
                            </div>
                            <div className="text-center text-md-left"><a className="text-2" href="list_tattooer.html">Vedi tutti i tatuatori ></a></div>
                    </div>
                </div>
                      
                <div className="container-fluid big-text text-center">
                    <h4 className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
                </div>
              </div>
      </div>
      );
  }
}

export default Home