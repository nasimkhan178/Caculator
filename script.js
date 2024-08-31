function clearDisplay() {
    document.getElementById("display").innerText = "";
}

function deleteLast() {
    let current = document.getElementById("display").innerText;
    document.getElementById("display").innerText = current.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("display").innerText += value;
}

function calculate() {
    try {
        let expression = document.getElementById("display").innerText;
        
        // Handle percentage calculations
        expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

        let result = eval(expression);
        document.getElementById("display").innerText = result;
    } catch (e) {
        document.getElementById("display").innerText = "Error";
    }
}
