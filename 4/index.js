function settusk(tusk){
    const tusklist = document.getElementById('tusklist');
    const tuskitem = document.createElement('div');
    tuskitem.textContent=tusk;
    tusklist.appendChild(tuskitem)
}


const form = document.getElementById('tuskform');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const tuskinput = document.getElementById('tuskinput')
    const task = tuskinput.value.trim();

    if(task !== ''){
        settusk(task)
        tuskinput.value=''
    }
})