import React, { Component } from 'react';

class ScentsSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="section has-text-centered">
                    <h2 className="title is-2 is-size-3-mobile has-text-centered" >Genealogía</h2>
                    <p className="subtitle is-5 has-text-centered marginTop">Da click en el siguiente botón para descargar nuestra <strong className="has-text-primary">lista de aromas.</strong></p>
                    <button className="button has-text-centered is-primary is-large">Descargar</button>
                </section>
            </div>
        );
    }
}
 
export default ScentsSection;