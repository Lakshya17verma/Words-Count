
const text = document.querySelector("#textarea");
const CopyBtn = document.querySelector("#copyBtn");
const showCount = document.querySelector("#showCount");
const showRemaining = document.querySelector("#showRemaining");
const setLimit = document.querySelector("#setLimit");

setLimit.addEventListener("keyup" , () => {
    showRemaining.innerText = setLimit.value;
    text.maxLength = setLimit.value;
    if(setLimit.value>0){
        text.removeAttribute("disabled");
    }
})


const charcount = () => {
    let char = 0;
    char = text.value.length;
    showCount.innerText = char;
    showRemaining.innerText = setLimit.value - char;

} 
text.addEventListener("keydown", () => charcount());



CopyBtn.addEventListener("click" , ()=> {
    text.select();
    text.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(text.value);
})