"use strict";

function injectToMarkup (markup, scripts) { 
  let injected = "";

  if(scripts){
    injected += scripts.map(function(script){
      return '<script src="'+ script +'"></script>'
    }).join("");
  }

  if(markup.indexOf("</body>") > -1){
    return markup.replace("</body>", injected+"$&");
  } else {
    return markup + injected;
  }
}

export default injectToMarkup