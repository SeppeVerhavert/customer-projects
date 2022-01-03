docReady(function() {

    $('#widget_14').detach().appendTo('.categories_chart');

    var q4 = document.getElementById('q4').innerText;
    if (q4) {
        if (q4 == "Unsere Entscheidungen werden allein aufgrund periodischer Planung getroffen.") {
            document.getElementById('q4-description').innerHTML = "Erst Entscheidungen mÃ¶glichst in Echtzeit treffen zu kÃ¶nnen erÃ¶ffnet Ihnen die MÃ¶glichkeiten eines Smart Manufacturing. Die Reaktionszeit wird sich verringern und es wird Ihnen leichter fallen, auf sich verÃ¤ndernde Gegebenheiten zielgerichtet zu reagieren. Um die richtigen Entscheidungen in Echtzeit treffen zu kÃ¶nnen benÃ¶tigen Sie eine passende Sammlung und Veredelung von vorverarbeiteten Unternehmensdaten.";
        } else if (q4 == "Unsere Entscheidungsgrundlage basiert auf durch Unternehmenssoftware (SAP, BI- Suite, etc.) erstellten Reports.") {
            document.getElementById('q4-description').innerHTML = "Eine echte, wertstiftende Verwendung von Ã¼ber einzelne Assets gesammelte Daten ist in den seltensten FÃ¤llen trivial. Erst eine tiefergehende Analyse dieser Daten und eine Anreicherung mit kontextuellen Informationen generieren aus den Daten wertvolles Wissen fÃ¼r eine bessere Entscheidungsfindung.";
        } else if (q4 == "Wir haben Data-Mining AnsÃ¤tze im Einsatz und nutzen die Resultate fÃ¼r die Entscheidungsfindung in Echtzeit.") {
            document.getElementById('q4-description').innerHTML = "Sie haben bzgl. der Aufbereitung und Veredelung von Unternehmensdaten bereits sehr gutes Know-How in der Organisation aufgebaut und verstehen deren Business-Nutzen. An dieser Stelle ist es wichtig, dass die Daten benutzerzentriert und benutzerfreundlich aufbereitet und angezeigt werden, sodass Entscheidungen schnell und nachvollziehbar getroffen werden kÃ¶nnen.";
        }
    }

    var q5 = document.getElementById('q5').innerText;
    if (q5) {
        if (q5 == "Smart Manufacturing AnsÃ¤tze sind mir wenig bekannt und ich kann mir nur wenige oder keine Use Cases vorstellen.") {
            document.getElementById('q5-description').innerHTML = "Die richtigen Use Cases mit einem klaren Bezug zum Kern Ihrer GeschÃ¤ftstÃ¤tigkeit sind wichtig, um die Potentiale eines Smart Manufacturing zu nutzen. Anhand von Use Casing Workshops kÃ¶nnen wir gemeinsam passende AnwendungsfÃ¤lle fÃ¼r Ihr Unternehmen identifizieren.";
        } else if (q5 == "Wir sind in unserem Unternehmen mit Smart Manufacturing vertraut, allerdings haben wir ich noch nicht allzu viele passende Use Cases fÃ¼r unser Unternehmen im Blick.") {
            document.getElementById('q5-description').innerHTML = "Use Cases mÃ¼ssen auf ihre Risiken fÃ¼r einen sicheren Betrieb und ihre Chancen fÃ¼r den WertschÃ¶pfungsprozess hin geprÃ¼ft und bewertet werden. Eine solche Detailanalyse fÃ¼hrt aus unserer Erfahrung oft dazu, dass sich weitere, vielversprechende Use Cases entwickeln lassen. Die nachgelagerte, konsequente Bewertung von befÃ¤higenden Technologien bildet abschliessend eine gute Basis, um nachvollziehbare und erfolgsversprechende Investitionsentscheide zu treffen.";
        } else if (q5 == "Wir haben mehrere Smart Manufacturing Use Cases umgesetzt und Ã¼berprÃ¼fen weitere auf ihre Werthaltigkeit und  Umsetzbarkeit.") {
            document.getElementById('q5-description').innerHTML = "AusgewÃ¤hlte Use Cases mÃ¼ssen noch auf ihre konkrete Werthaltigkeit geprÃ¼ft werden. Ausserdem macht es Sinn, die verschiedenen Use Cases in einer Laborumgebung zu testen, bevor sie auf das gesamte Unternehmen skaliert werden.";
        }
    }

    var q6 = document.getElementById('q6').innerText;
    if (q6) {
        if (q6 == "Wir sammeln keine Produktionsdaten und Wartungsarbeiten planen wir periodisch.") {
            document.getElementById('q6-description').innerHTML = "Predictive Maintenance ermÃ¶glicht vorausschauend Wartungsarbeiten an Produktionsanlagen so zu planen, dass es nicht zu ungewollten Stillstandszeiten in der Produktion kommt und eine Wartung ressourceneffizient erfolgt. Optimal ausgelastete Ressourcen sind Voraussetzung fÃ¼r eine effiziente und nachhaltige Produktion.";
        } else if (q6 == "Wir sammeln Produktionsdaten, verwenden diese jedoch weder bei der Ressourcenplanung noch bei der Planung von durchzufÃ¼hrenden Wartungsarbeiten.") {
            document.getElementById('q6-description').innerHTML = "Die in Ihrem Unternehmen gesammelten Daten kÃ¶nnen nur dann einen Beitrag zur WertschÃ¶pfung stiften, wenn diese strukturiert aufbereitet und konsequent ausgewertet werden. Wir empfehlen Ihnen, eine Analyse von Quellen, generierten Daten und mÃ¶glicher Verwendungszwecke im Produktionsprozess zu erstellen. Die Potentiale von Predictive Maintenance und Ressourcenoptimierung kÃ¶nnen somit ausgenutzt werden.";
        } else if (q6 == "Wir verwenden unsere Produktionsdaten, um den besten Zeitpunkt fÃ¼r die Wartung unserer Produktionsanlagen zu bestimmen. Unsere Ressourcen sind optimal ausgelastet.") {
            document.getElementById('q6-description').innerHTML = "Da Sie die Potentiale aus Predictive Maintenance bereits nutzen, empfehlen wir Ihnen ein durchgÃ¤ngiges Visualisierung- und Monitoringkonzept. Damit kann sichergestellt werden, dass Informationen an der richtigen Stelle zum richtigen Zeitpunkt von betroffenen Mitarbeitern eingesehen werden kÃ¶nnen. Die durchdachte und stringent visualisierte Datenbasis ist eine wertvolle Grundlage fÃ¼r das Treffen von wichtigen Unternehmensentscheidungen in Echtzeit.";
        }
    }

    var q7 = document.getElementById('q7').innerText;
    if (q7) {
        if (q7 == "FÃ¼r die QualitÃ¤tssicherung werden keine intelligenten (keine Industrie 4.0 geeigneten) Systeme verwendet.") {
            document.getElementById('q7-description').innerHTML = "Smart Quality Gates ermÃ¶glichen automatisiertes Feedback zur Testanalyse. Es ist empfehlenswert, die vom Menschen manuell durchgefÃ¼hrten QualitÃ¤tskontrollen durch intelligente Systeme automatisiert durchfÃ¼hren zu lassen.";
        } else if (q7 == "Unsere QualitÃ¤tssicherung verlÃ¤uft maschinengestÃ¼tzt, d.h., automatisiert, jedoch erst als abschliessender Schritt zur ÃƒÆ’Ã…â€œberprÃ¼fung der QualitÃ¤t des fertiggestellten Produkts.") {
            document.getElementById('q7-description').innerHTML = "Im Falle einer erfolgreichen Implementierung von Smart Quality Gates werden Ressourcen fÃ¼r anderweitige Verwendung freigegeben, was dem Unternehmenserfolg zugutekommen wird.";
        } else if (q7 == "Unsere QualitÃ¤tssicherung verlÃ¤uft maschinengestÃ¼tz. Es werden Massnahmen in der laufenden Produktion eingeleitet, sollten Produkte die vorgegebenen QualitÃ¤tskriterien nicht erfÃ¼llen.") {
            document.getElementById('q7-description').innerHTML = "Dennoch muss man sich die Frage stellen, was mit Produkten, welche die QualitÃ¤tsanforderungen nicht erfÃ¼llt haben in Weiteren geschehen soll, ohne dass die restliche Produktion beeintrÃ¤chtigt wird.";
        }
    }

    var q8 = document.getElementById('q8').innerText;
    if (q8) {
        if (q8 == "Wir haben MÃ¼he, eine effektive Sicherheitsinfrastruktur aufzusetzen.") {
            document.getElementById('q8-description').innerHTML = "Damit sich Ihre Kunden auf Ihre Dienstleistungen verlassen kÃ¶nnen, ist eine wohldurchdachte Cyber Security Strategie fÃ¼r Ihre Organisation unabdingbar. Im zurÃ¼ckliegenden Jahr hat sich zum Beispiel gezeigt, dass die Anzahl von Ransomware Angriffen auf Klein- und Kleinstunternehmen exponentiell gestiegen ist. Solche Unternehmen sind oft wenig oder gar nicht auf solche Angriffe vorbereitet und nur unzureichend geschÃ¼tzt. Wir empfehlen Ihnen einen Workshop, um Ihre Ãƒâ€šÃ‚Â«Kronjuwelen im UnternehmenÃƒâ€šÃ‚Â» zu identifizieren wie auch zu erkennen, wie diese zu schÃ¼tzen sind.";
        } else if (q8 == "Wir sind konform mit den regulatorischen Anforderungen, haben darÃ¼ber  hinaus jedoch keine weiteren Massnahmen unternommen.") {
            document.getElementById('q8-description').innerHTML = "Cyber Security hat zunehmend an Aufmerksamkeit gewonnen und wir gehen davon aus, dass Sie bereits sehr gut orientiert und sich mÃ¶glicher Angriffsvektoren bewusst sind. Wenn Sie Ihre Mitarbeiter auch hinsichtlich potentieller Angriffe sensibilisiert haben, noch besser. Unserer Erfahrung nach fehlt oft das technische HÃ¤rten einer Infrastruktur, um mit Ã¼berschaubarem Aufwand eine zusÃ¤tzliche Schicht an Sicherheit zu gewinnen.";
        } else if (q8 == "Wir haben ein Sicherheitsprogramm etabliert, welches sowohl unsere Produktion als auch die GeschÃ¤ftsprozesse, Infrastruktur, Daten, Schnittstellen als auch Applikationen gegen bekannte und denkbare Angriffe schÃ¼tzt.") {
            document.getElementById('q8-description').innerHTML = "Unserer Erfahrung nach sind oftmals in Unternehmen wichtige Details bei der Einrichtung von Cyber-Sicherheitsprogrammen vernachlÃ¤ssigt worden. Denn genau diese Details haben haben betroffene Kunden verwundbar gemacht. Lassen Sie uns Ihre Ãƒâ€šÃ‚Â«Security-PostureÃƒâ€šÃ‚Â» von einem Experten prÃ¼fen und Sie erhalten eine externe Sicht darauf, inwiefern die Organisation tatsÃ¤chlich gegen Angriffe abgesichert ist.";
        }
    }

    var q9 = document.getElementById('q9').innerText;
    if (q9) {
        if (q9 == "Wir haben keine solche Massnahmen eingefÃ¼hrt, bzw. ich bin mir solcher Massnahmen nicht bewusst.") {
            document.getElementById('q9-description').innerHTML = "Mit einem Zero Downtime-orientierten Verhalten kÃ¶nnen Sie kostspielige Leerzeiten vermeiden und Ressourcen fÃ¼r ihr KerngeschÃ¤ft einsetzen. Unserer Erfahrung nach sind Stillstandzeiten einer der grÃ¶ssten Kostentreiber bei Klein- und Mittelunternehmen. Eine Simulation, um das Potential fÃ¼r Zero Downtime in Ihrer Fertigung zu bewerten ist wichtig.";
        } else if (q9 == "Wir haben diesbezÃ¼glich vereinzelt Massnahmen und Workarounds eingefÃ¼hrt.") {
            document.getElementById('q9-description').innerHTML = "Vermutlich Sind Sie umfassend informiert und konnten wie viele Unternehmen in der Branche bereits wichtige Massnahmen einfÃ¼hren, um fÃ¼r Ihr Unternehmen kostspielige Stillstandzeiten zu vermeiden. An dieser Stelle kommt das dynamische Verhalten ins Spiel, um Betriebszeiten mÃ¶glichst ohne Unterbrechung und UnabhÃ¤ngig von der LosgrÃ¶sse zu gestalten. Wir empfehlen eine tiefergreifende Analyse, um das Betriebsverhalten unter verschiedenen Parametern zu verstehen. Basierend hierauf kÃ¶nnen die passenden Massnahmen getroffen werden.";
        } else if (q9 == "Wir haben durchgehend fÃ¼r die gesamte WertschÃ¶pfung ein Konzept umgesetzt, welches Downtimes auf ein Minimum reduziert.") {
            document.getElementById('q9-description').innerHTML = "Da sie mit Ihrem optimierten Betrieb das Fundament fÃ¼r die Weiterentwicklung Ihrer Organisation gelegt haben, geht es nun darum Downtimes vorherzusehen. Durch schnelle Entscheidungsgrundlagen, welche auf analysierten Daten basieren, kÃ¶nnen Sie beispielsweise Lastzeiten in der Produktion prÃ¤ventiv auf planbare Regelbetriebszeiten verteilen.";
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