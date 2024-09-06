        const display = document.getElementById('display');
        const keys = document.querySelector('.calculator-keys');

        // Handle button clicks
        keys.addEventListener('click', (event) => {
            const key = event.target;
            const keyValue = key.value;

            if (keyValue === 'all-clear') {
                display.value = '0';
            } else if (keyValue === 'DEL') {
                display.value = display.value.slice(0, -1);
                if (display.value === '') {
                    display.value = '0';
                }
            } else if (keyValue === '=') {
                // if (isTyping) {
                //     // If the user is still typing, set the result to the operand being typed
                //     resultInput.value = display.value;
                // } else {
                //     // If not typing, evaluate the expression and store the result
                //     try {
                //         const expression = display.value;
                //         const operands = expression.split(/[+\-*/]/);
                //         operand1Input.value = operands[0];
                //         operand2Input.value = operands[1];
                //         resultInput.value = eval(expression);
                //     } catch (error) {
                //         display.value = 'Error';
                //     }
                // }
                // calculatorForm.submit();
                // isTyping = true;
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                if (display.value === '0' || display.value === 'Error') {
                    display.value = keyValue;
                } else {
                    display.value += keyValue;
                }
            }
        });




        function convertFahrenheitToCelsius() {
            const fahrenheit = parseFloat(document.getElementById('display').value);
            const celsius = (fahrenheit - 32) * 5/9;
            document.getElementById('display').value = `${celsius.toFixed(2)}°C`;
        }

        function convertMetersToCentimeters() {
            const meters = parseFloat(document.getElementById('display').value);
            const centimeters = meters * 100;
            document.getElementById('display').value = `${centimeters}`;
        }

        function convertSqKmToSqMeter() {
            const sqkm = parseFloat(document.getElementById('display').value);
            const sqm = sqkm * 1000000;
            document.getElementById('display').value = `${sqm}`;
        }

        function squareroot() {
            const natnum = parseFloat(document.getElementById('display').value);
            const squareroot = Math.sqrt(natnum);
            document.getElementById('display').value = `${squareroot.toFixed(2)}`;
        }
        
        // function display1() {
        //     var disp = document.getElementById('calculator');
        //     if (disp.style.display === 'none') {
        //         disp.style.display = 'block';
        //     } else {
        //         disp.style.display = 'none';
        //     }
        // }