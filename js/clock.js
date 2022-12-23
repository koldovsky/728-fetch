// IIFE
(function() {
    function updateClock() {
        const clockContainer = document.querySelector('.clock');
        clockContainer.innerText = new Date().toLocaleTimeString();
        // clockContainer.style.color = 'red';
        // clockContainer.classList.add('highlight');
    }
    setInterval(updateClock, 1000);
})()

