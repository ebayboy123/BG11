function convert() {
    let input = document.getElementById('inputID').value;
    let sourceUnit = document.getElementById('sourceUnit').value;
    let targetUnit = document.getElementById('targetUnit').value;
    let converted = 0;

    // Convert to requested unit
    //if sourceUnit == targetUnit
    if (sourceUnit === targetUnit) {
        document.getElementById('resultID').innerHTML = "Result: You`re an idiot!";
        //return since there's no point in converting, since you`re an idiot
        return;
    }


    //Tebibity
    if (sourceUnit === "tib" && targetUnit === "tb") {
        converted = input * 1024 / 1000;
    }
    if (sourceUnit === "tb" && targetUnit === "tib") {
        converted = input * 1000 / 1024;
    }
    if (sourceUnit === "tib" && targetUnit === "gb") {
        converted = (input * 1024 / 1000) * 1000;
    }
    if (sourceUnit === "gb" && targetUnit === "tib") {
        converted = (input * 1000 / 1024) / 1000;
    }
    if (sourceUnit === "tib" && targetUnit === "mb") {
        converted = (input * 1024 / 1000) / 1000 / 1000;
    }
    if (sourceUnit === "tib" && targetUnit === "kb") {
        converted = (input * 1024 / 1000) / 1000 / 1000 / 1000;
    }
    if (sourceUnit === "tib" && targetUnit === "b") {
        converted = (input * 1024 / 1000) / 1000 / 1000 / 1000 / 1000;
    }


    // Give the result to the user
    document.getElementById('resultID').innerHTML = "Result: " + converted + targetUnit;
}

function slide() {
    window.open("https://discord.cooffeeSystems.cloud", "_blank");
}