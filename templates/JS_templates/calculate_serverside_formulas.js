// Survey(s): "calculate serverside formulas (enabled)" (https://s.staging.surveyanyplace.com/kxarzoeq)
// Description: Enables the functionality to calculate serverside formulas within a questionnaire
// Client(s): n/a
// @link https://surveyanyplace.atlassian.net/browse/SA-6678

require([], function() {
	App.quiz.get('settings').set({ calculate_serverside_formulas: true }, { silent: true });
});