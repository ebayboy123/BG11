
    function convert() {
        let input = document.getElementById('inputID').value;
        let sourceUnit = document.getElementById('sourceUnit').value;
        let targetUnit = document.getElementById('targetUnit').value;


        if (sourceUnit == "m" && targetUnit == "cm") {
            var converted = document.getElementById('resultID').innerHTML = input * 100
        }
        else if (sourceUnit == "m" && targetUnit == "mm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000
        }
        else if (sourceUnit == "m" && targetUnit == "km") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000
        }
        else if (sourceUnit == "m" && targetUnit == "pm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000000
        }
        else if (sourceUnit == "m" && targetUnit == "nm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000
        }
        else if (sourceUnit == "m" && targetUnit == "um") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000
        }
        else if (sourceUnit == "m" && targetUnit == "dm") {
            var converted = document.getElementById('resultID').innerHTML = input * 10
        }
        else if (sourceUnit == "m" && targetUnit == "mi") {
            var converted = document.getElementById('resultID').innerHTML = input / 1609.344
        }
        else if (sourceUnit == "m" && targetUnit == "yd") {
            var converted = document.getElementById('resultID').innerHTML = input * 1.0936133
        }
        else if (sourceUnit == "m" && targetUnit == "ft") {
            var converted = document.getElementById('resultID').innerHTML = input * 3.2808399
        }
        else if (sourceUnit == "m" && targetUnit == "in") {
            var converted = document.getElementById('resultID').innerHTML = input * 39.3700787
        }
        else if (sourceUnit == "cm" && targetUnit == "m") {
            var converted = document.getElementById('resultID').innerHTML = input / 100
        }
        else if (sourceUnit == "cm" && targetUnit == "mm") {
            var converted = document.getElementById('resultID').innerHTML = input * 10
        }
        else if (sourceUnit == "cm" && targetUnit == "km") {
            var converted = document.getElementById('resultID').innerHTML = input / 100000
        }
        else if (sourceUnit == "cm" && targetUnit == "pm") {
            var converted = document.getElementById('resultID').innerHTML = input * 10000000000
        }
        else if (sourceUnit == "cm" && targetUnit == "nm") {
            var converted = document.getElementById('resultID').innerHTML = input * 10000000
        }
        else if (sourceUnit == "cm" && targetUnit == "um") {
            var converted = document.getElementById('resultID').innerHTML = input * 10000
        }
        else if (sourceUnit == "cm" && targetUnit == "dm") {
            var converted = document.getElementById('resultID').innerHTML = input / 10
        }
        else if (sourceUnit == "cm" && targetUnit == "mi") {
            var converted = document.getElementById('resultID').innerHTML = input / 160934.4
        }
        else if (sourceUnit == "cm" && targetUnit == "yd") {
            var converted = document.getElementById('resultID').innerHTML = input / 91.44
        }
        else if (sourceUnit == "cm" && targetUnit == "ft") {
            var converted = document.getElementById('resultID').innerHTML = input / 30.48
        }
        else if (sourceUnit == "cm" && targetUnit == "in") {
            var converted = document.getElementById('resultID').innerHTML = input / 2.54
        }
        else if (sourceUnit == "mm" && targetUnit == "m") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000
        }
        else if (sourceUnit == "mm" && targetUnit == "cm") {
            var converted = document.getElementById('resultID').innerHTML = input / 10
        }
        else if (sourceUnit == "mm" && targetUnit == "km") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000
        }
        else if (sourceUnit == "mm" && targetUnit == "pm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000
        }
        else if (sourceUnit == "mm" && targetUnit == "nm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000
        }
        else if (sourceUnit == "mm" && targetUnit == "um") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000
        }
        else if (sourceUnit == "mm" && targetUnit == "dm") {
            var converted = document.getElementById('resultID').innerHTML = input / 100
        }
        else if (sourceUnit == "mm" && targetUnit == "mi") {
            var converted = document.getElementById('resultID').innerHTML = input / 1609000
        }
        else if (sourceUnit == "mm" && targetUnit == "yd") {
            var converted = document.getElementById('resultID').innerHTML = input / 914.4
        }
        else if (sourceUnit == "mm" && targetUnit == "ft") {
            var converted = document.getElementById('resultID').innerHTML = input / 304.8
        }
        else if (sourceUnit == "mm" && targetUnit == "in") {
            var converted = document.getElementById('resultID').innerHTML = input / 25.4
        }
        else if (sourceUnit == "km" && targetUnit == "m") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000
        }
        else if (sourceUnit == "km" && targetUnit == "cm") {
            var converted = document.getElementById('resultID').innerHTML = input * 100000
        }
        else if (sourceUnit == "km" && targetUnit == "mm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000
        }
        else if (sourceUnit == "km" && targetUnit == "pm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000000000
        }
        else if (sourceUnit == "km" && targetUnit == "nm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000000
        }
        else if (sourceUnit == "km" && targetUnit == "um") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000
        }
        else if (sourceUnit == "km" && targetUnit == "dm") {
            var converted = document.getElementById('resultID').innerHTML = input * 100000
        }
        else if (sourceUnit == "km" && targetUnit == "mi") {
            var converted = document.getElementById('resultID').innerHTML = input / 1.609344
        }
        else if (sourceUnit == "km" && targetUnit == "yd") {
            var converted = document.getElementById('resultID').innerHTML = input * 1093.6133
        }
        else if (sourceUnit == "km" && targetUnit == "ft") {
            var converted = document.getElementById('resultID').innerHTML = input * 3280.8399
        }
        else if (sourceUnit == "km" && targetUnit == "in") {
            var converted = document.getElementById('resultID').innerHTML = input * 39370.0787
        }
        else if (sourceUnit == "pm" && targetUnit == "m") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "cm") {
            var converted = document.getElementById('resultID').innerHTML = input / 10000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "mm") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "km") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "nm") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "um") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000
        }
        else if (sourceUnit == "pm" && targetUnit == "dm") {
            var converted = document.getElementById('resultID').innerHTML = input / 100000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "mi") {
            var converted = document.getElementById('resultID').innerHTML = input / 1609000000000000
        }
        else if (sourceUnit == "pm" && targetUnit == "yd") {
            var converted = document.getElementById('resultID').innerHTML = input / 914400000000
        }
        else if (sourceUnit == "pm" && targetUnit == "ft") {
            var converted = document.getElementById('resultID').innerHTML = input / 304800000000
        }
        else if (sourceUnit == "pm" && targetUnit == "in") {
            var converted = document.getElementById('resultID').innerHTML = input / 25400000000
        }
        else if (sourceUnit == "nm" && targetUnit == "m") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000000
        }
        else if (sourceUnit == "nm" && targetUnit == "cm") {
            var converted = document.getElementById('resultID').innerHTML = input / 10000000
        }
        else if (sourceUnit == "nm" && targetUnit == "mm") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000
        }
        else if (sourceUnit == "nm" && targetUnit == "km") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000000000000
        }
        else if (sourceUnit == "nm" && targetUnit == "pm") {
            var converted = document.getElementById('resultID').innerHTML = input * 1000000000
        }
        else if (sourceUnit == "nm" && targetUnit == "um") {
            var converted = document.getElementById('resultID').innerHTML = input / 1000
        }
        else if (sourceUnit == "nm" && targetUnit == "dm") {
            var converted = document.getElementById('resultID').innerHTML = input / 100000000
        }
        else if (sourceUnit == "nm" && targetUnit == "mi") {
            var converted = document.getElementById('resultID').innerHTML = input / 1609000000000
        }
        else if (sourceUnit == "nm" && targetUnit == "yd") {
            var converted = document.getElementById('resultID').innerHTML = input / 914400000
        }
        else if (sourceUnit == "nm" && targetUnit == "ft") {
            var converted = document.getElementById('resultID').innerHTML = input / 304800000
        }
        else if (sourceUnit == "nm" && targetUnit == "in") {
            var converted = document.getElementById('resultID').innerHTML = input / 25400000
        }   
        else if (sourceUnit == "mm" && targetUnit == "cm") {
            var converted = document.getElementById('resultID').innerHTML = input / 10
        }

        //gleiches umrechnen
        else if (sourceUnit === targetUnit) {
            converted = "Fehlerhafte Eingabe"
            document.getElementById('resultID').innerHTML = "Ergebnis: " + converted;
            

        }

    }


function slide() {
    window.open("https://discord.cooffeeSystems.cloud", "_blank");
}