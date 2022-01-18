import React, { Component } from 'react';

export default class FooterComponent extends Component {
    //  auth = btoa("admin:district")
   
    render() {
        return (
            <div className='footer-css'>
            <p className='footer-text'>&copy;2022 Powered by PIMS Projects</p>
        </div>
        );
    }
}