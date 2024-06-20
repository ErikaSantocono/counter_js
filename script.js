document.addEventListener("DOMContentLoaded", function() {
    let counter = 0;
    let isBinary = false;
    const counterContainer = document.getElementById("counter-container");
    const counterValueElement = document.createElement("span");
    counterValueElement.id = "counter-value";
    counterValueElement.textContent = counter;
    const buttonsContainer = document.createElement("div");
    
    buttonsContainer.id = "buttons-container";
    const decrementButton = document.createElement("button");
    decrementButton.id = "decrement-btn";
    decrementButton.textContent = "-";

    const incrementButton = document.createElement("button");
    incrementButton.id = "increment-btn";
    incrementButton.textContent = "+";

    const resetButton = document.createElement("button");
    resetButton.id = "reset-btn";
    resetButton.textContent = "Reset";

    buttonsContainer.appendChild(decrementButton);
    buttonsContainer.appendChild(incrementButton);
    buttonsContainer.appendChild(resetButton);
    counterContainer.appendChild(counterValueElement);
    counterContainer.appendChild(buttonsContainer);

    const toggleBinaryCounter = document.getElementById("toggle-binary-counter");

    function updateCounter() {counterValueElement.textContent = isBinary ? counter.toString(2) : counter;}

    decrementButton.addEventListener("click", function() {counter--; updateCounter();});

    incrementButton.addEventListener("click", function() { counter++; updateCounter();});

    resetButton.addEventListener("click", function() {counter = 0; updateCounter();});

    toggleBinaryCounter.addEventListener("click", function(e) {
        e.preventDefault(); isBinary = !isBinary; updateCounter();
        toggleBinaryCounter.textContent = isBinary ? "Switch to Decimal Counter" : "Switch to Binary Counter";}); 
        updateCounter();});
