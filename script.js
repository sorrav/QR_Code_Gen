const inp = document.querySelector('#qrInput');
const genbtn = document.querySelector('#generatebtn');
const qrPopup = document.querySelector('#qrPopup');
const qrImg = document.querySelector('#qrImg');
const downbtn = document.querySelector('#downloadbtn');
const closebtn = document.querySelector('#closebtn');
const MainCont = document.querySelector('#mainContainer');

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genbtn.addEventListener('click', () => {
    if(!inp.value){
        alert('Enter Text or URL First');
    }
    else{
     const imgURL = url + inp.value;
     qrImg.setAttribute('src', imgURL);
     setTimeout(() => {
        qrPopup.classList.add('show');
        MainCont.classList.add('opacity');
     },600)
    }
})

downbtn.addEventListener('click', () => {
    const imgURL = url + inp.value;
    fetch(imgURL)
    .then((res) => res.blob())
    .then((blob) => {
       const link = document.createElement('a');
       link.href = URL.createObjectURL(blob);
       link.download = 'qr.jpg';
       link.click();
    })
})

closebtn.addEventListener('click', () =>{
    qrPopup.classList.remove('show');
    MainCont.classList.remove('opacity');
})