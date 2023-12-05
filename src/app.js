

const form=document.querySelector('.form')
const formInput=document.querySelector('.form_input')
const mainSection=document.querySelector('.main_section')
list=[]
form.addEventListener('submit', (e)=>{
e.preventDefault()
if (formInput.value=='') {
  alert('please write something!!')  
}else{
 console.log(formInput.value);
    list.push(formInput.value)
    upDateUI()
    formInput.value = "";
}
form.focus();
})
function deleteItem(index) {
  console.log(index);
  // Remove the item from the list
  list.splice(index, 1);
  // Update the UI
  upDateUI();
}
function circleItem(index) {
  console.log(index);
let circle=document.querySelectorAll('.circle')
let chacked=document.querySelectorAll('.chacked')
let planWord=document.querySelectorAll('.plan_words')
circle[index].classList.add('hidden')
chacked[index].classList.remove('hidden')
planWord[index].classList.add('line-through')
planWord[index].classList.add('text-stone-300')
}
function chackedItem(index) {
  let circle=document.querySelectorAll('.circle')
let chacked=document.querySelectorAll('.chacked')
let planWord=document.querySelectorAll('.plan_words')
circle[index].classList.remove('hidden')
chacked[index].classList.add('hidden')
planWord[index].classList.remove('line-through')
planWord[index].classList.remove('text-stone-300')
}


function upDateUI() {
mainSection.innerHTML=''
  list.forEach((item, index) => {
    const planValues=`
<div class="plan_values flex items-center justify-between gap-2">
        <div class="plans flex justify-between items-center w-full"><i class="chacked fa-regular fa-circle-check text-3xl cursor-pointer mr-2 text-amber-600 hidden" onclick="chackedItem(${index})"></i>
        <i id="circle" class="circle fa-regular fa-circle text-3xl cursor-pointer mr-2" onclick="circleItem(${index})"></i><div class="plan_words text-zinc-800 w-full text-3xl font-normal border-b-[2px]  border-slate-400 py-5">${item}</div></div>
        <i class="trash fa-regular fa-trash-can text-3xl cursor-pointer mr-2 text-amber-600" onclick="deleteItem(${index})"></i>
      </div>
`
mainSection.innerHTML+=planValues
  });
const clear=` <div class="clear_cont flex items-center gap-2 py-5">
<img src="images/clear.svg" alt="">
<div class="clearSec text-amber-600 text-3xl font-normal hover:underline cursor-pointer" onclick="clearList()">Clear Completed</div>
</div> `
mainSection.innerHTML+=clear
}

  
function clearList() {
  mainSection.innerHTML = "";
  list.length = 0; // Clear the list array
  document.getElementById("clearSec").style.display = "none";
}

  
  


