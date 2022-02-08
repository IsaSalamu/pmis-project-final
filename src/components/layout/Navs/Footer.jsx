import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return <div>
        <footer id="sticky-footer" class="flex-shrink-0 py-4 footer-css text-white-50 poss">
            <div class="container text-center">
            <small>Copyright &copy; 2022 Powered by PIMS Projects</small>
            </div>
        </footer>
    </div>;
  }
}

export default Footer;
