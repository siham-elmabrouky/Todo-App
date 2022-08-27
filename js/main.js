// setting varaibles
let theinput = document.querySelector('.add-task input');
let theAddButton = document.querySelector('.add-task .plus');
let taskcontainer= document.querySelector('.tasks-content');
let notask = document.querySelector('.no-tasks-messge');
let taskcount= document.querySelector('.tasks-count span');
let  taskcompleted = document.querySelector('.tasks-completed span');
// focus in input 
window.onload = function(){
    theinput.focus();
};
// adding tasks 
theAddButton.onclick = function(){
 
 if(theinput.value === ''){
    console.log('no value ');
    notask.textContent = 'please write task'
    notask.style.color =' #e91e63';
 

}else{
   
    let maindiv = document.createElement("div");
    let deletelement = document.createElement("p");
    let  text = document.createTextNode(theinput.value);
    let  delettext = document.createTextNode("delet");
    maindiv.appendChild(text);
    maindiv.className ='task-box';

    
    deletelement.appendChild(delettext);
    deletelement.className ='delet';
    maindiv.appendChild(deletelement);
    taskcontainer.appendChild(maindiv);
    theinput.value ="";
    theinput.focus();
    calculatetasks();

}
};
// delet task
document.addEventListener('click',function(e){
    if(e.target.className=='delet'){
        e.target.parentNode.remove();
        calculatetasks();
}
 

});
 

//  calculate tasks
function calculatetasks(){
    taskcount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
}
