//var hb = require('handlebars');

import handlebars from 'handlebars';
import template from './index.hbs';

import _ from 'lodash';
import './style.css';

import Icon from './icon.png';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';




function component() {
    const element = document.createElement('div');
    const data = {
      name: 'User',
      items: ['Item 1', 'Item 2', 'Item 3'],
    };
      
    const html = template(data);
    // Lodash, now imported by this script
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = html;
    element.classList.add('hello');
/*
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

*/
    

    //document.body.innerHTML = html;
    element.appendChild(html);

  
    return element;
  }
  
  document.body.appendChild(component());