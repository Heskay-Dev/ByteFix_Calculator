// let display = document.getElementById("display");

//     function appendOperator(value) {
//         if (display.textContent === "0") {
//             display.textContent = value;
//         } else {
//             display.textContent += value;
//         }
//     }

//     function clearDisplay() {
//         display.textContent = "0";
//     }
//     function deleteLast() {
//         display.textContent = display.textContent.slice(0, -1) || "0";
//         if (display.textContent === "") {
//             display.textContent = "0";
//         }
//     }

//     function calculateResult() {
//         try {
//             display.textContent = eval(display.textContent);
//         } catch {
//             display.textContent = "Error";
//         }
//     }



const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculateDisplay(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
