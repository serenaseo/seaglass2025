window.addEventListener("wheel", function(event) {
    event.preventDefault();  
    window.scrollBy({
        top: event.deltaY * 0.1,  
    });
}, { passive: false });




document.addEventListener("DOMContentLoaded", function() {
    function revealText() {
        let text = document.querySelector(".hidden-text");
        let scrollPosition = window.scrollY;
        let triggerPoint = window.innerHeight * 0; 

        if (scrollPosition > triggerPoint) {
            text.classList.add(""); 
        }
    }

    window.addEventListener("scroll", revealText);
});

let angle = 0;

window.addEventListener("scroll", () => {
    angle += 0.5; 
    document.querySelectorAll(".rotating-image").forEach((img, index) => {
        const rotation = angle + index * 50;
        img.style.transform = `rotate(${rotation}deg) translate(180px) rotate(-${rotation}deg)`;
    });
});

window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        smoothScrollToTop();
    }
});

function smoothScrollToTop() {
    let currentPosition = window.scrollY;
    
    let targetPosition = 0;
    
    let speed = 10;
    
    function scrollStep() {
        let distance = targetPosition - currentPosition;
        if (Math.abs(distance) > 1) {
            window.scrollTo(0, currentPosition + distance / speed);
            currentPosition = window.scrollY;
            requestAnimationFrame(scrollStep); 
        } else {
            window.scrollTo(0, targetPosition); 
        }
    }
    
    requestAnimationFrame(scrollStep);
}

document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--cursor-x', e.pageX + 'px');
    document.body.style.setProperty('--cursor-y', e.pageY + 'px');
});


