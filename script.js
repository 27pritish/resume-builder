 function addNewefield(){

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('wefield')
    // newNode.setAttribute('rows')
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder" ,"Enter Here")

    let workexp= document.getElementById("workexp")

    let weAddButton = document.getElementById("weAddButton")
    
    workexp.insertBefore(newNode, weAddButton)
 }  
 function addNeaqfield() {
   let newNode = document.createElement('textarea');
   newNode.classList.add('form-control');
   newNode.classList.add('eqfield');
   newNode.classList.add("mt-2");
   newNode.setAttribute("placeholder", "Enter Here");

   let aqob = document.getElementById("aq");
   let aqAddbuttonOB = document.getElementById("aqAddButton");
  
   aqob.insertBefore(newNode, aqAddbuttonOB);
}
