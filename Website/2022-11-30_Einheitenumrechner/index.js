function convert() {
    let input = document.getElementById('inputID').value;
    let sourceUnit = document.getElementById('sourceUnit').value;
    let targetUnit = document.getElementById('targetUnit').value;
    let converted = 0;

    // Convert to reqeusted unit
    //if sourceUnit === targetUnit
    if (sourceUnit === targetUnit) {
        document.getElementById('resultID').innerHTML = "Result: You`re an idiot!";
        //return since theres no point in converting, since you`re an idiot
        return;
    }


    function convert(){
        debugger;
        let input=document.getElementById('inputID').value;
        let sourceUnit=document.getElementById('sourceUnitID').value;
        let targetUnit=document.getElementById('targetUnitID').value;
        let converted;

        //m Umrechnung
        if(sourceUnit === "m" && targetUnit === "km"){
            converted = input / 1000;
        }
        if(sourceUnit === "km" && targetUnit === "m"){
            converted = input * 1000;
        }
        if(sourceUnit === "m" && targetUnit === "dm"){
            converted = input * 10;
        }
        if(sourceUnit === "dm" && targetUnit === "m"){
            converted = input / 10;
        }
        if(sourceUnit === "m" && targetUnit === "cm"){
            converted = input * 100;
        }
        if(sourceUnit === "cm" && targetUnit === "m"){
            converted = input / 100;
        }
        if(sourceUnit === "m" && targetUnit === "mm"){
            converted = input * 1000;
        }
        if(sourceUnit === "mm" && targetUnit === "m"){
            converted = input / 1000;
        }
        if(sourceUnit === "m" && targetUnit === "µm"){
            converted = input * 1e-6;
        }
        if(sourceUnit === "µm" && targetUnit === "m"){
            converted = input / 1e-6;
        }
        if(sourceUnit === "m" && targetUnit === "nm"){
            converted = input * 1e+9;
        }
        if(sourceUnit === "nm" && targetUnit === "m"){
            converted = input / 1e+9;
        }
        if(sourceUnit === "m" && targetUnit === "pm"){
            converted = input * 1e+12;
        }
        if(sourceUnit === "pm" && targetUnit === "m"){
            converted = input / 1e+12;
        }
        if(sourceUnit === "m" && targetUnit === "fm"){
            converted = input * 1e+15;
        }
        if(sourceUnit === "fm" && targetUnit === "m"){
            converted = input / 1e+15;
        }


        //km umrechnung
        if(sourceUnit === "km" && targetUnit === "dm"){
            converted = input * 10000;
        }
        if(sourceUnit === "dm" && targetUnit === "km"){
            converted = input / 10000;
        }
        if(sourceUnit === "km" && targetUnit === "cm"){
            converted = input * 100000;
        }
        if(sourceUnit === "cm" && targetUnit === "km"){
            converted = input / 100000;
        }
        if(sourceUnit === "km" && targetUnit === "mm"){
            converted = input * 1e+6;
        }
        if(sourceUnit === "mm" && targetUnit === "km"){
            converted = input / 1e+6;
        }
        if(sourceUnit === "km" && targetUnit === "µm"){
            converted = input * 1e+9;
        }
        if(sourceUnit === "µm" && targetUnit === "km"){
            converted = input / 1e+9;
        }
        if(sourceUnit === "km" && targetUnit === "nm"){
            converted = input * 1e+12;
        }
        if(sourceUnit === "nm" && targetUnit === "km"){
            converted = input / 1e+12;
        }
        if(sourceUnit === "km" && targetUnit === "pm"){
            converted = input * 1e+15;
        }
        if(sourceUnit === "pm" && targetUnit === "km"){
            converted = input / 1e+15;
        }
        if(sourceUnit === "km" && targetUnit === "fm"){
            converted = input * 1e+18;
        }
        if(sourceUnit === "fm" && targetUnit === "km"){
            converted = input / 1e+18;
        }


        //dm umrechnung
        if(sourceUnit === "dm" && targetUnit === "cm"){
            converted = input * 10;
        }
        if(sourceUnit === "cm" && targetUnit === "dm"){
            converted = input / 10;
        }
        if(sourceUnit === "dm" && targetUnit === "mm"){
            converted = input * 100;
        }
        if(sourceUnit === "mm" && targetUnit === "dm"){
            converted = input / 100;
        }
        if(sourceUnit === "dm" && targetUnit === "µm"){
            converted = input * 100000;
        }
        if(sourceUnit === "µm" && targetUnit === "dm"){
            converted = input / 100000;
        }
        if(sourceUnit === "dm" && targetUnit === "nm"){
            converted = input * 1e+8;
        }
        if(sourceUnit === "nm" && targetUnit === "dm"){
            converted = input / 1e+8;
        }
        if(sourceUnit === "dm" && targetUnit === "pm"){
            converted = input * 1e+11;
        }
        if(sourceUnit === "pm" && targetUnit === "dm"){
            converted = input / 1e+11;
        }
        if(sourceUnit === "dm" && targetUnit === "fm"){
            converted = input * 1e+14;
        }
        if(sourceUnit === "fm" && targetUnit === "dm"){
            converted = input / 1e+14;
        }


        //cm umrechnung
        if(sourceUnit === "cm" && targetUnit === "mm"){
            converted = input * 10;
        }
        if(sourceUnit === "mm" && targetUnit === "cm"){
            converted = input / 10;
        }
        if(sourceUnit === "cm" && targetUnit === "µm"){
            converted = input * 10000;
        }
        if(sourceUnit === "µm" && targetUnit === "cm"){
            converted = input / 10000;
        }
        if(sourceUnit === "cm" && targetUnit === "nm"){
            converted = input * 1e+7;
        }
        if(sourceUnit === "nm" && targetUnit === "cm"){
            converted = input / 1e+7;
        }
        if(sourceUnit === "cm" && targetUnit === "pm"){
            converted = input * 1e+10;
        }
        if(sourceUnit === "pm" && targetUnit === "cm"){
            converted = input / 1e+10;
        }
        if(sourceUnit === "cm" && targetUnit === "fm"){
            converted = input * 1e+13;
        }
        if(sourceUnit === "fm" && targetUnit === "cm"){
            converted = input / 1e+13;
        }


        //mm umrechnung
        if(sourceUnit === "mm" && targetUnit === "µm"){
            converted = input * 1000;
        }
        if(sourceUnit === "µm" && targetUnit === "mm"){
            converted = input / 1000;
        }
        if(sourceUnit === "mm" && targetUnit === "nm"){
            converted = input * 1e+6;
        }
        if(sourceUnit === "nm" && targetUnit === "mm"){
            converted = input / 1e+6;
        }
        if(sourceUnit === "mm" && targetUnit === "pm"){
            converted = input * 1e+9;
        }
        if(sourceUnit === "pm" && targetUnit === "mm"){
            converted = input / 1e+9;
        }
        if(sourceUnit === "mm" && targetUnit === "fm"){
            converted = input * 1e+12;
        }
        if(sourceUnit === "fm" && targetUnit === "mm"){
            converted = input / 1e+12;
        }


        //µm umrechnung
        if(sourceUnit === "µm" && targetUnit === "nm"){
            converted = input * 1000;
        }
        if(sourceUnit === "nm" && targetUnit === "µm"){
            converted = input / 1000;
        }
        if(sourceUnit === "µm" && targetUnit === "pm"){
            converted = input * 1e+6;
        }
        if(sourceUnit === "pm" && targetUnit === "µm"){
            converted = input / 1e+6;
        }
        if(sourceUnit === "µm" && targetUnit === "fm"){
            converted = input * 1e+9;
        }
        if(sourceUnit === "fm" && targetUnit === "µm"){
            converted = input / 1e+9;
        }


        //nm umrechnung
        if(sourceUnit === "nm" && targetUnit === "pm"){
            converted = input * 1000;
        }
        if(sourceUnit === "pm" && targetUnit === "nm"){
            converted = input / 1000;
        }
        if(sourceUnit === "nm" && targetUnit === "fm"){
            converted = input * 1e+6;
        }
        if(sourceUnit === "fm" && targetUnit === "nm"){
            converted = input / 1e+6;
        }

        //pm umrechnen
        if(sourceUnit === "pm" && targetUnit === "fm"){
            converted = input * 1000;
        }
        if(sourceUnit === "fm" && targetUnit === "pm"){
            converted = input / 1000;
        }

        //gleiches umrechnen
        else if(sourceUnit === targetUnit){
            converted= "Fehlerhafte Eingabe"
            document.getElementById('resultID').innerHTML= "Ergebnis: " + converted;
            return;
        }
        document.getElementById('resultID').innerHTML= "Ergebnis: " + converted+targetUnit;
    }
}

function slide() {
    window.open("https://discord.cooffeeSystems.cloud", "_blank");
}