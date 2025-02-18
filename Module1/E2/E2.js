window.addEventListener('load', function() {
    const message = document.getElementById("loadingMessage");
    message.innerHTML = "Welcome";
    
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        document.body.removeChild(message);
      }, 2000);
    // Nu is het veilig om met alle elementen te werken
});
