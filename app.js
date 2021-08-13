const btns = document.querySelectorAll('.question');

btns.forEach(function(change){
    // console.log(change)
    const btn = change.querySelector('.question-btn');
    // console.log(btn)
    btn.addEventListener('click', function(){
        btns.forEach(function(item) {
            if(item !==change) {
                item.classList.remove('show-text')
            }
        })
        change.classList.toggle('show-text')
    })
}) 

