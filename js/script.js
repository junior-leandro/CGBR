

function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const resultName = document.querySelector(".result-name");
    const resultNumber = document.querySelector(".result-number");
    const canva = document.querySelector("#my-canvas");

    canva.classList.add("ocult");

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector("#result > span").textContent = result;

    const audio = new Audio('../audio/tambores.mp3');
    audio.addEventListener('canplaythrough', function () {
        audio.play();
    });
    
    resultName.classList.add("ocult");
    resultNumber.classList.add("ocult");
    

    setTimeout(function () {
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        resultName.classList.remove("ocult");
        resultNumber.classList.remove("ocult");
        canva.classList.remove("ocult");

        setTimeout (function(){
            const audio2 = new Audio('../audio/baby-shark.mp3');
            audio2.addEventListener('canplaythrough', function () {
                audio2.play();
            });
        }, 1000);
    }, 2200);

}
