var selector = '';
services.forEach(s => {
    s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    selector += ':not(.' + s.trim().replaceAll(' ', '-').replaceAll('/', '').replaceAll('Â ', '').toLowerCase() + ')';
});

document.querySelectorAll('.custom-page.our-services' + selector).forEach(el => {
    el.remove();
});