docReady(function() {

    $('#widget_14').detach().appendTo('.categories_chart');

    var q4 = document.getElementById('q4').innerText;
    if (q4) {
        if (q4 == "Unsere Entscheidungen werden allein aufgrund periodischer Planung getroffen.") {
            document.getElementById('q4-description').innerHTML = "Erst Entscheidungen möglichst in Echtzeit treffen zu können eröffnet Ihnen die Möglichkeiten eines Smart Manufacturing. Die Reaktionszeit wird sich verringern und es wird Ihnen leichter fallen, auf sich verändernde Gegebenheiten zielgerichtet zu reagieren. Um die richtigen Entscheidungen in Echtzeit treffen zu können benötigen Sie eine passende Sammlung und Veredelung von vorverarbeiteten Unternehmensdaten.";
        } else if (q4 == "Unsere Entscheidungsgrundlage basiert auf durch Unternehmenssoftware (SAP, BI- Suite, etc.) erstellten Reports.") {
            document.getElementById('q4-description').innerHTML = "Eine echte, wertstiftende Verwendung von über einzelne Assets gesammelte Daten ist in den seltensten Fällen trivial. Erst eine tiefergehende Analyse dieser Daten und eine Anreicherung mit kontextuellen Informationen generieren aus den Daten wertvolles Wissen für eine bessere Entscheidungsfindung.";
        } else if (q4 == "Wir haben Data-Mining Ansätze im Einsatz und nutzen die Resultate für die Entscheidungsfindung in Echtzeit.") {
            document.getElementById('q4-description').innerHTML = "Sie haben bzgl. der Aufbereitung und Veredelung von Unternehmensdaten bereits sehr gutes Know-How in der Organisation aufgebaut und verstehen deren Business-Nutzen. An dieser Stelle ist es wichtig, dass die Daten benutzerzentriert und benutzerfreundlich aufbereitet und angezeigt werden, sodass Entscheidungen schnell und nachvollziehbar getroffen werden können.";
        }
    }

    var q5 = document.getElementById('q5').innerText;
    if (q5) {
        if (q5 == "Smart Manufacturing Ansätze sind mir wenig bekannt und ich kann mir nur wenige oder keine Use Cases vorstellen.") {
            document.getElementById('q5-description').innerHTML = "Die richtigen Use Cases mit einem klaren Bezug zum Kern Ihrer Geschäftstätigkeit sind wichtig, um die Potentiale eines Smart Manufacturing zu nutzen. Anhand von Use Casing Workshops können wir gemeinsam passende Anwendungsfälle für Ihr Unternehmen identifizieren.";
        } else if (q5 == "Wir sind in unserem Unternehmen mit Smart Manufacturing vertraut, allerdings haben wir ich noch nicht allzu viele passende Use Cases für unser Unternehmen im Blick.") {
            document.getElementById('q5-description').innerHTML = "Use Cases müssen auf ihre Risiken für einen sicheren Betrieb und ihre Chancen für den Wertschöpfungsprozess hin geprüft und bewertet werden. Eine solche Detailanalyse führt aus unserer Erfahrung oft dazu, dass sich weitere, vielversprechende Use Cases entwickeln lassen. Die nachgelagerte, konsequente Bewertung von befähigenden Technologien bildet abschliessend eine gute Basis, um nachvollziehbare und erfolgsversprechende Investitionsentscheide zu treffen.";
        } else if (q5 == "Wir haben mehrere Smart Manufacturing Use Cases umgesetzt und überprüfen weitere auf ihre Werthaltigkeit und Umsetzbarkeit.") {
            document.getElementById('q5-description').innerHTML = "Ausgewählte Use Cases müssen noch auf ihre konkrete Werthaltigkeit geprüft werden. Ausserdem macht es Sinn, die verschiedenen Use Cases in einer Laborumgebung zu testen, bevor sie auf das gesamte Unternehmen skaliert werden.";
        }
    }

    var q6 = document.getElementById('q6').innerText;
    if (q6) {
        if (q6 == "Wir sammeln keine Produktionsdaten und Wartungsarbeiten planen wir periodisch.") {
            document.getElementById('q6-description').innerHTML = "Predictive Maintenance ermöglicht vorausschauend Wartungsarbeiten an Produktionsanlagen so zu planen, dass es nicht zu ungewollten Stillstandszeiten in der Produktion kommt und eine Wartung ressourceneffizient erfolgt. Optimal ausgelastete Ressourcen sind Voraussetzung für eine effiziente und nachhaltige Produktion.";
        } else if (q6 == "Wir sammeln Produktionsdaten, verwenden diese jedoch weder bei der Ressourcenplanung noch bei der Planung von durchzuführenden Wartungsarbeiten.") {
            document.getElementById('q6-description').innerHTML = "Die in Ihrem Unternehmen gesammelten Daten können nur dann einen Beitrag zur Wertschöpfung stiften, wenn diese strukturiert aufbereitet und konsequent ausgewertet werden. Wir empfehlen Ihnen, eine Analyse von Quellen, generierten Daten und möglicher Verwendungszwecke im Produktionsprozess zu erstellen. Die Potentiale von Predictive Maintenance und Ressourcenoptimierung können somit ausgenutzt werden.";
        } else if (q6 == "Wir verwenden unsere Produktionsdaten, um den besten Zeitpunkt für die Wartung unserer Produktionsanlagen zu bestimmen. Unsere Ressourcen sind optimal ausgelastet.") {
            document.getElementById('q6-description').innerHTML = "Da Sie die Potentiale aus Predictive Maintenance bereits nutzen, empfehlen wir Ihnen ein durchgängiges Visualisierung- und Monitoringkonzept. Damit kann sichergestellt werden, dass Informationen an der richtigen Stelle zum richtigen Zeitpunkt von betroffenen Mitarbeitern eingesehen werden können. Die durchdachte und stringent visualisierte Datenbasis ist eine wertvolle Grundlage für das Treffen von wichtigen Unternehmensentscheidungen in Echtzeit.";
        }
    }

    var q7 = document.getElementById('q7').innerText;
    if (q7) {
        if (q7 == "Für die Qualitätssicherung werden keine intelligenten (keine Industrie 4.0 geeigneten) Systeme verwendet.") {
            document.getElementById('q7-description').innerHTML = "Smart Quality Gates ermöglichen automatisiertes Feedback zur Testanalyse. Es ist empfehlenswert, die vom Menschen manuell durchgeführten Qualitätskontrollen durch intelligente Systeme automatisiert durchführen zu lassen.";
        } else if (q7 == "Unsere Qualitätssicherung verläuft maschinengestützt, d.h., automatisiert, jedoch erst als abschliessender Schritt zur Überprüfung der Qualität des fertiggestellten Produkts.") {
            document.getElementById('q7-description').innerHTML = "Im Falle einer erfolgreichen Implementierung von Smart Quality Gates werden Ressourcen für anderweitige Verwendung freigegeben, was dem Unternehmenserfolg zugutekommen wird.";
        } else if (q7 == "Unsere Qualitätssicherung verläuft maschinengestütz. Es werden Massnahmen in der laufenden Produktion eingeleitet, sollten Produkte die vorgegebenen Qualitätskriterien nicht erfüllen.") {
            document.getElementById('q7-description').innerHTML = "Dennoch muss man sich die Frage stellen, was mit Produkten, welche die Qualitätsanforderungen nicht erfüllt haben in Weiteren geschehen soll, ohne dass die restliche Produktion beeinträchtigt wird.";
        }
    }

    var q8 = document.getElementById('q8').innerText;
    if (q8) {
        if (q8 == "Wir haben Mühe, eine effektive Sicherheitsinfrastruktur aufzusetzen.") {
            document.getElementById('q8-description').innerHTML = "Damit sich Ihre Kunden auf Ihre Dienstleistungen verlassen können, ist eine wohldurchdachte Cyber Security Strategie für Ihre Organisation unabdingbar. Im zurückliegenden Jahr hat sich zum Beispiel gezeigt, dass die Anzahl von Ransomware Angriffen auf Klein- und Kleinstunternehmen exponentiell gestiegen ist. Solche Unternehmen sind oft wenig oder gar nicht auf solche Angriffe vorbereitet und nur unzureichend geschützt. Wir empfehlen Ihnen einen Workshop, um Ihre Ã‚Â«Kronjuwelen im UnternehmenÃ‚Â» zu identifizieren wie auch zu erkennen, wie diese zu schützen sind.";
        } else if (q8 == "Wir sind konform mit den regulatorischen Anforderungen, haben darüber  hinaus jedoch keine weiteren Massnahmen unternommen.") {
            document.getElementById('q8-description').innerHTML = "Cyber Security hat zunehmend an Aufmerksamkeit gewonnen und wir gehen davon aus, dass Sie bereits sehr gut orientiert und sich möglicher Angriffsvektoren bewusst sind. Wenn Sie Ihre Mitarbeiter auch hinsichtlich potentieller Angriffe sensibilisiert haben, noch besser. Unserer Erfahrung nach fehlt oft das technische Härten einer Infrastruktur, um mit überschaubarem Aufwand eine zusätzliche Schicht an Sicherheit zu gewinnen.";
        } else if (q8 == "Wir haben ein Sicherheitsprogramm etabliert, welches sowohl unsere Produktion als auch die Geschäftsprozesse, Infrastruktur, Daten, Schnittstellen als auch Applikationen gegen bekannte und denkbare Angriffe schützt.") {
            document.getElementById('q8-description').innerHTML = "Unserer Erfahrung nach sind oftmals in Unternehmen wichtige Details bei der Einrichtung von Cyber-Sicherheitsprogrammen vernachlässigt worden. Denn genau diese Details haben haben betroffene Kunden verwundbar gemacht. Lassen Sie uns Ihre Ã‚Â«Security-PostureÃ‚Â» von einem Experten prüfen und Sie erhalten eine externe Sicht darauf, inwiefern die Organisation tatsächlich gegen Angriffe abgesichert ist.";
        }
    }

    var q9 = document.getElementById('q9').innerText;
    if (q9) {
        if (q9 == "Wir haben keine solche Massnahmen eingeführt, bzw. ich bin mir solcher Massnahmen nicht bewusst.") {
            document.getElementById('q9-description').innerHTML = "Mit einem Zero Downtime-orientierten Verhalten können Sie kostspielige Leerzeiten vermeiden und Ressourcen für ihr Kerngeschäft einsetzen. Unserer Erfahrung nach sind Stillstandzeiten einer der grössten Kostentreiber bei Klein- und Mittelunternehmen. Eine Simulation, um das Potential für Zero Downtime in Ihrer Fertigung zu bewerten ist wichtig.";
        } else if (q9 == "Wir haben diesbezüglich vereinzelt Massnahmen und Workarounds eingeführt.") {
            document.getElementById('q9-description').innerHTML = "Vermutlich Sind Sie umfassend informiert und konnten wie viele Unternehmen in der Branche bereits wichtige Massnahmen einführen, um für Ihr Unternehmen kostspielige Stillstandzeiten zu vermeiden. An dieser Stelle kommt das dynamische Verhalten ins Spiel, um Betriebszeiten möglichst ohne Unterbrechung und Unabhängig von der Losgrösse zu gestalten. Wir empfehlen eine tiefergreifende Analyse, um das Betriebsverhalten unter verschiedenen Parametern zu verstehen. Basierend hierauf können die passenden Massnahmen getroffen werden.";
        } else if (q9 == "Wir haben durchgehend für die gesamte Wertschöpfung ein Konzept umgesetzt, welches Downtimes auf ein Minimum reduziert.") {
            document.getElementById('q9-description').innerHTML = "Da sie mit Ihrem optimierten Betrieb das Fundament für die Weiterentwicklung Ihrer Organisation gelegt haben, geht es nun darum Downtimes vorherzusehen. Durch schnelle Entscheidungsgrundlagen, welche auf analysierten Daten basieren, können Sie beispielsweise Lastzeiten in der Produktion präventiv auf planbare Regelbetriebszeiten verteilen.";
        }
    }

});

docReady(function() {
    // Your function
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