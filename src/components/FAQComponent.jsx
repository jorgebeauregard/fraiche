import React, { Component } from 'react';
import TitleSection from './../sections/FAQSections/TitleSection';
import QuestionsSection from '../sections/FAQSections/QuestionsSection';


class FAQComponent extends Component {
    state = {  }
    render() { 
        return (
                <div>
                    <TitleSection/>
                    <section className="section has-background-white-ter">
                    </section>
                </div>
        );
    }
}
 
export default FAQComponent;