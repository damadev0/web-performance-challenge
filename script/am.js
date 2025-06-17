// advertisment mock
const initAd = () => {
    const adSpace = document.querySelector('.main__advertising');
    const gif = '<div style="width:400px;max-width:100%;"><div style="height:0;padding-bottom:52.4%;position:relative;"><iframe width="500" height="262" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameBorder="0" src="https://imgflip.com/embed/6wy03z"></iframe></div></div>';
    adSpace.innerHTML = gif
};
window.addEventListener('load', () => {
    initAd();
});