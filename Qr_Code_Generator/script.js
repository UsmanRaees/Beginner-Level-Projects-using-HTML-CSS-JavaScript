const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body')

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmtyInput();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmtyInput
});

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if(img.getAttribute('src') !== null) {
        let imgAtrr = img.getAttribute('src')
        downloadBtn.setAttribute('href', imgAtrr);
    }
    else{
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`)
    }
})

function isEmtyInput() {
    if(qrText.value.length > 0) {
        generateQRCode()
    }
    else{
        alert("Enter the text or Url to generate your QR code");
    }
}

function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}