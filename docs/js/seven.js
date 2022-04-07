const container1=document.querySelector('.container1');
const container2=document.querySelector('.container2');
container1.addEventListener('mouseover',()=>{
    container1.classList.remove('no-show');
    container1.classList.add('show');
    container2.classList.remove('show');
    container2.classList.add('no-show');
});
container2.addEventListener('mouseover',()=>{
    container1.classList.remove('show');
    container1.classList.add('no-show');
    container2.classList.remove('no-show');
    container2.classList.add('show');
});
container2.addEventListener('mouseout',()=>{
    container1.classList.remove('no-show','show');
    container2.classList.remove('show','no-show');
})
container1.addEventListener('mouseout',()=>{
    container1.classList.remove('no-show','show');
    container2.classList.remove('show','no-show');
})