// Clears the screen, resets display to "0"
function clearScreen() {
    document.getElementById("screen").innerText = "0";
}

// Deletes the last character, if empty sets display to "0"
function deleteLast() {
    let screen = document.getElementById("screen");
    screen.innerText = screen.innerText.slice(0, -1) || "0";
}

// Adds a value to the screen, avoids leading zeros unless it's a decimal
function appendValue(value) {
    let screen = document.getElementById("screen");
    if (screen.innerText === "0" && value !== ".") {
        screen.innerText = value;
    } else {
        screen.innerText += value;
    }
}

// Tries to calculate the result, if there's an error, shows "Error"
function calculate() {
    let screen = document.getElementById("screen");
    try {
        screen.innerText = eval(screen.innerText); // Be careful using eval (security risk)
    } catch {
        screen.innerText = "Error"; // Shows error if invalid input
    }
}
