let result = document.getElementById("result")
let buttons = document.querySelectorAll(".col")
for (i of buttons) {
    i.addEventListener('click', (e) => {
        let buttonText = e.target.innerText
        switch (buttonText) {
            case "CE":
                result.value = ""
                break;
            case "÷":
                result.value += "/"
                break;
            case "×":
                result.value += "*"
                break;
            case "−":
                result.value += "-"
                break;
            case "DEL":
                result.value = result.value.slice(0, result.value.length - 1)
                break;
            case "M-/+":
                if (result.value.slice(0, 1) != "-") {
                    result.value = "-" + result.value
                }
                else {
                    result.value = result.value.substring(1)
                }
                break;
            case "X2":
                result.value = Math.pow(result.value, 2)
                break;
            case "Ln":
                result.value = Math.log(result.value)
                break;
            case "√":
                result.value = Math.sqrt(result.value)
                break;
            case "π":
                result.value = Math.PI * result.value
                break;
            case "sin":
                result.value = Math.sin(result.value)
                break;
            case "cos":
                result.value = Math.cos(result.value)
                break;
            case "tan":
                result.value = Math.tan(result.value)
                break;
            case "log10":
                result.value = Math.log10(result.value)
                break;
            case ".":
                if (result.value.charAt(result.value.length - 1) != ".")
                    result.value += buttonText
                break;
            case "=":
                result.value = eval(result.value)
                break;

            default:
                result.value += buttonText
        }
    })
}