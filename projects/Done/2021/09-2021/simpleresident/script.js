docReady(function() {

    const score = parseInt(document.getElementById('score').innerText);
    const list = document.getElementById('tips');
    const q1 = parseInt(document.getElementById('q1').innerText);
    const q1Res = document.getElementById('q1-res');
    const q2 = parseInt(document.getElementById('q2').innerText);
    const q3 = parseInt(document.getElementById('q3').innerText);
    const q4 = parseInt(document.getElementById('q4').innerText);
    const q5 = parseInt(document.getElementById('q5').innerText);
    const q6 = parseInt(document.getElementById('q6').innerText);
    const q7 = parseInt(document.getElementById('q7').innerText);
    const q8 = parseInt(document.getElementById('q8').innerText);
    const q9 = parseInt(document.getElementById('q9').innerText);
    const q10 = parseInt(document.getElementById('q10').innerText);
    const q11 = parseInt(document.getElementById('q11').innerText);
    const q11Res = document.getElementById('q11-res').innerText;
    const q13 = parseInt(document.getElementById('q13').innerText);
    const q14 = document.getElementById('tips').innerText;
    const elig190 = document.getElementById('elig190').innerText;
    const elig189 = document.getElementById('elig189').innerText;
    const elig491 = document.getElementById('elig491').innerText;

    const sub65Visa190 = parseInt(document.getElementById('190sub65').innerText);
    const sub70Visa190 = parseInt(document.getElementById('190sub70').innerText);
    const sub75Visa190 = parseInt(document.getElementById('190sub75').innerText);
    const sub80Visa190 = parseInt(document.getElementById('190sub80').innerText);
    const sub85Visa190 = parseInt(document.getElementById('190sub85').innerText);
    const sub90Visa190 = parseInt(document.getElementById('190sub90').innerText);
    const sub95Visa190 = parseInt(document.getElementById('190sub95').innerText);
    const sub100Visa190 = parseInt(document.getElementById('190sub100').innerText);
    const sub105Visa190 = parseInt(document.getElementById('190sub105').innerText);
    const sub110Visa190 = parseInt(document.getElementById('190sub110').innerText);
    const sub115Visa190 = parseInt(document.getElementById('190sub115').innerText);
    const sub120Visa190 = parseInt(document.getElementById('190sub120').innerText);
    const sub125Visa190 = parseInt(document.getElementById('190sub125').innerText);

    const sub65Visa189 = parseInt(document.getElementById('189sub65').innerText);
    const sub70Visa189 = parseInt(document.getElementById('189sub70').innerText);
    const sub75Visa189 = parseInt(document.getElementById('189sub75').innerText);
    const sub80Visa189 = parseInt(document.getElementById('189sub80').innerText);
    const sub85Visa189 = parseInt(document.getElementById('189sub85').innerText);
    const sub90Visa189 = parseInt(document.getElementById('189sub90').innerText);
    const sub95Visa189 = parseInt(document.getElementById('189sub95').innerText);
    const sub100Visa189 = parseInt(document.getElementById('189sub100').innerText);
    const sub105Visa189 = parseInt(document.getElementById('189sub105').innerText);
    const sub110Visa189 = parseInt(document.getElementById('189sub110').innerText);
    const sub115Visa189 = parseInt(document.getElementById('189sub115').innerText);
    const sub120Visa189 = parseInt(document.getElementById('189sub120').innerText);
    const sub125Visa189 = parseInt(document.getElementById('189sub125').innerText);

    const sub65Visa491 = parseInt(document.getElementById('491sub65').innerText);
    const sub70Visa491 = parseInt(document.getElementById('491sub70').innerText);
    const sub75Visa491 = parseInt(document.getElementById('491sub75').innerText);
    const sub80Visa491 = parseInt(document.getElementById('491sub80').innerText);
    const sub85Visa491 = parseInt(document.getElementById('491sub85').innerText);
    const sub90Visa491 = parseInt(document.getElementById('491sub90').innerText);
    const sub95Visa491 = parseInt(document.getElementById('491sub95').innerText);
    const sub100Visa491 = parseInt(document.getElementById('491sub100').innerText);
    const sub105Visa491 = parseInt(document.getElementById('491sub105').innerText);
    const sub110Visa491 = parseInt(document.getElementById('491sub110').innerText);
    const sub115Visa491 = parseInt(document.getElementById('491sub115').innerText);
    const sub120Visa491 = parseInt(document.getElementById('491sub120').innerText);
    const sub125Visa491 = parseInt(document.getElementById('491sub125').innerText);

    const compare190 = document.getElementById('compare190');
    const compare189 = document.getElementById('compare189');
    const compare491 = document.getElementById('compare491');

    console.log(sub65Visa190);

    if (score) {
        if (score < 65) {
            compare190.innerHTML += sub65Visa190 + '%';
            compare189.innerHTML += sub65Visa189 + '%';
            compare491.innerHTML += sub65Visa491 + '%';
        } else if (score >= 65 && score < 70) {
            compare190.innerHTML += sub70Visa190 + '%';
            compare189.innerHTML += sub70Visa189 + '%';
            compare491.innerHTML += sub70Visa491 + '%';
        } else if (score >= 70 && score < 75) {
            compare190.innerHTML += sub75Visa190 + '%';
            compare189.innerHTML += sub75Visa189 + '%';
            compare491.innerHTML += sub75Visa491 + '%';
        } else if (score >= 75 && score < 80) {
            compare190.innerHTML += sub80Visa190 + '%';
            compare189.innerHTML += sub80Visa189 + '%';
            compare491.innerHTML += sub80Visa491 + '%';
        } else if (score >= 80 && score < 85) {
            compare190.innerHTML += sub85Visa190 + '%';
            compare189.innerHTML += sub85Visa189 + '%';
            compare491.innerHTML += sub85Visa491 + '%';
        } else if (score >= 85 && score < 90) {
            compare190.innerHTML += sub90Visa190 + '%';
            compare189.innerHTML += sub90Visa189 + '%';
            compare491.innerHTML += sub90Visa491 + '%';
        } else if (score >= 90 && score < 95) {
            compare190.innerHTML += sub95Visa190 + '%';
            compare189.innerHTML += sub95Visa189 + '%';
            compare491.innerHTML += sub95Visa491 + '%';
        } else if (score >= 95 && score < 100) {
            compare190.innerHTML += sub100Visa190 + '%';
            compare189.innerHTML += sub100Visa189 + '%';
            compare491.innerHTML += sub100Visa491 + '%';
        } else if (score >= 100 && score < 105) {
            compare190.innerHTML += sub105Visa190 + '%';
            compare189.innerHTML += sub105Visa189 + '%';
            compare491.innerHTML += sub105Visa491 + '%';
        } else if (score >= 105 && score < 110) {
            compare190.innerHTML += sub110Visa190 + '%';
            compare189.innerHTML += sub110Visa189 + '%';
            compare491.innerHTML += sub110Visa491 + '%';
        } else if (score >= 110 && score < 115) {
            compare190.innerHTML += sub115Visa190 + '%';
            compare189.innerHTML += sub115Visa189 + '%';
            compare491.innerHTML += sub115Visa491 + '%';
        } else if (score >= 115 && score < 120) {
            compare190.innerHTML += sub120Visa190 + '%';
            compare189.innerHTML += sub120Visa189 + '%';
            compare491.innerHTML += sub120Visa491 + '%';
        } else {
            compare190.innerHTML += sub125Visa190 + '%';
            compare189.innerHTML += sub125Visa189 + '%';
            compare491.innerHTML += sub125Visa491 + '%';
        }
    }


    if (score) {
        if (q1 == 25 && q1Res == '18 to 24') {
            list.innerHTML += `<li>Gain 5 points when you turn 25 years. Continue to study or gain employment experience to accumulate more points.</li>`;
        } else if (q1 == 30) {
            list.innerHTML += `<li>This is the best time to apply. Applicants between the age of 26 and 32 get the maximum points for age.</li>`;
        } else if (q1 == 25 && q1Res == '33 to 39') {
            list.innerHTML += `<li>Apply before your 32nd birthday to ensure you have the most possible age-related points. Once you turn 33, you will lose 10 age-related points. To avoid this risk, consider applying as soon as you reasonably can.</li>`;
        } else {
            list.innerHTML += `<li>Apply before your 45th birthday to remain eligible to apply for a skilled migration visa. Once you turn 45, you may no longer be able to apply for a skilled-migration visa.</li>`;
        }

        if (q2 == 0) {
            list.innerHTML += `<li>Improve your English test results to increase your points score. By improving your English assessment results, you may be able to add 10 or even 20 points to your points score.</li>`;
        } else if (q2 == 10) {
            list.innerHTML += `<li>Improve your English test results to increase your points score. By improving your English assessment results, you may be able to add 10 more points to your points score.</li>`;
        } else {

        }

        if (q3 == 5) {

        } else {
            list.innerHTML += `<li>Consider undertaking further study to earn an additional 5 points for 2 years of Australian study.</li>`;
        }

        if (q4 == 5) {

        } else {
            list.innerHTML += `<li>Consider undertaking further study to earn additional points. Applicants who did their two years of study at a CRICOS institution in a regional area can earn an extra 5 points.</li>`;
        }

        if (q5 == 10) {

        } else {
            list.innerHTML += `<li>Consider a research degree if your field of study is natural or physical sciences, information technology, engineering and technology. This may earn you an additional 10 points.</li>`;
        }

        if (q6 == 20) {

        } else if (q6 == 15) {
            list.innerHTML += `<li>By completing a PhD, you may be able to earn an additional 5 points.
            </li>`;
        } else if (q6 == 10) {
            list.innerHTML += `<li>Consider undertaking further study that is closely related to your occupation for additional points. If you earn an eligible Bachelorâ€™s or Masterâ€™s degree directly related to your profession, you may be able to earn 5 additional points.</li>`;
        } else {
            list.innerHTML += `<li>For most occupations, a degree is needed to qualify for skilled migration. An eligible degree may increase your points score by an additional 5-20 points.</li>`;
        }

        if (q7 == 5) {

        } else {
            list.innerHTML += `<li>Consider a Professional Year Program if your field of study is Accounting, Engineering or ICT.</li>`;
        }

        if (q8 == 15) {
            list.innerHTML += `<li>If you have any breaks in your employment or you have moved to Australia, your points score can change if some of your experience starts to fall outside of the last 10 year period. Take care to ensure your points claim is correct.</li>`;
        } else if (q8 == 10) {
            list.innerHTML += `<li>Claim additional points for employment experience once you have 8 years of employment experience in your occupation. Also be aware of the risks. If some of your experience falls back past the last 10 years, you could lose points. Take care to ensure your points claim is correct.</li>`;
        } else if (q8 == 5) {
            list.innerHTML += `<li>Claim additional points for employment experience once you have 5 years of employment experience in your occupation. Also be aware of the risks. If some of your experience falls back past the last 10 years, you could lose points. Take care to ensure your points claim is correct.</li>`;
        } else {
            list.innerHTML += `<li>Claim additional points for employment experience once you achieve 3 years of employment experience in your occupation. Also be aware of the risks. If some of your experience falls back past the last 10 years, you could lose points. Take care to ensure your points claim is correct.</li>`;
        }

        if (q9 == 20) {
            list.innerHTML += `<li>If you have any breaks in your employment or you have moved outside of Australia, your points score can change once your experience starts to fall outside of the last 10 year period. Take care to ensure your points claim is correct.</li>`;
        } else if (q9 == 15) {
            list.innerHTML += `<li>Claim additional points for employment experience once you have 8 years of employment experience in your occupation.</li>`;
        } else if (q9 == 10) {
            list.innerHTML += `<li>Claim additional points for employment experience once you have 5 years of employment experience in your occupation.</li>`;
        } else if (q9 == 5) {
            list.innerHTML += `<li>Claim additional points for employment experience once you achieve 3 years of work experience in your occupation.</li>`;
        } else {
            list.innerHTML += `<li>You indicated that you have not worked in Australia in your nominated occupation. That gives you an opportunity to add 5 points to your score if you can obtain at least one year of such employment. You can also claim points for partner skills if your partner's occupation is on the same occupation list as you and they pass a skills assessment.</li>`;
        }

        if (q10 == 5) {

        }

        if (q11 == 10 && q11Res == 'My partner has a positive skills assessment in an occupation on the applicable list and has competent English (IELTS 6 or equivalent)') {
            list.innerHTML += `<li> You indicated that your partner has a positive skills assessment and competent English. You can claim points for your partner's skills, if their occupation is on the same occupation list as
            yours, and if they pass a skills assessment.</li>`;
        } else if (q11 == 0) {
            list.innerHTML += `<li>Your partner could claim additional points for English skills if they improve their English to the level of 'Competent'.</li>`;
        }

        if (q13 == 'More than 3 years') {
            list.innerHTML += `<li>You may be eligible for a Permanent Partner Visa, as an alternative to skilled migration. Consider talking to a registered migration agent to understand your options better.</li>`;
        } else if (q13 == 'More than 2 years with children together') {
            list.innerHTML += `<li>You may be eligible for a Permanent Partner Visa, as an alternative to skilled migration. Consider talking to a registered migration agent to understand your options better.</li>`;
        } else {
            list.innerHTML += `<li>You may be eligible for a Temporary Partner Visa with a pathway to permanent residency, as an alternative to skilled migration. Consider talking to a registered migration agent to understand your options better.</li>`;
        }

        if (q14 == 'Yes, I have held my job for less than three months.') {
            list.innerHTML += `<li>For the 491 visa, you must have been employed for at least 3 months in Victoria. For the 190 visa, the requirement is at least 6 months. However, requirements often change, consider talking to a registered migration agent to understand your options better. </li>`;
        } else if (q14 == 'Yes, I have held my job for at least three but less than six months.') {
            list.innerHTML += `<li>You have sufficient continuous employment in Victoria for the 491 visa, given that the minimum required is at least 3 months. On the other hand, for the 190 visa, you must have been employed for at least 6 months in Victoria. However, requirements often change, consider talking to a registered migration agent to understand your options better.</li>`;
        } else {
            list.innerHTML += `<li>You have sufficient continuous employment in Victoria for either the 491 visa or the 190 visa. However, requirements often change, consider talking to a registered migration agent to assess your current situation.</li>`;
        }

        console.log(elig190);
        console.log(elig189);
        console.log(elig491);
        debugger;
        if (score > 65) {
            document.getElementById('eligible190').innerHTML += elig190;

            if (elig190 == "Yes ") {
                document.getElementById('eligible190').style.fontWeight = "600";
                document.getElementById('eligible190').style.textTransform = "uppercase";
            }
            document.getElementById('eligible189').innerHTML += elig189;
            if (elig189 == "Yes ") {
                document.getElementById('eligible189').style.fontWeight = "600";
                document.getElementById('eligible189').style.textTransform = "uppercase";
            }
            document.getElementById('eligible491').innerHTML += elig491;
            if (elig491 == "Yes ") {
                document.getElementById('eligible491').style.fontWeight = "600";
                document.getElementById('eligible491').style.textTransform = "uppercase";
            }
        } else {
            document.getElementById('eligible190').innerHTML += "NO";
            document.getElementById('eligible189').innerHTML += "NO";
            document.getElementById('eligible491').innerHTML += "NO";
        }
    }

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