'use strict';

window.addEventListener('load', function() {
    const message = document.getElementById("loadingMessage");
    message.textContent = "Welcome";
    
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        document.body.removeChild(message);
      }, 2000);
});
