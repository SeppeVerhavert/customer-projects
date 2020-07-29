var script = document.createElement('script');

App.Slides.registerEvent('rsOnUpdateNav', function() {

    script.onload = function() {
        window.MathJax = {
            tex: {
                tags: 'ams',
                inlineMath: [
                    ['$', '$'],
                    ['\\(', '\\)']
                ],
                autoload: ['verb', 'color']
            }
        };
    };

    script.id = "MathJax-script";
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";

    $(window).on('load', function() {
        console.log("load");
        if (debug) console.log('%c on load ', 'color: green; font-weight: bold;', successUltimate);
        checkComments();
        setTimeout(function() {
            MathJax.config.startup.ready();
        }, 1000);
    });

    $(window).on('lecture:change', function() {
        console.log("lecture:change");
        if (debug) console.log('%c lecture:change ', 'color: green; font-weight: bold;', successUltimate);
        serveComments();
        setTimeout(function() {
            MathJax.config.startup.ready();
        }, 1000);
    });
});

document.head.appendChild(script);