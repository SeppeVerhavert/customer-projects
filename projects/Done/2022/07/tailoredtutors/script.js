// $(window).on('load', function() {
//     console.log("load");
//     if (debug) console.log('%c on load ', 'color: green; font-weight: bold;', successUltimate);
//     checkComments();
//     setTimeout(function() {
//         MathJax.config.startup.ready();
//     }, 1000);
// });

// $(window).on('lecture:change', function() {
//     console.log("lecture:change");
//     if (debug) console.log('%c lecture:change ', 'color: green; font-weight: bold;', successUltimate);
//     serveComments();
//     setTimeout(function() {
//         MathJax.config.startup.ready();
//     }, 1000);
// });

window.MathJax = {
    tex: {
        tags: 'ams',
        displayMath: [
            ['$$', '$$'],
            ['\\(', '\\)']
        ],
        inlineMath: [
            ['$', '$'],
            ['\\(', '\\)']
        ],
        autoload: ['verb', 'color']
    }
};

var script = document.createElement('script');

script.id = "MathJax-script";
script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
script.onload = function() {
    MathJax.config.startup.ready();

    App.Slides.registerEvent('rsOnUpdateNav', function() {
        MathJax.typeset()
    });
};

document.head.appendChild(script);