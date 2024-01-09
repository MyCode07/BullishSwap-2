// const url = "https://www.youtube.com/embed/xPfTFaqnJVM?si=tqQ7UQ24cb5Zzl33";
// const id = YouTubeGetID(url);
// const embedlink = "http://www.youtube.com/embed/" + id;
// function YouTubeGetID(url) {
//     url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
//     return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
// }
// if (iframe) {
//     iframe.setAttribute('src', embedlink)
// }

const iframe = document.querySelector("#present iframe")
const videoPlaceHolder = document.querySelector('#present .placeholder');

if (videoPlaceHolder) {
    videoPlaceHolder.addEventListener('click', () => {
        videoPlaceHolder.remove();
        iframe.style.display = 'block';
    })
}

