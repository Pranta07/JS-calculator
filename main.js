function getValue(value) {
    let output = document.getElementById("output").innerText;
    if (value == "ac") {
        output = " ";
    } else if (value == "del") {
        output = output.substr(0, output.length - 1);
    } else if (value == "=") {
        let num1 = 0,
            num2 = 0;
        let operator = "";
        for (const char of output) {
            //console.log(char);
            if (parseInt(char) >= 0 && operator.length == 0) {
                num1 *= 10;
                num1 += parseInt(char);
            } else if (parseInt(char) >= 0) {
                num2 *= 10;
                num2 += parseInt(char);
            } else {
                operator = char;
            }
        }
        output += " " + value + " ";
        // console.log(num1, operator, num2);
        if (operator == "+") {
            output += num1 + num2;
        } else if (operator == "-") {
            output += num1 - num2;
        } else if (operator == "*") {
            output += num1 * num2;
        } else {
            output += num1 / num2;
        }
    } else {
        output += value;
    }
    document.getElementById("output").innerText = output;
}
