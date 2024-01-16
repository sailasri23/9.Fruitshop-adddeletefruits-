//const fruitsList = document.querySelector(".fruits");
const existingFruits = document.querySelectorAll(".fruits .fruit");
//or you can use const existingFruits = document.querySelectorAll(".fruit");

existingFruits.forEach(function (fruit) {
  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";
  fruit.appendChild(editButton);
});
// Adding new fruit using the form
const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')
form.addEventListener('submit',function(event){
    event.preventDefault();
    //selected the input element
    const fruittoadd = document.getElementById('fruit-to-add');
    const newLi = document.createElement('li');
    const newLiText = document.createTextNode(fruittoadd.value)
    newLi.appendChild(newLiText)
    newLi.className='fruit';
    //create a delete element to be added inside li
    const deletebtn = document.createElement('button');
    const deletebtnTxt = document.createTextNode('x');
    deletebtn.appendChild(deletebtnTxt)
    deletebtn.className = "delete-btn"
    //added li as the last element of unordered list
    const editBtn = document.createElement('button');
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    newLi.appendChild(deletebtn)
    newLi.appendChild(editBtn);
    fruits.appendChild(newLi);   
})

fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruittodelete = event.target.parentElement;
        fruits.removeChild(fruittodelete)

    }
})

/*const fruitsList = document.querySelector(".fruits");
const existingFruits = document.querySelectorAll(".fruits .fruit");
existingFruits.forEach(function (fruit) {
  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";
  fruit.appendChild(editButton);
});
const form = document.querySelector('form')
const fruits = document.querySelector('.fruits')
form.addEventListener('submit',function(event){
    event.preventDefault();
const fruittoadd = document.getElementById('fruit-to-add');
const newLi = document.createElement('li');
newLi.innerHTML = `${fruittoadd.value}  <button class="delete-btn">x</button>`;
 const editBtn = document.createElement('button');
 editBtn.className = "edit-btn";
 editBtn.textContent = "Edit";
 newLi.appendChild(editBtn);
 fruits.appendChild(newLi);   
})
fruits.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn')){
        const fruittodelete = event.target.parentElement;
        fruits.removeChild(fruittodelete)

    }
})*/