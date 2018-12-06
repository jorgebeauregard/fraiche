import React, { Component } from 'react';
import QuestionsSections from './QuestionsSection';

class TitleSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="section has-background-primary">
                    <h2 className="title is-2 is-size-3-mobile has-text-centered has-text-white" >Preguntas <strong className="has-text-white">frecuentes</strong></h2>
                    <p className="subtitle is-5 has-text-centered marginTop has-text-white">Nuestro equipo está dispuesto a ayudarte.</p>
                    <QuestionsSections/>
                </section>
            </div>
        );
    }
}
 
export default TitleSection;