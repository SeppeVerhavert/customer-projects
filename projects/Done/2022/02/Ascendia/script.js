docReady(function() {

    var epaqCategory = '';

    // get 
    const selectedIndustry = document.querySelector('#hidden_responses #industry').textContent;
    const selectedRegions = document.querySelector('#hidden_responses #regions').textContent;
    const selectedVolume = document.querySelector('#hidden_responses #volume').textContent;
    const selectedServices = document.querySelector('#hidden_responses #services').textContent;
    const selectedSpeed = document.querySelector('#hidden_responses #speed').textContent;
    const isInterestedInReducing = document.querySelector('#hidden_responses #sustainability').textContent;
    const selectedRetailers = document.querySelector('#hidden_responses #retailers').textContent;

    // build countries array
    var countries = [];
    if (document.querySelector('#hidden_responses #countries').textContent !== '') {
        countries = document.querySelector('#hidden_responses #countries').textContent.split(',');
    }
    if (document.querySelector('#hidden_responses #brazil').textContent == 'Yes') countries.push('Brazil');
    if (document.querySelector('#hidden_responses #china').textContent == 'Yes') countries.push('China');
    if (document.querySelector('#hidden_responses #israel').textContent == 'Yes') countries.push('Israel');

    // build continents array
    var continents = selectedRegions.toLowerCase().split(',');

    // build services array
    var services = [];
    debugger;
    services = selectedServices.split(',')

    // set values on summary page
    document.querySelector('.summary .summary-item.industry .value').textContent = selectedIndustry;
    document.querySelector('.summary .summary-item.destinations .value').textContent = selectedRegions;
    document.querySelector('.summary .summary-item.volume .value').textContent = selectedVolume;
    document.querySelector('.summary .summary-item.services .value').textContent = selectedServices;
    document.querySelector('.summary .summary-item.speed .value').textContent = selectedSpeed;


    // EPAQ
    switch (selectedSpeed) {
        case 'approx. 2-5 business days':
            epaqCategory = 'elite';
            break;
        case 'approx. 4-7 business days':
            epaqCategory = 'select';
            break;
        case 'approx. 7-10 business days':
            epaqCategory = 'plus';
            break;
        default:
            epaqCategory = 'standard';
    }

    document.querySelectorAll('.summary .grey-border:not(.epaq-' + epaqCategory + ')').forEach(el => {
        el.remove();
    });
    document.querySelectorAll('.epaq .custom-row:not(.epaq-' + epaqCategory + ')').forEach(el => {
        el.remove();
    });

    // INDUSTRIES

    document.querySelectorAll('.industries:not(.' + selectedIndustry.split(' ')[0].toLowerCase().replace(',', '') + ')').forEach(el => {
        el.remove();
    });

    // REGIONS

    // build css selector
    var selector = '';
    continents.forEach(c => {
        selector += ':not(.' + c.trim().replace(' ', '-') + ')';
    });

    // remove unselected countries
    document.querySelectorAll('.custom-page.region' + selector).forEach(el => {
        el.remove();
    });

    // DESTINATIONS

    // build css selector
    var selector = '';
    countries.forEach(c => {
        selector += ':not(.' + c.trim().toLowerCase().replace(' ', '-') + ')';
    });

    // remove unselected countries
    document.querySelectorAll('.custom-page.destinations' + selector).forEach(el => {
        el.remove();
    });

    // SERVICES

    var selector = '';

    if (services[0].length === 0) {
        document.querySelectorAll('.custom-page.our-services').forEach(el => {
            el.remove();
        });
    } else {
        services.forEach(s => {
            selector += ':not(.' + s.trim().replaceAll(' ', '-').replaceAll('/', '').replaceAll(' ', '').toLowerCase() + ')';
        });

        document.querySelectorAll('.custom-page.our-services' + selector).forEach(el => {
            el.remove();
        });
    }

    // RETAILERS

    switch (selectedRetailers) {
        case 'None':
            document.querySelector("#retailersbox").style.display = "none";
            break;
        case '1 - 500':
            document.querySelector("#largerretailers").style.display = "none";
            break;
        case '500 - 1,499':
            document.querySelector("#largerretailers").style.display = "none";
            break;
        case '1,500 - 2,999':
            document.querySelector("#smallerretailers").style.display = "none";
            break;
        case '3,000 - 4,999':
            document.querySelector("#smallerretailers").style.display = "none";
            break;
        case '5,000 - 7,499':
            document.querySelector("#smallerretailers").style.display = "none";
            break;
        case 'More than 7,500':
            document.querySelector("#smallerretailers").style.display = "none";
            break;
        default:
            document.querySelector("#retailersbox").style.display = "none";
    }

    // SUSTAINABILITY

    if (isInterestedInReducing == 'No') {
        document.querySelector('.sustainability').remove();
    }

});

function docReady(fn) {
    console.log('pretimeout')

    if (
        document.readyState === 'complete' ||
        document.readyState === 'interactive'
    ) {
        // call on next available tick
        setTimeout(fn, 1)
    } else {
        document.addEventListener('DOMContentLoaded', fn, false)
            /////////////////////////////////////////////////////////////////
            //********************* **********************//
        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed')
        })
    }
}