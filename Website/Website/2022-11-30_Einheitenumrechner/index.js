function convert() {
    let input = document.getElementById('inputID').value;
    let sourceUnit = document.getElementById('sourceUnit').value;
    let targetUnit = document.getElementById('targetUnit').value;
    let converted = 0;

    // Convert to reqeusted unit
    //if sourceUnit == targetUnit
    if (sourceUnit == targetUnit) {
        document.getElementById('resultID').innerHTML = "Result: You`re an idiot!";
        //return since theres no point in converting, since you`re an idiot
        return;
    }


    if (sourceUnit == "m" && targetUnit == "km") {
        converted = input / 1000;
    }
    if (sourceUnit == "km" && targetUnit == "m") {
        converted = input * 1000;
    }
    if (sourceUnit == "m" && targetUnit == "cm") {
        converted = input * 100;
    }
    if (sourceUnit == "cm" && targetUnit == "m") {
        converted = input / 100;
    }
    if (sourceUnit == "m" && targetUnit == "mm") {
        converted = input * 1000;
    }
    if (sourceUnit == "mm" && targetUnit == "m") {
        converted = input / 1000;
    }
    if (sourceUnit == "m" && targetUnit == "µm") {
        converted = input * 1000000;
    }
    if (sourceUnit == "µm" && targetUnit == "m") {
        converted = input / 1000000;
    }
    if (sourceUnit == "m" && targetUnit == "nm") {
        converted = input * 1000000000;
    }
    if (sourceUnit == "nm" && targetUnit == "m") {
        converted = input / 1000000000;
    }
    if (sourceUnit == "m" && targetUnit == "pm") {
        converted = input * 1000000000000;
    }
    if (sourceUnit == "pm" && targetUnit == "m") {
        converted = input / 1000000000000;
    }
    if (sourceUnit == "m" && targetUnit == "fm") {
        converted = input * 1000000000000000;
    }
    if (sourceUnit == "fm" && targetUnit == "m") {
        converted = input / 1000000000000000;
    }
    if (sourceUnit == "m" && targetUnit == "am") {
        converted = input * 1000000000000000000n;
    }
    if (sourceUnit == "am" && targetUnit == "m") {
        converted = input / 1000000000000000000n;
    }
    if (sourceUnit == "m" && targetUnit == "zm") {
        converted = input * 1000000000000000000000n;
    }

    // Give the result to the user
    document.getElementById('resultID').innerHTML = "Result: " + converted + targetUnit;
}

function slide() {
    window.open("https://discord.cooffeeSystems.cloud", "_blank");
}