docReady(function() {
            // Efficiency
            const customScoreEff = parseFloat(document.getElementById('self-eff').innerText);
            const leadersEff = parseFloat(document.getElementById('leaders-eff').innerText);

            if (customScoreEff > 0) {
                document.getElementById('self-efficiency').style.marginLeft = (customScoreEff * 139) - 139 + "px";
            }

            if (leadersEff > 0) {
                document.getElementById('leaders-efficiency').style.marginLeft = (leadersEff * 139) - 139 + "px";
            }


            // Well-being
            const customScoreWb = parseFloat(document.getElementById('self-wb').innerText);
            const leadersWb = parseFloat(document.getElementById('leaders-wb').innerText);

            if (customScoreWb > 0) {
                document.getElementById('self-wellbeing').style.marginLeft = (customScoreWb * 139) - 139 + "px";
            }

            if (leadersWb > 0) {
                document.getElementById('leaders-wellbeing').style.marginLeft = (leadersWb * 139) - 139 + "px";
            }


            // Collaboration
            const customScoreCol = parseFloat(document.getElementById('self-col').innerText);
            const leadersCol = parseFloat(document.getElementById('leaders-col').innerText)

            if (customScoreCol > 0) {
                document.getElementById('self-collaboration').style.marginLeft = (customScoreCol * 139) - 139 + "px";
            }

            if (leadersCol > 0) {
                document.getElementById('leaders-collaboration').style.marginLeft = (leadersCol * 139) - 139 + "px";
            }


            // Delegation
            const customScoreDel = parseFloat(document.getElementById('self-del').innerText);
            const leadersDel = parseFloat(document.getElementById('leaders-del').innerText);

            if (customScoreDel > 0) {
                document.getElementById('self-delegation').style.marginLeft = (customScoreDel * 139) - 139 + "px";
            }

            if (leadersDel > 0) {
                document.getElementById('leaders-delegation').style.marginLeft = (leadersDel * 139) - 139 + "px";
            }


            // Performance Management
            const customScorePm = parseFloat(document.getElementById('self-pm').innerText);
            const leadersPm = parseFloat(document.getElementById('leaders-pm').innerText);

            if (customScorePm > 0) {
                document.getElementById('self-performance').style.marginLeft = (customScorePm * 139) - 139 + "px";
            }

            if (leadersPm > 0) {
                document.getElementById('leaders-performance').style.marginLeft = (leadersPm * 139) - 139 + "px";
            }


            // Engagement
            const customScoreEng = parseFloat(document.getElementById('self-eng').innerText);
            const leadersEng = parseFloat(document.getElementById('leaders-eng').innerText);

            if (customScoreEng > 0) {
                document.getElementById('self-engagement').style.marginLeft = (customScoreEng * 139) - 139 + "px";
            }

            if (leadersEng > 0) {
                document.getElementById('leaders-engagement').style.marginLeft = (leadersEng * 139) - 139 + "px";
            }


            // Cohesion
            const customScoreCoh = parseFloat(document.getElementById('self-coh').innerText);
            const leadersCoh = parseFloat(document.getElementById('leaders-coh').innerText);

            if (customScoreCoh > 0) {
                document.getElementById('self-cohesion').style.marginLeft = (customScoreCoh * 139) - 139 + "px";
            }

            if (leadersCoh > 0) {
                document.getElementById('leaders-cohesion').style.marginLeft = (leadersCoh * 139) - 139 + "px";
            }


            // Resilience
            const customScoreRes = parseFloat(document.getElementById('self-res').innerText);
            const leadersRes = parseFloat(document.getElementById('leaders-res').innerText);

            if (customScoreRes > 0) {
                document.getElementById('self-resilience').style.marginLeft = (customScoreRes * 139) - 139 + "px";
            }

            if (leadersRes > 0) {
                document.getElementById('leaders-resilience').style.marginLeft = (leadersRes * 139) - 139 + "px";
            }



            // Arrange Appendix to Descending Order
            let collections = [];

            //get values of questions and answers
            let questionsElement = document.getElementsByClassName("apptablerow-question");
            let answersElement = document.getElementsByClassName("apptablerow-answer");


            for (var i = 0, len = answersElement.length; i < len; i++) {
                let collection = {
                    "question": questionsElement[i].textContent,
                    "answer": answersElement[i].textContent
                }
                collections.push(collection);
            }

            //sort answers to descending order
            collections.sort((a, b) => parseFloat(b.answer) - parseFloat(a.answer));

            //clear the current table
            document.getElementById("apptablebody").innerHTML = '';

            //create new table in order
            for (var i = 0; i < collections.length; i++) {

                document.getElementById("apptablebody").innerHTML = document.getElementById("apptablebody").innerHTML + `
        <div class="apptablerow">
                <div class="apptablerow-question">${collections[i].question}</div>
                <div class="apptablerow-answer">${collections[i].answer}</div>
        </div>
    `
            }


            function docReady(fn) {
                // see if DOM is already available
                console.log("pretimeout");

                if (document.readyState === "complete" || document.readyState === "interactive") {
                    // call on next available tick
                    setTimeout(fn, 1);

                } else {
                    document.addEventListener("DOMContentLoaded", fn, false);

                    window.addEventListener('load', (event) => {
                        console.log('DOM fully loaded and parsed');
                    });
                }
            }