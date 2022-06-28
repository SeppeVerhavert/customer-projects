$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {

        // ADJUSTING HINTS
        App.Slides.slider.ev.on("rsAfterSlideChange", function(event) {
            const slides = document.getElementsByClassName("rsActiveSlide");

            if (slides && slides[0]) {
                const slide = slides[0];
                const hints = slide.getElementsByClassName("question-hint");
                const textbelowDivs = slide.getElementsByClassName("text-below");

                if (textbelowDivs && textbelowDivs[0]) {
                    const textbelow = textbelowDivs[0];

                    const answerContainers =
                        slide.getElementsByClassName("answers-container");

                    if (answerContainers && answerContainers[0]) {
                        const answerContainer = answerContainers[0];

                        answerContainer.append(textbelow);
                    }
                }

                if (hints) {
                    const titleContainers = slide.querySelectorAll(
                        "div.container.text-container"
                    );

                    if (titleContainers) {
                        for (var i = 0; i < hints.length; i++) {
                            const paragraphs = titleContainers[i].querySelectorAll("p");

                            let stop = false;
                            for (var j = paragraphs.length - 1; j >= 0; j--) {
                                const p = paragraphs[j];
                                if (p.innerText && p.innerText.length > 1 && !stop) {
                                    p.innerHTML = p.innerHTML.split("<br>").join("");
                                    p.classList.add("inline-hint");

                                    stop = true;
                                }

                                hints[i].append(titleContainers[i]);
                            }
                        }
                    }
                }
            }
        });

        // THOUSAND SEPARATOR
        var list = document.querySelectorAll('.input.form-item-answer[type="number"]');

        list.forEach(element => {
            element.addEventListener("input", () => { changevalue(element); }, false);
        });

        function changevalue(element) {
            element = element || window.event;
            var who = element.target || element.srcElement;
            var v1 = element.value
            if (v1) element.value = commify(v1, element);
        }

        function commify(value, parent) {
            var val = parseFloat(value).toLocaleString()
            parent.parentNode.setAttribute("comma-value", val)
            return value;
        }
    });
});