$(document).ready(function() {
    App.functions.onSurveyLoaded(function() {

        window.q1Answer = '';
        window.q1AnswerImage = '';

        // var slider = $(".rsHor").data("royalSlider"); // depends on className
        var slider = $('*').filter(function() {
            return $(this).data('royalSlider') !== undefined;
        }).data('royalSlider'); //doesn't depend on className

        slider.ev.on('rsAfterSlideChange', function(event) {

            currentSlide = event.target.currSlide.id;
            console.log(currentSlide);

            if (currentSlide == 2) {

                window.q1Answer = document.getElementById("q1-answer").innerText;
                window.q1AnswerImage = document.getElementById("q1-answer-image");

                switch (window.q1Answer) {
                    case "Significantly more complex than two years ago":
                        window.q1AnswerImage.className = "q1-a1";
                        break;
                    case "More complex than two years ago":
                        window.q1AnswerImage.className = "q1-a2";
                        break;
                    case "Equally complex as two years ago":
                        window.q1AnswerImage.className = "q1-a3";
                        break;
                    case "Less complex than two years ago":
                        window.q1AnswerImage.className = "q1-a4";
                        break;
                    case "Significantly less complex than two years ago":
                        window.q1AnswerImage.className = "q1-a5";
                        break;
                }

            }

            if (currentSlide == 4) {

                window.q2Answer = document.getElementById("q2-answer").innerText;
                window.q2AnswerImage = document.getElementById("q2-answer-image");

                switch (window.q2Answer) {
                    case "250 or more":
                        window.q2AnswerImage.className = "q2-a9";
                        break;
                    case "Between 200 to 249":
                        window.q2AnswerImage.className = "q2-a8";
                        break;
                    case "Between 150 to 199":
                        window.q2AnswerImage.className = "q2-a7";
                        break;
                    case "Between 101 to 149":
                        window.q2AnswerImage.className = "q2-a6";
                        break;
                    case "Between 76 and 100":
                        window.q2AnswerImage.className = "q2-a5";
                        break;
                    case "Between 51 and 75":
                        window.q2AnswerImage.className = "q2-a4";
                        break;
                    case "Between 26 and 50":
                        window.q2AnswerImage.className = "q2-a3";
                        break;
                    case "Between 10 and 25":
                        window.q2AnswerImage.className = "q2-a2";
                        break;
                    case "Less than 10":
                        window.q2AnswerImage.className = "q2-a1";
                        break;
                    case "Don't know":
                        window.q2AnswerImage.className = "q2-a10";
                        break;
                }

            }

            if (currentSlide == 8) {

                window.q4Answer = document.getElementById("q4-answer").innerText;
                window.q4AnswerImage = document.getElementById("q4-answer-image");
                window.q4Details = document.getElementById("q4-details");

                if (window.q4Answer < 50) {
                    window.q4AnswerImage.className = "q4-a1";
                    window.q4Details.innerText = "You indicated that most of your VMs live on-premises.";
                } else if (window.q4Answer >= 50) {
                    window.q4AnswerImage.className = "q4-a2";
                    window.q4Details.innerText = "You indicated that most of your VMs live in the cloud.";
                }
            }

            if (currentSlide == 10) {

                window.q5Answer = document.getElementById("q5-answer").innerText;
                window.q5AnswerImage = document.getElementById("q5-answer-image");

                switch (window.q5Answer) {
                    case "Strongly agree":
                        window.q5AnswerImage.className = "q5-a1";
                        break;
                    case "Agree":
                        window.q5AnswerImage.className = "q5-a2";
                        break;
                    case "Neither agree nor disagree":
                        window.q5AnswerImage.className = "q5-a3";
                        break;
                    case "Disagree":
                        window.q5AnswerImage.className = "q5-a4";
                        break;
                    case "Strongly disagree":
                        window.q5AnswerImage.className = "q5-a5";
                        break;
                    case "Don't know":
                        window.q5AnswerImage.className = "q5-a6";
                        break;
                }

            }

            if (currentSlide == 12) {

                window.q6Answer = document.getElementById("q6-answer").innerText;
                window.q6AnswerImage = document.getElementById("q6-answer-image");

                switch (window.q6Answer) {
                    case "N/A - We have not generated an asset inventory in the recent past":
                        window.q6AnswerImage.className = "q6-a7";
                        break;
                    case "Less than 20 person-hours":
                        window.q6AnswerImage.className = "q6-a1";
                        break;
                    case "Between 20 and 40 person-hours":
                        window.q6AnswerImage.className = "q6-a2";
                        break;
                    case "Between 41 and 80 person-hours":
                        window.q6AnswerImage.className = "q6-a3";
                        break;
                    case "Between 81 and 120 person-hours":
                        window.q6AnswerImage.className = "q6-a4";
                        break;
                    case "Between 121 and 200 person-hours":
                        window.q6AnswerImage.className = "q6-a5";
                        break;
                    case "More than 200 person-hours":
                        window.q6AnswerImage.className = "q6-a6";
                        break;
                    case "Don't know/have not quantified":
                        window.q6AnswerImage.className = "q6-a8";
                        break;
                }
            }

            if (currentSlide == 14) {

                window.q7Answer = document.getElementById("q7-answer").innerText;
                window.q7AnswerImage = document.getElementById("q7-answer-image");
                var array7 = window.q7Answer.split(',');
                var answ3 = "Incident response/more thorough investigations";
                var answ2 = "Proactive threat hunting";
                var answ1 = "More/better training offered to end-users";
                var answ4 = "Proactive compliance/audit checks";

                switch (array7.length) {
                    case 1:
                        if (array7.indexOf(answ1) !== -1) {
                            window.q7AnswerImage.className = "q7-a1";
                        } else if (array7.indexOf(answ2) !== -1) {
                            window.q7AnswerImage.className = "q7-a2";
                        } else if (array7.indexOf(answ3) !== -1) {
                            window.q7AnswerImage.className = "q7-a3";
                        } else if (array7.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a4";
                        }
                        break;
                    case 2:
                        if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ2) !== -1) {
                            window.q7AnswerImage.className = "q7-a12";
                        } else if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ3) !== -1) {
                            window.q7AnswerImage.className = "q7-a13";
                        } else if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a14";
                        } else if (window.q7Answer.indexOf(answ2) !== -1 && window.q7Answer.indexOf(answ3) !== -1) {
                            window.q7AnswerImage.className = "q7-a23";
                        } else if (window.q7Answer.indexOf(answ2) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a24";
                        } else if (window.q7Answer.indexOf(answ3) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a34";
                        }
                        break;
                    case 3:
                        if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ2) !== -1 && window.q7Answer.indexOf(answ3) !== -1) {
                            window.q7AnswerImage.className = "q7-a123";
                        } else if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ2) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a124";
                        } else if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ3) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a134";
                        } else if (window.q7Answer.indexOf(answ2) !== -1 && window.q7Answer.indexOf(answ3) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a234";
                        }
                        break;
                    case 4:
                        if (window.q7Answer.indexOf(answ1) !== -1 && window.q7Answer.indexOf(answ2) !== -1 && window.q7Answer.indexOf(answ3) !== -1 && window.q7Answer.indexOf(answ4) !== -1) {
                            window.q7AnswerImage.className = "q7-a1234";
                        }
                        break;
                }
            }

            if (currentSlide == 16) {

                window.q8Answer = document.getElementById("q8-answer").innerText;
                window.q8AnswerImage = document.getElementById("q8-answer-image");

                switch (window.q8Answer) {
                    case "Increase significantly":
                        window.q8AnswerImage.className = "q8-a1";
                        break;
                    case "Increase somewhat":
                        window.q8AnswerImage.className = "q8-a2";
                        break;
                    case "Remain about the same":
                        window.q8AnswerImage.className = "q8-a3";
                        break;
                    case "Decrease somewhat":
                        window.q8AnswerImage.className = "q8-a4";
                        break;
                    case "Decrease significantly":
                        window.q8AnswerImage.className = "q8-a5";
                        break;
                }
            }

        });



        //   var colorConfig = [
        //     {
        //       contentId: "content2",
        //       chart: "IT Complexity",
        //       answers: [
        //         {
        //           innerText:
        //             "YOUR ANSWER: Significantly more complex than two years ago",
        //           color: "orange"
        //         },
        //         {
        //           innerText: "YOUR ANSWER: More complex than two years ago",
        //           color: "purple"
        //         },
        //         {
        //           innerText: "YOUR ANSWER: Equally complex as two years ago",
        //           color: "blue"
        //         },
        //         {
        //           innerText: "YOUR ANSWER: Less complex than two years ago",
        //           color: "charcoal"
        //         },
        //         {
        //           innerText:
        //             "YOUR ANSWER: Significantly less complex than two years ago",
        //           color: "lime"
        //         }
        //       ]
        //     },
        //     {
        //       contentId: "content9",
        //       chart: "Cloud VM"
        //     },
        //     {
        //       contentId: "content11",
        //       chart: "IoT Devices",
        //       answers: [
        //         {
        //           innerText: "YOUR ANSWER: Strongly agree",
        //           color: "purple"
        //         },
        //         {
        //           innerText: "YOUR ANSWER: Agree",
        //           color: "yellow"
        //         },
        //         {
        //           innerText: "YOUR ANSWER: Neither agree nor disagree",
        //           color: "blue"
        //         },
        //         { innerText: "YOUR ANSWER: Disagree", color: "charcoal" },
        //         { innerText: "YOUR ANSWER: Strongly disagree", color: "lime" }
        //       ]
        //     },
        //     {
        //       contentId: "content17",
        //       chart: "Asset Inventory",
        //       answers: [
        //         {
        //           innerText: "YOUR ANSWER: Increase significantly",
        //           color: "lime"
        //         },
        //         {
        //           innerText: "YOUR ANSWER: Increase somewhat",
        //           color: "orange"
        //         },
        //         { innerText: "YOUR ANSWER: Remain about the same", color: "blue" },
        //         { innerText: "YOUR ANSWER: Decrease somewhat", color: "charcoal" },
        //         { innerText: "YOUR ANSWER: Decrease significantly", color: "purple" }
        //       ]
        //     }
        //   ];

        // var q1Answer = document.getElementById("q1-answer");
        // var q1AnswerImage = document.getElementById("q1-answer-image");
        // if (q1Answer.value === "Significantly more complex than two years ago") {
        // 	q1AnswerImage.className += "q1-a1";
        // } else if (q1Answer.value === "More complex than two years ago") {
        // 	q1AnswerImage.classList.add("q1-a2");
        // } else if (q1Answer.value === "Equally complex as two years ago") {
        // 	q1AnswerImage.classList.add("q1-a3");
        // } else if (q1Answer.value === "Less complex than two years ago") {
        // 	q1AnswerImage.classList.add("q1-a4");
        // } else if (q1Answer.value === "Significantly less complex than two years ago") {
        // 	q1AnswerImage.classList.add("q1-a5");
        // }

        //   var slider = $(".royalSlider").data("royalSlider");

        //   slider.ev.on("rsAfterSlideChange", function (event) {
        //     var rsActiveSlide = document.getElementsByClassName("rsActiveSlide");

        //     if (rsActiveSlide) {
        //       var rscontent = rsActiveSlide[0].firstElementChild;

        //       if (rscontent) {
        //         var contentId = colorConfig.filter(function (config) {
        //           return config.contentId === rscontent.id;
        //         });

        //         if (contentId && contentId.length) {
        //           var barChartEl = rscontent.getElementsByClassName(
        //             "bar-chart-horizontal"
        //           )[0];

        //           if (barChartEl) {
        //             var animatedBar = barChartEl.getElementsByClassName(
        //               "bar-chart-bar"
        //             )[0];
        //             var answer = barChartEl.firstElementChild.innerText;

        //             if (answer && animatedBar) {
        //               if (contentId[0].contentId === "content9") {
        //                 var percentageScore = answer.slice(13);
        //                 var score = parseFloat(percentageScore);
        //                 var color = score > 52 ? "charcoal" : "blue";
        //                 animatedBar.classList.add(color);
        //               } else {
        //                 var answerSelected = contentId[0].answers.filter(function (
        //                   value
        //                 ) {
        //                   return value.innerText === answer;
        //                 });

        //                 if (answerSelected) {
        //                   var color = answerSelected[0].color;
        //                   animatedBar.classList.add(color);
        //                 }
        //               }
        //             }
        //           }
        //         }
        //       }
        //     }
        //   });



    });
});