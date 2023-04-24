
const text = document.querySelector("#textarea");
const CopyBtn = document.querySelector("#copyBtn");
const showCount = document.querySelector("#showCount");
const showRemaining = document.querySelector("#showRemaining");
const setLimit = document.querySelector("#setLimit");
const showExceed =  document.getElementById("showExceed")


setLimit.addEventListener("keyup" , () => {
    showRemaining.innerText = setLimit.value;
    if(setLimit.value!=0){
        text.removeAttribute("disabled");
    }
})


// main function
const charcount = () => {
  words = text.value
  words = words.trim().split(" ");
  
  let totalWords = words.filter( function(elm){
     return elm != "";
  })


  showCount.innerText = totalWords.length;
  showRemaining.innerText = setLimit.value - totalWords.length;  
  if(totalWords.length > setLimit.value)
  showExceed.style.display = "block"
  showExceed.innerText = `You're Exceeding the given limit ${setLimit.value} words`
//    text.setAttribute('readonly', '');
}



text.addEventListener("input", () => charcount());


//   select and copy written texts
CopyBtn.addEventListener("click" , ()=> {
    text.select();
    text.setSelectionRange(0, 9999999); // For mobile devices
    navigator.clipboard.writeText(text.value);
})