docReady(function() {
    // Efficiency
    const customScoreEff = parseFloat(document.getElementById('self-eff').innerText);
    const leadersEff = parseFloat(document.getElementById('leaders-eff').innerText);

    console.log(customScoreEff);
    console.log(leadersEff);

    if (customScoreEff > 0) {
        document.getElementById('self-efficiency').style.marginLeft = (customScoreEff * 139) - 139 + "px";
    }

    if (leadersEff > 0) {
        document.getElementById('leaders-efficiency').style.marginLeft = (leadersEff * 139) - 139 + "px";
    }


    // Well-being
    const customScoreWb = parseFloat(document.getElementById('self-wb').innerText);
    const leadersWb = parseFloat(document.getElementById('leaders-wb').innerText);

    console.log(customScoreWb);
    console.log(leadersWb);

    if (customScoreWb > 0) {
        document.getElementById('self-wellbeing').style.marginLeft = (customScoreWb * 139) - 139 + "px";
    }

    if (leadersWb > 0) {
        document.getElementById('leaders-wellbeing').style.marginLeft = (leadersWb * 139) - 139 + "px";
    }


    // Collaboration
    const customScoreCol = parseFloat(document.getElementById('self-col').innerText);
    const leadersCol = parseFloat(document.getElementById('leaders-col').innerText);

    console.log(customScoreCol);
    console.log(leadersCol);

    if (customScoreCol > 0) {
        document.getElementById('self-collaboration').style.marginLeft = (customScoreCol * 139) - 139 + "px";
    }

    if (leadersCol > 0) {
        document.getElementById('leaders-collaboration').style.marginLeft = (leadersCol * 139) - 139 + "px";
    }


    // Delegation
    const customScoreDel = parseFloat(document.getElementById('self-del').innerText);
    const leadersDel = parseFloat(document.getElementById('leaders-del').innerText);

    console.log(customScoreDel);
    console.log(leadersDel);

    if (customScoreDel > 0) {
        document.getElementById('self-delegation').style.marginLeft = (customScoreDel * 139) - 139 + "px";
    }

    if (leadersDel > 0) {
        document.getElementById('leaders-delegation').style.marginLeft = (leadersDel * 139) - 139 + "px";
    }


    // Performance Management
    const customScorePm = parseFloat(document.getElementById('self-pm').innerText);
    const leadersPm = parseFloat(document.getElementById('leaders-pm').innerText);

    console.log(customScorePm);
    console.log(leadersPm);

    if (customScorePm > 0) {
        document.getElementById('self-performance').style.marginLeft = (customScorePm * 139) - 139 + "px";
    }

    if (leadersPm > 0) {
        document.getElementById('leaders-performance').style.marginLeft = (leadersPm * 139) - 139 + "px";
    }


    // Engagement
    const customScoreEng = parseFloat(document.getElementById('self-eng').innerText);
    const leadersEng = parseFloat(document.getElementById('leaders-eng').innerText);

    console.log(customScoreEng);
    console.log(leadersEng);

    if (customScoreEng > 0) {
        document.getElementById('self-engagement').style.marginLeft = (customScoreEng * 139) - 139 + "px";
    }

    if (leadersEng > 0) {
        document.getElementById('leaders-engagement').style.marginLeft = (leadersEng * 139) - 139 + "px";
    }


    // Cohesion
    const customScoreCoh = parseFloat(document.getElementById('self-coh').innerText);
    const leadersCoh = parseFloat(document.getElementById('leaders-coh').innerText);

    console.log(customScoreCoh);
    console.log(leadersCoh);

    if (customScoreCoh > 0) {
        document.getElementById('self-cohesion').style.marginLeft = (customScoreCoh * 139) - 139 + "px";
    }

    if (leadersCoh > 0) {
        document.getElementById('leaders-cohesion').style.marginLeft = (leadersCoh * 139) - 139 + "px";
    }


    // Resilience
    const customScoreRes = parseFloat(document.getElementById('self-res').innerText);
    const leadersRes = parseFloat(document.getElementById('leaders-res').innerText);

    console.log(customScoreRes);
    console.log(leadersRes);

    if (customScoreRes > 0) {
        document.getElementById('self-resilience').style.marginLeft = (customScoreRes * 139) - 139 + "px";
    }

    if (leadersRes > 0) {
        document.getElementById('leaders-resilience').style.marginLeft = (leadersRes * 139) - 139 + "px";
    }

});


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