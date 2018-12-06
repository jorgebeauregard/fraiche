import React, { Component } from 'react';
import HeroSection from './../sections/MainSections/HeroSection';
import WhoSection from './../sections/MainSections/WhoSection';
import ProductSection from './../sections/MainSections/ProductSection';
import BranchSection from './../sections/MainSections/BranchSection';
import FAQComponent from './FAQComponent';

class MainComponent extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <HeroSection/>
                <WhoSection/>
                <BranchSection/>
                <ProductSection/>  
                <FAQComponent/>
            </div>
        );
    }
}
 
export default MainComponent;