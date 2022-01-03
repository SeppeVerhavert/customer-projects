docReady(function() {

    // charts
    // $('#widget_12').detach().appendTo('.chart-leadership1'); 
    // $('#widget_13').detach().appendTo('.chart-leadership2');
    // $('#widget_16').detach().appendTo('.chart-ethics1'); 
    // $('#widget_17').detach().appendTo('.chart-ethics2');

    // $('#widget_21').detach().appendTo('.chart-governance1'); 
    // $('#widget_22').detach().appendTo('.chart-governance2');
    // $('#widget_23').detach().appendTo('.chart-governance3'); 

    // $('#widget_27').detach().appendTo('.chart-sustainability1');
    // $('#widget_28').detach().appendTo('.chart-sustainability2');
    // $('#widget_31').detach().appendTo('.chart-academic1');
    // $('#widget_32').detach().appendTo('.chart-academic2');

    // $('#widget_36').detach().appendTo('.chart-results1');
    // $('#widget_38').detach().appendTo('.chart-results2');
    // $('#widget_41').detach().appendTo('.chart-results3');
    // $('#widget_43').detach().appendTo('.chart-results4');

    // var categories = Array.from(document.querySelectorAll('#categories div'));
    // var strengths = Array.from(document.querySelectorAll('#strengths div'));
    // var weaknesses = Array.from(document.querySelectorAll('#weaknesses div'));
    // var areasimp = Array.from(document.querySelectorAll('#areasimp div'));
    // var categoriesSplit = categories.map(function(s){ return s.textContent.split('|');});
    // var strengthsSplit = strengths.map(function(s){ return s.textContent.split('|');});
    // var weaknessesSplit = weaknesses.map(function(w){ return w.textContent.split('|');});
    // var areasimpSplit = areasimp.map(function(a){ return a.textContent.split('|');});

    //Proof of Evidence
    var proof_leadership = Array.from(document.querySelectorAll('#proof_leadership div'));
    var proofLeadershipSplit = proof_leadership.map(function(s) { return s.textContent.split('|'); });
    var proof_human = Array.from(document.querySelectorAll('#proof_human div'));
    var proofHumanSplit = proof_human.map(function(s) { return s.textContent.split('|'); });
    var proof_university = Array.from(document.querySelectorAll('#proof_university div'));
    var proofUniversitySplit = proof_university.map(function(s) { return s.textContent.split('|'); });
    var proof_academic = Array.from(document.querySelectorAll('#proof_academic div'));
    var proofAcademicSplit = proof_academic.map(function(s) { return s.textContent.split('|'); });
    var proof_financial = Array.from(document.querySelectorAll('#proof_financial div'));
    var proofFinancialSplit = proof_financial.map(function(s) { return s.textContent.split('|'); });
    var proof_internal = Array.from(document.querySelectorAll('#proof_internal div'));
    var proofInternalSplit = proof_internal.map(function(s) { return s.textContent.split('|'); });
    var proof_legal = Array.from(document.querySelectorAll('#proof_legal div'));
    var proofLegalSplit = proof_legal.map(function(s) { return s.textContent.split('|'); });
    var proof_procurement = Array.from(document.querySelectorAll('#proof_procurement div'));
    var proofProcurementSplit = proof_procurement.map(function(s) { return s.textContent.split('|'); });
    var proof_environmental = Array.from(document.querySelectorAll('#proof_environmental div'));
    var proofEnvironmentalSplit = proof_environmental.map(function(s) { return s.textContent.split('|'); });
    var proof_operations = Array.from(document.querySelectorAll('#proof_operations div'));
    var proofOperationsSplit = proof_operations.map(function(s) { return s.textContent.split('|'); });
    var proof_management = Array.from(document.querySelectorAll('#proof_management div'));
    var proofManagementSplit = proof_management.map(function(s) { return s.textContent.split('|'); });
    var proof_staff = Array.from(document.querySelectorAll('#proof_staff div'));
    var proofStaffSplit = proof_staff.map(function(s) { return s.textContent.split('|'); });
    var proof_students = Array.from(document.querySelectorAll('#proof_students div'));
    var proofStudentsSplit = proof_students.map(function(s) { return s.textContent.split('|'); });
    var proof_institution = Array.from(document.querySelectorAll('#proof_institution div'));
    var proofInstitutionSplit = proof_institution.map(function(s) { return s.textContent.split('|'); });
    var proof_professions = Array.from(document.querySelectorAll('#proof_professions div'));
    var proofProfessionsSplit = proof_professions.map(function(s) { return s.textContent.split('|'); });


    // Maturity Level Path
    var maturity_leadership = Array.from(document.querySelectorAll('#maturity_leadership div'));
    var maturityLeadershipSplit = maturity_leadership.map(function(s) { return s.textContent.split('|'); });
    var maturity_human = Array.from(document.querySelectorAll('#maturity_human div'));
    var maturityHumanSplit = maturity_human.map(function(s) { return s.textContent.split('|'); });
    var maturity_university = Array.from(document.querySelectorAll('#maturity_university div'));
    var maturityUniversitySplit = maturity_university.map(function(s) { return s.textContent.split('|'); });
    var maturity_academic = Array.from(document.querySelectorAll('#maturity_academic div'));
    var maturityAcademicSplit = maturity_academic.map(function(s) { return s.textContent.split('|'); });
    var maturity_financial = Array.from(document.querySelectorAll('#maturity_financial div'));
    var maturityFinancialSplit = maturity_financial.map(function(s) { return s.textContent.split('|'); });
    var maturity_internal = Array.from(document.querySelectorAll('#maturity_internal div'));
    var maturityInternalSplit = maturity_internal.map(function(s) { return s.textContent.split('|'); });
    var maturity_legal = Array.from(document.querySelectorAll('#maturity_legal div'));
    var maturityLegalSplit = maturity_legal.map(function(s) { return s.textContent.split('|'); });
    var maturity_procurement = Array.from(document.querySelectorAll('#maturity_procurement div'));
    var maturityProcurementSplit = maturity_procurement.map(function(s) { return s.textContent.split('|'); });
    var maturity_environmental = Array.from(document.querySelectorAll('#maturity_environmental div'));
    var maturityEnvironmentalSplit = maturity_environmental.map(function(s) { return s.textContent.split('|'); });
    var maturity_operations = Array.from(document.querySelectorAll('#maturity_operations div'));
    var maturityOperationsSplit = maturity_operations.map(function(s) { return s.textContent.split('|'); });
    var maturity_management = Array.from(document.querySelectorAll('#maturity_management div'));
    var maturityManagementSplit = maturity_management.map(function(s) { return s.textContent.split('|'); });
    var maturity_staff = Array.from(document.querySelectorAll('#maturity_staff div'));
    var maturityStaffSplit = maturity_staff.map(function(s) { return s.textContent.split('|'); });
    var maturity_students = Array.from(document.querySelectorAll('#maturity_students div'));
    var maturityStudentsSplit = maturity_students.map(function(s) { return s.textContent.split('|'); });
    var maturity_institution = Array.from(document.querySelectorAll('#maturity_institution div'));
    var maturityInstitutionSplit = maturity_institution.map(function(s) { return s.textContent.split('|'); });
    var maturity_professions = Array.from(document.querySelectorAll('#maturity_professions div'));
    var maturityProfessionsSplit = maturity_professions.map(function(s) { return s.textContent.split('|'); });


    // Evidence
    var evidence_leadership = Array.from(document.querySelectorAll('#evidence_leadership div'));
    var evidenceLeadershipSplit = evidence_leadership.map(function(s) { return s.textContent.split('|'); });
    var evidence_human = Array.from(document.querySelectorAll('#evidence_human div'));
    var evidenceHumanSplit = evidence_human.map(function(s) { return s.textContent.split('|'); });
    var evidence_university = Array.from(document.querySelectorAll('#evidence_university div'));
    var evidenceUniversitySplit = evidence_university.map(function(s) { return s.textContent.split('|'); });
    var evidence_academic = Array.from(document.querySelectorAll('#evidence_academic div'));
    var evidenceAcademicSplit = evidence_academic.map(function(s) { return s.textContent.split('|'); });
    var evidence_financial = Array.from(document.querySelectorAll('#evidence_financial div'));
    var evidenceFinancialSplit = evidence_financial.map(function(s) { return s.textContent.split('|'); });
    var evidence_internal = Array.from(document.querySelectorAll('#evidence_internal div'));
    var evidenceInternalSplit = evidence_internal.map(function(s) { return s.textContent.split('|'); });
    var evidence_legal = Array.from(document.querySelectorAll('#evidence_legal div'));
    var evidenceLegalSplit = evidence_legal.map(function(s) { return s.textContent.split('|'); });
    var evidence_procurement = Array.from(document.querySelectorAll('#evidence_procurement div'));
    var evidenceProcurementSplit = evidence_procurement.map(function(s) { return s.textContent.split('|'); });
    var evidence_environmental = Array.from(document.querySelectorAll('#evidence_environmental div'));
    var evidenceEnvironmentalSplit = evidence_environmental.map(function(s) { return s.textContent.split('|'); });
    var evidence_operations = Array.from(document.querySelectorAll('#evidence_operations div'));
    var evidenceOperationsSplit = evidence_operations.map(function(s) { return s.textContent.split('|'); });
    var evidence_management = Array.from(document.querySelectorAll('#evidence_management div'));
    var evidenceManagementSplit = evidence_management.map(function(s) { return s.textContent.split('|'); });
    var evidence_staff = Array.from(document.querySelectorAll('#evidence_staff div'));
    var evidenceStaffSplit = evidence_staff.map(function(s) { return s.textContent.split('|'); });
    var evidence_students = Array.from(document.querySelectorAll('#evidence_students div'));
    var evidenceStudentsSplit = evidence_students.map(function(s) { return s.textContent.split('|'); });
    var evidence_institution = Array.from(document.querySelectorAll('#evidence_institution div'));
    var evidenceInstitutionSplit = evidence_institution.map(function(s) { return s.textContent.split('|'); });
    var evidence_professions = Array.from(document.querySelectorAll('#evidence_professions div'));
    var evidenceProfessionsSplit = evidence_professions.map(function(s) { return s.textContent.split('|'); });

    // Availability of Evidence
    var availability_leadership = Array.from(document.querySelectorAll('#availability_leadership div'));
    var availabilityLeadershipSplit = availability_leadership.map(function(s) { return s.textContent.split('|'); });
    var availability_human = Array.from(document.querySelectorAll('#availability_human div'));
    var availabilityHumanSplit = availability_human.map(function(s) { return s.textContent.split('|'); });
    var availability_university = Array.from(document.querySelectorAll('#availability_university div'));
    var availabilityUniversitySplit = availability_university.map(function(s) { return s.textContent.split('|'); });
    var availability_academic = Array.from(document.querySelectorAll('#availability_academic div'));
    var availabilityAcademicSplit = availability_academic.map(function(s) { return s.textContent.split('|'); });
    var availability_financial = Array.from(document.querySelectorAll('#availability_financial div'));
    var availabilityFinancialSplit = availability_financial.map(function(s) { return s.textContent.split('|'); });
    var availability_internal = Array.from(document.querySelectorAll('#availability_internal div'));
    var availabilityInternalSplit = availability_internal.map(function(s) { return s.textContent.split('|'); });
    var availability_legal = Array.from(document.querySelectorAll('#availability_legal div'));
    var availabilityLegalSplit = availability_legal.map(function(s) { return s.textContent.split('|'); });
    var availability_procurement = Array.from(document.querySelectorAll('#availability_procurement div'));
    var availabilityProcurementSplit = availability_procurement.map(function(s) { return s.textContent.split('|'); });
    var availability_environmental = Array.from(document.querySelectorAll('#availability_environmental div'));
    var availabilityEnvironmentalSplit = availability_environmental.map(function(s) { return s.textContent.split('|'); });
    var availability_operations = Array.from(document.querySelectorAll('#availability_operations div'));
    var availabilityOperationsSplit = availability_operations.map(function(s) { return s.textContent.split('|'); });
    var availability_management = Array.from(document.querySelectorAll('#availability_management div'));
    var availabilityManagementSplit = availability_management.map(function(s) { return s.textContent.split('|'); });
    var availability_staff = Array.from(document.querySelectorAll('#availability_staff div'));
    var availabilityStaffSplit = availability_staff.map(function(s) { return s.textContent.split('|'); });
    var availability_students = Array.from(document.querySelectorAll('#availability_students div'));
    var availabilityStudentsSplit = availability_students.map(function(s) { return s.textContent.split('|'); });
    var availability_institution = Array.from(document.querySelectorAll('#availability_institution div'));
    var availabilityInstitutionSplit = availability_institution.map(function(s) { return s.textContent.split('|'); });
    var availability_professions = Array.from(document.querySelectorAll('#availability_professions div'));
    var availabilityProfessionsSplit = availability_professions.map(function(s) { return s.textContent.split('|'); });


    // remove empty rows
    $('.custom-page.annex-i .divTableBody .divTableRow').each(function(i, a) {
        if ($(a).find('.divTableCell:first-child').text() == '') {
            $(a).detach();
        }
    });


    // console.log(categoriesSplit);
    // categoriesSplit.forEach(function(s) {
    // 	if (s[1] == 'checked' && s[0]) {
    // 		$('#page_8 .custom-page').append('<div>' + s[0] + '</div>');
    // 		var qtext = "";
    // 		if (s[2]) {
    // 			let qtextsplit = s[2].split(' - ');
    // 			console.log(qtextsplit);
    // 			if (qtextsplit[1]) {
    // 				let qtextsplit2 = qtextsplit[1].split(' ');
    // 				console.log(qtextsplit2)
    // 				qtext = qtextsplit2[1];
    // 			}
    // 			let qtextsplit = s[2].split('\n');
    // 			if (qtextsplit[3]) {
    // 				qtext = qtextsplit[3];
    // 			}
    // 		}

    // 		$('#page_9 .custom-page #table-strengths').append('<div class="divTableBody"><div class="divTableRow"><div class="divTableCell">' + qtext + '</div><div class="divTableCell">' + s[0] + '</div></div></div>');
    // 	}

    // 	if (s[4] == 'checked' && s[3]) {
    // 		$('#page_9 .custom-page').append('<div>' + w[0] + '</div>');

    // 		var qtext1 = "";
    // 		if (s[2]) {
    // 			let qtextsplit1 = s[2].split('\n');
    // 			if (qtextsplit1[3]) {
    // 				qtext1 = qtextsplit1[3];
    // 			}
    // 		}

    // 		$('#page_10 .custom-page #table-weaknesses').append('<div class="divTableBody"><div class="divTableRow"><div class="divTableCell">' + qtext1 + '</div><div class="divTableCell">' + s[3] + '</div></div></div>');
    // 	}

    // 	if (s[6] == 'checked' && s[5]) {
    // 		$('#page_10 .custom-page').append('<div>' + a[0] + '</div>');

    // 		var qtext2 = "";
    // 		if (s[2]) {
    // 			let qtextsplit2 = s[2].split('\n');
    // 			if (qtextsplit2[3]) {
    // 				qtext2 = qtextsplit2[3];
    // 			}
    // 		}

    // 		$('#page_11 .custom-page #table-areas').append('<div class="divTableBody"><div class="divTableRow"><div class="divTableCell">' + qtext2 + '</div><div class="divTableCell">' + s[5] + '</div></div></div>');
    // 	}

    // });

    // categoriesSplit.forEach(function(w) {
    // 	if (w[1] == 'checked' && w[0]) {
    // 		$('#page_9 .custom-page').append('<div>' + w[0] + '</div>');

    // 		var qtext1 = "";
    // 		if (w[2]) {
    // 			let qtextsplit1 = w[2].split('\n');
    // 			if (qtextsplit1[3]) {
    // 				qtext1 = qtextsplit1[3];
    // 			}
    // 		}

    // 		$('#page_11 .custom-page #table-weaknesses').append('<div class="divTableBody"><div class="divTableRow"><div class="divTableCell">' + qtext1 + '</div><div class="divTableCell">' + w[0] + '</div></div></div>');
    // 	}
    // });

    // categoriesSplit.forEach(function(a) {
    // 	if (a[1] == 'checked' && a[0]) {
    // 		$('#page_10 .custom-page').append('<div>' + a[0] + '</div>');

    // 		var qtext2 = "";
    // 		if (a[2]) {
    // 			let qtextsplit2 = a[2].split('\n');
    // 			if (qtextsplit2[3]) {
    // 				qtext2 = qtextsplit2[3];
    // 			}
    // 		}

    // 		$('#page_12 .custom-page #table-areas').append('<div class="divTableBody"><div class="divTableRow"><div class="divTableCell">' + qtext2 + '</div><div class="divTableCell">' + a[0] + '</div></div></div>');
    // 	}
    // });

    //Proof of Evidence
    proofLeadershipSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_leadership').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }


    });

    proofHumanSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_human').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }
    });

    proofUniversitySplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_university').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofAcademicSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_academic').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofFinancialSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_financial').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofInternalSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_internal').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofLegalSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_legal').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofProcurementSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_procurement').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofEnvironmentalSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_environmental').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofOperationsSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_operations').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofManagementSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_management').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofStaffSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_staff').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofStudentsSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_students').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofInstitutionSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_institution').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });

    proofProfessionsSplit.forEach(function(p) {

        for (i = 0; i <= p.length; i++) {
            if (p[i] == 'checked' && p[i + 1]) {
                $('#page_2 #p_professions').append('<div>' + getQuestionText(p[2]) + ': ' + p[i + 1] + '</div>');
            }
        }

    });


    // Maturity Level Path
    maturityLeadershipSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_leadership').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityHumanSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_human').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityUniversitySplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_university').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityAcademicSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_academic').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityFinancialSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_financial').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityInternalSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_internal').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityLegalSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_legal').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityProcurementSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_procurement').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityEnvironmentalSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_environmental').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityOperationsSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_operations').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityManagementSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_management').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityStaffSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_staff').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityStudentsSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_students').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityInstitutionSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_institution').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });

    maturityProfessionsSplit.forEach(function(m) {
        if (m[0]) {
            $('#page_2 #m_professions').append('<div>' + getQuestionText(m[1]) + ': ' + getMaturityLevel(m[0]) + '</div>');
        }
    });


    // Evidence
    evidenceLeadershipSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_leadership').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceHumanSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_human').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceUniversitySplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_university').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceAcademicSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_academic').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceFinancialSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_financial').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceInternalSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_internal').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceLegalSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_legal').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceProcurementSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_procurement').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceEnvironmentalSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_environmental').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceOperationsSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_operations').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceManagementSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_management').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceStaffSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_staff').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceStudentsSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_students').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceInstitutionSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_institution').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });
    evidenceProfessionsSplit.forEach(function(e) {
        if ((e[0] == 'checked' && e[1]) || (e[2] == 'checked' && e[3])) {
            $('#page_2 #e_professions').append('<div>' + getQuestionText(e[4]) + ': ' + getEvidenceResponses(e[0], e[1], e[2], e[3]) + '</div>');
        }
    });


    // Availability of Evidence
    availabilityLeadershipSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_leadership').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_leadership').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityHumanSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_human').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_human').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityUniversitySplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_university').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_university').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityAcademicSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_academic').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_academic').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityFinancialSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_financial').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_financial').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityInternalSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_internal').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_internal').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityLegalSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_legal').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_legal').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityProcurementSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_procurement').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_procurement').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityEnvironmentalSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_environmental').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_environmental').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityOperationsSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_operations').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_operations').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityManagementSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_management').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_management').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityStaffSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_staff').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_staff').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityStudentsSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_students').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_students').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityInstitutionSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_institution').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_institution').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });
    availabilityProfessionsSplit.forEach(function(a) {
        if (a[0]) {
            let value = a[0];
            if (a[1]) {
                value = value + ', ' + a[1];
            }
            $('#page_2 #a_professions').append('<div>' + getQuestionText(a[2]) + ': ' + value + '</div>');
        } else if (a[1]) {
            $('#page_2 #a_professions').append('<div>' + getQuestionText(a[2]) + ': ' + a[1] + '</div>');
        }
    });

});

function getMaturityLevel(score) {
    let value = '';
    switch (score) {
        case '4':
            value = '0-1';
            break;
        case '6':
            value = '2-3';
            break;
        case '8':
            value = '4';
            break;
        case '10':
            value = '5';
            break;
        default:
            value = '';
    }

    return value;
}

function getQuestionText(question) {
    let qtext = '';

    if (question) {
        let qtextsplit2 = question.split('\n');
        if (qtextsplit2[3]) {
            qtext = qtextsplit2[3].trim();
        }
    }

    return qtext;
}

function getEvidenceResponses(r1, t1, r2, t2) {
    let rtext = '';

    if (r1 == 'checked' && r2 == 'checked') {
        rtext = t1 + ', ' + t2;
    } else if (r1 == 'checked') {
        rtext = t1;
    }
    if (r2 == 'checked') {
        rtext = t2;
    }

    return rtext;
}

function docReady(fn) {
    console.log('pretimeout');

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener('DOMContentLoaded', fn, false);
        /////////////////////////////////////////////////////////////////
        //********************* **********************//
        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed')
        });
    }
}