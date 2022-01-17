const panels = document.querySelectorAll('.panel');
let actual;


panels.forEach( (panel,index) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
        actual = index
    })
});


function removeActiveClasses(){
    panels.forEach( panel => {
        panel.classList.remove('active')
    })
}

function autoTransition(){
    [...panels].filter((panel,index)=>{
        if(panel.classList.contains('active')){
            actual = index
            setInterval(()=>{
                removeActiveClasses()
                panels[actual<5?actual++:actual=0].classList.add('active')
            },2000)
            }
        })
}

autoTransition()