//getting the screen elements and the buttons and defining the screen value to be empty
let screen=document.getElementById('screen');
let buttons=document.getElementsByTagName('button');
let screenVal='';
//using the for-of loop to add event listeners to all the buttons
for(buttonElem of buttons){
    buttonElem.addEventListener('click', (e)=>{
       let btnText=e.target.innerHTML;
       if(btnText=='X'){
           btnText='*';
           screenVal+=btnText;
           screen.value=screenVal;
       }
       else if(btnText=='C'){
           screenVal='';
           screen.value=screenVal;
       }
       else if(btnText=='='){
           //eval is used to evaluate mathematical string
           screen.value=eval(screenVal);       
       }
       else{
           screenVal+=btnText;
           screen.value=screenVal;
       }
    });
}
//adding an event listener to delete just a single character from the screen value
let del=document.getElementById('delete');
del.addEventListener('mouseout', ()=>{
    let newVal='';
    for(i=0; i<screenVal.length-1; i++){
        newVal+=screenVal[i];
    }
    screenVal=newVal;
    screen.value=screenVal;
});
