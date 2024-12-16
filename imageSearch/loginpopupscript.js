document.addEventListener('DOMContentLoaded',() => {
    const popupWindow = document.querySelector('.popup-window') 
    const closeBtn = document.getElementById('close-icon')
    const signinBtn = document.getElementById('signin')
    closeBtn.addEventListener('click', () => {
        console.log('reaching')
        popupWindow.classList.add('hidden')
    })

    signinBtn.addEventListener('click',() => {
        popupWindow.classList.add('hidden')
    })

    function showPopup(){
        popupWindow.classList.remove('hidden')
    }
    showPopup();
})