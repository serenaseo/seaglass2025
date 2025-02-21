window.addEventListener("wheel", function(event) {
    event.preventDefault();  
    window.scrollBy({
        top: event.deltaY * 0.1,  
    });
}, { passive: false });


function createRandomQuestionMark() {
    const questionMark = document.createElement("div");
    questionMark.classList.add("questionmark");

    const img = document.createElement("img");
    img.src = "1img/question.png"; 
    questionMark.appendChild(img);

    const randomX = Math.random() * window.innerWidth;  
    const randomY = Math.random() * window.innerHeight; 
    const randomSize = Math.random() * 100 + 50;  
    const randomRotation = Math.random() * 360; 

    questionMark.style.left = randomX + 'px';
    questionMark.style.top = randomY + 'px';
    questionMark.style.width = randomSize + 'px';
    questionMark.style.height = randomSize + 'px';
    questionMark.style.transform = `rotate(${randomRotation}deg)`;

    const randomDelay = Math.random() * 2 + 1;  
    questionMark.style.animation = `fade-in-out ${randomDelay}s ease-in-out`;

    document.body.appendChild(questionMark);

    setTimeout(() => {
        questionMark.style.opacity = 2.0;
    }, randomDelay * 1000 / 2);  

    setTimeout(() => {
        questionMark.remove();
    }, randomDelay * 1000);  
}

setInterval(createRandomQuestionMark, 500);





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


