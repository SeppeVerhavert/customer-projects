docReady(function() {

    $('#widget_4 .kpi-container').detach().appendTo('#page_2 .left-graph');
    $('#widget_8 .kpi-container').detach().appendTo('#page_3 .left-graph');
    $('#widget_11 .kpi-container').detach().appendTo('#page_4 .left-graph');
    $('#widget_14 .kpi-container').detach().appendTo('#page_5 .left-graph');
    $('#widget_17 .kpi-container').detach().appendTo('#page_6 .left-graph');
    $('#widget_20 .kpi-container').detach().appendTo('#page_7 .left-graph');
    $('#widget_23 .kpi-container').detach().appendTo('#page_8 .left-graph');

    //Score variables

    const total = parseInt(document.getElementById('total').innerText);
    const mind = parseInt(document.getElementById('mind').innerText);
    const feedback = parseInt(document.getElementById('feedback').innerText);
    const success = parseInt(document.getElementById('success').innerText);
    const habits = parseInt(document.getElementById('habits').innerText);
    const behaviour = parseInt(document.getElementById('behaviour').innerText);
    const comm = parseInt(document.getElementById('comm').innerText);

    //Score text variables

    const totalScore = document.getElementById('total-score');
    const mindScore = document.getElementById('mindset-score');
    const feedScore = document.getElementById('feedback-score');
    const successScore = document.getElementById('success-score');
    const habitsScore = document.getElementById('habits-score');
    const behScore = document.getElementById('beh-score');
    const commScore = document.getElementById('comm-score');

    //Variables for slider

    const totalSlide = document.getElementById('upper-total');
    const mindSlide = document.getElementById('upper-mindset');
    const feedSlide = document.getElementById('upper-feedback');
    const successSlide = document.getElementById('upper-success');
    const habitsSlide = document.getElementById('upper-habits');
    const behSlide = document.getElementById('upper-beh');
    const commSlide = document.getElementById('upper-comm');

    //slider logic for text

    totalScore.style.width = total + '%';
    mindScore.style.width = mind + '%';
    feedScore.style.width = feedback + '%';
    successScore.style.width = success + '%';
    habitsScore.style.width = habits + '%';
    behScore.style.width = behaviour + '%';
    commScore.style.width = comm + '%';

    //Slider logic for bar

    totalSlide.style.width = total + '%';
    mindSlide.style.width = mind + '%';
    feedSlide.style.width = feedback + '%';
    successSlide.style.width = success + '%';
    habitsSlide.style.width = habits + '%';
    behSlide.style.width = behaviour + '%';
    commSlide.style.width = comm + '%';



});



function docReady(fn) {
    console.log("pretimeout");

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);

    } else {
        document.addEventListener("DOMContentLoaded", fn, false);
        /////////////////////////////////////////////////////////////////
        //********************* **********************//
        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed');
        });
    }
}