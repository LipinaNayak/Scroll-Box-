const anything = document.querySelectorAll('.box')
window.addEventListener('scroll',checkbox);
checkbox();
function checkbox(){
    const calculatehight = window.innerHeight /5*4
   anything.forEach(box=>{
     const boxtop = box.getBoundingClientRect().top

    if(boxtop < calculatehight){
        box.classList.add('show')
      }
      else{
        box.classList.remove('show')
      }
    })
}
