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
        const alinea1 = document.querySelector('.alinea1 h1');
        const alinea1Text = document.querySelector('.alinea1-tekst');
        const bicyclechain = document.querySelector('.bicyclechain');

        const alinea2 = document.querySelector('.alinea2 h1');
        const teamfoto = document.querySelector('.teamfoto');
        const alinea2Text = document.querySelector('.alinea2-tekst')

        const alinea3 = document.querySelector('.alinea3 h1');
        const alinea3Text = document.querySelector('.alinea3-tekst')

    
        if (isInViewport(alinea1)) {
            alinea1Text.classList.add('fade-in-left', 'active');
            bicyclechain.classList.add('fade-in-right', 'active');
        } else {
            alinea1Text.classList.remove('active');
            bicyclechain.classList.remove('active');
        }

        if (isInViewport(alinea2)) {
            teamfoto.classList.add('fade-in-left', 'active');
            alinea2Text.classList.add('fade-in-right', 'active');
        } else {
            teamfoto.classList.remove('active');
            alinea2Text.classList.remove('active');
        }

        if (isInViewport(alinea3)) {
            alinea3Text.classList.add('fade-in-right', 'active');
        } else {
            alinea3Text.classList.remove('active');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    }