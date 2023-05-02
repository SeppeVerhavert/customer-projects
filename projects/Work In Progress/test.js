docReady(function () {

    $('#widget_4 .kpi-container').detach().appendTo('#page_2 .status-graph');
    $('#widget_5 .kpi-container').detach().appendTo('#page_2 .small-graph1');
    $('#widget_6 .kpi-container').detach().appendTo('#page_2 #small-graph2');
    $('#widget_7 .kpi-container').detach().appendTo('#page_2 #small-graph3');
    $('#widget_8 .kpi-container').detach().appendTo('#page_2 #small-graph4');
    $('#widget_9 .kpi-container').detach().appendTo('#page_2 #small-graph5');
    $('#widget_12 .kpi-container').detach().appendTo('#page_3 #section-graph1');
    $('#widget_13 .kpi-container').detach().appendTo('#page_3 #section-graph2');
    $('#widget_14 .kpi-container').detach().appendTo('#page_3 #section-graph3');
    $('#widget_15 .kpi-container').detach().appendTo('#page_3 #section-graph4');
    $('#widget_18 .kpi-container').detach().appendTo('#page_4 #section-graph5');
    $('#widget_21 .chart-wrapper').detach().appendTo('#page_5 .spider-graph');

    const percent = parseInt(document.getElementById('percent').innerText);
    const tenant = parseInt(document.getElementById('tenant').innerText);
    const mark = parseInt(document.getElementById('mark').innerText);
    const prop = parseInt(document.getElementById('prop').innerText);
    const lease = parseInt(document.getElementById('lease').innerText);
    const report = parseInt(document.getElementById('report').innerText);

    var commaCheck = false;
    var andCheck = false;
    let text = "";

    if (percent >= 80) {
        document.getElementById('status-stage').innerHTML += ` <strong>Voll Entwickelt</strong>`;
        document.getElementById('status-text').innerHTML += ` Wir beglÃ¼ckwÃ¼nschen Sie auf dem Weg der digitalen Transformation Ihrer Asset Managementprozesse, ein fortgeschrittenes Stadium erreicht zu haben.Nur wenige Organisationen haben diesen Grad von digitaler Transformationen erreicht und auch hier kommt es vor, dass bestimmte Elemente verbessert werden kÃ¶nnen. Daher ist es wichtig, dass Sie die richtigen Tools im Einsatz haben, um eine erstklassige Asset Management Funktion erfÃ¼llen zu kÃ¶nnen. `;
    } else if (percent >= 40 && percent < 80) {
        document.getElementById('status-stage').innerHTML += ` <strong>In Entwicklung</strong>`;
        document.getElementById('status-text').innerHTML += `MÃ¶glicherweise verfÃ¼gt Ihr Unternehmen bereits Ã¼ber digitale Prozesse, die im Immobilien Asset Management erforderlich sind, aber die FunktionalitÃ¤ten befinden sich in einem Entwicklungsstadium und werden nicht ganzheitlich End-to-End integriert. Sie funktionieren als InsellÃ¶sung innerhalb Ihres Unternehmens. Excel ist im grossen Masse noch im Einsatz, doch es erlaubt nur schwierig Datengetriebene Entscheidungen zu treffen. `;
    } else {
        document.getElementById('status-stage').innerHTML += ` <strong>In Entstehung</strong>`;
        document.getElementById('status-text').innerHTML += `Wenn Ihre Asset Management Prozesse noch im Anfangsstadium der digitalen Transformation sind, lassen sich generell Defizite in Ihren Asset Management AktivitÃ¤ten auffinden.  Mangelnde DatenqualitÃ¤t, langwierige und zeitaufwÃ¤ndige manuelle Prozesse und Reports,  sowie das Fehlen von Datengetriebenen Entscheidungen sind nur einige Beispiele hierfÃ¼r. Um nachhaltige Mehrwerte fÃ¼r Ihr Unternehmen zu generieren und ihren Businessneeds effizient entgegenzukommen, ist ein umfassender Ansatz notwendig.`;
    }
    if (tenant >= 80) {
        document.getElementById('tenant-text').innerHTML += `<div class="category"><strong>Status Voll Entwickelt- </strong>Ihre Mietermanagement Prozesse entsprechen bewÃ¤hrten Methoden. Zur Optimierung Ihres Mietermanagements kÃ¶nnte das Feedback Ihrer Mieter zusÃ¤tzlich durch customisierte Surveys eingeholt werden.</div>`
    } else if (tenant < 80 && tenant >= 40) {
        document.getElementById('tenant-text').innerHTML += `<div class="category"><strong>Status In Entwicklung - </strong>Um Ineffizienzen in Ihren Mietermanagement Prozessen zu beseitigen, schlagen wir als die "Best Practice" vor, eine integrierte LÃ¶sung zu nutzen, die es Ihnen ermÃ¶glicht, Mieter auf Konzernebene und auf Portfolioebene zu aggregieren, um dadurch eine zentralisierte Uebersicht aller Mieter, der Ansprechpartner sowie Risikokennzahlen zu haben. Damit kÃ¶nnen die VerlÃ¤ngerungen Ihrer Bestandsmieter proaktiver gemanagt werden.</div>`
    } else {
        document.getElementById('tenant-text').innerHTML += `<div class="category"><strong>Status In Entstehung - </strong>Es gibt ein klares Defizit in Ihrem Asset Management Prozessen in Bezug auf Mietermanagement. Die LÃ¶sung wÃ¤re eine integrierte Plattform, die Ihnen ermÃ¶glicht, Ihre Mieter auf Portfolioebene zu aggregieren, Konzernverflechtungen zu erkennen, Kontaktpersonen und Risiken, sowie die Mieterzufriedenheit zentral zu managen. Dies wÃ¼rde Ihnen ermÃ¶glichen, Ihre Mieter durch proaktives Tenant Relationship langfristig zu binden.</div>`
    }
    if (mark >= 80) {
        document.getElementById('mark-text').innerHTML += `<div class="category"><strong>Status Voll Entwickelt- </strong>Ihre Vermietungs- und Asset Management Prozesse sind mit den Best Practices im Einklang.</div>`
    } else if (mark < 80 && mark >= 40) {
        document.getElementById('mark-text').innerHTML += `<div class="category"><strong>Status In Entwicklung - </strong>Es gibt Ineffizienzen in Ihren Vermietungs und Marketing Prozessen. Die Best Practice ist eine End-to-end Vermietungsplattform zu nutzen, um VerfÃ¼gbarkeiten, Marketing AktivitÃ¤ten und das Management Ihrer Vermietungschancen zentral in einem Ort zu managen. Ihr System mÃ¼sste mit anderen Prozesschritten wie die Erstellung von Mietangeboten und Freigaben von MietvertrÃ¤gen integriert sein.</div>`
    } else {
        document.getElementById('mark-text').innerHTML += `<div class="category"><strong>Status In Entstehung - </strong>Es gibt klare Defizite in Ihren Asset Management Prozessen in Bezug auf Vermietung- und Marketing Management. Wie empfehlen eine End-to-end Vermietungsplattform zu installieren, um VerfÃ¼gbarkeiten, Marketing AktivitÃ¤ten und das Management Ihrer Vermietungschancen zentral in einem Ort zu managen. In Ihrem  System mÃ¼sste Prozesschritte wie die Erstellung von Mietangeboten und die Freigabe von MietvertrÃ¤gen integriert sein.</div>`
    }
    if (prop >= 80) {
        document.getElementById('prop-text').innerHTML += `<div class="category"><strong>Status Voll Entwickelt- </strong>Ihre Prozesse zur Erstellung und Genehmigung von Mietangeboten stehen mit den Best Practices im Einklang.</div>`
    } else if (prop < 80 && prop >= 40) {
        document.getElementById('prop-text').innerHTML += `<div class="category"><strong>Status In Entwicklung - </strong>Es gibt Inefizienzen in Ihren Prozessen in Bezug auf die Erstellung und  dieFreigabe von Mietangeboten. Die Best Practice ist eine integrierte Asset Management Plattform zu nutzen, um Ihren Vermietungsprozess End-to-End auf einer Plattform ohne SystembrÃ¼che zu managen inkl. der Erstellung von Mietvertragsdokumenten.</div>`
    } else {
        document.getElementById('prop-text').innerHTML += `<div class="category"><strong>Status In Entstehung - </strong>Es gibt klare Defizite in Ihren Prozessen in Bezug auf die Erstellung und Freigaben von Mietangeboten. Die Best Practice ist eine integrierte Asset Management Plattform zu nutzen, um Ihre Vermietungsprozess End-to-End auf einer Plattform ohne SystembrÃ¼che zu managen inkl. der Erstellung von Mietvertragsdokumenten.</div>`
    }
    if (lease >= 80) {
        document.getElementById('lease-text').innerHTML += `<div class="category"><strong>Status Voll Entwickelt- </strong>Ihr Prozess in Bezug auf die Erstellung von MietvertrÃ¤gen ist mit den Best Practices im Einklang.
           </div>`
    } else if (lease < 80 && lease >= 40) {
        document.getElementById('lease-text').innerHTML += `<div class="category"><strong>Status In Entwicklung - </strong>Es gibt klare Inefizienzen in Ihren Prozessen in Bezug auf die Erstellung von MietvertrÃ¤gen. Die Best Practice ist ein einfach bedienbarer "Out oft the box" Mietvertragsgenerator zu nutzen. Das Tool beinhaltet Funktionen, um komplexe Vertragsregelwerke zu automatisieren. Das Tool mÃ¼sste anhand Drag ein Drop Funktionen einfach konfigurierbar sein, und in andere Prozessschritten, wie zum Beispiel Freigaben und Vermietungschancen integriert sein. </div>`
    } else {
        document.getElementById('lease-text').innerHTML += `<div class="category"><strong>Status In Entstehung - </strong>Es gibt klare Defizite in Ihren Prozessen in Bezug auf die Erstellung von MietvertrÃ¤gen. Die Best Practice ist ein einfach bedienbarer "Out oft the box" Mietvertragsgenerator zu nutzen. Das Tool beinhaltet Funktionen, um komplexe Vertragsregelwerke zu automatisieren. Das Tool mÃ¼sste anhand Drag ein Drop Funktionen einfach konfigurierbar sein, und in andere Prozessschritten, wie zum Beispiel Freigaben und Vermietungschancen integriert sein. </div>`
    }
    if (report >= 80) {
        document.getElementById('report-text').innerHTML += `<div class="category"><strong>Status Voll Entwickelt- </strong>Ihre Reporting Prozesse sind mit Best Practices im Einklang. Um Ihre Asset Management Funktion noch weiter zu verbessern, wÃ¤re es wichtig zu determinieren, ob Sie Ihre Analytics einfach anhand eines Low-Code Ansatz konfigurieren kÃ¶nnen und einzuschÃ¤tzen, inwiefern die gewonnenen Insights einen Mehrwert fÃ¼r Ihr Business bringen.</div>`
    } else if (report < 80 && report >= 40) {
        document.getElementById('report-text').innerHTML += `<div class="category"><strong>Status In Entwicklung - </strong>Es gibt Inefizienzen in Ihren Reporting und Analytics Prozessen. Best Practices ist eine LÃ¶sung einzusetzen, die flexible Auswertungen ermÃ¶glicht und dadurch fÃ¼r Ihre spezifischen Anforderungen und Business Situationen Insights zu generieren. Das Tool mÃ¼sste konfigurierbar sein und Ihnen Insights auf Portfolio und Asset Ebene zu ermÃ¶glichen. Dies beinhaltet zum Beispiel Analytics Ã¼ber Mieter, LeerstÃ¤nde und die Vermietungspipeline . Die LÃ¶sung sollte Ihnen ebenfalls ermÃ¶glichen,  Ihre Prozesse im Asset Management zu messen (z.B. Durchschnittliche Abschlussdauer einer Vermietungschance, Prolongationsraten, Vermietungsperformance vs. Benchmark, usw.). Dies wÃ¼rde Ihnen erlauben, Ihre Asset Management Performance zu quantifizieren.</div>`
    } else {
        document.getElementById('report-text').innerHTML += `<div class="category"><strong>Status In Entstehung - </strong>Es gibt klare Defizite in Ihren Reporting und Analytics Prozessen. Best Practices ist eine LÃ¶sung einzusetzen, die flexible Auswertungen ermÃ¶glicht und dadurch fÃ¼r Ihre spezifischen Anforderungen und Business Situation Insights zu generieren. Das Tool mÃ¼sste konfigurierbar sein und Ihnen Insights auf Portfolio und Asset Ebene geben. Dies wÃ¤ren z.B.  Analytics Ã¼ber Mieter, LeerstÃ¤nde und der Vermietungspipeline. Dadurch kÃ¶nnten Ihre Prozesse im Asset Management  gemessen werden (z.B. Durchschnittliche Abschlussdauer einer Vermietungschance, Prolongationsraten, Vermietungsperformance vs. Benchmark, usw.). Dies wÃ¼rde Ihnen ermÃ¶glichen Ihre Asset Management Performance zu quantifizieren.</div>`
    }

    var topScore = (percent == 100);
    var lowTenant = (tenant < 100);
    var lowMark = (mark < 100);
    var lowProp = (prop < 100);
    var lowLease = (lease < 100);
    var lowReport = (report < 100);

    var afterTenant = 0;
    var afterMark = 0;
    var afterProp = 0;
    var afterLease = 0;

    if (lowMark) {
        afterTenant += 1;
    }
    if (lowProp) {
        afterTenant += 1;
        afterMark += 1;
    }
    if (lowLease) {
        afterTenant += 1;
        afterMark += 1;
        afterProp += 1;
    }
    if (lowReport) {
        afterTenant += 1;
        afterMark += 1;
        afterProp += 1;
        afterLease += 1;
    }

    if (topScore) {
        text += " Your setup in the field of asset management software is at an advanced stage compared to other real estate asset managers. You have achieved the maximum score of XXX % in the areas of Tenant Management, Lease & Marketing, Proposals & Approvals, Lease Agreements and Reporting & Analytics, but even here there is room for improvement in certain elements. It is therefore important that you continuously adapt your asset management software solution to the most advanced standard.";
    } else {
        text = " For your setup in the area of asset management software in the areas of ";

        if (lowTenant) {
            text += "Mieter Management";
            commaCheck = true;
        }
        if (lowMark) {
            if (commaCheck) {
                if (afterTenant == 1) {
                    text += " und ";
                } else {
                    text += ", ";
                }
            }
            commaCheck = true;
            text += "Vermietung & Vermarktung";
        }
        if (lowProp) {
            if (commaCheck) {
                if (afterMark == 1) {
                    text += " und ";
                } else {
                    text += ", ";
                }
            }
            commaCheck = true;
            text += "Mietangebote & Genehmigungen";
        }
        if (lowLease) {
            if (commaCheck) {
                if (afterProp == 1) {
                    text += " und ";
                } else {
                    text += ", ";
                }
            }
            commaCheck = true;
            text += "Mietvertragsgenerator";
        }
        if (lowReport) {
            if (commaCheck) {
                if (afterLease == 1) {
                    text += " und ";
                } else {
                    text += ", ";
                }
            }
            text += "Reporting & Analytics";
        }

        text += " there is extensive potential for optimisation. It is therefore important that you continuously software solution in asset management to the most advanced standard.";
    }
    document.getElementById('spider-text').innerHTML += text;






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