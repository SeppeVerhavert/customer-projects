require(['jquery', 'underscore'], function ($, _) {

    App.functions.onSurveyLoaded(function (view) {


        var startMonthOfRSV = App.quiz.attributes.formulas.getFormulaByOrder(4); // 0 - January, 11 - December
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var rsvSpan = [new Date(App.quiz.attributes.formulas.getFormulaByOrder(3).getResult(), App.quiz.attributes.formulas.getFormulaByOrder(4).getResult()), new Date(App.quiz.attributes.formulas.getFormulaByOrder(5).getResult(), App.quiz.attributes.formulas.getFormulaByOrder(6).getResult())]; // [start, end]

        debugger;

        var questionHeaderHTML =
            `<div class="question-header">
			<div class="restart-survey">
				<div class="icon"><img src="https://assets.surveyanyplace.com/media-library/production/64556/Synagis/kW2rdc7SWiFL5PrPCgde_synagis_restart.png"></div>
				<div class="text">Restart</div>
			</div>
			<div class="selected-answers" data-state="4"><div id="prev-nav" class="hidden"><</div><div id="next-nav" class="hidden">></div></div>
		</div>`;

        var $questionHeaderHTML = $(questionHeaderHTML);

        $questionHeaderHTML.find('.restart-survey').click(function () {
            window.location.href = 'https://s.surveyanyplace.com/idsynagisv1';
        });

        App.Slides.slider.settings.keyboardNavigation.enabled = false;
        App.Slides.slider.settings.visibleNearby.enabled = false;
        App.Slides.slider.update();

        var currSlide = App.Slides.getCurrentSlide();

        $(currSlide.content).find('.card-actions').detach().appendTo($(currSlide.content).find('.card-content-item'));
        $(currSlide.content).find('.button').removeClass('glow');
        $(currSlide.content).find('.card').addClass('rsNoDrag');

        appendFixedContent(currSlide.content);
        $(currSlide.content).find('.card-content-item').prepend($questionHeaderHTML);

        App.Slides.slider.ev.on('rsBeforeMove', function (event, type) {

            var currSlide = App.Slides.getCurrentSlide();
            var nextSlide = App.Slides.getNextSlide();

            var $prevNav = $questionHeaderHTML.find('#prev-nav');
            var $nextNav = $questionHeaderHTML.find('#next-nav');

            $(nextSlide.content).find('.card-actions').detach().appendTo($(nextSlide.content).find('.card-content-item'));
            $(nextSlide.content).find('.button.next').removeClass('glow').addClass('disabled');
            $(nextSlide.content).find('.card').addClass('rsNoDrag');

            switch (parseInt($(currSlide.content).attr('id').substr(7))) {
                case 1:
                    $(createAnswerItem('Country:', 'Yes', 1)).insertBefore($nextNav);
                    break;
                case 2:
                    var month = $(currSlide.content).find('.form-item:nth-child(1) select').val();
                    var year = $(currSlide.content).find('.form-item:nth-child(2) select').val();
                    $(createAnswerItem('Birthdate:', month + ', ' + year, 3)).insertBefore($nextNav);

                    // set the two formulas used for the flows
                    var birthDate = new Date(year, months.indexOf(month));
                    var birthMonthIndex = months.indexOf(month);
                    var f1 = App.quiz.attributes.formulas.getFormulaByOrder(1);
                    var f2 = App.quiz.attributes.formulas.getFormulaByOrder(2);

                    // if (birthMonthIndex < startMonthOfRSV) {
                    // 	birthMonthIndex += 12;
                    // }

                    // if (birthMonthIndex - startMonthOfRSV < 6) { //Is patient birthdate < 6 months after the RSV season starting month?
                    if ((monthDiff(birthDate, rsvSpan[0]) < 6 && 0 < monthDiff(birthDate, rsvSpan[0]) > 0) || isBetweenDates(birthDate, rsvSpan[0], rsvSpan[1])) { //Is patient < 6 months at the RSV season start?
                        f1.setProperty('base', 1);
                    }
                    else if (monthDiff(birthDate, rsvSpan[0]) <= 0) {
                        var oneYearFromRSVStart = new Date(rsvSpan[0]);

                        if (monthDiff(birthDate, new Date(oneYearFromRSVStart.setFullYear(oneYearFromRSVStart.getFullYear() + 1))) < 6) {
                            f1.setProperty('base', 1);
                        }
                    }
                    else {
                        f1.setProperty('base', 0);
                    }

                    if (calculateAge(birthDate, new Date()) < 2) { //Is the patient < 2 years old? (now)
                        // if (calculateAge(birthDate, rsvSpan[0]) < 2) { //Is the patient < 2 years old? !!!(at the start of the RSV season)!!!
                        f2.setProperty('base', 1);
                    }
                    else {
                        f2.setProperty('base', 0);
                    }

                    break;
                case 3:
                    var ct = '';
                    var as = $(currSlide.content).find('.answer input:checked + .answer-content');
                    for (i = 0; i < as.length; i++) {
                        switch ($(as[i]).parent().index()) {
                            case 0:
                                ct += 'Premature';
                                break;
                            case 1:
                                ct += 'BPD';
                                break;
                            case 2:
                                ct += 'CHD';
                                break;
                            case 3:
                                ct += 'None';
                                break;
                        }
                        if (i < as.length - 1) {
                            ct += ', ';
                        }
                    }

                    $(createAnswerItem('Conditions:', ct, 4)).insertBefore($nextNav);
                    // $questionHeaderHTML.find('.selected-answers .answer-item').slice(0,2).addClass('hidden');
                    // $($prevNav).removeClass();

                    // $($prevNav).click(function(){
                    // 	var hiddenAs = $('.selected-answers .answer-item.hidden');
                    // 	var visibleAs = $('.selected-answers .answer-item:not(.hidden)');
                    // 	$(visibleAs[visibleAs.length-1]).addClass('hidden');
                    // 	$(visibleAs[0]).prev('.answer-item').removeClass('hidden');
                    // 	// if first answer item is visible, hide prev-nav
                    // 	if (!$($('.answer-item')[0]).hasClass('hidden')) {
                    // 		$($prevNav).addClass('hidden');
                    // 		$($nextNav).removeClass('hidden');
                    // 	}
                    // 	// if both first and last items are hidden, show prev and next navs
                    // 	if ($($('.answer-item')[$('.answer-item').length-1]).hasClass('hidden') && $($('.answer-item')[0]).hasClass('hidden')) {
                    // 		$($prevNav).removeClass('hidden');
                    // 		$($nextNav).removeClass('hidden');
                    // 	}
                    // });

                    // $($nextNav).click(function(){
                    // 	var hiddenAs = $('.selected-answers .answer-item.hidden');
                    // 	var visibleAs = $('.selected-answers .answer-item:not(.hidden)');
                    // 	$(visibleAs[0]).addClass('hidden');
                    // 	$(visibleAs[visibleAs.length-1]).next('.answer-item').removeClass('hidden');
                    // 	// if first answer item is visible, hide prev-nav
                    // 	if (!$($('.answer-item')[$('.answer-item').length-1]).hasClass('hidden')) {
                    // 		$($prevNav).removeClass('hidden');
                    // 		$($nextNav).addClass('hidden');
                    // 	}
                    // 	// if both first and last items are hidden, show prev and next navs
                    // 	if ($($('.answer-item')[$('.answer-item').length-1]).hasClass('hidden') && $($('.answer-item')[0]).hasClass('hidden')) {
                    // 		$($prevNav).removeClass('hidden');
                    // 		$($nextNav).removeClass('hidden');
                    // 	}
                    // });

                    break;
                case 4:
                    // $('.selected-answers').attr('data-state', '5')
                    $(createAnswerItem('Recent BPD Treatment:', $(currSlide.content).find('.answer input:checked + .answer-content').text(), 5)).insertBefore('#next-nav');
                    // $('.answer-item').addClass('hidden');
                    // $($('.answer-item')[3]).removeClass('hidden');
                    // $($('.answer-item')[4]).removeClass('hidden');
                    // $($prevNav).removeClass('hidden');
                    // 	$($nextNav).addClass('hidden');
                    break;
                case 5:
                    $(createAnswerItem('Haemodynamically Significant CHD:', $(currSlide.content).find('.answer input:checked + .answer-content').text(), 6)).insertBefore('#next-nav');
                    // $questionHeaderHTML.find('.selected-answers').append($(createAnswerItem('Haemodynamically Significant CHD:', $(currSlide.content).find('.answer input:checked + .answer-content').text())));
                    break;
            }

            if (nextSlide.content != undefined) {

                switch (parseInt($(nextSlide.content).attr('id').substr(7))) {
                    case 6:
                        $(nextSlide.content).find('.button.cta-2').click(function () {
                            $(nextSlide.content).find('.talk-to-popup').addClass('active');
                        });
                        $(nextSlide.content).find('.close-popup').click(function () {
                            $(nextSlide.content).find('.talk-to-popup').removeClass('active');
                        });
                        break;
                    case 7:
                        $(nextSlide.content).find('.button.cta-2').click(function () {
                            $(nextSlide.content).find('.talk-to-popup').addClass('active');
                        });
                        $(nextSlide.content).find('.close-popup').click(function () {
                            $(nextSlide.content).find('.talk-to-popup').removeClass('active');
                        });
                        break;
                }
            }

            if (!$(nextSlide.content).find('.card-content .custom-header').length) {

                appendFixedContent(nextSlide.content);

                if ($(nextSlide.content).find('#question-4').length) {

                    // enable/disable Next button if answers were selected
                    $(nextSlide.content).find('.answer-container input').change(function () {
                        if ($(this).parent().parent().find('input:checked').length) {
                            $('#question-4 .button.next').removeClass('disabled');
                        }
                        else {
                            $('#question-4 .button.next').addClass('disabled');
                        }
                    });


                    // logic for None of these options apply
                    var currAnswers = $(nextSlide.content).find('.answer');
                    var qs = App.quiz.getQuestions();

                    // clicking on None of these options apply
                    $(currAnswers[3]).find('input').on('change', function (e) {
                        $(this).parent().siblings().each(function () {
                            qs[4].setNewAnswer({ order: $(this).index() + 1 }, { answered: false }, { silent: true });
                        });
                        $(this).parent().siblings().find('input').prop('checked', false);
                    });

                    //clicking on anything else than None of these options apply
                    currAnswers.slice(0, currAnswers.length - 1).find('input').on('change', function (e) {
                        currAnswers.slice(-1).each(function () {
                            qs[4].setNewAnswer({ order: $(this).index() + 1 }, { answered: false }, { silent: true });
                        });
                        currAnswers.slice(-1).find('input').prop('checked', false);
                    });

                }
            }

            if (!$(nextSlide.content).find('.card-content-item .question-header').length) {
                $(nextSlide.content).find('.card-content-item').prepend($questionHeaderHTML);
            }

            if ($(nextSlide.content).find('.form-item > .select').length && !$(nextSlide.content).find('.form-item > .select .select-selected').length) {
                makeCustomDropdown($(nextSlide.content).find('.form-item > .select'));
            }

        });

        App.Slides.slider.ev.on('rsAfterSlideChange', function (event, type) {
        });

        App.ev.once('afterRenderOutro', function (view) {

            App.Slides.registerEvent('rsOnUpdateNav', function () {

                appendFixedContent($('#content0'));
                if (!$('#content0 .card-content-item .question-header').length) {
                    $('#content0 .card-content-item').prepend($questionHeaderHTML);
                    $(createAnswerItem('Country:', 'No', 1)).insertBefore('#next-nav');
                    $('.answer-item').unbind();
                    $('.answer-item').click(function () {
                        window.location.href = 'https://s.surveyanyplace.com/idsynagis';
                    });
                }

            });

        });

        function makeCustomDropdown(customSelect) {

            var x, i, j, l, ll, selElmnt, a, b, c;
            /*look for any elements with the class "custom-select":*/
            x = customSelect;
            l = x.length;
            for (i = 0; i < l; i++) {

                selElmnt = x[i].getElementsByTagName("select")[0];
                ll = selElmnt.length;
                /* add the title of the select as the first option */
                selElmnt[0].value = selElmnt.parentElement.previousElementSibling.textContent;
                selElmnt[0].text = selElmnt.parentElement.previousElementSibling.textContent;
                /*for each element, create a new DIV that will act as the selected item:*/
                a = document.createElement("DIV");
                a.setAttribute("class", "select-selected");
                a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
                x[i].appendChild(a);
                /*for each element, create a new DIV that will contain the option list:*/
                b = document.createElement("DIV");
                b.setAttribute("class", "select-items select-hide");
                for (j = 1; j < ll; j++) {
                    /*for each option in the original select element,
                    create a new DIV that will act as an option item:*/
                    c = document.createElement("DIV");
                    c.innerHTML = selElmnt.options[j].innerHTML;
                    c.addEventListener("click", function (e) {
                        /*when an item is clicked, update the original select box,
                        and the selected item:*/
                        var y, i, k, s, h, sl, yl;
                        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                        sl = s.length;
                        h = this.parentNode.previousSibling;
                        for (i = 0; i < sl; i++) {
                            if (s.options[i].innerHTML == this.innerHTML) {
                                s.selectedIndex = i;
                                $(s).change();
                                h.innerHTML = this.innerHTML;
                                y = this.parentNode.getElementsByClassName("same-as-selected");
                                yl = y.length;
                                for (k = 0; k < yl; k++) {
                                    y[k].removeAttribute("class");
                                }
                                this.setAttribute("class", "same-as-selected");
                                break;
                            }
                        }
                        h.click();
                        $(this.parentNode.previousElementSibling).addClass('selected-x');

                        if (!$(App.Slides.getCurrentSlide().content).find('.select-selected:not(.selected-x)').length) {
                            $(App.Slides.getCurrentSlide().content).find('.button.next').removeClass('disabled');
                        }
                    });
                    b.appendChild(c);
                }
                x[i].appendChild(b);
                a.addEventListener("click", function (e) {
                    /*when the select box is clicked, close any other select boxes,
                    and open/close the current select box:*/
                    e.stopPropagation();
                    closeAllSelect(this);
                    this.nextSibling.classList.toggle("select-hide");
                    this.classList.toggle("select-arrow-active");
                });
            }
            function closeAllSelect(elmnt) {
                /*a function that will close all select boxes in the document,
                except the current select box:*/
                var x, y, i, xl, yl, arrNo = [];
                x = document.getElementsByClassName("select-items");
                y = document.getElementsByClassName("select-selected");
                xl = x.length;
                yl = y.length;
                for (i = 0; i < yl; i++) {
                    if (elmnt == y[i]) {
                        arrNo.push(i)
                    } else {
                        y[i].classList.remove("select-arrow-active");
                    }
                }
                for (i = 0; i < xl; i++) {
                    if (arrNo.indexOf(i)) {
                        x[i].classList.add("select-hide");
                    }
                }
            }
            /*if the user clicks anywhere outside the select box,
            then close all select boxes:*/
            document.addEventListener("click", closeAllSelect);

        }

        function appendFixedContent(parent) {
            var customHeaderHTML =
                `<div class="custom-header">
				<div class="header-logo">
					<div class="logo-img">
						<img src="https://surveyanyplace.s3.amazonaws.com/app/editor/reports/pdf/custom/astra_zeneca/synagis/bebe.svg">
					</div>
					<div class="logo-text">ID SYNAGIS</div>
				</div>
				<h1>Could SYNAGISÂ® (palivizumab) be appropriate for your patient?</h1>
				<p>Answer the following questions to find out whether your patient is at high risk for serious RSV disease and may benefit from prophylaxis with SYNAGIS.</p>
			</div>`;

            var guidelinesHTML =
                `<div class="guidelines cropped">
					<div class="guidelines-title">Guidelines on RSV Prophylaxis in <span class="magenta">&lt;&lt;Country&gt;&gt;</span></div>
					<div class="guidelines-text magenta">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna ut enim ad minimcveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit incvoluptate velit esse cillum dolore eu fugiat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna ut enim ad minimcveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit incvoluptate velit esse cillum dolore eu fugiat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna ut enim ad minimcveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit incvoluptate velit esse cillum dolore eu fugiat.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna ut enim ad minimcveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit incvoluptate velit esse cillum dolore eu fugiat.</p>
					</div>
					<div class="guidelines-info">This tool is intended for healthcare professionals only.<br>Date of Preparation: August 2021<br>Date of Expiry: August 2023<br>SYNAGIS is a registered trademark of the AstraZeneca group of companies.<br>Â©AstraZeneca 2021. All rights reserved. Veeva Approval ID: Z4-35890</div>
				</div>
				<div class="button-more-close">MORE</div>`;

            $(parent).find('.card-content').prepend(customHeaderHTML);
            $(parent).find('.card-content').append(guidelinesHTML);

            // assign handlers

            $(parent).find('.button-more-close').click(function () {
                $(this).toggleClass('closed');
                $(this).prev().toggleClass('cropped');
                $(this).parent().toggleClass('cropped');
                $(this).text(function (i, text) {
                    return text === "Close" ? "More" : "Close";
                });
            });
        }

        function createAnswerItem(title, content, id) {
            $ai = $('<div class="answer-item" data-id="' + id + '"><div class="title">' + title + '</div><div class="content">' + content + '</div></div>');

            $ai.click(function () {
                var thisID = parseInt($(this).attr('data-id'));
                var thisOrder = $(this).index();
                // var visibleSlides = App.Slides.models.filter(function(s){ return !s.attributes.hidden;});
                App.Slides.slider.goTo(thisOrder - 1);
                for (i = thisOrder; i <= $questionHeaderHTML.find('.answer-item').length; i++) {
                    $(App.Slides.getSlide(i - 1).content).find('input').prop('checked', false).change();
                    $(App.Slides.getSlide(i - 1).content).find('select').each(function (i, s) {
                        $(s).find('option:selected').prop('selected', false).change();
                        $(s).parent().find('.select-items > div').removeClass('same-as-selected');
                        $(s).parent().find('.select-selected').removeClass('selected-x').text($(s).parent().prev().text());
                    })
                }
                $questionHeaderHTML.find('.answer-item').slice(thisOrder - 1, $questionHeaderHTML.find('.answer-item').length).detach();
                $('#content' + thisID).find('.card-content-item').prepend($questionHeaderHTML);
            });
            return $ai;
        }

        function calculateAge(birthday, rsvStart) { // birthday is a date
            var ageDifMs = rsvStart - birthday.getTime();
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        function monthDiff(dateFrom, dateTo) {
            return dateTo.getMonth() - dateFrom.getMonth() +
                (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
        }

        function isBetweenDates(check, from, to) {
            return ((check.getTime() <= to.getTime() && check.getTime() >= from.getTime()));
        }

    });

});