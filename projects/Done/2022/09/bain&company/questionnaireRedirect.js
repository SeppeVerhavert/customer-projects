require(["underscore"], function(e) {
    var o = App;
    return o.functions.onSurveyLoaded(function() {
        o.applicationView.restart = function() {
            if (o.spinner.reloadSpinner(), o.spinner.toggleTimeout(!0), o.ev.trigger("surveyEnd", this), !this.noRedirect) {
                var i = o.quiz.getRedirectUrl();
                if (e.isString(i) && !e.isEmpty(i))
                    if ("window.close" === i) window.close(), open(window.location, "_self").close();
                    else {
                        if (i = o.quiz.applyPiping(i, function(n) {
                                if (!e.isString(n)) try { n = JSON.stringify(n) } catch (i) { n += "" }
                                return encodeURIComponent(n)
                            }), !e.isUrlLike(i)) return o.spinner.removeSpinner(), void o.functions.showStatusMessage("Invalid URL: " + e.escape(i));
                        var n = (-1 === i.indexOf("//") ? "//" : "") + i;
                        try { window.top.location.href = n } catch (i) { window.location.assign(n) }
                    }
                else window.location.href = o.campaign.getUrlWithRespondentID()
            }
        }
    }), this
});