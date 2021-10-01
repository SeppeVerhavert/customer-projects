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
            list.innerHTML += `<li>You should know that your age affects your points score. Applicants aged 25 to 32 
            years old gain an extra five points compared to those who are aged 18 to 24. That means you may have a better 
            chance of succeeding if you wait to apply until after turning 25.</li>`;
        } else if (q1 == 30) {
            list.innerHTML += `<li>Your age affects your points score and --right now-- you are at the best age to apply. 
            As long as you are aged 25 to 32, you will earn an extra five points compared to those who are aged 33 to 39. 
            To ensure you get those extra points, try to apply well before your 33rd birthday.</li>`;
        } else if (q1 == 25 && q1Res == '33 to 39') {
            list.innerHTML += `<li>Your age affects your points score, but you're in a pretty good place. Applying before 
            your 32nd birthday will ensure you have the most possible age-related points. Once you turn 33, you will lose 
            10 age-related points. To avoid this risk, consider applying as soon as you reasonably can.</li>`;
        } else {
            list.innerHTML += `<li>You should know that your age affects your points score. Once you turn 45, you will no longer 
            be able to apply for a skilled-migration visa. To avoid this risk, consider applying as soon as you reasonably can.</li>`;
        }

        if (q2 == 0) {
            list.innerHTML += `<li>Your English skills are good enough to qualify for a skilled migration visa. However, they are at the 
            bottom of the range. By improving your English assessment results, you can add 10 or even 20 points to your points score.</li>`;
        } else if (q2 == 10) {
            list.innerHTML += `<li>Your English skills are good enough to qualify for a skilled migration visa. They are near the middle of 
            the range. By improving your English assessment results even further, you can add 10 more points to your points score.</li>`;
        } else {
            list.innerHTML += `<li>Congratulations! Your high-level English language skills are earning you the maximum number of language-related 
            points for your visa points score. People with worse English skills are losing 10 or 20 points compared to you.</li>`;
        }

        if (q3 == 5) {
            list.innerHTML += `<li>Congratulations! You have received an extra 5 points for doing two years of study at a CRICOS institution in Australia. 
            You are doing better than applicants who have not done that study and thus who do not receive those points.</li>`;
        } else {
            list.innerHTML += `<li>You have not done two years of study at a CRICOS institution, meaning you do not receive the extra 5 points earned by 
            applicants who have done so. Think about whether obtaining those five points is worth the effort of completing such a course of study.</li>`;
        }

        if (q4 == 5) {
            list.innerHTML += `<li>Well done! Because you have done two years of study at a CRICOS institution in a regional area, you have earned an extra 5 
            points that applicants without this experience do not get.</li>`;
        } else {
            list.innerHTML += `<li>Applicants who did their two years of study at a CRICOS institution in a regional area earn an extra 5 points. Unfortunately, 
            you havenâ€™t done that. Consider whether you can do so and if you need those points enough to make it worthwhile.</li>`;
        }

        if (q5 == 10) {
            list.innerHTML += `<li>Because you did your Masters or Doctorate in Australia and in a relevant field, you have earned 10 points that other 
            applicants don't get.</li>`;
        } else {
            list.innerHTML += `<li>People who have done a Masters or Doctorate in Australia and in a relevant field earn 10 points that other applicants don't get. 
            Consider whether this is an opportunity to earn 10 points that you would like to pursue.</li>`;
        }

        if (q6 == 20) {
            list.innerHTML += `<li>You are pretty special. Because you have a PhD, you get the highest possible number of extra points for educational qualifications. 
            That puts your score as much as 20 points higher than the scores of people without PhDs, in this category alone.</li>`;
        } else if (q6 == 15) {
            list.innerHTML += `<li>Youâ€™ve got a great degree, but could do even better. Your Bachelorâ€™s or Masterâ€™s degree gives you as much as 15 points more than other 
            applicants. But you can get even more points. By earning a PhD, you would likely get 5 additional points added to your points score. 
            Consider whether that makes sense for you.</li>`;
        } else if (q6 == 10) {
            list.innerHTML += `<li>Youâ€™ve got a good trade qualification, but you could do even better. If you also earn a Bachelorâ€™s or Masterâ€™s degree directly related 
            to your profession, you could obtain 5 extra points. It doesnâ€™t make sense for everyone, but consider whether it makes sense for you.</li>`;
        } else {
            list.innerHTML += `<li>You said you have no educational qualification, but most skilled migration applicants need one to succeed. It doesnâ€™t make sense for 
            everyone, but seriously consider whether it makes sense for you to earn a trade qualification, bachelorâ€™s or masterâ€™s degree â€”or even a PhDâ€” in your field. You can earn as many as 20 extra points by doing so.</li>`;
        }

        if (q7 == 5) {
            list.innerHTML += `<li>Well done! Your Professional Year Program has added five points to your score!</li>`;
        } else {
            list.innerHTML += `<li>Hereâ€™s an opportunity for you to earn five extra points if your field is Accounting, Engineering or ICT. By completing a Professional Year Program, you can add those five points to your score. 
            Think about whether it makes sense for you.</li>`;
        }

        if (q8 == 15) {
            list.innerHTML += `<li>Congratulations! Because you have worked at least eight of the past 10 years overseas in your nominated occupation, youâ€™ve earned the maximum number of points for this category. 
            Also be aware of the risks. If some of your experience falls back past the last 10 years, you could lose points. </li>`;
        } else if (q8 == 10) {
            list.innerHTML += `<li>Congratulations! Because you have worked five to seven of the past 10 years overseas in your nominated occupation, youâ€™ve earned 10 points in this category. 
            Remember that you can earn an extra 5 points by extending that to at least eight years. Also be aware of the risks. If some of your 
            experience falls back past the last 10 years, you could lose points. </li>`;
        } else if (q8 == 5) {
            list.innerHTML += `<li>Good job. Because you have worked three to four of the past 10 years overseas in your nominated occupation, youâ€™ve earned 10 points in this category. You have the opportunity to 
            earn an extra 5 points by extending that to at least five years. Also be aware of the risks. If some of your experience falls back past 
            the last 10 years, you could lose points. </li>`;
        } else {
            list.innerHTML += `<li>You have only worked less than three of the past 10 years overseas in your nominated occupation, so you have not gotten any points in 
            this category. But, you have an opportunity. You can earn an extra 5 points by extending that work experience to at least three years. 
            Also be aware of the risks. If some of your experience falls back past the last 10 years, you could lose points. </li>`;
        }

        if (q9 == 20) {
            list.innerHTML += `<li>Congratulations! Because you have worked at least eight of the past 10 years in Australia in your nominated occupation, youâ€™ve earned the maximum number of points for this category. 
            But remember, if some of your experience falls back past the last 10 years, you could lose points.</li>`;
        } else if (q9 == 15) {
            list.innerHTML += `<li>Well done! You have gotten more points by working in Australia in your nominated occupation for five to seven years. You can get even more points, too! You have the opportunity 
            to add five extra points to your score if you can obtain at least eight years of such employment â€” assuming everything else remains unchanged. 
            Think about whether this is possible and makes sense for you. </li>`;
        } else if (q9 == 10) {
            list.innerHTML += `<li>You say you have worked in Australia in your nominated occupation for less than five years. That gives you an opportunity to add five points to your score if you can obtain at least 
            five years of such employment â€” assuming everything else remains unchanged. Think about whether this is possible and makes sense for you.</li>`;
        } else if (q9 == 5) {
            list.innerHTML += `<li>You say you have worked in Australia in your nominated occupation for less than three years. That gives you an opportunity to add five points to your score if you can obtain at 
            least three years of such employment â€” assuming everything else remains unchanged. Think about whether this is possible and 
            makes sense for you.</li>`;
        } else {
            list.innerHTML += `<li>You say you have not worked in Australia in your nominated occupation. That gives you an opportunity to add five points to your score if you can obtain at least one 
            year of such employment. With three years of employment, you can add 10 points to your current score â€” assuming everything else 
            remains unchanged. Consider whether this is possible and makes sense for you.</li>`;
        }

        if (q10 == 5) {
            list.innerHTML += `<li>Congratulations! Credentialed translators and interpreters get extra points that other applicants donâ€™t.</li>`;
        }

        if (q11 == 10 && q11Res == 'My partner has a positive skills assessment in an occupation on the applicable list and has competent English (IELTS 6 or equivalent)') {
            list.innerHTML += `<li>This is good news. You said that your partner has a positive skills assessment. You can claim points for your partnerâ€™s skills, if their occupation is on the same occupation list as 
            yours, and if they pass a skills assessment.</li>`;
        } else if (q11 == 0) {
            list.innerHTML += `<li>Your partnerâ€™s English-language ability can help your visa application. If they can improve their English language ability to the level of â€œcompetent,â€ you can earn five extra points for your visa points score. </li>`;
        }

        if (q13 == 'More than 3 years') {
            list.innerHTML += `<li>You're in a very special situation. Because of your marriage, you are eligible for a permanent partner visa, which is an alternative to skilled migration. Consider which type of visa is best for you.</li>`;
        } else if (q13 == 'More than 2 years with children together') {
            list.innerHTML += `<li>You're in a very special situation. Because of your marriage, you are eligible for a permanent partner visa, which is an alternative to skilled migration. Consider which type of visa is best for you.</li>`;
        } else {
            list.innerHTML += `<li>Hereâ€™s some good news. Because of your marriage, you may be eligible for a temporary partner visa, which is an alternative to skilled migration. 
            A temporary partner visa can also lead to permanent residency. Consider which type of visa is best for you.</li>`;
        }

        if (q14 == 'Yes, I have held my job for less than three months.') {
            list.innerHTML += `<li>For the 491 visa, you must have been employed for at least three (3) months in Victoria. For the 190 visa, the requirement is at least six (6) months. If you intend to apply for either visa, you may want 
            to consider waiting to apply until you have hit the relevant milestone.</li>`;
        } else if (q14 == 'Yes, I have held my job for at least three but less than six months.') {
            list.innerHTML += `<li>You have sufficient continuous employment in Victoria for the 491 visa, given that the minimum required is at least three (3) months. On the other hand, 
            for the 190 visa, you must have been employed for at least six (6) months in Victoria. If you intend to apply for the 190, 
            you may want to consider waiting to apply until you have hit the six-month milestone.</li>`;
        } else {
            list.innerHTML += `<li>You have sufficient continuous employment in Victoria for either the 491 visa or the 190 visa.</li>`;
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