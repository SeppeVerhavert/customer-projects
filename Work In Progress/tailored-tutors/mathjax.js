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