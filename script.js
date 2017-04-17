window.onload = function() {

    var calcInput = document.getElementById('display');

    function findOperation() {
        if (calcInput.value.length !== 'undefined') {

            var arrayOfOperators = []
            console.log(calcInput);
            console.log(calcInput.value.split("+"));

            arrayOfOperators[0] = calcInput.value.split("+");
            arrayOfOperators[1] = calcInput.value.split("-");
            arrayOfOperators[2] = calcInput.value.split("/");
            arrayOfOperators[3] = calcInput.value.split("*");

            if (arrayOfOperators[0].length >= 2) {
                // This is plus, return the completed plus operation
                return parseFloat(arrayOfOperators[0][0]) + parseFloat(arrayOfOperators[0][1])
            } else if (arrayOfOperators[1].length >= 2) {
                // This is minus, return the completed minus operation
                return parseFloat(arrayOfOperators[1][0]) - parseFloat(arrayOfOperators[1][1])
            } else if (arrayOfOperators[2].length >= 2) {
                // This is divide, return the completed divide operation
                return parseFloat(arrayOfOperators[2][0]) / parseFloat(arrayOfOperators[2][1])
            } else if (arrayOfOperators[3].length >= 2) {
                // This is multiply, return the completed multiply operation
                return parseFloat(arrayOfOperators[3][0]) * parseFloat(arrayOfOperators[3][1])
            } else {
                return "undefined";
            }
        } else {
            return "undefined";
        }
    }

    // --- Start of: Listen for Number button clicks
    document.getElementById('one').addEventListener('click', function() {
        document.getElementById('display').value += 1;
    })
    document.getElementById('two').addEventListener('click', function() {
        document.getElementById('display').value += 2;
    })
    document.getElementById('three').addEventListener('click', function() {
        document.getElementById('display').value += 3;
    })
    document.getElementById('four').addEventListener('click', function() {
        document.getElementById('display').value += 4;
    })
    document.getElementById('five').addEventListener('click', function() {
        document.getElementById('display').value += 5;
    })
    document.getElementById('six').addEventListener('click', function() {
        document.getElementById('display').value += 6;
    })
    document.getElementById('seven').addEventListener('click', function() {
        document.getElementById('display').value += 7;
    })
    document.getElementById('eight').addEventListener('click', function() {
        document.getElementById('display').value += 8;
    })
    document.getElementById('nine').addEventListener('click', function() {
        document.getElementById('display').value += 9;
    })
    document.getElementById('zero').addEventListener('click', function() {
        document.getElementById('display').value += 0;
    })
    document.getElementById('clear').addEventListener('click', function() {
        document.getElementById('display').value = "";
    })
    // --- End of: Listen for Number button clicks

    // --- Start of: Listen for Operator button clicks
    document.getElementById('plus').addEventListener('click', function() {
        //checkForOperator();
        var calculatedValue = findOperation()

        if (calculatedValue === "undefined") {
            document.getElementById('display').value += '+';
            //document.getElementById('display').value += '+';
        } else {
            document.getElementById('display').value = calculatedValue + '+';
        }

    })
    document.getElementById('minus').addEventListener('click', function() {
        //checkForOperator();
        //document.getElementById('display').value += '-';
        var calculatedValue = findOperation()

        if (calculatedValue === "undefined") {
            document.getElementById('display').value += '-';
            //document.getElementById('display').value += '+';
        } else {
            document.getElementById('display').value = calculatedValue + '-';
        }

    })
    document.getElementById('divide').addEventListener('click', function() {
        //checkForOperator();
        //document.getElementById('display').value += '/';

        var calculatedValue = findOperation()

        if (calculatedValue === "undefined") {
            document.getElementById('display').value += '/';
            //document.getElementById('display').value += '+';
        } else {
            document.getElementById('display').value = calculatedValue + '/';
        }
    })
    document.getElementById('multiply').addEventListener('click', function() {
        //checkForOperator();
        //document.getElementById('display').value += '*';

        var calculatedValue = findOperation()

        if (calculatedValue === "undefined") {
            document.getElementById('display').value += '*';
            //document.getElementById('display').value += '+';
        } else {
            document.getElementById('display').value = calculatedValue + '*';
        }

    })
    document.getElementById('decimal').addEventListener('click', function() {


        document.getElementById('display').value += '.';


    })
    document.getElementById('equals').addEventListener('click', function() {
        //calculate();
        var calculatedValue = findOperation()

        if (calculatedValue === "undefined") {
            document.getElementById('display').value += '';
        } else {
            document.getElementById('display').value = calculatedValue;
        }
    })

} //end of onload
