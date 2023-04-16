const container = document.querySelector('.container'),
qrInput = container.querySelector('.form input'),
generateBtn = container.querySelector('.form button'),
qrImg = container.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () => {
    let qrvalue = qrInput.value;
    if (!qrvalue) {
        alert('Insira uma URL ou texto para gerar um Qr code')
        return;
    }
    generateBtn.innerHTML = "Gerando um Qr code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrvalue}`;
    qrImg.addEventListener('load', () => {
        generateBtn.innertext ="Gerar Qr code";
        container.classList.add('active');
    });    
});

qrInput.addEventListener('keyup', () => {
    if(!qrInput.value){
        container.classList.remove('active');
    };
});