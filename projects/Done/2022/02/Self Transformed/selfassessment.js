docReady(function() {
    // ---Summary---
    let sumcollections = [];

    //get values of questions and answers
    let sumquestionsElement = document.getElementsByClassName("apptablerow-question");
    let sumanswersElement = document.getElementsByClassName("apptablerow-answer");

    for (var a = 0, sumlen = sumanswersElement.length; a < sumlen; a++) {
        let sumcollection = {
            "question": sumquestionsElement[a].textContent,
            "answer": sumanswersElement[a].textContent
        }
        sumcollections.push(sumcollection);

    }

    //sort answers to descending order
    sumcollections.sort((a, b) => parseFloat(b.answer) - parseFloat(a.answer));

    //clear the current table
    document.getElementById("top5-behaviors").innerHTML = '';
    document.getElementById("bot5-behaviors").innerHTML = '';

    //create new table for top 5
    for (var a = 0; a < 5; a++) {

        document.getElementById("top5-behaviors").innerHTML = document.getElementById("top5-behaviors").innerHTML + `
           <div class="sumtop5-items">${sumcollections[a].question}</div>
           <div class="sumtop5-items-answer">${sumcollections[a].answer}</div>
   
       `
    }

    //create new table for bot 5
    for (var a = sumcollections.length - 5; a < sumcollections.length; a++) {

        document.getElementById("bot5-behaviors").innerHTML = document.getElementById("bot5-behaviors").innerHTML + `
           <div class="sumbot5-items">${sumcollections[a].question}</div>
           <div class="sumbot5-items-answer">${sumcollections[a].answer}</div>
   
       `
    }



    // ---Appendix---
    // Arrange Appendix to Descending Order
    let appcollections = [];

    //get values of questions and answers
    let appquestionsElement = document.getElementsByClassName("apptablerow-question");
    let appanswersElement = document.getElementsByClassName("apptablerow-answer");


    for (var i = 0, len = appanswersElement.length; i < len; i++) {
        let appcollection = {
            "question": appquestionsElement[i].textContent,
            "answer": appanswersElement[i].textContent
        }
        appcollections.push(appcollection);

    }

    //sort answers to descending order
    appcollections.sort((a, b) => parseFloat(b.answer) - parseFloat(a.answer));

    //clear the current table
    document.getElementById("apptablebody").innerHTML = '';

    //create new table in order
    for (var i = 0; i < appcollections.length; i++) {

        document.getElementById("apptablebody").innerHTML = document.getElementById("apptablebody").innerHTML + `
       <div class="apptablerow">
               <div class="apptablerow-question">${appcollections[i].question}</div>
               <div class="apptablerow-answer">${appcollections[i].answer}</div>
       </div>
   `
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