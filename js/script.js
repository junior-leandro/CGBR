

function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value);
    const max = Math.floor(document.querySelector(".input-max").value);
    const resultName = document.querySelector(".result-name");
    const resultNumber = document.querySelector(".result-number");


    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector("#result > span").textContent = result;


    setTimeout(function () {
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        resultName.classList.remove("ocult");
        resultNumber.classList.remove("ocult");

        

    }, 2200);

    


}
