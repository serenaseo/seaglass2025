window.addEventListener('scroll', function() {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 2000);  
    }
});





document.addEventListener("DOMContentLoaded", function () {
    var text = document.getElementById('text');
    var text2 = document.getElementById('text2');

    if (!text || !text2) {
        console.error("Text elements not found!");
        return;
    }

    function applyTextEffect(element) {
        var originalHtml = element.innerHTML.trim();
        var characters = [];
        element.innerHTML = element.innerHTML.replace(/<br\s*\/?>/g, "↵");

        var priorityWords = ["Sea Glass", "not broken", "washed clean", "shake me up"];

        let tempWord = "";
        for (let i = 0; i < element.innerHTML.length; i++) {
            let char = element.innerHTML[i];

            if (char === ' ' || char === '↵') {
                if (priorityWords.includes(tempWord)) {
                    characters.push(`<span class="char priority">${tempWord}</span>`);
                } else {
                    for (let j = 0; j < tempWord.length; j++) {
                        characters.push(`<span class="char">${tempWord[j]}</span>`);
                    }
                }
                characters.push(char === ' ' ? '&nbsp;' : '<br>');
                tempWord = "";
            } else {
                tempWord += char;
            }
        }

        if (tempWord.length > 0) {
            if (priorityWords.includes(tempWord)) {
                characters.push(`<span class="char priority">${tempWord}</span>`);
            } else {
                for (let j = 0; j < tempWord.length; j++) {
                    characters.push(`<span class="char">${tempWord[j]}</span>`);
                }
            }
        }

        element.innerHTML = characters.join('');

        let charElements = Array.from(element.querySelectorAll('.char'));
        let priorityElements = Array.from(element.querySelectorAll('.priority'));

        priorityElements.forEach((char, index) => {
            char.style.animationDelay = `${index * 200}ms`;
        });

        let otherChars = charElements.filter(c => !priorityElements.includes(c));
        otherChars.sort(() => Math.random() - 0.5);

        otherChars.forEach((char, index) => {
            char.style.animationDelay = `${(priorityElements.length * 200) + (index * 100)}ms`;
        });
    }

    applyTextEffect(text);

    function handleScroll() {
        let text2Position = text2.getBoundingClientRect().top; 
        let screenPosition = window.innerHeight / 1.3; 

        if (text2Position < screenPosition) {
            text2.classList.add('visible');
            applyTextEffect(text2); 
            window.removeEventListener('scroll', handleScroll); 
        }
    }

    window.addEventListener('scroll', handleScroll);
});


document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--cursor-x', e.pageX + 'px');
    document.body.style.setProperty('--cursor-y', e.pageY + 'px');
});


