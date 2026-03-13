import { uploadCSV } from "../services/api";
const actions = {
    submit: handleSubmit,
    cancel: handleCancel
  };
  
  export function attachEvents() {
  
    document.addEventListener("click", (event) => {
  
      const el = event.target.closest("[data-action]");
      if (!el) return;
  
      const action = el.dataset.action;
  
      if (actions[action]) {
        actions[action](event, el);
      }
  
    });
  
  }
  
  function handleSubmit(event, el) {
  
    console.log("Submit clicked");
  
  }
  
  function handleCancel(event, el) {
  
    console.log("Cancel clicked");
  
  }