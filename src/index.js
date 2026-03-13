import template from './templates/page.hbs';
import { attachEvents } from './events/actions';
import './style.css';

function render() {

  const data = {
    name: "User",
    items: ["Item 1","Item 2","Item 3"]
  };

  const html = template(data);

  document.getElementById("app").innerHTML = html;

  attachEvents();

}

render();