const mediaQuery = window.matchMedia('(min-width: 768px)');

function handleBreakpointChange(e) {
    const main_container = document.querySelector('#main_container'); // ใส่ selector ที่คุณต้องการ
    if (e.matches) {
        main_container.classList.add('grid-container');
        main_container.classList.remove('flex-container');
    } else {
        main_container.classList.add('flex-container');
        main_container.classList.remove('grid-container');
    }
}

handleBreakpointChange(mediaQuery);

mediaQuery.addEventListener('change', handleBreakpointChange);
