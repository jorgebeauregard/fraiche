import React, { Component } from 'react';

class FAQSection extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section className="section has-background-primary" id="faq">
                    <h2 className="title is-2 is-size-3-mobile has-text-centered has-text-white" >Preguntas <strong className="has-text-white">frecuentes</strong></h2>
                    <p className="subtitle is-5 has-text-centered marginTop has-text-white">Nuestro equipo está dispuesto a ayudarte.</p>
                    <div className="container">
                        <div className="columns is-multiline marginTop">
                            <div className="column is-half">
                                <article className="media notification has-background-success box-shadow">
                                    <figure className="media-left">
                                        <span className="icon"><i className="fas fa-2x fa-user has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">¿Cómo puedo ser distribuidor?</h3>
                                        <p className="is-size-5 has-text-white">
                                        Convertirse en distribuidor es muy fácil, solo tienes que hacer una inversión mínima de $300. ¡Hazte distribuidor y goza de los beneficios, promociones y mucho más!
                                        </p>
                                    </div>
                                </article>  
                            </div>
                            <div className="column is-half">
                                <article className="media notification has-background-accent-dark box-shadow">
                                    <figure className="media-left">
                                        <span className="icon"><i className="fas fa-2x fa-map-marker-alt has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">¿Dónde puedo utilizar mi clave?</h3>
                                        <p className="is-size-5 has-text-white">
                                        En cualquiera de nuestras siete sucursales en Veracruz, Cardel y Xalapa. (Consulta nuestras direcciones y horarios dando click aquí)
                                        </p>
                                    </div>
                                </article>  
                            </div>
                            <div className="column is-half">
                                <article className="media notification has-background-danger box-shadow">
                                    <figure className="media-left">
                                        <span className="icon"><i className="fas fa-2x fa-clock has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">¿Cuál es la vigencia de mi clave?</h3>
                                        <p className="is-size-5 has-text-white">
                                        Tu clave tiene vigencia de 2 meses (el mes que compraste y el siguiente). Si tu clave es dada de baja, actívala nuevamente con la compra mínima.
                                        </p>
                                    </div>
                                </article>  
                            </div>
                            <div className="column is-half">
                                <article className="media notification has-background-warning box-shadow">
                                    <figure className="media-left">
                                        <span className="icon"><i className="fas fa-2x fa-question-circle has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">¿Cuál es la diferencia entre distribuidor autorizado y franquicia?</h3>
                                        <p className="is-size-5 has-text-white">
                                        En las franquicias se elabora el perfume en mostrador y con nosotros obtienes el producto listo y directo de fábrica.
                                        </p>
                                    </div>
                                </article>  
                            </div>
                            <div className="column">
                                <article className="media notification has-background-accent box-shadow">
                                    <figure className="media-left">
                                        <span className="icon"><i className="fas fa-2x fa-question-circle has-text-white"></i></span>
                                    </figure>
                                    <div className="media-content">
                                        <h3 className="title is-size-4 has-text-white">¿Cuándo son los días de promoción?</h3>
                                        <p className="is-size-5 has-text-white">
                                        Todos los <strong>miércoles</strong> tenemos precios especiales. Pregunta en tienda por nuestros descuentos.
                                        </p>
                                    </div>
                                </article>  
                            </div>
                        </div>
                    </div>                
                </section>
            </div>
        );
    }
}
 
export default FAQSection;