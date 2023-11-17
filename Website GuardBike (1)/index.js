if (window.innerWidth > 767) {

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScroll() {
        const alinea1 = document.querySelector('.alinea1 h1');
        const voordelen = document.querySelector('.voordelen');
        const alinea1H1 = document.querySelector('.alinea1 h1');

        const alinea2 = document.querySelector('.alinea2 h1, .alinea2 button');
        const alinea2Text1 = document.querySelector('.alinea2-tekst1');
        const alinea2Text2 = document.querySelector('.alinea2-tekst2');

        if (isInViewport(alinea1)) {
            voordelen.classList.add('fade-in-left', 'active');
            alinea1H1.classList.add('fade-in-down', 'active');
        } else {
            voordelen.classList.remove('active');
            alinea1H1.classList.remove('active');
        }
    
        if (isInViewport(alinea2)) {
            alinea2Text1.classList.add('fade-in-left', 'active');
            alinea2Text2.classList.add('fade-in-right', 'active');
        } else {
            alinea2Text1.classList.remove('active');
            alinea2Text2.classList.remove('active');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    }
