import AOS from 'aos';
AOS.init()

document.querySelector('.navbarMobile').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.toggle('expanded');
    document.querySelector('.overlayMobile').classList.toggle('expandedOverlay');
});

document.querySelector('.overlayMobile').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.remove('expanded');
    document.querySelector('.overlayMobile').classList.remove('expandedOverlay');
});

document.querySelector('.btnClose').addEventListener('click', () => {
    document.querySelector('.menuMobile').classList.remove('expanded');
    document.querySelector('.overlayMobile').classList.remove('expandedOverlay');
});