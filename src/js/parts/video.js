const iframe = document.querySelector("#present iframe")
const videoPlaceHolder = document.querySelector('#present .placeholder');

if (videoPlaceHolder) {
    videoPlaceHolder.addEventListener('click', () => {
        videoPlaceHolder.remove();
        iframe.src = 'https://www.youtube.com/embed/' + iframe.dataset.id
        console.log(iframe.src);
        iframe.style.display = 'block';
    })
}

