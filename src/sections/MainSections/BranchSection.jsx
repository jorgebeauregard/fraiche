import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class BranchSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="section has-background-primary">
                    <Fade top>
                    <br/><h2 className="title is-2 is-size-3-mobile has-text-centered has-text-white">Conoce nuestras distintas sucursales</h2>
                    <p className="subtitle is-5 has-text-centered marginTop has-text-white">Nos puedes encontrar en cualquiera de nustras tiendas.</p>
                    </Fade>
                </section>
            </div>
         );
    }
}
 
export default BranchSection;