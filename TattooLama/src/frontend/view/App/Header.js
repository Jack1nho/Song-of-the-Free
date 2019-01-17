import React, {Component} from 'react';

class Header extends Component {
    
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-md">
                    <a class="navbar-brand" href="index.html">
                        <img src="../images/tattoolama-logo.png" alt=""/>
                    </a>
                    
                    <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active p-1">
                        <a class="nav-link" href="list_tattooer.html">Tatuatori <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item p-1">
                        <a class="nav-link" href="list_design.html">Tattoo Design</a>
                        </li>
                        <li class="nav-item p-1 pr-5">
                        <a class="nav-link" href="">Blog</a>
                        </li>
                        <li class="nav-item pr-4">
                            <a class="nav-link" href="">Contattaci 🦄</a>
                        </li>
                    </ul>
                    </div>
                </nav>

                <nav class="nav-res">
                    <div id="myNav" class="overlay">
                            <a href="" class="closebtn" onclick="closeNav()"><i class="fas fa-times"></i></a>
                            <div class="overlay-content">
                                <a href="list_tattooer.html">Tatuatori</a>
                                <a href="list_design.html">Tattoo Design</a>
                                <a href="">Blog<br></br><br></br></a>
                                <a href="">Contattaci 🦄</a>
                            </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div class="botton-res p-3" onclick="openNav()"><i class="fa fa-bars fa-1x" style={{color:'white'}} aria-hidden="true"></i></div>
                        
                        <a class="navbar-brand-res" href="index.html">
                                <img class="img-res mx-auto p-1" src="images/lama-logo.png" alt=""/>
                        </a>
                        <div class="p-3"></div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;