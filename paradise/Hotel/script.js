var sideBar = document.getElementsByClassName("hamburger__box");
var showSideBar= document.getElementsByClassName('side-bar');
sideBar[0].addEventListener('click',function(){
    if(showSideBar[0].style.visibility='hidden'){
        showSideBar[0].style.visibility='visible';
    }
    else if(showSideBar[0].style.visibility='visible'){
        showSideBar[0].style.visibility='hidden';
    }
})

var closeBtn=document.getElementById('close');

closeBtn.addEventListener('click',function(){
    showSideBar[0].style.visibility='hidden';
})

var adult=0;
var child=0;
var plusBtn=document.getElementsByClassName('qtyplus');
var minBtn = document.getElementsByClassName('qtyminus');
var adults = document.getElementById('adults');
var childs=document.getElementById('childs');
adults.value=adult;
childs.value=child;
plusBtn[0].addEventListener('click',function(){
    adult++;
    adults.value=adult;
})
plusBtn[1].addEventListener('click',function(){
    child++;
    childs.value= child;
})
minBtn[0].addEventListener('click',function(){
    if(adult>0){
        adult--;
        adults.value=adult;
    }
})
minBtn[1].addEventListener('click',function(){
    if(child>0){
        child--;
        childs.value=child;
    }
})





