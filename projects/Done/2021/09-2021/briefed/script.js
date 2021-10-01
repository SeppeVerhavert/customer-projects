/* BRIEFED report - javascript indications - 26/10/2020 - 1.0

Recommendations priority - reccomendationPriority
0 - black (most important)
1 - red
2 - orange
3 - green
4 - blue (not important)

*/

docReady(function() {

    /* DATE ON COVER PAGE */
    var today = new Date(),
        day = (today.getDate() < 10) ? "0" + today.getDate() : today.getDate(),
        month = ((today.getMonth() + 1) < 10) ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1),
        date = day + ' / ' + month + ' / ' + today.getFullYear();
    document.querySelector("#pag1 > div.answerFieldFrontCover.date").innerHTML = date;

    /* FOOTER UPDATE */
    const footer_body = document.querySelectorAll("div.footerContainerGeneral");

    for (element of footer_body) {
        element.innerHTML = "<div class=\"footer-logo\"><img src=\"https://surveyanyplace.s3.amazonaws.com/app/editor/reports/pdf/custom/briefed/Briefed_ColourLogo_cut.png \"/></div><div class=\"footerHR\"><hr></div><div class=\"iconSmallRight twitter\"> <a href=\"https://twitter.com/briefedpro\" target=\"_blank\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z\"   fill=\"  #008C99\" /></svg> </a> </div>  <div class=\"iconSmallRight linkedin\">  <a href=\"https://www.linkedin.com/company/briefedgdpr/\" target=\"_blank\">  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z\" fill=\"  #008C99\" /></svg> </a>  </div>";
    }

    /* DEFINITIONS */
    const numTextFields = 63,
        numRecs = 32,
        svgAlert = "<div class=\"alertSVG\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 246.027 246.027\" style=\"enable-background:new 0 0 246.027 246.027;\" xml:space=\"preserve\"><path d=\"M242.751,196.508L143.937,25.358c-4.367-7.564-12.189-12.081-20.924-12.081c-8.735,0-16.557,4.516-20.924,12.081  L3.276,196.508c-4.368,7.564-4.368,16.596,0,24.161s12.189,12.081,20.924,12.081h197.629c8.734,0,16.556-4.516,20.923-12.08  C247.119,213.105,247.118,204.073,242.751,196.508z M123.014,204.906c-8.672,0-15.727-7.055-15.727-15.727  c0-8.671,7.055-15.726,15.727-15.726s15.727,7.055,15.727,15.726C138.74,197.852,131.685,204.906,123.014,204.906z M138.847,137.68  c0,8.73-7.103,15.833-15.833,15.833s-15.833-7.103-15.833-15.833V65.013c0-4.142,3.358-7.5,7.5-7.5h16.667  c4.143,0,7.5,3.358,7.5,7.5V137.68z\" fill=\"white\" /></svg></div> ",
        svgFile = "<div class=\"fileSVG\"> <svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M19.757 20.171c-.791.524-1.739.829-2.757.829-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.018-.305 1.966-.829 2.757l2.829 2.829-1.414 1.414-2.829-2.829zm-7.654.829h-12.103v-20h7c1.695 1.942 2.371 3 4 3h11v7.103c-1.271-1.297-3.042-2.103-5-2.103-3.863 0-7 3.137-7 7 0 1.958.806 3.729 2.103 5zm4.897-8c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z\" fill=\"white\"/></svg></div>",
        svgBell = "<div class=\"bellSVG\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z\" fill=\"white\"/></svg> </div>",
        svgBulb = "<div class=\"bulbSVG\"> <svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M12.434 24h-.894c-.235 0-.461-.079-.616-.218l-1.187-.782h4.5l-1.188.782c-.154.139-.38.218-.615.218zm1.845-2h-4.558c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5h4.558c.276 0 .5.224.5.5 0 .277-.224.5-.5.5zm-3.054-2h-2.011c-.016-3.993-3.214-5.637-3.214-9.254 0-3.537 2.837-5.773 6.068-5.746 3.287.053 5.934 2.344 5.934 5.747 0 3.626-3.189 5.178-3.215 9.253h-2.015c.152-4.705 3.229-6.902 3.229-9.255 0-2.336-1.829-3.745-3.992-3.745-1.973 0-4.009 1.232-4.009 3.754 0 2.347 3.189 5.003 3.225 9.246zm8.514-7.229l2.699 1.224-.827 1.822-2.596-1.177c.301-.6.55-1.215.724-1.869zm-15.477 0c.173.664.415 1.261.719 1.87l-2.592 1.176-.827-1.822 2.7-1.224zm7.748-1.771h2.235l-1.133 4.51h-1.745l.638-2.51h-2.264l1.199-4.536h1.76l-.69 2.536zm10.99 0h-3.003c.021-.67-.04-1.345-.185-2h3.188v2zm-18.997 0h-3.003v-2h3.187c-.143.654-.203 1.326-.184 1.995v.005zm14.04-5.428l2.485-1.763 1.158 1.631-2.505 1.777c-.292-.582-.67-1.132-1.138-1.645zm-12.087-.001c-.46.503-.837 1.05-1.138 1.645l-2.503-1.776 1.157-1.631 2.484 1.762zm8.869-2.092l1.327-2.69 1.793.885-1.327 2.69c-.557-.367-1.161-.664-1.793-.885zm-5.651-.002c-.631.22-1.236.516-1.794.884l-1.326-2.687 1.794-.885 1.326 2.688zm3.826-.416c-.668-.078-1.309-.082-2-.003v-3.058h2v3.061z\" fill=\"white\"/></svg></div>";

    const a3 = document.querySelector("#a3"),
        a4 = document.querySelector("#a4").innerHTML.split(','),
        a4_com = document.querySelector("#a4-comments"),
        a5 = document.querySelector("#a5").innerHTML.split(','),
        a5_1 = document.querySelector("#a5-1"),
        a6a = document.querySelector("#a6a"),
        a6b = document.querySelector("#a6b"),
        a7 = document.querySelector("#a7"),
        a7_1 = document.querySelector("#a7-1"),
        a8 = document.querySelector("#a8"),
        a8_1 = document.querySelector("#a8-1"),
        a9 = document.querySelector("#a9"),
        a10 = document.querySelector("#a10"),
        a11 = document.querySelector("#a11"),
        a12 = document.querySelector("#a12"),
        a13 = document.querySelector("#a13").innerHTML.split(','),
        a14 = document.querySelector("#a14"),
        a15 = document.querySelector("#a15"),
        a16 = document.querySelector("#a16").innerHTML.split(','),
        a16_com = document.querySelector("#a16-comments"),
        a17 = document.querySelector("#a17"),
        a18x = document.querySelector("#a18x"),
        a19 = document.querySelector("#a19"),
        a19_1 = document.querySelector("#a19-1"),
        a20 = document.querySelector("#a20"),
        a21 = document.querySelector("#a21"),
        a22 = document.querySelector("#a22"),
        a23 = document.querySelector("#a23"),
        a27 = document.querySelector("#a27").innerHTML.split(','),
        a27_com = document.querySelector("#a27-comments"),
        a30 = document.querySelector("#a30"),
        a30_1 = document.querySelector("#a30-1"),
        a31 = document.querySelector("#a31"),
        a31_1 = document.querySelector("#a31-1"),
        a32 = document.querySelector("#a32"),
        a33 = document.querySelector("#a33"),
        a24 = document.querySelector("#a24"),
        a25 = document.querySelector("#a25"),
        a26 = document.querySelector("#a26"),
        a36 = document.querySelector("#a36").innerHTML.split(','),
        a34 = document.querySelector("#a34"),
        a35 = document.querySelector("#a35"),
        containerFinalReccomendations1 = document.querySelector("div.containerSquareBlocksFinal1"),
        containerFinalReccomendations2 = document.querySelector("div.containerSquareBlocksFinal2"),
        containerFinalReccomendations3 = document.querySelector("div.containerSquareBlocksFinal3");

    var i, iterator,
        textFields = [],
        reccomendationDivs = [],
        reccomendationDivsTextField = [],
        reccomendationImagesSVG = [],
        reccomendationPriority = [],
        reccomendationBlocksSummary = { //this element belongs to final rec
            "objects": []
        };

    for (i = 0; i < numTextFields; i++) {
        textFields.push(document.querySelector("#customTextField" + parseInt(i + 1)));
    }

    for (i = 0; i < numRecs; i++) {
        reccomendationDivs.push(document.querySelector("#recommedationField" + parseInt(i + 1)));
        reccomendationImagesSVG.push(document.querySelector("#recommedationField" + parseInt(i + 1) + " > div:nth-child(1)"));
        reccomendationDivsTextField.push(document.querySelector("#recommedationField" + parseInt(i + 1) + " > div.textRecommendation"));
    }

    // SQUARE BLOCKS LIST
    var blocksElements = [{
            nameCategory: 'Privacy Policy',
            priority: ''
        },

        {
            nameCategory: 'Data Processed Register',
            priority: ''
        },

        {
            nameCategory: 'Data Retention & Disposal Policy',
            priority: ''
        },

        {
            nameCategory: 'Data Retention &amp; Disposal Register',
            priority: ''
        },

        {
            nameCategory: 'Data Security Policy',
            priority: ''
        },

        {
            nameCategory: 'Data Protection Policy',
            priority: ''
        },

        {
            nameCategory: 'Remote Working Policy',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Chambers',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - IT Support',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Pupils',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Contractors',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Other legal Professionals',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Typists',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Third Party Suppliers',
            priority: ''
        },

        {
            nameCategory: 'Data Sharing Agreements - Other',
            priority: ''
        },

        {
            nameCategory: 'Third Party Data Sharing Register',
            priority: ''
        },

        {
            nameCategory: 'Subject Access Request Policy',
            priority: ''
        },

        {
            nameCategory: 'Crisis Management Plan',
            priority: ''
        },

        {
            nameCategory: 'Near-Miss Register',
            priority: ''
        },

        {
            nameCategory: 'Data Breach Register',
            priority: ''
        },

        {
            nameCategory: 'Data Protection Training Register',
            priority: ''
        },

        {
            nameCategory: 'IT Register',
            priority: ''
        }

    ];

    /* A3 - ICO CHECK + ICO REGISTRATION ON COVER PAGE */
    const icoTextField = document.querySelector("#icoRegistrationTextField");
    //textFields[0].innerHTML = "";

    switch (a3.innerHTML) {
        //a3a
        case 'Yes':
            // display ICO number on cover page
            a3.style.display = "block";

            // modify text field for a3
            //textFields[0].innerHTML = "It is commendable that your practice has been registered with the ICO. It is important to document your registration number and to note that the registration should be reviewed annually."

            // modify reccomendation text for a3
            //reccomendationDivsTextField[0].innerHTML = "<b>Recommendation:</b><br>Ensure that you diarise your renewal date for registration with the ICO annually.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[0].classList.add("greenRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[0].innerHTML = svgFile;

            // push reccomendation priority
            reccomendationPriority.push('3');

            reccomendationBlocksSummary["objects"].push({
                "priority": "3",
                "text": "<b>Recommendation:</b><br>Ensure that you diarise your renewal date for registration with the ICO annually."
            });

            break;

            //a3b
        case 'In progress':
            // hide ICO number and field from cover page
            a3.style.display = "none";
            icoTextField.style.display = "none";

            // modify text field for a3
            //textFields[0].innerHTML = "While you have confirmed that your registration with the ICO is in progress, your practice will still be exposed to risk. It is advisable to complete your registration with the ICO as soon as possible to avoid any sanction. Further information on how to register with the ICO can be found <a href=\"https://ico.org.uk/registration/new\">here</a>. <br><br>It is important to note that your ICO registration needs to be renewed annually."

            // remove reccomendation for a3
            //reccomendationDivs[0].style.display = "none";

            break;

            //a3c
        case 'No':
            // hide ICO number and field from cover page
            a3.style.display = "none";
            icoTextField.style.display = "none";

            // modify text field for a3
            //textFields[0].innerHTML = "You have not yet registered with the ICO, which presents is as an <b>URGENT RISK</b> that needs action to be taken promptly. You must register with the ICO as a matter of urgency to avoid any sanctions. Further information on how to register with the ICO can be found <a href=\"https://ico.org.uk/registration/new\">here</a>.<br><br>It is important to note that your ICO registration needs to be renewed annually."


            // modify reccomendation text for a3
            //reccomendationDivsTextField[0].innerHTML = "<b>Recommendation:</b><br>Complete your registration with the ICO immediately and document the registration number.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[0].classList.add("redRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[0].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>Complete your registration with the ICO immediately and document the registration number."
            });

            break;


    }


    /* A4 - Within your practice please select those whose information you process? */
    iterator = 0;
    textFields[1].innerHTML = '';
    for (element of a4) {
        if (a4[iterator] == 'Other:') {
            textFields[1].innerHTML += '<ul class="greenList"><li>' + a4_com.innerHTML + '</li></ul>';
            if (a4_com.innerHTML == "") {
                textFields[1].innerHTML = '';
            }
        } else {
            textFields[1].innerHTML += '<ul class="greenList"><li>' + a4[iterator] + '</li></ul>';
        }
        iterator++;
    }

    /* A5 - Please select the type of information you are processing within your practice? */
    iterator = 0;
    textFields[2].innerHTML = '';
    textFields[3].innerHTML = '';
    textFields[4].innerHTML = '';
    const criminal_conviction_section = document.querySelector("#criminal-conviction-section"),
        criminal_conviction_reccomendation_div = document.querySelector("#recommedationFieldPg8-2"),
        criminal_conviction_reccomendation_text = document.querySelector("#recommedationFieldPg8-2 > div.textRecommendation"),
        criminal_conviction_reccomendation_SVG = document.querySelector("#recommedationFieldPg8-2 > div:nth-child(1)");

    criminal_conviction_section.innerHTML = "";
    reccomendationDivs[2].classList.add("hidden");

    for (element of a5) {

        switch (element) {
            case 'Name &amp; address':
            case 'Telephone number':
            case 'Email address':
            case 'Family or next of kin details':
            case 'Bank details':
                textFields[2].innerHTML += '<ul class="greenList"><li>' + a5[iterator] + '</li></ul>';
                break;

            case 'Race/ethnicity':
            case 'Religion':
            case 'Political affiliation':
            case 'Sexual orientation':
            case 'Health information':
                textFields[3].innerHTML += '<ul class="greenList"><li>' + a5[iterator] + '</li></ul>';
                break;

            case 'Criminal convictions':
                textFields[3].innerHTML += '<ul class="greenList"><li>' + a5[iterator] + '</li></ul>';

                criminal_conviction_section.innerHTML = "<div class=\"generalTitle medium\"> Processing Criminal Conviction Information </div><div class=\"lineUnderTitleGeneral green\"></div> <div class=\"bodyText\">You have advised that in your practice you process personal data relating to criminal convictions. Where this is the case you will need to consider an applicable and relevant exemption under the Data Protection Act 2018. Schedule 1 Part 3 s 33 outlines that such conditions are met where you are processing data in connection with legal proceedings, or in establishing, exercising or defending legal rights and can evidence this in supporting documentation such as a Data Processed Register or privacy notice.</div>"


                break;

            default:
        }

        iterator++;
    }

    /* A5.1 - Processing of special category or criminal conviction data is prohibited, unless there is an applicable and relevant exemption within the Data Protection Act and/or GDPR. Have you considered and documented the special category exemptions? */

    switch (a5_1.innerHTML) {

        //a5.1a
        case 'Yes':

            // modify text field a5_1
            textFields[6].innerHTML = 'You have indicated that you have considered and documented the relevant exemptions.';

            // modify reccomendation text for a5.1
            criminal_conviction_reccomendation_text.innerHTML = "<b>Recommendation:</b><br>Ensure that you monitor and review all special category and criminal offence data processing to ensure the relevant special category exemptions are documented within the privacy notice and Data Processed Register.";

            // add class with custom bg-color to reccomendation
            criminal_conviction_reccomendation_div.classList.add("greenRec");

            // add SVG to reccomendation
            criminal_conviction_reccomendation_SVG.innerHTML = svgFile;

            // push reccomendation priority
            reccomendationPriority.push('3');

            reccomendationBlocksSummary["objects"].push({
                "priority": "3",
                "text": "<b>Recommendation:</b><br>Ensure that you monitor and review all special category and criminal offence data processing to ensure the relevant special category exemptions are documented within the privacy notice and Data Processed Register."
            });

            break;

            //a5.1b
        case 'No':

            // modify text field a5_1
            textFields[6].innerHTML = 'You have indicated that you have not yet considered and documented the relevant exemptions which permit you to process this type of data. Failure to do so means processing such data is unlawful and you must remedy this immediately.';

            // modify reccomendation text for a5.1
            criminal_conviction_reccomendation_text.innerHTML = "<b>Recommendation:</b><br>You should immediately consider and document the relevant exemptions which may enable you to process special category and criminal offence data lawfully.";

            // add class with custom bg-color to reccomendation
            criminal_conviction_reccomendation_div.classList.add("redRec");

            // add SVG to reccomendation
            criminal_conviction_reccomendation_SVG.innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>You should immediately consider and document the relevant exemptions which may enable you to process special category and criminal offence data lawfully."
            });

            break;

            //a5.1c
        case 'In progress':

            // modify text field a5_1
            textFields[6].innerHTML = 'You have indicated that you have not finalised the relevant exemptions which permit you to process this type of data. Failure to do so means processing such data is unlawful and you must remedy this immediately.';

            // modify reccomendation text for a5.1
            criminal_conviction_reccomendation_text.innerHTML = "<b>Recommendation:</b><br>You should immediately consider and document the relevant exemptions which may enable you to process special category and criminal offence data lawfully.";

            // add class with custom bg-color to reccomendation
            criminal_conviction_reccomendation_div.classList.add("redRec");

            // add SVG to reccomendation
            criminal_conviction_reccomendation_SVG.innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>You should immediately consider and document the relevant exemptions which may enable you to process special category and criminal offence data lawfully."
            });
            break;

        default:
    }

    /* A6.a - Under GDPR you are obligated to document the types of data you are processing, the purpose to which you process data, which is often likely to be for the provision of legal services. This is typically referred to as a Data Processed Register. Do you currently have a Data Processed Register within your practice? */
    //const a6a_extra_TextField = document.querySelector("#customTextFieldExtraPag7");
    //a6a_extra_TextField.innerHTML = " ";

    switch (a6a.innerHTML) {
        case 'Yes':

            // modify text field
            // a6a_extra_TextField.innerHTML = "You have already drafted a Data Processed Register and will need to ensure that it contains key information which is referred to throughout this report."

            // remove reccomendation
            //reccomendationDivs[3].classList.add("hidden");

            // structure blocksElements creation
            blocksElements[1].priority = "1";

            break;

        case 'In progress':
        case 'No':

            // modify text field
            //a6a_extra_TextField.innerHTML = "You do not yet have a Data Processed Register in place and will need to remedy this as you are obligated under GDPR to document specific information relating to your processing activities."

            // modify reccomendation text for a3
            //reccomendationDivsTextField[3].innerHTML = "<b>Recommendation URGENT:</b><br>Draft and complete the Data Processed Register.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[3].classList.add("blackRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[3].innerHTML = svgBulb;

            // push reccomendation priority
            reccomendationPriority.push('0');

            reccomendationBlocksSummary["objects"].push({
                "priority": "0",
                "text": "<b>Recommendation URGENT: </b><br>Draft and complete the Data Processed Register."
            });

            // structure blocksElements creation
            blocksElements[1].priority = "2";

            break;

    }

    /* A6.b - Have you considered and documented your lawful basis for processing personal data?*/
    textFields[5].innerHTML = "";

    switch (a6b.innerHTML) {
        case 'Yes':

            // modify text field
            textFields[5].innerHTML = "You have already considered and documented your lawful basis for the processing of personal data within your practice. <br><br>It is also worth noting, where you process any special category data and criminal conviction data as part of your practice, you will have to ensure you i) have a lawful basis and ii) can rely upon one of the exemptions set out in the data protection legislation, in order to do so.";

            // add custom class - hide rec
            reccomendationDivs[5].classList.add("hidden");

            break;

        case 'In progress':

            // modify text field
            textFields[5].innerHTML = "In order to lawfully process personal data within your practice you must have a lawful basis for doing so and must record your processing activities. Failure to do so is in breach of data protection legislation and it is vital this that you complete the documentation of your lawful basis for all your data processing records IMMEDIATELY.";

            // modify reccomendation text for a3
            reccomendationDivsTextField[5].innerHTML = "<b>Recommendation:</b><br>Complete and document your lawful basis within your Data Processed Register and privacy policy.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[5].classList.add("redRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[5].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>Complete and document your lawful basis within your Data Processed Register and privacy policy."
            });

            break;

        case 'No':

            // modify text field
            textFields[5].innerHTML = "In order to lawfully process personal data within your practice you must have a lawful basis for doing so and must record your processing activities. Failure to do so is in breach of data protection legislation. Given you are processing data without a documented lawful basis, this presents itself as an <b>URGENT PRIORITY RISK</b> which must be rectified IMMEDIATELY.";

            // modify reccomendation text for a3
            reccomendationDivsTextField[5].innerHTML = "<b>Recommendation URGENT:</b><br>Consider and document your lawful basis within your Data Processed Register and privacy policy.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[5].classList.add("blackRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[5].innerHTML = svgBulb;

            // push reccomendation priority
            reccomendationPriority.push('0');

            reccomendationBlocksSummary["objects"].push({
                "priority": "0",
                "text": "<b>Recommendation URGENT:</b><br>Consider and document your lawful basis within your Data Processed Register and privacy policy."
            });

            break;

    }

    /* A7 - A Privacy Policy or Notice contains information about what personal data you process, why, the lawful basis, who you share it with and how long you retain it in additional to other information. Do you currently have a privacy policy? */
    //textFields[8].innerHTML = "";


    switch (a7.innerHTML) {
        case 'Yes':
            if (a7_1.innerHTML == 'Yes') {
                //textFields[8].innerHTML = "Having a completed and accessible privacy policy demonstrates your compliance with the GDPR principles of transparency and accountability.<br><br>It is worth noting that your privacy policy should be reviewed annually or when you have made any substantive changes to your processing activities or to reflect any legislative amendments. Any revised changes to your privacy policy should be updated on your chambers website.";

                // modify reccomendation text
                //reccomendationDivsTextField[6].innerHTML = "<b>Recommendation:</b><br>Review and amend your privacy policy annually to reflect substantive changes to how you process personal data.";

                // add class with custom bg-color to reccomendation
                //reccomendationDivs[6].classList.add("greenRec");

                // add SVG to reccomendation
                //reccomendationImagesSVG[6].innerHTML = svgFile;

                // push reccomendation priority
                reccomendationPriority.push('3');

                // structure blocksElements creation
                blocksElements[0].priority = "1";

                reccomendationBlocksSummary["objects"].push({
                    "priority": "3",
                    "text": "<b>Recommendation:</b><br>Review and amend your privacy policy annually to reflect substantive changes to how you process personal data."
                });

            } else if (a7_1.innerHTML == 'No') {
                //textFields[8].innerHTML = "While it is commendable that you have completed a privacy policy, you have failed to make it accessible to your data subjects in breach of the GDPR principles of transparency and accountability.<br><br>Having an inaccessible privacy policy presents itself as a risk that requires action to be taken urgently.<br><br>Once you have implemented a privacy policy, you must ensure it is accessible to your data subjects; this may be achieved by having it published on your chambers website under your individual profile.<br><br>It is worth noting that your privacy policy should be reviewed annually or when you have made any substantive changes to your processing activities or to reflect any legislative amendments. Any revised changes to your privacy policy should be updated on your chambers website.";

                // modify reccomendation text
                //reccomendationDivsTextField[6].innerHTML = "<b>Recommendation:</b><br>Immediately publish your privacy policy so it is accessible to your clients and mark it for review annually to reflect any data processing changes.";

                // add class with custom bg-color to reccomendation
                //reccomendationDivs[6].classList.add("redRec");

                // add SVG to reccomendation
                //reccomendationImagesSVG[6].innerHTML = svgAlert;

                // push reccomendation priority
                reccomendationPriority.push('1');

                // structure blocksElements creation
                blocksElements[0].priority = "1";

                reccomendationBlocksSummary["objects"].push({
                    "priority": "1",
                    "text": "<b>Recommendation:</b><br>Immediately publish your privacy policy so it is accessible to your clients and mark it for review annually to reflect any data processing changes."
                });

            }


            break;

            // a7b
        case 'In draft format':

            //textFields[8].innerHTML = "As you do not have a completed or accessible privacy policy which is available to your clients, it is difficult to evidence compliance with the GDPR principles of transparency and accountability.<br><br>We strongly advise you to complete and implement your privacy policy as soon as possible and publish it on your chambers website under your individual profile.<br><br>It is worth noting that your privacy policy should be reviewed annually or when you have made any substantive changes to your processing activities or to reflect any legislative amendments. Any revised changes to your privacy policy should be updated on your chambers website.";

            // modify reccomendation text
            //reccomendationDivsTextField[6].innerHTML = "<b>Recommendation URGENT:</b><br>Complete your privacy policy immediately and ensure it is accessible to your data subjects.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[6].classList.add("blackRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[6].innerHTML = svgBulb;

            // push reccomendation priority
            reccomendationPriority.push('0');

            // structure blocksElements creation
            blocksElements[0].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "0",
                "text": "<b>Recommendation URGENT:</b><br>Complete your privacy policy immediately and ensure it is accessible to your data subjects."
            });

            break;

            // a7c
        case 'No':

            // textFields[8].innerHTML = "Your failure to have a privacy policy available to your data subjects presents itself as an URGENT RISK that your practice needs to urgently address. Without a completed or accessible privacy policy which is easily available to your clients, it is difficult to evidence compliance with the GDPR principles of transparency and accountability.<br><br>We strongly advise you to complete and implement your privacy policy as soon as possible and ensure it is accessible to your data subjects, by having it published on your chambers website under your individual profile.<br><br>It is worth noting that your privacy policy should be reviewed annually or when you have made any substantive changes to your processing activities or to reflect any legislative amendments. Any revised changes to your privacy policy should be updated on your chambers website.â€™";

            // modify reccomendation text
            //reccomendationDivsTextField[6].innerHTML = "<b>Recommendation URGENT:</b><br>Complete your privacy policy immediately and ensure it is accessible to your data subjects.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[6].classList.add("blackRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[6].innerHTML = svgBulb;

            // push reccomendation priority
            reccomendationPriority.push('0');

            // structure blocksElements creation
            blocksElements[0].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "0",
                "text": "<b>Recommendation URGENT:</b><br>Complete your privacy policy immediately and ensure it is accessible to your data subjects."
            });

            break;

    }


    /* A8 - Does your Chambers carry out any marketing on your behalf, for example make any submissions to a legal directory? */
    /* includes a8.1 */
    //textFields[12].innerHTML = '';

    switch (a8.innerHTML) {

        case 'Yes':

            if (a8_1.innerHTML = "Yes") {

                // modify text field content
                //textFields[12].innerHTML = 'As you have recorded marketing activity within your privacy notice, you are being transparent with clients and others in compliance with the GDPR.';

                // add custom class
                //reccomendationDivs[8].classList.add("hidden");

            } else if (a8_1.innerHTML = "No") {

                // modify text field content
                //textFields[12].innerHTML = 'As you use personal information pertaining to clients for directory submissions, you will need to amend your privacy policy to reflect that you will be processing their personal data for marketing purposes. Failure to do so is a breach of transparency requirements under GDPR. Once your privacy policy has been amended, it is important that any revised version is updated on your chambers website.';

                // modify reccomendation text
                //reccomendationDivsTextField[8].innerHTML = "<b>Recommendation:</b><br>Review your privacy policy to include specifics of marketing activity involving personal data.";

                // add class with custom bg-color to reccomendation
                //reccomendationDivs[8].classList.add("orangeRec");

                // add SVG to reccomendation
                //reccomendationImagesSVG[8].innerHTML = svgBell;

                // push reccomendation priority
                reccomendationPriority.push('2');

                reccomendationBlocksSummary["objects"].push({
                    "priority": "2",
                    "text": "<b>Recommendation:</b><br>Review your privacy policy to include specifics of marketing activity involving personal data."
                });
            }

            break;

        case 'No':

            // modify text field content
            //textFields[12].innerHTML = '';

            // add custom class
            //reccomendationDivs[8].classList.add("hidden");

            break;

        default:
    }


    /* A9 - Do you agree or disagree with the following statement? I am mindful of my obligations under the purpose limitation principle. */
    //textFields[13].innerHTML = '';

    switch (a9.innerHTML) {

        case 'Yes':

            // modify text field content
            //textFields[13].innerHTML = 'While you are confident that you are processing personal data only for the stipulated purposes, it is important to keep this under close review.';

            // add custom class
            //reccomendationDivs[9].classList.add("hidden");

            break;

        case 'Not sure':

            // modify text field content
            //textFields[13].innerHTML = 'As you are unsure as to whether or not you are processing personal data for your stipulated purposes, you will need to urgently consider your processing activities. Where you determine that you are processing data for any other purpose, you will need to halt such processing activity as this amounts to a breach of GDPR and may lead to administrative fines from the ICO.';

            // modify reccomendation text
            //reccomendationDivsTextField[9].innerHTML = "<b>Recommendation:</b><br>Review the purposes of all your processing activity and ensure they are accurately recorded in the relevant documents.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[9].classList.add("orangeRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[9].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Review the purposes of all your processing activity and ensure they are accurately recorded in the relevant documents."
            });

            break;

        case 'No':

            // modify text field content
            //textFields[13].innerHTML = 'As you have determined that you are processing personal data for purposes, other than your stipulated purposes you will need to urgently consider your processing activities. You will need to halt such processing activity as this amounts to a breach of GDPR and may lead to administrative fines from the ICO.';

            // modify reccomendation text
            //reccomendationDivsTextField[9].innerHTML = "<b>Recommendation:</b><br>Only process personal data for your stipulated purposes.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[9].classList.add("redRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[9].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>Only process personal data for your stipulated purposes."
            });

            break;

        default:
    }


    /* A10 - Are you confident that you are processing personal data in accordance with the data minimisation principle? */
    //textFields[14].innerHTML = '';

    switch (a10.innerHTML) {

        case 'Yes':

            // modify text field content
            //textFields[14].innerHTML = 'You have indicated that you are confident you are adhering to the data minimisation principle and are only processing personal data that is adequate, relevant and limited to what is necessary.';

            // add custom class
            //reccomendationDivs[10].classList.add("hidden");

            break;

        case 'Not sure':
        case 'No':

            // modify text field content
            //textFields[14].innerHTML = 'To comply with the data minimisation principle you must ensure the personal data you are processing is; adequate, relevant and limited to what is necessary.';

            // modify reccomendation text
            //reccomendationDivsTextField[10].innerHTML = "<b>Recommendation:</b><br>Ensure the personal data you are processing is adequate, relevant and limited to what is necessary.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[10].classList.add("orangeRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[10].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Ensure the personal data you are processing is adequate, relevant and limited to what is necessary."
            });

            break;

        default:
    }


    /* A11 - Do you take any steps to verify the accuracy of personal data that you are processing? */
    //textFields[15].innerHTML = '';

    switch (a11.innerHTML) {

        case 'Yes':

            // modify text field content
            //textFields[15].innerHTML = 'As a practising barrister, you are subject to your client\'s expectation that the information you are processing about them is accurate. You are confident that you are taking steps to verify the accuracy of data in compliance with the legislation.';

            // add custom class
            //reccomendationDivs[11].classList.add("hidden");

            break;

        case 'No':

            // modify text field content
            //textFields[15].innerHTML = 'No client would wish or expect that you as their barrister are processing inaccurate information about them. You will need to build in steps to verify that the information you are processing is accurate.';

            // modify reccomendation text
            //reccomendationDivsTextField[11].innerHTML = "<b>Recommendation:</b><br>Take steps to ensure the accuracy of the personal data you are processing.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[11].classList.add("orangeRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[11].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Take steps to ensure the accuracy of the personal data you are processing."
            });

            break;

        default:
    }


    /* A12 - Do you have a data retention and disposal policy in place? */
    //textFields[16].innerHTML = '';

    switch (a12.innerHTML) {

        case 'Yes':

            // modify text field content
            //textFields[16].innerHTML = 'You already have a data retention policy, satisfying a key requirement for demonstrating compliance with data protection legislation. Your retention policy provides you with a set of metrics against which you elect to securely dispose of personal data.';

            // add custom class
            //reccomendationDivs[12].classList.add("hidden");

            // structure blocksElements creation
            blocksElements[2].priority = "1";

            break;

        case 'In progress':
        case 'No':

            // modify text field content
            //textFields[16].innerHTML = 'As you do not have a completed data retention policy, you have no metric against which to make decisions about safely discarding personal data when it is no longer required by your practice. You will also be unable to demonstrate your compliance with your GDPR obligations to retain data only for as long as is required for the stated purpose.';

            // modify reccomendation text
            //reccomendationDivsTextField[12].innerHTML = "<b>Recommendation:</b><br>You should immediately complete a data retention policy & schedule.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[12].classList.add("redRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[12].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            // structure blocksElements creation
            blocksElements[2].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>You should immediately complete a data retention policy & schedule."
            });

            break;

        default:
    }

    /* A13 - Deciding how long to retain personal data is difficult and there may be several factors which you rely upon to determine this. What factors do you consider when deciding how long you retain personal information. */
    textFields[17].innerHTML = '';

    iterator = 0;
    for (element of a13) {
        textFields[17].innerHTML += '<ul class="greenList"><li>' + a13[iterator] + '</li></ul>';
        iterator++;
    }

    /* non selected answers */
    const unselectedAnswers_a13 = document.querySelector("#customUnselectedA13");
    unselectedAnswers_a13.innerHTML = "";

    let a13_allAnswersList = ["Ongoing provision of legal services", "Compliance with regulatory obligations", "Bar Council guidance", "Bar Mutual Indemnity Fund requirements", "Statute of limitation", "Appeals and Complaints", "Professional negligence actions", "Contractual obligations"],
        a13_selectedCopy = a13,
        a13_difference = a13_allAnswersList.filter(x => !a13_selectedCopy.includes(x));

    iterator = 0;
    if (a13_difference != "") {
        for (element of a13_difference) {
            unselectedAnswers_a13.innerHTML += '<ul class="greenList"><li>' + a13_difference[iterator] + '</li></ul>';
            iterator++;
        }
    }

    /* A14 - At least annually, do you conduct a â€˜data cleanseâ€™ and dispose of personal data that are no longer required in accordance with your policy where you have one? */
    //textFields[18].innerHTML = "";

    switch (a14.innerHTML) {

        case 'Yes':

            // modify text field content
            //textFields[18].innerHTML = 'By completing an annual audit and data cleanse in compliance with your policy, you are demonstrating best practice for ensuring data management and compliance with the GDPR. Failure to do so renders the retention policy meaningless as data disposal actions are continually missed.';

            // modify reccomendation text
            //reccomendationDivsTextField[13].innerHTML = "<b>Recommendation:</b><br>Ensure that you continually audit your data retention policy and adhere to the requirements to dispose of data securely. ";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[13].classList.add("greenRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[13].innerHTML = svgFile;

            // push reccomendation priority
            reccomendationPriority.push('3');

            reccomendationBlocksSummary["objects"].push({
                "priority": "3",
                "text": "<b>Recommendation:</b><br>Ensure that you continually audit and adhere to the data retention policy."
            });

            break;

        case 'In progress':

            // modify text field content
            //textFields[18].innerHTML = 'You need to actively monitor your data retention policy,  and ensure that you review and action your disposal actions in accordance it.';

            // modify reccomendation text
            //reccomendationDivsTextField[13].innerHTML = "<b>Recommendation:</b><br>Ensure that you continually audit and take steps to complete all data disposal actions in accordance with the the data retention policy.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[13].classList.add("orangeRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[13].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Ensure that you continually audit and adhere to the data retention policy."
            });

            break;

        case 'No':

            // modify text field content
            //textFields[18].innerHTML = 'You need to actively monitor how long you retain personal data within your practice and take steps to securely dispose of data where it is no longer required. This should be formalised with a data retetention policy which is regularly audited to ensure you are complying with it.';

            // modify reccomendation text
            //reccomendationDivsTextField[13].innerHTML = "<b>Recommendation:</b><br>You should immediately start to audit your data retention policy to ensure all data disposal requirements are actioned and review this continually.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[13].classList.add("redRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[13].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>You should immediately start to audit and take steps to dispose of data which is no longer required and review this continually."
            });

            break;

        default:
    }

    /* A14 - At least annually, do you conduct a â€˜data cleanseâ€™ and dispose of personal data that are no longer required in accordance with your policy where you have one? */
    textFields[19].innerHTML = "";

    switch (a15.innerHTML) {

        case 'Less than 3 months':

            // modify text field content
            textFields[19].innerHTML = 'Your practice of managing your inbox content and retaining emails for less than 3 months is evidence of good practice and data security and is indicative of robust data protection management. Limiting emails in your inbox will also assist you in managing subject access requests. Your data retention and disposal policy should stipulate how long you retain emails and you should strictly adhere to this.';

            // add custom class
            reccomendationDivs[14].classList.add("hidden");

            break;

        case 'Less than 1 year':

            // modify text field content
            textFields[19].innerHTML = 'You are currently retaining emails in your inbox for up to a year, which is fraught with risk. In the event of cyber-crime activity or a lost or stolen mobile device which hasn\'t been encrypted, the ongoing retention of emails needlessly exposes your practice to increased risk of a data breach. It will also unnecessarily complicate the management of subject access requests. You should document how long you retain emails within the data retention and disposal policy and should strictly adhere to this.';

            // modify reccomendation text
            reccomendationDivsTextField[14].innerHTML = "<b>Recommendation:</b><br>Create a practice of cleansing your email inbox and ensure this is reviewed regularly and at least every 3 months.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[14].classList.add("orangeRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[14].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Create a practice of cleansing your email inbox and ensure this is reviewed regularly and at least every 3 months."
            });

            break;

        case 'Indefinite':

            // modify text field content
            textFields[19].innerHTML = 'Your practice of retaining emails in your inbox indefinitely constitutes a failure to take appropriate security measures in breach of GDPR and is fraught with risk. In the event of cyber-crime activity or a lost or stolen mobile device which hasn\'t been encrypted, the ongoing retention of emails needlessly exposes your practice to increased risk of a data breach. It will also unnecessarily complicate the management of subject access requests. Your data retention and disposal policy should stipulate how long you retain emails and you should strictly adhere to this.';

            // modify reccomendation text
            reccomendationDivsTextField[14].innerHTML = "<b>Recommendation:</b><br>Create a practice of cleansing your email inbox and ensure this is reviewed regularly and at least every 3 months.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[14].classList.add("redRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[14].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>Create a practice of cleansing your email inbox and ensure this is reviewed regularly and at least every 3 months."
            });

            break;

        default:
    }

    /* A16 - How do you dispose of personal data when it is no longer required? Select all that apply. */
    textFields[20].innerHTML = "";
    textFields[21].innerHTML = "";
    textFields[22].innerHTML = "";

    iterator = 0;
    for (element of a16) {
        if (a16[iterator] == 'Other:') {
            textFields[20].innerHTML += '<ul class="greenList"><li>' + a16_com.innerHTML + '</li></ul>';
            if (a16_com.innerHTML == "") {
                textFields[20].innerHTML = '';
            }
        } else if (a16[iterator] == 'General waste') {
            textFields[20].innerHTML += '<ul class="greenList"><li>' + a16[iterator] + '</li></ul>';
            textFields[22].innerHTML = '<br>You have indicated that you use general waste to dispose of documents containing your clients\' personal data. This significantly increases the risk of a data breach and is poor management of personal data. This should be rectified immediately and best practices such as secure shredding or certified destruction of hard drives, depending on the data type, should be implemented immediately.';
        } else {
            textFields[20].innerHTML += '<ul class="greenList"><li>' + a16[iterator] + '</li></ul>';
        }
        iterator++;
    }

    /* non selected answers */
    let a16_allAnswersList = ["Certified destruction of hard drives", "Secure shredding/certified confidential shredding", "Desk-top shredding", "General waste", "Email deletion", "Cloud storage deletion"],
        a16_selectedCopy = a16,
        a16_difference = a16_allAnswersList.filter(x => !a16_selectedCopy.includes(x));

    iterator = 0;
    if (a16_difference != "") {
        for (element of a16_difference) {
            textFields[21].innerHTML += '<ul class="greenList"><li>' + a16_difference[iterator] + '</li></ul>';
            iterator++;
        }
    } else {
        textFields[21].innerHTML = "<br>";
    }


    /* A17 - Do you have a data security policy which documents all the technical, administrative, and physical safeguards you have in place for personal data? */
    switch (a17.innerHTML) {
        case 'Yes':

            // modify text field
            //textFields[23].innerHTML = "You already have a data security policy in place, and it is important that it is reflective of your practice and the technical, administrative and physical security measures you have at your disposal. Your security policy also evidences your compliance with the security principles within GDPR in the event of an audit conducted by the regulator or a data breach investigation.";

            // add custom class
            //reccomendationDivs[15].classList.add("hidden");

            // structure blocksElements creation
            blocksElements[4].priority = "1";

            break;

        case 'In progress':

            // modify text field
            //textFields[23].innerHTML = "As you do not have a robust data security policy in place, you should take immediate steps to address this. This policy should be reflective of your practice and the technical, administrative and physical security measures you have at your disposal. Failure to document your security processes will make it difficult to demonstrate your compliance with the security principles within GDPR in the event of an audit conducted by the regulator or a data breach investigation.";

            // modify reccomendation text for a3
            //reccomendationDivsTextField[15].innerHTML = "<b>Recommendation:</b><br>Ensure that you complete and implement your data security policy.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[15].classList.add("orangeRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[15].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            // structure blocksElements creation
            blocksElements[4].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Ensure that you complete and implement your data security policy."
            });

            break;

        case 'No':

            // modify text field
            //textFields[23].innerHTML = "As you do not have a robust data security policy in place, you should take immediate steps to address this. This policy should be reflective of your practice and the technical, administrative and physical security measures you have at your disposal. Failure to document your security processes will make it difficult to demonstrate your compliance with the security principles within GDPR in the event of an audit conducted by the regulator or a data breach investigation.";

            // modify reccomendation text for a3
            //reccomendationDivsTextField[15].innerHTML = "<b>Recommendation:</b><br>Ensure that you document your data security measures within a data security policy immediately.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[15].classList.add("redRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[15].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            // structure blocksElements creation
            blocksElements[4].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>Ensure that you document your data security measures within a data security policy immediately."
            });

            break;

    }

    // PRINCIPLE 6 INTEGRITY AND CONFIDENTIALITY
    let integrity_answers_texts = [],
        integrity_answers_values = [],
        work_home_categories = [],
        work_chambers_categories = [],
        work_travelling_categories = [];

    const integrity_answers_divs = [
        [document.querySelector("#a18a-text"), document.querySelector("#a18a")],
        [document.querySelector("#a18b-text"), document.querySelector("#a18b")],
        [document.querySelector("#a18c-text"), document.querySelector("#a18c")],
        [document.querySelector("#a18d-text"), document.querySelector("#a18d")],
        [document.querySelector("#a18e-text"), document.querySelector("#a18e")],
        [document.querySelector("#a18f-text"), document.querySelector("#a18f")],
        [document.querySelector("#a18g-text"), document.querySelector("#a18g")],
        [document.querySelector("#a18h-text"), document.querySelector("#a18h")],
        [document.querySelector("#a18i-text"), document.querySelector("#a18i")],
        [document.querySelector("#a18j-text"), document.querySelector("#a18j")],
        [document.querySelector("#a18k-text"), document.querySelector("#a18k")],
        [document.querySelector("#a18l-text"), document.querySelector("#a18l")],
        [document.querySelector("#a18m-text"), document.querySelector("#a18m")],
        [document.querySelector("#a18n-text"), document.querySelector("#a18n")],
        [document.querySelector("#a18o-text"), document.querySelector("#a18o")],
        [document.querySelector("#a18p-text"), document.querySelector("#a18p")],
        [document.querySelector("#a18q-text"), document.querySelector("#a18q")],
        [document.querySelector("#a18r-text"), document.querySelector("#a18r")],
        [document.querySelector("#a18s-text"), document.querySelector("#a18s")],
        [document.querySelector("#a18t-text"), document.querySelector("#a18t")]
    ];
    const comm_a18 = document.querySelector("#a18_com");


    for (iterator = 0; iterator < integrity_answers_divs.length; iterator++) {
        integrity_answers_texts[iterator] = integrity_answers_divs[iterator][0].innerHTML;
        integrity_answers_values[iterator] = integrity_answers_divs[iterator][1].innerHTML.split(',');
    }

    for (iterator = 0; iterator < integrity_answers_divs.length; iterator++) {
        if (integrity_answers_values[iterator].includes("Chambers")) {
            work_chambers_categories.push(integrity_answers_texts[iterator]);
        }
        if (integrity_answers_values[iterator].includes("Home Office")) {
            work_home_categories.push(integrity_answers_texts[iterator]);
        }
        if (integrity_answers_values[iterator].includes("Whilst Travelling")) {
            work_travelling_categories.push(integrity_answers_texts[iterator]);
        }
    }

    textFields[24].innerHTML = "";
    textFields[26].innerHTML = "";
    textFields[29].innerHTML = "";

    if (work_chambers_categories != "") {
        for (element of work_chambers_categories) {
            if (element == "Other (Free Text)" && comm_a18.innerHTML != "") {
                textFields[24].innerHTML += '<ul class="greenList"><li>' + comm_a18.innerHTML + '</li></ul>';
            } else if (element != "Other (Free Text)") {
                textFields[24].innerHTML += '<ul class="greenList"><li>' + element + '</li></ul>';
            }
        }
    }

    if (work_home_categories != "") {
        for (element of work_home_categories) {
            if (element == "Other (Free Text)" && comm_a18.innerHTML != "") {
                textFields[26].innerHTML += '<ul class="greenList"><li>' + comm_a18.innerHTML + '</li></ul>';
            } else if (element != "Other (Free Text)") {
                textFields[26].innerHTML += '<ul class="greenList"><li>' + element + '</li></ul>';
            }
        }
    }

    if (work_travelling_categories != "") {
        for (element of work_travelling_categories) {
            if (element == "Other (Free Text)" && comm_a18.innerHTML != "") {
                textFields[29].innerHTML += '<ul class="greenList"><li>' + comm_a18.innerHTML + '</li></ul>';
            } else if (element != "Other (Free Text)") {
                textFields[29].innerHTML += '<ul class="greenList"><li>' + element + '</li></ul>';
            }
        }
    }

    /* unselected answers */
    const fullAnswerListWork = ["CCTV Cameras", "Restricted entry: key/fob access only", "Burglar alarms", "Locked pigeonholes", "Locked office doors", "Locked secure storage", "Locked briefcase/suitcase", "Confidential waste bin", "Desktop shredder", "Encrypted devices (inc. mobile phone)", "Antivirus, malware, and ransom ware use", "Remote wiping system technology", "Complex password security", "USB sticks/memory cards/DVDs encrypted", "Secure Wi-Fi", "Don't rely on free/public Wi-Fi", "Don't share devices with other people (including family members)", "Access to Chambers\' Data Protection Lead", "Access to IT expertise"],
        work_chambers_categories_copy = work_chambers_categories,
        work_home_categories_copy = work_home_categories,
        work_travelling_categories_copy = work_travelling_categories,
        work_chambers_difference = fullAnswerListWork.filter(x => !work_chambers_categories_copy.includes(x)),
        work_home_difference = fullAnswerListWork.filter(x => !work_home_categories_copy.includes(x)),
        work_travelling_difference = fullAnswerListWork.filter(x => !work_travelling_categories_copy.includes(x));

    textFields[25].innerHTML = "";
    textFields[27].innerHTML = "";
    textFields[30].innerHTML = "";

    if (work_chambers_difference != "") {
        for (element of work_chambers_difference) {
            textFields[25].innerHTML += '<ul class="greenList"><li>' + element + '</li></ul>';
        }
    }

    if (work_home_difference != "") {
        for (element of work_home_difference) {
            textFields[27].innerHTML += '<ul class="greenList"><li>' + element + '</li></ul>';
        }
    }

    /*
      if (work_travelling_difference != "") {
        for (element of work_travelling_difference) {
          textFields[30].innerHTML += '<ul class="greenList"><li>' + element + '</li></ul>';
        }
      }
    */
    /* custom text fields in this section */
    // a18u
    textFields[28].innerHTML = "";

    if (work_travelling_categories.includes("Encrypted devices (inc. mobile phone)")) {
        textFields[28].innerHTML = "";
    } else {
        textFields[28].innerHTML = "<br>You have advised that you do not currently encrypt your devices. While not specifically prescribed by data protection legislation, the ICO and other supervisory authorities have stipulated that where an encrypted device is stolen or misplaced, this is not a reportable matter. Similarly, having access to remote wiping technology and up-to-date antivirus, malware and other security products may be an essential tool to evidence best practice security measures while working remotely or indeed within the home or chambers.";
    }

    /* A18x - Do you have a remote working policy in place which sets out what measures you have taken to secure data, whether physical or electronic, whilst travelling or working in a remote environment. */
    textFields[31].innerHTML = "";

    switch (a18x.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[31].innerHTML = "We note that you have a remote working policy in place.";

            // add custom class
            reccomendationDivs[16].classList.add("hidden");

            break;

        case 'In progress':
        case 'No':

            // modify text field
            textFields[31].innerHTML = "At present you do not have a remote working policy and we recommend that this is completed as soon as possible.";

            // modify reccomendation text for a3
            reccomendationDivsTextField[16].innerHTML = "<b>Recommendation:</b><br>Complete a remote working policy to reflect additional security measures undertaken when working remotely.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[16].classList.add("orangeRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[16].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Complete a remote working policy to reflect additional security measures undertaken when working remotely."
            });

            break;

    }

    /* A19 - A data breach results from a breach of security leading to the loss, theft, or unauthorised access to personal data. Have you had a data breach within your practice? */
    textFields[32].innerHTML = "";
    textFields[33].innerHTML = "";

    switch (a19.innerHTML) {
        case 'Yes':

            if (a19_1.innerHTML == "Yes") {

                // modify text field
                textFields[33].innerHTML = "<br>Making an impartial decision to report a data breach, as you have done, is a difficult assessment. Often, data breaches are reported speculatively to the ICO where there is uncertainty and to avoid the risk of not reporting a reportable breach, which is a breach of the legislation itself.<br><br>";

            } else if (a19_1.innerHTML == "No, I didnâ€™t report the data breach.") {

                // modify text field
                textFields[33].innerHTML = "<br>Failure to report a data breach that ought to be reported is a breach of the legislation in itself and you will need to have clearly documented your reasons for making that decision, particularly if the breach is reported by other parties giving rise to a subsequent investigation by the ICO.<br><br>";

            }

            break;

        case 'A near miss/Iâ€™m not sure':

            // modify text field
            textFields[32].innerHTML = "<br>It does not take a catastrophic event to happen to have a sanctionable data breach under the legislation. More often than not a reportable data breach may result from a simple error such as sending an email with sensitive personal data to the wrong recipient or leaving files behind in a coffeeshop.";

            break;

        case 'No':

            // modify text field
            textFields[32].innerHTML = "<br>While you have not had a data breach to date, it is important to understand that it does not take a catastrophic event to happen to have a sanctionable data breach under the legislation. More often than not a reportable data breach may result from a simple error such as sending an email with sensitive personal data to the wrong recipient or leaving files behind in a coffeeshop.";
            break;

    }

    /* A20 - It is recommended that have a strategy in place to manage a data breach including how to report the matter to the ICO or as required, data subjects? This is often referred to a Crisis Management Policy. Do you have this policy currently?*/
    textFields[34].innerHTML = "";

    switch (a20.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[34].innerHTML = "Having a workable crisis management plan in place is further evidence of best practice in data management.";

            // add custom class
            reccomendationDivs[17].classList.add("hidden");

            // structure blocksElements creation
            blocksElements[17].priority = "1";

            break;

        case 'In progress':
        case 'No':

            // modify text field
            textFields[34].innerHTML = "Having identified that you do not currently have a crisis management plan in place, you should take steps to address this urgently as it will assist you in successfully managing the data breach.";

            // modify reccomendation text for a3
            reccomendationDivsTextField[17].innerHTML = "<b>Recommendation:</b><br>Ensure a robust crisis management plan is thoroughly considered and completed.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[17].classList.add("orangeRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[17].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            // structure blocksElements creation
            blocksElements[17].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Ensure a robust crisis management plan is thoroughly considered and completed."
            });

            break;

    }

    /* A21 - Where you have had a reportable data breach, have you reported it to the Bar Standards Board? */
    textFields[35].innerHTML = "";

    switch (a21.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[35].innerHTML = "It is commendable that you complied with your regulatory obligations and have self-reported the data breach to the Bar Standards Board.";

            break;

        case 'No':

            // modify text field
            textFields[35].innerHTML = "As you have not reported a previous or current data breach, we would caution you that it is now mandatory to do so and to take the relevant action or seek further advice as your failure to do so may result in disciplinary action.";

            break;

    }

    /* A22 - Cybercrime activity is a frequent source of data breaches. Are you alert to phishing emails and hacking activity? */
    //textFields[36].innerHTML = "";

    switch (a22.innerHTML) {

        case 'Yes':

            // modify text field
            //textFields[36].innerHTML = "Exercising caution and being alert to potential cyber-crime activity may prevent you from making a critical misjudgement which allows unauthorised access to your systems. Your practice requires that you remain vigilant and be constantly alert to the prospect of online criminal activity. ";

            break;

        case 'No':
        case 'Unsure':

            // modify text field
            //textFields[36].innerHTML = "As you have indicated that you are unfamiliar with how to confidently identify potential cyber-crime, it is critical that you source additional information and learn about phishing emails, online security and cyber-crime to avoid making an error that may result in a hacking event or unauthorised access to the personal data you are processing.";

            break;

    }

    /* A23 - Are you aware of when you must conduct a Date Protection Impact Assessment (DPIA)? */
    //textFields[37].innerHTML = "";

    switch (a23.innerHTML) {

        case 'Yes':

            // modify text field
            //textFields[37].innerHTML = "Being cognisant of the requirements for conducting a DPIA is a positive reflection on your data protection compliance. You may have already documented some privacy assessments as you have made changes to how you process personal data.";

            // add custom class
            //reccomendationDivs[20].classList.add("hidden");

            break;

        case 'No':

            // modify text field
            //textFields[37].innerHTML = "You have confirmed that you are currently unaware of how to identify those circumstances when you should conduct a DPIA and you should take steps to address this.";

            // modify reccomendation text for a3
            //reccomendationDivsTextField[20].innerHTML = "<b>Recommendation:</b><br>Familiarise yourself with the requirements for carrying out a DPIA and ensure the assessment is completed as required.";

            // add class with custom bg-color to reccomendation
            //reccomendationDivs[20].classList.add("orangeRec");

            // add SVG to reccomendation
            //reccomendationImagesSVG[20].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Familiarise yourself with the requirements for carrying out a DPIA and ensure the assessment is completed as required."
            });

            break;

    }

    // DATA SHARING - Q27 SECTION

    // hide some li elements data sharing / due diligence since they were not selected in a previous question
    let li_list1 = [],
        li_list2 = [];

    for (var i = 0; i < 8; i++) {
        li_list1.push(document.querySelector("#toHide1" + i));
        li_list2.push(document.querySelector("#toHide2" + i));
    }

    /* A27 - Do you share personal data with any of the following? Select all that apply */
    textFields[38].innerHTML = "";
    iterator = 0;
    for (element of a27) {
        if (a27[iterator] == 'Other:') {
            textFields[38].innerHTML += '<ul class="greenList"><li>' + a27_com.innerHTML + '</li></ul>';
            if (a27_com == "") {
                textFields[38].innerHTML = "";
            }
        } else {
            textFields[38].innerHTML += '<ul class="greenList"><li>' + a27[iterator] + '</li></ul>';
        }
        iterator++;
    }

    var a28 = [],
        a29 = [];

    for (i = 0; i < 8; i++) {
        a28.push(document.querySelector("#a" + parseInt(i + 101)));
    }

    for (i = 0; i < 8; i++) {
        a29.push(document.querySelector("#a" + parseInt(i + 201)));
    }

    // a28
    iterator = 0;
    for (element of a28) {

        // add answer text
        textFields[39 + iterator].innerHTML = element.innerHTML;

        switch (element.innerHTML) {

            case 'Yes':

                // add class
                textFields[39 + iterator].classList.add("answerYes");

                // structure blocksElements creation
                blocksElements[7 + iterator].priority = "1";

                break;

            case 'No':

                // add class
                textFields[39 + iterator].classList.add("answerNo");

                // structure blocksElements creation
                blocksElements[7 + iterator].priority = "2";

                break;

            case 'In progress':

                // add class
                textFields[39 + iterator].classList.add("answerIP");

                // structure blocksElements creation
                blocksElements[7 + iterator].priority = "2";

                break;

            case '':

                if (iterator != 7) {
                    li_list1[iterator].style.display = "none";
                }
                break;

            default:
        }

        // go to the next field
        iterator++;

    }

    // check if OTHER text box is empty
    if (textFields[46].innerHTML == "") {
        li_list1[7].style.display = "none";
    }


    // check if there's at least one answer of type No / In progress
    let existCheck_a28 = a28.some(a => (a.innerHTML == 'No') || (a.innerHTML == 'In progress'));

    if (existCheck_a28) {

        // modify reccomendation text
        reccomendationDivsTextField[21].innerHTML = "<b>Recommendation:</b><br>Take immediate steps to enter into Data Sharing Agreements with all third parties with whom you share personal data.";

        // add class with custom bg-color
        reccomendationDivs[21].classList.add("redRec");
        reccomendationDivs[21].classList.remove("hidden");

        // add SVG to reccomendation
        reccomendationImagesSVG[21].innerHTML = svgAlert;

        // push reccomendation priority
        reccomendationPriority.push('1');

        reccomendationBlocksSummary["objects"].push({
            "priority": "1",
            "text": "<b>Recommendation:</b><br>Take immediate steps to enter into Data Sharing Agreements with all third parties with whom you share personal data."
        });

    }

    // a29
    iterator = 0;
    for (element of a29) {

        // add answer text
        textFields[47 + iterator].innerHTML = element.innerHTML;

        switch (element.innerHTML) {

            case 'Yes':

                // add class
                textFields[47 + iterator].classList.add("answerYes");

                break;

            case 'No':

                // add class
                textFields[47 + iterator].classList.add("answerNo");

                break;

            case 'In progress':

                // add class
                textFields[47 + iterator].classList.add("answerIP");

                break;

            case '':

                if (iterator != 7) {
                    li_list2[iterator].style.display = "none";
                }

                break;

            default:
        }

        // go to the next field
        iterator++;

    }

    // check if OTHER text box is empty
    if (textFields[54].innerHTML == "") {
        li_list2[7].style.display = "none";
    }

    // check if there's at least one answer of type No / In progress
    let existCheck_a29 = a29.some(a => (a.innerHTML == 'No') || (a.innerHTML == 'In progress'));

    if (existCheck_a29) {

        // modify reccomendation text
        reccomendationDivsTextField[26].innerHTML = "<b>Recommendation:</b><br>Due diligence checks should be actioned immediately against third parties.";

        // add class with custom bg-color
        reccomendationDivs[26].classList.add("orangeRec");
        reccomendationDivs[26].classList.remove("hidden");

        // add SVG to reccomendation
        reccomendationImagesSVG[26].innerHTML = svgBell;

        // push reccomendation priority
        reccomendationPriority.push('2');

        reccomendationBlocksSummary["objects"].push({
            "priority": "2",
            "text": "<b>Recommendation:</b><br>Due diligence checks should be actioned immediately against third parties."
        });

    }

    /* A30 & A 30.1 PUPILLAGE */
    const pupillageSectionDiv = document.querySelector("#customSectionField1");
    textFields[55].innerHTML = "";

    if (a30.innerHTML == "Yes") {

        switch (a30_1.innerHTML) {

            case 'Yes':

                // modify text field
                textFields[55].innerHTML = "You have entered into a Data Sharing Agreement in place with your pupil. It is important that this is a Data Sharing Agreement and not simply a confidentiality clause within their contract.<br><br>Where you have engaged a pupil in the ordinary course of their training, you will of course provide them with access to your clientsâ€™ data. This in essence is data sharing â€“ you are the data controller and the pupil is the data processor, who processes personal data in compliance with your instructions. While you may have confidentiality undertakings in place, these do not cover all the requirements of a Data Sharing Agreement in which it is clearly set out what security and data protection measures you expect of your pupil. This is a legal obligation under GDPR.";

                // add custom class
                reccomendationDivs[23].classList.add("hidden");

                break;

            case 'No':

                // modify text field
                textFields[55].innerHTML = "You have indicated that you do not currently have a Data Sharing Agreement with your pupil.<br><br>Where you have engaged a pupil in the ordinary course of their training, you will of course provide them with access to your clientsâ€™ data. This in essence is data sharing â€“ you are the data controller and the pupil is the data processor, who processes personal data in compliance with your instructions. While you may have confidentiality undertakings in place, these do not cover all the requirements of a Data Sharing Agreement in which it is clearly set out what security and data protection measures you expect of your pupil. This is a legal obligation under GDPR.";

                // modify reccomendation text for a3
                reccomendationDivsTextField[23].innerHTML = "<b>Recommendation:</b><br>Take immediate steps to enter into a Data Sharing Agreement with your pupil.";

                // add class with custom bg-color to reccomendation
                reccomendationDivs[23].classList.add("redRec");

                // add SVG to reccomendation
                reccomendationImagesSVG[23].innerHTML = svgAlert;

                // push reccomendation priority
                reccomendationPriority.push('1');

                reccomendationBlocksSummary["objects"].push({
                    "priority": "1",
                    "text": "<b>Recommendation:</b><br>Take immediate steps to enter into a Data Sharing Agreement with your pupil."
                });

                break;

        }
    } else {

        // hide section if answer on first question is no
        pupillageSectionDiv.classList.add("hidden");

    }

    /* A30 & A 30.1 COMMITTEES */
    textFields[56].innerHTML = "";

    if (a31.innerHTML == "Yes") {

        switch (a31_1.innerHTML) {

            case 'Yes':

                // modify text field
                textFields[56].innerHTML = "You have indicated that you are currently a member of a chambers committee and that both you and chambers have entered into a Data Sharing Agreement in compliance with GDPR and to reflect the legal responsibilities of the data sharing arrangements in this context. It is incumbent on both parties to ensure that they understand the differences between their roles as data controllers and data processors and that all personal data is processed in accordance with the terms of the agreement. You should also be mindful that chambers reserves the right to audit your GDPR compliance as part of its due diligence.";

                break;

            case 'No':

                // modify text field
                textFields[56].innerHTML = "Personal data relating to chambers staff, barristers, applicants and pupils is shared with you whenever you participate as a member of the committee, and the chambers is obligated to ensure there is a Data Sharing Agreement in place. Where chambers shares personal data with you, you act as a data processor for such information and chambers is the data controller. It is incumbent on both parties to ensure that they understand the differences between their roles as data controllers and data processors and that all personal data is processed in accordance with the terms of the agreement. You should also be mindful that chambers reserves the right to audit your GDPR compliance as part of its due diligence.";

                break;

        }
    } else {

        // modify text field
        textFields[56].innerHTML = "On occasion or perhaps at a future date, you may process personal data on behalf of chambers, whether as a result of your membership of a committee or during an AGM. Where chambers shares personal data with you, you act as a data processor for such information and chambers is the data controller. You are obligated under GDPR to enter into a Data Sharing Agreement. It is incumbent on both parties to ensure that they understand the differences between their roles as data controllers and data processors and that all personal data is processed in accordance with the terms of the agreement. You should also be mindful that chambers reserves the right to audit your GDPR compliance as part of its due diligence.";

    }

    /* A32 - One of the rights most frequently exercised by individuals is the right to access personal data, otherwise known as a Subject Access Request. Do you have a Subject Access Request policy in place to assist you with managing this? */
    textFields[57].innerHTML = "";

    switch (a32.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[57].innerHTML = "You have already spent time drafting a Subject Access Request policy, which will assist you and any employees. You may have to take steps to manage this request.";

            // add custom class
            reccomendationDivs[30].classList.add("hidden");

            // structure blocksElements creation
            blocksElements[16].priority = "1";

            break;

        case 'In progress':

            // modify text field
            textFields[57].innerHTML = "With this in mind, you should finalise your Subject Access Request policy to ensure that data Subject Access Requests are handled in compliance with GDPR.";

            // modify reccomendation text for a3
            reccomendationDivsTextField[30].innerHTML = "<b>Recommendation:</b><br>Complete your Subject Access Request policy and make it available to all who process data on your behalf.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[30].classList.add("orangeRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[30].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            // structure blocksElements creation
            blocksElements[16].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Complete your Subject Access Request policy and make it available to all who process data on your behalf."
            });

        case 'No':

            // modify text field
            textFields[57].innerHTML = "With this in mind, as you do not yet have a Subject Access Request policy, you should address this existing gap and ensure the policy is implemented so any data Subject Access Requests are handled in compliance with GDPR.";

            // modify reccomendation text for a3
            reccomendationDivsTextField[30].innerHTML = "<b>Recommendation:</b><br>Complete your Subject Access Request policy and make it available to all who process data on your behalf.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[30].classList.add("orangeRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[30].innerHTML = svgBell;

            // push reccomendation priority
            reccomendationPriority.push('2');

            // structure blocksElements creation
            blocksElements[16].priority = "2";

            reccomendationBlocksSummary["objects"].push({
                "priority": "2",
                "text": "<b>Recommendation:</b><br>Complete your Subject Access Request policy and make it available to all who process data on your behalf."
            });

            break;

    }

    /* A33 - Have you ever received a Subject Access Request (SAR)? */
    textFields[58].innerHTML = "";

    switch (a33.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[58].innerHTML = "Having already managed a Subject Access Request you will be familiar with the complexities and challenge of meeting the request within the specified timeframe.";

            break;

        case 'No':

            // modify text field
            textFields[58].innerHTML = "Responding to a Subject Access Request can be both complex and time consuming.";

            break;

    }

    /* A24 - Do you complete GDPR training: (select one) */
    textFields[59].innerHTML = "";

    switch (a24.innerHTML) {

        case 'Annually':

            // modify text field
            textFields[59].innerHTML = "As you complete and refresh your GDPR training annually, you are satisfying the ICOâ€™s recommendations and demonstrating your accountability under the legislation.<br><br>";

            // modify reccomendation text for
            reccomendationDivsTextField[27].innerHTML = "<b>Recommendation:</b><br>Ensure GDPR training continues to be refreshed every 12 months.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[27].classList.add("greenRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[27].innerHTML = svgFile;

            // push reccomendation priority
            reccomendationPriority.push('3');

            reccomendationBlocksSummary["objects"].push({
                "priority": "3",
                "text": "<b>Recommendation:</b><br>Ensure GDPR training continues to be refreshed every 12 months."
            });

            break;

        case 'Ad hoc/Irregularly':

            // modify text field
            textFields[59].innerHTML = "The ICO expects that \'appropriate\' training is completed by all businesses annually and your omission to complete GDPR training regularly leaves your practice exposed.<br><br>";

            // modify reccomendation text for a3
            reccomendationDivsTextField[27].innerHTML = "<b>Recommendation:</b><br>Ensure that you complete and can evidence annual GDPR training.";

            // add class with custom bg-color to reccomendation
            reccomendationDivs[27].classList.add("redRec");

            // add SVG to reccomendation
            reccomendationImagesSVG[27].innerHTML = svgAlert;

            // push reccomendation priority
            reccomendationPriority.push('1');

            reccomendationBlocksSummary["objects"].push({
                "priority": "1",
                "text": "<b>Recommendation:</b><br>Ensure that you complete and can evidence annual GDPR training."
            });

            break;

        case 'Never':

            // modify text field
            textFields[59].innerHTML = "The ICO expects that \'appropriate\' training is completed by all businesses and your omission to complete GDPR training at all leaves your practice exposed.<br><br>";

            // add custom class
            reccomendationDivs[27].classList.add("hidden");

            break;

    }


    /* A25 - Were you employ staff/contractors, have you provided them with GDPR training in the last 12 months? */
    const gdprTrainingSectionDiv = document.querySelector("#customSectionField2");
    textFields[60].innerHTML = "";

    switch (a25.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[60].innerHTML = "Having recognised the need to offer data protection training to those you employ or who work for you under contract, it is essential that such training is adequate and fit for purpose.<br><br>As your bear all legal responsibility and liability for a data breach in your practice, you must ensure that all staff members with responsibility for personal and sensitive information are fully briefed and trained on data protection requirements, and that they understand your data protection policies and procedures and the risks and costs of non-compliance. This also ensures you are better able to defend a data breach should it occur. Employment contracts should also include a clear reference to the importance of data protection compliance and the possible disciplinary consequences for a breach of data protection policy.";

            break;

        case 'No':

            // modify text field
            textFields[60].innerHTML = "Failure to provide adequate training to someone within your employment leaves your practice exposed should they be responsible for a data breach.<br><br>As you bear all legal responsibility and liability for a data breach in your practice, you must ensure that all staff members with responsibility for personal and sensitive information are fully briefed and trained on data protection requirements and that they understand your data protection policies and procedures and the risks and costs of non-compliance. It also ensures you are better able to defend a data breach should it occur. Employment contracts should also include a clear reference to the importance of data protection compliance and the possible disciplinary consequences for a breach of data protection policy.";

            break;

        case 'Not applicable':

            // add custom class
            gdprTrainingSectionDiv.classList.add("hidden");

            break;

    }

    /* A26 - Do you have a data protection policy in place? */
    const textFieldA26 = document.querySelector("#TextFieldA26");
    textFieldA26.innerHTML = "";

    switch (a26.innerHTML) {

        case 'Yes':

            // modify text field
            textFieldA26.innerHTML = "You have indicated that you already have a data protection policy established within your practice.";

            // structure blocksElements creation
            blocksElements[5].priority = "1";

            break;

        case 'In progress/ In draft format':

            // modify text field
            textFieldA26.innerHTML = "You have indicated that you are working towards completion of your data protection policy and we would strongly advise that this is finalised as soon as possible.";

            // structure blocksElements creation
            blocksElements[5].priority = "2";

            break;

        case 'No':

            // modify text field
            textFieldA26.innerHTML = "You should take immediate steps to draft and complete a data protection policy.";

            // structure blocksElements creation
            blocksElements[5].priority = "2";

            break;

    }

    /* A36 - Which of the following GDPR compliance documents do you have in place? */
    let a36_allAnswersList = ["Data Protection Training Register", "Data Retention &amp; Disposal Register", "Remote Working Policy", "IT Register", "Third Party Data Sharing Register", "Near-Miss Register", "Data Breach Register"],
        a36_selectedCopy = a36,
        a36_difference = a36_allAnswersList.filter(x => !a36_selectedCopy.includes(x));

    for (element of blocksElements) {
        a36.includes(element.nameCategory) ? element.priority = "1" : "";
        a36_difference.includes(element.nameCategory) ? element.priority = "2" : "";
    }

    // SQUARE BLOCKS SORTING
    // push to the top if priority = 2 (red variant)
    // push to the bottom if priority = 1 (green variant)

    blocksElements.sort((a, b) => {
        return b.priority - a.priority;
    });

    var squareBlocksLocation = [],
        squareBlocksTextValues = [],
        squareBlocksIconLocation = [];

    for (i = 0; i < blocksElements.length; i++) {
        squareBlocksLocation.push(document.querySelector("#squareBlock" + parseInt(i + 1)));
        squareBlocksTextValues.push(document.querySelector("#squareBlock" + parseInt(i + 1) + " > div.textSquareBlock"));
        squareBlocksIconLocation.push(document.querySelector("#squareBlock" + parseInt(i + 1) + " > div.iconSquareBlock"));
    }

    for (iterator = 0; iterator < blocksElements.length; iterator++) {
        squareBlocksTextValues[iterator].innerHTML = blocksElements[iterator].nameCategory;
        if (blocksElements[iterator].priority == 2) {
            squareBlocksLocation[iterator].classList.add("redRec");
            squareBlocksIconLocation[iterator].innerHTML = svgAlert;
        } else if (blocksElements[iterator].priority == 1) {
            squareBlocksLocation[iterator].classList.add("greenRec");
            squareBlocksIconLocation[iterator].innerHTML = svgFile;
        }
    }

    // hide unselected blocks
    var empty_elements = 0;

    for (var i = 0; i < a29.length; i++) {
        if (a29[i].innerHTML != "Yes" || a29[i].innerHTML != "No" || a29[i].innerHTML != "In progress") {
            empty_elements++;
        }
    }

    const needed_value = blocksElements.length - empty_elements;

    for (var i = 0; i < empty_elements; i++) {

        squareBlocksLocation[i + needed_value].style.display = "none";

    }

    /* A34 - Within your practice, do you transfer personal data to any countries or organisations located outside the European Economic Area(EEA)? */
    textFields[61].innerHTML = "";

    switch (a34.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[61].innerHTML = "You currently transfer personal internationally and it is important to understand your legal obligations when you do so.";

            break;

        case 'Not sure':
        case 'No':

            // modify text field
            textFields[61].innerHTML = "If your practice is solely within the UK with a UK client base, you may consider that you do not transfer personal data internationally. This may change at a future date or you may use cloud storage technologies where data is stored in data centres located globally.";

            break;

    }

    /* A35 - Do you use cloud storage services or other technologies which may store data outside the UK? */
    textFields[62].innerHTML = "";

    switch (a35.innerHTML) {

        case 'Yes':

            // modify text field
            textFields[62].innerHTML = "Using cloud data storage facilities located in the EEA meets the requirements of GDPR currently. Where the cloud storage data centres are based beyond the EEA you will need to implement one of several safeguarding measures. You may elect to use different technologies at a future date. We always recommend that you verify where this data will be located.";

            break;

        case 'Not sure':
        case 'No':

            // modify text field
            textFields[62].innerHTML = "You should carry out checks with the technologies providers you use to verify the locations of data centres and to understand where the data may be shared internationally. If you are certain this is within the UK, you are not required to take any additional steps.";

            break;

    }

    // SUMMARY RECOMMENDATIONS

    // push STATIC RECCOMENDATION into the block of total reccomendations

    //r18
    reccomendationBlocksSummary["objects"].push({
        "priority": "3",
        "text": "<b>Recommendation:</b><br>On at least an annual basis, in conjunction with an IT audit, consider all the security measures implemented to determine their efficiency and the level of protection offered. Incorporate any updates and new processes within your data security policy."
    });

    //r19
    reccomendationBlocksSummary["objects"].push({
        "priority": "2",
        "text": "<b>Recommendation:</b><br>Ensure that you have a Data Breach Register and Near Miss Register to record any data breach events; identify the remedial action taken and the reasoning for not reporting to the ICO where relevant."
    });

    //r22
    reccomendationBlocksSummary["objects"].push({
        "priority": "1",
        "text": "<b>Recommendation:</b><br>Ensure that you remain vigilant towards all potential cyber-crime activity, verify your concerns and never allow access to systems without specific guidance from trusted third parties."
    });

    //static after a36
    reccomendationBlocksSummary["objects"].push({
        "priority": "1",
        "text": "<b>Recommendation:</b><br>Implement any outstanding compliance documentation immediately."
    });

    //static after a36
    reccomendationBlocksSummary["objects"].push({
        "priority": "3",
        "text": "<b>Recommendation:</b><br>Review all GDPR compliance documents, at least annually."
    });

    //r34
    reccomendationBlocksSummary["objects"].push({
        "priority": "3",
        "text": "<b>Recommendation:</b><br>It is also important that you review your privacy policy to accurately reflect where you transfer personal data internationally."
    });

    // sort reccomendationBlocks final depending on priority
    reccomendationBlocksSummary["objects"].sort((a, b) => {
        return a.priority - b.priority;
    });


    containerFinalReccomendations1.innerHTML = "";
    containerFinalReccomendations2.innerHTML = "";
    containerFinalReccomendations3.innerHTML = "";

    var blockChange = "",
        blackPriorities = 0,
        redPriorities = 0,
        orangePriorities = 0,
        greenPriorities = 0;

    document.querySelector("#page_46").style.display = "none";

    for (iterator = 0; iterator < reccomendationBlocksSummary.objects.length; iterator++) {

        if (iterator < 9) {
            blockChange = containerFinalReccomendations1;
        } else if ((iterator >= 9) && (iterator < 18)) {
            blockChange = containerFinalReccomendations2;
        } else if (iterator >= 18) {
            blockChange = containerFinalReccomendations3;
            document.querySelector("#page_46").style.display = "block";
        }

        switch (reccomendationBlocksSummary["objects"][iterator].priority) {

            case "0":

                blockChange.innerHTML += "<div id=\"containerRecFinal" +
                    iterator +
                    "\" class=\"squareBlockElementFinal " +
                    "blackRec" +
                    "\">" +
                    "<div class=\"iconSquareBlockFinal\">" +
                    svgBulb +
                    "</div>" +
                    "<div class=\"textSquareBlockFinal\">" +
                    reccomendationBlocksSummary["objects"][iterator].text +
                    "</div>" +
                    "<div class=\"actionTakenText\">" +
                    "Action<br>Taken" +
                    "</div>" +
                    "<div class=\"tickFinal\">" +
                    "</div>" +
                    "</div>";

                blackPriorities++;

                break;

            case "1":

                blockChange.innerHTML += "<div id=\"containerRecFinal" +
                    iterator +
                    "\" class=\"squareBlockElementFinal " +
                    "redRec" +
                    "\">" +
                    "<div class=\"iconSquareBlockFinal\">" +
                    svgAlert +
                    "</div>" +
                    "<div class=\"textSquareBlockFinal\">" +
                    reccomendationBlocksSummary["objects"][iterator].text +
                    "</div>" +
                    "<div class=\"actionTakenText\">" +
                    "Action<br>Taken" +
                    "</div>" +
                    "<div class=\"tickFinal\">" +
                    "</div>" +
                    "</div>";

                redPriorities++;

                break;

            case "2":

                blockChange.innerHTML += "<div id=\"containerRecFinal" +
                    iterator +
                    "\" class=\"squareBlockElementFinal " +
                    "orangeRec" +
                    "\">" +
                    "<div class=\"iconSquareBlockFinal\">" +
                    svgBell +
                    "</div>" +
                    "<div class=\"textSquareBlockFinal\">" +
                    reccomendationBlocksSummary["objects"][iterator].text +
                    "</div>" +
                    "<div class=\"actionTakenText\">" +
                    "Action<br>Taken" +
                    "</div>" +
                    "<div class=\"tickFinal\">" +
                    "</div>" +
                    "</div>";

                orangePriorities++;

                break;

            case "3":

                blockChange.innerHTML += "<div id=\"containerRecFinal" +
                    iterator +
                    "\" class=\"squareBlockElementFinal " +
                    "greenRec" +
                    "\">" +
                    "<div class=\"iconSquareBlockFinal\">" +
                    svgFile +
                    "</div>" +
                    "<div class=\"textSquareBlockFinal\">" +
                    reccomendationBlocksSummary["objects"][iterator].text +
                    "</div>" +
                    "<div class=\"actionTakenText\">" +
                    "Action<br>Taken" +
                    "</div>" +
                    "<div class=\"tickFinal\">" +
                    "</div>" +
                    "</div>";

                greenPriorities++;

                break;

        }


    }

    // PIECHART

    var data = [
            ["Urgent Priority", blackPriorities],
            ["High Priority", redPriorities],
            ["Medium Priority", orangePriorities],
            ["Low Priority", greenPriorities]
        ],
        total = 0, // variable to store the total of all values
        startingPoint = 0, // declare starting point (right of circle)
        endPoint = 0,
        percent = 0;

    const colors = ["#404040", "#b92032", "#f2952d", "#4ca233"],
        finalPercent = [document.querySelector("#textFinal1"),
            document.querySelector("#textFinal2"),
            document.querySelector("#textFinal3"),
            document.querySelector("#textFinal4")
        ],
        finalTextField = [document.querySelector("#textChangeFinal1"),
            document.querySelector("#textChangeFinal2"),
            document.querySelector("#textChangeFinal3")
        ],
        canvas = document.querySelector("#canvas"),
        context = canvas.getContext("2d"),
        x = 100, // x y coordinates of the mid-point and radius
        y = 100,
        radius = 100;

    // change the final fields according to the number of priorities

    if (blackPriorities > 0) {
        finalTextField[0].classList.remove("hidden");
    } else if (redPriorities >= 5 && blackPriorities <= 0) {
        finalTextField[1].classList.remove("hidden");
        0
    } else if (redPriorities <= 5 && blackPriorities <= 0) {
        finalTextField[2].classList.remove("hidden");
    }

    // calculate total
    for (var i = 0; i < data.length; i++) {
        // add data value to total
        total += data[i][1];
    }

    for (var i = 0; i < data.length; i++) {
        // calculate percent of total for current value
        percent = data[i][1] * 100 / total;

        // fill in with values
        finalPercent[i].innerHTML = percent.toFixed(2) + "%";

        // calculate end point using the percentage (2 is the final point for the chart)
        endPoint = startingPoint + (2 / 100 * percent);

        // draw chart segment for current element
        context.beginPath();

        // select corresponding color
        context.fillStyle = colors[i];
        context.moveTo(x, y);
        context.arc(x, y, radius, startingPoint * Math.PI, endPoint * Math.PI);
        context.fill();

        // starting point for next element
        startingPoint = endPoint;
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