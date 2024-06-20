document.addEventListener("DOMContentLoaded", function() {
    let counter = 0;
    let isBinary = false;
    const counterValueElement = document.getElementById("counter-value");
    const decrementButton = document.getElementById("decrement-btn");
    const incrementButton = document.getElementById("increment-btn");
    const resetButton = document.getElementById("reset-btn");
    const toggleBinaryCounter = document.getElementById("toggle-binary-counter");

    function updateCounter() { counterValueElement.textContent = isBinary ? counter.toString(2) : counter;}

    decrementButton.addEventListener("click", function() { counter--; updateCounter();});

    incrementButton.addEventListener("click", function() { counter++; updateCounter();});

    resetButton.addEventListener("click", function() { counter = 0; updateCounter();});

    toggleBinaryCounter.addEventListener("click", function(e) { e.preventDefault(); isBinary = !isBinary; updateCounter(); toggleBinaryCounter.textContent = isBinary ? "Switch to Decimal Counter" : "Switch to Binary Counter";}); 
    updateCounter();});
