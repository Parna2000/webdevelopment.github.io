const label=document.querySelectorAll('.form-control label');
label.forEach(label=>{
    label.innerHTML = label.innerText.split(``).map((letter,index)=>{
        return `<span style="transition-delay:${index*100}ms">${letter}</span>`
    }).join('')
    })