let anim = document.querySelector('.display-anim');
anim.style.animationPlayState = "paused"
    document.getElementById('button_launch').onclick = function () {
        if (anim.style.animationPlayState == 'paused') {
            anim.style.animationPlayState = 'running';
        }
        else {
            anim.style.animationPlayState = 'paused';
        }
    }







