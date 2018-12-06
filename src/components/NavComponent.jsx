import React, { Component } from 'react';
import transparent_logo from '../images/transparent_logo.png';
import {Link} from 'react-router-dom'

class NavComponent extends Component {
    state = { isActive: false }

    renderIsActive() {
        return this.state.isActive===true ? "navbar-menu is-active has-background-primary" : "navbar-menu";
    }

    toggleIsActive = () => {
        this.setState({isActive: !this.state.isActive});
    }

    render() { 
        return ( 
            <div>
                <nav className="navbar is-primary is-fixed-top">
                    <div className="container">
                        <div className="navbar-brand">
                            <a className="navbar-item"><img src={transparent_logo} alt="Logo"/></a>
                            <span className="navbar-burger burger has-background-primary" data-target="navbarMenuHeroC" onClick={this.toggleIsActive}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroC" className={this.renderIsActive()} >
                            <div className="navbar-end">
                                <a className="navbar-item has-text-white" href="/">Inicio</a>
                                <a className="navbar-item has-text-white">Preguntas frecuentes</a>
                                <a className="navbar-item has-text-white">Contacto</a>
                            </div>
                        </div>
                    </div>
                    
                </nav>
            </div>
         );
    }
}
 
export default NavComponent;