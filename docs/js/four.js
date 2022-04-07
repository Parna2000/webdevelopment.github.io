const icon=document.getElementById('icon');
const search=document.querySelector('.search');
var count=1;
icon.addEventListener('click',()=>{
    count++;
    if(count%2==0){
        search.classList.add('show');
    }
    else{
        search.classList.remove('show');
    }
});