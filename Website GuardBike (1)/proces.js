function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


if (window.innerWidth > 767) {
    
    function handleScroll() {
        const alinea1 = document.querySelector('.alinea1');
        const alinea2 = document.querySelector('.alinea2');
        const alinea3 = document.querySelector('.alinea3');
        const alinea4 = document.querySelector('.alinea4');
        const alinea5 = document.querySelector('.alinea5');
        const alinea6 = document.querySelector('.alinea6');
        const alinea7 = document.querySelector('.alinea7');


        if (isInViewport(alinea1)) {
            alinea1.classList.add('fade-in-left', 'active');
        } else {
            alinea1.classList.remove('active');
        }

        if (isInViewport(alinea2)) {
            alinea2.classList.add('fade-in-right', 'active');
        } else {
            alinea2.classList.remove('active');
        }

        if (isInViewport(alinea3)) {
            alinea3.classList.add('fade-in-left', 'active');
        } else {
            alinea3.classList.remove('active');
        }

        if (isInViewport(alinea4)) {
            alinea4.classList.add('fade-in-right', 'active');
        } else {
            alinea4.classList.remove('active');
        }

        if (isInViewport(alinea5)) {
            alinea5.classList.add('fade-in-left', 'active');
        } else {
            alinea5.classList.remove('active');
        }

        if (isInViewport(alinea6)) {
            alinea6.classList.add('fade-in-right', 'active');
        } else {
            alinea6.classList.remove('active');
        }

        if (isInViewport(alinea7)) {
            alinea7.classList.add('fade-in-left', 'active');
        } else {
            alinea7.classList.remove('active');
        }

    }
    
    window.addEventListener('scroll', handleScroll);
    }
    
    if (window.innerWidth <= 767) {
    
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
            const alinea2 = document.querySelector('.alinea2 button');
            const alinea2Text1 = document.querySelector('.alinea2-tekst1');
            const alinea2Text2 = document.querySelector('.alinea2-tekst2');
        
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