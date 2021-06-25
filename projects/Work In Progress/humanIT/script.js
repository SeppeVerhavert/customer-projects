docReady(function() {
    var overallacmtext = document.getElementById('overallACM');
    var coverExt_1 = document.getElementById('coverNC');
    var coverExt_2 = document.getElementById('coverPA');
    var coverExt_3 = document.getElementById('coverMA');
    var coverExt_4 = document.getElementById('coverFA');

    var block1 = document.getElementById('block1').innerText;
    var block2 = document.getElementById('block2').innerText;
    var block3 = document.getElementById('block3').innerText;
    var block4 = document.getElementById('block4').innerText;
    var block5 = document.getElementById('block5').innerText;
    var block6 = document.getElementById('block6').innerText;
    var block7 = document.getElementById('block7').innerText;
    var block8 = document.getElementById('block8').innerText;

    var table = document.getElementById("table-widget");
    var blocksValues = ["", "", "", "", "", "", "", ""];

    if (block1) {
        const block1Integer = parseInt(block1);
        if (block1Integer === 1025 || block1Integer === 4375) {
            blocksValues[0] = "Application Control Maturity Level: <b>Partly</b>";
        }
        if (block1Integer === 3340) {
            blocksValues[0] = "Application Control Maturity Level: <b>Mostly</b>";
        }
        if (block1Integer === 6690) {
            blocksValues[0] = "Application Control Maturity Level: <b>Fully</b>";
        }
        if (block1Integer === 5665 || block1Integer === 2315 || block1Integer === 3350 || block1Integer === 0) {
            blocksValues[0] = "Application Control Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block2) {
        const block2Integer = parseInt(block2);
        const arrayBlock2Partly = [3340, 8820];
        const arrayBlock2Mostly = [4375, 5150, 9855];
        const arrayBlock2Fully = [10630];
        const arrayBlock2NotCompliant = [9605, 6505, 8830, 7795, 1025, 2315, 3350, 4125, 5480, 0];

        if (arrayBlock2Partly.indexOf(block2Integer) !== -1) {
            blocksValues[1] = "Patch Applications Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock2Mostly.indexOf(block2Integer) !== -1) {
            blocksValues[1] = "Patch Applications Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock2Fully.indexOf(block2Integer) !== -1) {
            blocksValues[1] = "Patch Applications Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock2NotCompliant.indexOf(block2Integer) !== -1) {
            blocksValues[1] = "Patch Applications Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block3) {
        const block3Integer = parseInt(block3);
        const arrayBlock3Partly = [12945, 8820, 7465, 3340];
        const arrayBlock3Mostly = [12170, 10815, 6690];
        const arrayBlock3Fully = [16295, 15270, 11920];
        const arrayBlock3NotCompliant = [13980, 12955, 10630, 9790, 9855, 11145, 8500, 9605, 6505, 6440, 4375, 8830, 5150, 7795, 7475, 5665, 1025, 2315, 3350, 4125, 5480, 0];

        if (arrayBlock3Partly.indexOf(block3Integer) !== -1) {
            blocksValues[2] = "Configure Microsoft Office Macro Settings Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock3Mostly.indexOf(block3Integer) !== -1) {
            blocksValues[2] = "Configure Microsoft Office Macro Settings Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock3Fully.indexOf(block3Integer) !== -1) {
            blocksValues[2] = "Configure Microsoft Office Macro Settings Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock3NotCompliant.indexOf(block3Integer) !== -1) {
            blocksValues[2] = "Configure Microsoft Office Macro Settings Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block4) {
        const block4Integer = parseInt(block4);
        const arrayBlock4Partly = [13980, 12945, 10630, 8820, 9855, 8500, 7465, 3340, 6505, 4375, 5150, 1025];
        const arrayBlock4Mostly = [12170, 10815, 6690];
        const arrayBlock4Fully = [16295];
        const arrayBlock4NotCompliant = [15270, 12955, 9790, 11920, 11145, 9605, 6440, 8830, 7795, 7475, 5665, 2315, 3350, 4125, 5480, 0];

        if (arrayBlock4Partly.indexOf(block4Integer) !== -1) {
            blocksValues[3] = "User Application Hardening Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock4Mostly.indexOf(block4Integer) !== -1) {
            blocksValues[3] = "User Application Hardening Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock4Fully.indexOf(block4Integer) !== -1) {
            blocksValues[3] = "User Application Hardening Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock4NotCompliant.indexOf(block4Integer) !== -1) {
            blocksValues[3] = "User Application Hardening Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block5) {
        const block5Integer = parseInt(block5);
        const arrayBlock5Partly = [12945, 8820, 7465, 3340];
        const arrayBlock5Mostly = [9855, 8500, 4375];
        const arrayBlock5Fully = [13980, 12955];
        const arrayBlock5NotCompliant = [10630, 11920, 9605, 6505, 6440, 8830, 5150, 7795, 7475, 1025, 2315, 3350, 4125, 5480, 0];

        if (arrayBlock5Partly.indexOf(block5Integer) !== -1) {
            blocksValues[4] = "Restrict Administrative Privileges Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock5Mostly.indexOf(block5Integer) !== -1) {
            blocksValues[4] = "Restrict Administrative Privileges Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock5Fully.indexOf(block5Integer) !== -1) {
            blocksValues[4] = "Restrict Administrative Privileges Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock5NotCompliant.indexOf(block5Integer) !== -1) {
            blocksValues[4] = "Restrict Administrative Privileges Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block6) {
        const block6Integer = parseInt(block6);
        const arrayBlock6Partly = [8820, 3340];
        const arrayBlock6Mostly = [9855, 4375, 5150];
        const arrayBlock6Fully = [10630];
        const arrayBlock6NotCompliant = [9605, 6505, 8830, 7795, 1025, 2315, 3350, 4125, 5480, 0];

        if (arrayBlock6Partly.indexOf(block6Integer) !== -1) {
            blocksValues[5] = "Patch Operating Systems Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock6Mostly.indexOf(block6Integer) !== -1) {
            blocksValues[5] = "Patch Operating Systems Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock6Fully.indexOf(block6Integer) !== -1) {
            blocksValues[5] = "Patch Operating Systems Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock6NotCompliant.indexOf(block6Integer) !== -1) {
            blocksValues[5] = "Patch Operating Systems Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block7) {
        const block7Integer = parseInt(block7);
        const arrayBlock7Partly = [12122, 12123, 12124, 12132, 12133, 12134, 12222, 12223, 12224, 12232, 12233, 12234, 13122, 13123, 13124, 13132, 13133, 13134, 13222, 13223, 13224, 13232, 13233, 13234, 14122, 14123, 14124, 14132, 14133, 14134, 14222, 14223, 14224, 14232, 14233, 14234, 22122, 22123, 22124, 22132, 22133, 22134, 22222, 22223, 22224, 22232, 22233, 22234, 23122, 23123, 23124, 23132, 23133, 23134, 23222, 23232, 24122, 24123, 24124, 24132, 24133, 24134, 24222, 24232, 32122, 32123, 32124, 32132, 32133, 32134, 32222, 32223, 32224, 32232, 32233, 32234, 33122, 33123, 33124, 33132, 33133, 33134, 33222, 33232, 34122, 34123, 34124, 34132, 34133, 34134, 34222, 34232];
        const arrayBlock7Mostly = [23223, 23224, 23233, 23234, 24223, 24224, 24233, 24234, 33223, 33224, 33233, 33234, 34223, 34224, 34233];
        const arrayBlock7Fully = [34234];
        const arrayBlock7NotCompliant = [11111, 11112, 11113, 11114, 11121, 11122, 11123, 11124, 11131, 11132, 11133, 11134, 11211, 11212, 11213, 11214, 11221, 11222, 11223, 11224, 11231, 11232, 11233, 11234, 12111, 12112, 12113, 12114, 12121, 12131, 12211, 12212, 12213, 12214, 12221, 12231, 13111, 13112, 13113, 13114, 13121, 13131, 13211, 13212, 13213, 13214, 13221, 13231, 14111, 14112, 14113, 14114, 14121, 14131, 14211, 14212, 14213, 14214, 14221, 14231, 21111, 21112, 21113, 21114, 21121, 21122, 21123, 21124, 21131, 21132, 21133, 21134, 21211, 21212, 21213, 21214, 21221, 21222, 21223, 21224, 21231, 21232, 21233, 21234, 22111, 22112, 22113, 22114, 22121, 22131, 22211, 22212, 22213, 22214, 22221, 22231, 23111, 23112, 23113, 23114, 23121, 23131, 23211, 23212, 23213, 23214, 23221, 23231, 24111, 24112, 24113, 24114, 24121, 24131, 24211, 24212, 24213, 24214, 24221, 24231, 31111, 31112, 31113, 31114, 31121, 31122, 31123, 31124, 31131, 31132, 31133, 31134, 31211, 31212, 31213, 31214, 31221, 31222, 31223, 31224, 31231, 31232, 31233, 31234, 32111, 32112, 32113, 32114, 32121, 32131, 32211, 32212, 32213, 32214, 32221, 32231, 33111, 33112, 33113, 33114, 33121, 33131, 33211, 33212, 33213, 33214, 33221, 33231, 34111, 34112, 34113, 34114, 34121, 34131, 34211, 34212, 34213, 34214, 34221, 34231];

        if (arrayBlock7Partly.indexOf(block7Integer) !== -1) {
            blocksValues[6] = "Backups Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock7Mostly.indexOf(block7Integer) !== -1) {
            blocksValues[6] = "Backups Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock7Fully.indexOf(block7Integer) !== -1) {
            blocksValues[6] = "Backups Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock7NotCompliant.indexOf(block7Integer) !== -1) {
            blocksValues[6] = "Backups Maturity Level: <b>Not Compliant</b>";
        }
    }

    if (block8) {
        const block8Integer = parseInt(block8);
        const arrayBlock8Partly = [4375, 1025];
        const arrayBlock8Mostly = [3340];
        const arrayBlock8Fully = [6690];
        const arrayBlock8NotCompliant = [5665, 2315, 3350, 0];

        if (arrayBlock8Partly.indexOf(block8Integer) !== -1) {
            blocksValues[7] = "Two factor authentication Maturity Level: <b>Partly</b>";
        }
        if (arrayBlock8Mostly.indexOf(block8Integer) !== -1) {
            blocksValues[7] = "Two factor authentication Maturity Level: <b>Mostly</b>";
        }
        if (arrayBlock8Fully.indexOf(block8Integer) !== -1) {
            blocksValues[7] = "Two factor authentication Maturity Level: <b>Fully</b>";
        }
        if (arrayBlock8NotCompliant.indexOf(block8Integer) !== -1) {
            blocksValues[7] = "Two factor authentication Maturity Level: <b>Not Compliant</b>";
        }
    }

    // SET GLOBAL ACM VALUE
    function setglobalACM() {
        for (var g = 0; g < 4; g++) {
            if (g === 0) { for (var h = 0; h < 7; h++) { if (blocksValues[h].includes('Not Compliant')) { return "Not Compliant"; } } }
            if (g === 1) { for (var h = 0; h < 7; h++) { if (blocksValues[h].includes('Partly')) { return "Partly"; } } }
            if (g === 2) { for (var h = 0; h < 7; h++) { if (blocksValues[h].includes('Mostly')) { return "Mostly"; } } }
            if (g === 3) { for (var h = 0; h < 7; h++) { if (blocksValues[h].includes('Fully')) { return "Fully"; } } }
        }
    }

    // ADJUST GLOBAL ACM TEXT
    overallacmtext.innerText += overallacm = setglobalACM();
    if (overallacm === "Not Compliant") {
        coverExt_1.style.display = 'inherit';
    } else if (overallacm === "Partly") {
        coverExt_2.style.display = 'inherit';
    } else if (overallacm === "Mostly") {
        coverExt_3.style.display = 'inherit';
    } else if (overallacm === "Mostly") {
        coverExt_4.style.display = 'inherit';
    }

    // Populate table - third column
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[7].innerHTML = blocksValues[i - 1];
    }

    // // Populate table - second column
    for (var i = 1; i < table.rows.length; i++) {
        if (overallacm === "Not Compliant") {
            if (!table.rows[i].cells[7].innerHTML.includes('Not Compliant')) {
                table.rows[i].cells[2].style.display = 'none';
                table.rows[i].cells[3].style.display = 'none';
                table.rows[i].cells[4].style.display = 'none';
                table.rows[i].cells[5].style.display = 'none';
                table.rows[i].cells[6].style.display = 'none';
            } else if (table.rows[i].cells[7].innerHTML.includes('Not Compliant')) {
                table.rows[i].cells[1].style.display = 'none';
                table.rows[i].cells[3].style.display = 'none';
                table.rows[i].cells[4].style.display = 'none';
                table.rows[i].cells[5].style.display = 'none';
                table.rows[i].cells[6].style.display = 'none';
            }
        } else if (overallacm === "Partly") {
            if (!table.rows[i].cells[7].innerHTML.includes('Partly')) {
                table.rows[i].cells[1].style.display = 'none';
                table.rows[i].cells[2].style.display = 'none';
                table.rows[i].cells[4].style.display = 'none';
                table.rows[i].cells[5].style.display = 'none';
                table.rows[i].cells[6].style.display = 'none';
            } else if (table.rows[i].cells[7].innerHTML.includes('Partly')) {
                table.rows[i].cells[1].style.display = 'none';
                table.rows[i].cells[2].style.display = 'none';
                table.rows[i].cells[3].style.display = 'none';
                table.rows[i].cells[5].style.display = 'none';
                table.rows[i].cells[6].style.display = 'none';
            }
        } else if (overallacm === "Mostly") {
            if (!table.rows[i].cells[7].innerHTML.includes('Mostly')) {
                table.rows[i].cells[1].style.display = 'none';
                table.rows[i].cells[2].style.display = 'none';
                table.rows[i].cells[3].style.display = 'none';
                table.rows[i].cells[4].style.display = 'none';
                table.rows[i].cells[6].style.display = 'none';
            } else if (table.rows[i].cells[7].innerHTML.includes('Mostly')) {
                table.rows[i].cells[1].style.display = 'none';
                table.rows[i].cells[2].style.display = 'none';
                table.rows[i].cells[3].style.display = 'none';
                table.rows[i].cells[4].style.display = 'none';
                table.rows[i].cells[5].style.display = 'none';
            }
        }
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