docReady(function() {

    const benchmarks = {
        'Clothing & Textiles': [4, 3.65, 3.33, 3.56, 3.78, 3.33, 3.47, 3.58, 3.68, 4, 3.82, 3.72, 3.78, 3.79, 3.63, 3.42, 3.74, 3.61, 3.33, 3.37, 3.63, 3.95, 3.47, 3.68, 4, 3.74, 3.05, 3.78, 3.37, 3.37, 3.53, 3.74, 3.37, 3.63, 3.67, 3.83, 3.78, 3.65, 4.22, 3.78, 3.82],
        'Health & Wellness & Beauty': [2.14, 2.5, 2.67, 1.83, 2.88, 2.2, 3.63, 2.2, 1.83, 2.4, 2.5, 2.17, 2.67, 2.5, 2.33, 2.67, 2.67, 2.57, 2, 2.17, 3, 2.5, 3.5, 2.2, 2.14, 2.8, 2.4, 2.4, 2.8, 3.2, 3, 2.67, 2.4, 2.4, 2.8, 2.8, 2.6, 3, 2.4, 2.17, 2.5],
        'Materials': [3.67, 3.25, 3.42, 3.58, 3.25, 3.25, 3.08, 3.27, 3.36, 3.42, 3.67, 3.25, 3.92, 3.67, 3.42, 3.42, 3.33, 3.58, 2.92, 3.08, 3.18, 3.33, 3.25, 3.25, 3.92, 3.17, 3, 3.25, 3.5, 3.25, 3.33, 3.67, 3.33, 3.5, 3.58, 3.08, 3.83, 3.17, 3.25, 3.58, 3.17],
        'Power & Utilities': [4, 3.57, 3.63, 3.5, 3.63, 2.88, 2.5, 3.63, 3.38, 4, 3.38, 3.5, 3.5, 3.63, 3.13, 3.88, 3.63, 3.63, 3.25, 3.38, 3.38, 4, 3.57, 3.88, 3.75, 3.5, 3.25, 3.63, 3.88, 4, 4.29, 4.17, 4.14, 3.57, 4.43, 3.75, 4.29, 3.43, 4.14, 4.14, 3.86],
        'Construction & Infrastructure': [2.72, 3.11, 2.95, 3.11, 3.33, 3, 2.58, 3.28, 3.17, 3.11, 2.94, 2.89, 3.61, 3.06, 3.11, 3.05, 3.44, 3.37, 2.94, 2.89, 3.47, 3.32, 3.37, 3.11, 3.74, 3.26, 3.39, 3.33, 3.11, 3.44, 3.26, 3.42, 3.17, 3.37, 3.42, 3.05, 3.05, 3.17, 3.19, 3.21, 3.05],
        'Consumer Goods / Retail': [3.79, 3.68, 3.58, 3.63, 3.63, 3.74, 3.42, 3.68, 3.68, 3.89, 3.95, 3.68, 4, 3.74, 3.94, 3.84, 3.79, 3.89, 3.79, 3.83, 3.68, 3.95, 3.72, 3.89, 4.11, 4, 4, 3.79, 3.94, 3.83, 3.95, 3.68, 3.58, 4, 3.79, 3.5, 3.84, 3.89, 4.05, 3.74, 3.89],
        'Education': [3.21, 3.47, 3.33, 3.42, 3.58, 2.83, 3.26, 2.84, 2.79, 3.47, 3.33, 3.42, 3.58, 3.37, 3.32, 3.18, 3.68, 3.74, 3.53, 3.68, 4.06, 3.89, 3.74, 3.72, 3.84, 3.42, 3.53, 3.53, 3.42, 3.18, 3.56, 3.5, 3.44, 3.42, 3.89, 3.42, 3.42, 3.63, 4, 3.42, 3.32],
        'Finance': [3.39, 3.67, 2.83, 3.72, 3.89, 3.78, 4.21, 3.78, 3.67, 4, 3.67, 3.78, 4.06, 4.19, 4.18, 3.94, 4.12, 4.06, 3.76, 3.89, 3.83, 4.28, 3.78, 4.22, 4.33, 4, 4, 4.11, 3.94, 3.72, 3.94, 3.82, 3.83, 4.28, 4.11, 4.17, 4.22, 4.06, 4.33, 3.94, 4],
        'Food & Beverage / Agriculture': [2.83, 2.57, 2.29, 2.67, 3, 2.43, 1.86, 2.43, 2.5, 2.57, 3, 2.71, 2.71, 2.86, 3.14, 2.71, 3, 3, 2.43, 3, 2.86, 3.71, 3.86, 3.14, 3.43, 3, 2.43, 2.57, 2.29, 2.67, 2.14, 2.57, 2.14, 2.43, 2.29, 2.86, 2.71, 2.57, 3.43, 2.71, 2.14],
        'Healthcare & Medical Tech': [2.65, 3.18, 3.13, 3.31, 3.5, 2.8, 3.32, 3.33, 2.88, 3.21, 3.22, 3.24, 3.5, 3.11, 3, 3.07, 3.56, 3.17, 2.94, 3.18, 3.06, 3.61, 3.61, 3.33, 3.53, 3.25, 3.17, 3.06, 3.33, 3.44, 3.12, 3.18, 3.13, 3, 3.18, 3, 3.29, 3.5, 3.67, 3.19, 3.12],
        'Information Technology (IT)': [3.68, 4.16, 3.42, 3.53, 3.68, 3.89, 3.74, 4.05, 4, 3.84, 4.16, 4.32, 4.47, 4.05, 4.16, 4.11, 4, 4.11, 3.79, 3.95, 4.16, 4.32, 3.89, 4, 3.84, 3.89, 4.16, 3.95, 4.05, 4.05, 4.21, 4.26, 3.74, 3.79, 4, 3.95, 4.05, 3.74, 3.89, 3.89, 3.94],
        'Machinery and Parts & Equipment': [3.67, 3.25, 3.42, 3.58, 3.25, 3.25, 3.08, 3.27, 3.36, 3.42, 3.67, 3.25, 3.92, 3.67, 3.42, 3.42, 3.33, 3.58, 2.92, 3.08, 3.18, 3.33, 3.25, 3.25, 3.92, 3.17, 3, 3.25, 3.5, 3.25, 3.33, 3.67, 3.33, 3.5, 3.58, 3.08, 3.83, 3.17, 3.25, 3.58, 3.17],
        'Mainstreet / Restaurants': [2.14, 2.5, 2.67, 1.83, 2.88, 2.2, 3.63, 2.2, 1.83, 2.4, 2.5, 2.17, 2.67, 2.5, 2.33, 2.67, 2.67, 2.57, 2, 2.17, 3, 2.5, 3.5, 2.2, 2.14, 2.8, 2.4, 2.4, 2.8, 3.2, 3, 2.67, 2.4, 2.4, 2.8, 2.8, 2.6, 3, 2.4, 2.17, 2.5],
        'Manufacturing': [4, 3.65, 3.33, 3.56, 3.78, 3.33, 3.47, 3.58, 3.68, 4, 3.82, 3.72, 3.78, 3.79, 3.63, 3.42, 3.74, 3.61, 3.33, 3.37, 3.63, 3.95, 3.47, 3.68, 4, 3.74, 3.05, 3.78, 3.37, 3.37, 3.53, 3.74, 3.37, 3.63, 3.67, 3.83, 3.78, 3.65, 4.22, 3.78, 3.82],
        'Not for Profit / Public Service': [3, 2.67, 2.17, 2.5, 3.33, 2.6, 2, 2.4, 2.67, 2.33, 2.67, 2.33, 2.33, 2.83, 2, 2.33, 3, 2.83, 2.5, 2.83, 3.33, 3.33, 3, 2.83, 3.5, 2.67, 3, 2.5, 3.33, 2.75, 2.75, 3, 2.8, 2.5, 2.67, 2.67, 2.83, 2.83, 3.33, 2.67, 2.5],
        'Oil & Gas / Energy': [4, 3.57, 3.63, 3.5, 3.63, 2.88, 2.5, 3.63, 3.38, 4, 3.38, 3.5, 3.5, 3.63, 3.13, 3.88, 3.63, 3.63, 3.25, 3.38, 3.38, 4, 3.57, 3.88, 3.75, 3.5, 3.25, 3.63, 3.88, 4, 4.29, 4.17, 4.14, 3.57, 4.43, 3.75, 4.29, 3.43, 4.14, 4.14, 3.86],
        'Other': [3.31, 3.11, 3.39, 3.33, 3.61, 3.38, 3.37, 2.75, 3.31, 3.19, 3.33, 3, 3.06, 3.22, 3.11, 2.56, 3, 3.33, 2.89, 2.68, 3.53, 3.32, 3.53, 3.05, 3.42, 3.22, 2.89, 2.83, 3.16, 2.95, 3.28, 3.05, 2.78, 2.83, 3, 2.72, 3.26, 3.17, 3, 3.06, 2.94],
        'Professional Services': [3.67, 3.26, 3.53, 3.21, 3.47, 3.11, 3.42, 3.22, 3.22, 3.68, 3.78, 3.83, 4.17, 3.5, 3.78, 3.78, 3.61, 3.68, 3.44, 3.32, 3.12, 3.95, 4, 3.89, 4.11, 3.53, 3.32, 3.47, 3.74, 4.07, 3.76, 3.91, 3.58, 3.61, 3.58, 3.53, 3.28, 3.84, 4, 3.47, 3.41],
        'Real Estate': [3.7, 3.64, 3.55, 3.45, 3.45, 3.55, 3.18, 3.36, 3.45, 3.18, 3.55, 3.73, 3.27, 3.73, 3.18, 3.36, 3.73, 3.82, 3.36, 3.8, 3.73, 4.09, 3.6, 3.64, 3.82, 3.67, 3.73, 3.64, 4, 3.67, 3.7, 3.8, 3.6, 3.27, 3.91, 3.3, 3.36, 3.64, 4, 3.45, 3.64],
        'Telecommunications': [3.47, 3.47, 3.47, 3.74, 3.42, 3.63, 3.53, 3.89, 3.74, 3.74, 3.47, 3.53, 4.21, 3.95, 3.95, 3.58, 3.95, 4, 3.74, 3.68, 4, 4.05, 3.89, 3.63, 4.26, 3.37, 3.74, 3.68, 3.79, 3.74, 3.89, 3.79, 4.05, 4.11, 4.16, 3.89, 3.89, 3.74, 4, 3.74, 3.95],
        'Transport & Logistics & Warehousing': [2.8, 3.55, 3.36, 3.45, 3.45, 2.36, 2.82, 2.7, 3.3, 2.9, 3.2, 3, 3.11, 3.1, 3.4, 3.2, 3.7, 3.5, 3, 2.9, 3.4, 3.7, 3.6, 3.9, 3.7, 2.9, 3.1, 3.5, 3.5, 3.4, 3.2, 3.8, 3.4, 3.2, 3.2, 3.4, 3.2, 3.1, 4.11, 2.8, 2.8]
    };

    const capabilities = {
        'Clothing & Textiles': [3.66, 3.61, 3.65, 3.61, 3.65, 3.5, 3.74, 3.82],
        'Health & Wellness & Beauty': [2.4, 2.45, 2.45, 2.79, 2.39, 2.92, 2.57, 2.5],
        'Materials': [3.43, 3.28, 3.46, 3.21, 3.32, 3.44, 3.42, 3.17],
        'Power & Utilities': [3.66, 3.27, 3.5, 3.58, 3.6, 4.08, 3.99, 3.86],
        'Construction & Infrastructure': [3.04, 3.03, 3.16, 3.26, 3.37, 3.31, 3.2, 3.05],
        'Consumer Goods / Retail': [3.66, 3.68, 3.85, 3.8, 3.96, 3.85, 3.8, 3.89],
        'Education': [3.4, 3.04, 3.46, 3.84, 3.61, 3.41, 3.58, 3.32],
        'Finance': [3.5, 3.89, 3.97, 3.94, 4.13, 3.86, 4.12, 4],
        'Food & Beverage / Agriculture': [2.67, 2.36, 2.84, 3.36, 2.91, 2.42, 2.64, 2.14],
        'Healthcare & Medical Tech': [3.15, 3.11, 3.2, 3.36, 3.27, 3.27, 3.24, 3.12],
        'Information Technology (IT)': [3.69, 3.91, 4.13, 4.08, 3.97, 4.14, 3.88, 3.94],
        'Machinery and Parts & Equipment': [3.43, 3.28, 3.46, 3.21, 3.32, 3.44, 3.42, 3.17],
        'Mainstreet / Restaurants': [2.4, 2.45, 2.45, 2.79, 2.39, 2.92, 2.57, 2.5],
        'Manufacturing': [3.66, 3.61, 3.65, 3.61, 3.65, 3.5, 3.74, 3.82],
        'Not for Profit / Public Service': [2.73, 2.4, 2.54, 3.13, 2.9, 2.96, 2.79, 2.5],
        'Oil & Gas / Energy': [3.66, 3.27, 3.5, 3.58, 3.6, 4.08, 3.99, 3.86],
        'Other': [3.35, 3.2, 3.06, 3.26, 3.08, 3.11, 2.98, 2.94],
        'Professional Services': [3.43, 3.33, 3.73, 3.6, 3.66, 3.87, 3.61, 3.41],
        'Real Estate': [3.56, 3.35, 3.53, 3.8, 3.7, 3.79, 3.57, 3.64],
        'Telecommunications': [3.52, 3.71, 3.82, 3.91, 3.74, 3.8, 3.95, 3.95],
        'Transport & Logistics & Warehousing': [3.32, 2.82, 3.25, 3.4, 3.42, 3.48, 3.3, 2.8]
    };

    const pillars = {
        'Clothing & Textiles': [3.59, 3.66, 3.64, 3.55, 3.82],
        'Health & Wellness & Beauty': [2.67, 2.21, 2.49, 2.77, 2.42],
        'Materials': [3.44, 3.28, 3.3, 3.23, 3.46],
        'Power & Utilities': [3.78, 3.53, 3.44, 3.61, 3.85],
        'Construction & Infrastructure': [3.17, 3.06, 3.06, 3.38, 3.33],
        'Consumer Goods / Retail': [3.82, 3.78, 3.7, 3.86, 3.89],
        'Education': [3.44, 3.25, 3.38, 3.71, 3.65],
        'Finance': [3.92, 3.9, 3.82, 4.04, 4.1],
        'Food & Beverage / Agriculture': [2.58, 2.48, 2.62, 3.25, 2.98],
        'Healthcare & Medical Tech': [3.21, 3.01, 3.15, 3.49, 3.3],
        'Information Technology (IT)': [4.01, 3.95, 3.87, 4.09, 3.98],
        'Machinery and Parts & Equipment': [3.44, 3.28, 3.3, 3.23, 3.46],
        'Mainstreet / Restaurants': [2.67, 2.21, 2.49, 2.77, 2.42],
        'Manufacturing': [3.59, 3.66, 3.64, 3.55, 3.82],
        'Not for Profit / Public Service': [2.6, 2.63, 2.7, 3.08, 2.92],
        'Oil & Gas / Energy': [3.78, 3.53, 3.44, 3.61, 3.85],
        'Other': [3.04, 3.09, 3.23, 3.18, 3.12],
        'Professional Services': [3.72, 3.39, 3.35, 3.72, 3.76],
        'Real Estate': [3.54, 3.55, 3.5, 3.79, 3.73],
        'Telecommunications': [3.83, 3.84, 3.66, 3.91, 3.81],
        'Transport & Logistics & Warehousing': [3.26, 3.05, 3.03, 3.52, 3.53]
    };

    const averages = {
        'Clothing & Textiles': 3.69,
        'Health & Wellness & Beauty': 2.53,
        'Materials': 3.74,
        'Power & Utilities': 3.66,
        'Construction & Infrastructure': 3.28,
        'Consumer Goods / Retail': 3.82,
        'Education': 3.47,
        'Finance': 3.98,
        'Food & Beverage / Agriculture': 2.68,
        'Healthcare & Medical Tech': 3.33,
        'Information Technology (IT)': 3.93,
        'Machinery and Parts & Equipment': 3.74,
        'Mainstreet / Restaurants': 2.53,
        'Manufacturing': 3.69,
        'Not for Profit / Public Service': 2.73,
        'Oil & Gas / Energy': 3.66,
        'Other': 3.20,
        'Professional Services': 3.41,
        'Real Estate': 3.45,
        'Telecommunications': 3.69,
        'Transport & Logistics & Warehousing': 3.15
    };

    function getArraySum(a) {
        var total = 0;
        for (var i in a) {
            total += parseInt(a[i]);
        }
        return total;
    }

    var industry = $('#industry').text();
    // var industry = 'Food & Beverage / Agriculture';

    var requested_benchmarks = benchmarks[industry];
    var requested_pillar_benchmarks = pillars[industry];
    var requested_capability_benchmarks = capabilities[industry];

    var pillars_row = $(this).find('.pillar');
    var p = 0
    $.each(pillars_row, function(index, value) {
        var benchmark_space = $(this).find('.benchmark');
        benchmark_space.text(parseFloat(requested_pillar_benchmarks[p]).toFixed(2));
        p++;
    });

    var capabilites_row = $(this).find('.capability-insert');
    var c = 0
    $.each(capabilites_row, function(index, value) {
        var benchmark_space = $(this).find('.benchmark');
        benchmark_space.text(parseFloat(requested_capability_benchmarks[c]).toFixed(2));
        c++;
    });

    let capabilties = $('.capability');

    var overall_questions_answered = [];
    var overall_questions_not_answered = [];
    var total_score = [];
    var divisor_array = [];
    var question_scores = [];
    var pillar_scores = [];

    // Convert All answer values to 1 decimal place and add industry benchmarks to questions
    var questions = $(this).find('.question');
    var j = 0
    $.each(questions, function(index, value) {
        var score_space = $(this).find('.score');
        var score_text = parseFloat($(this).find('.score').text()).toFixed(2);
        score_space.text(score_text);

        var benchmark_space = $(this).find('.benchmark');
        benchmark_space.text(parseFloat(requested_benchmarks[j]).toFixed(2));
        j++;
    });

    var i = 0;

    // Go through each capability
    $.each(capabilties, function(index, value) {

        // Get Capabitlity heading and questions for each
        var text = $(this).find('.text').text();
        var questions = $(this).find('.question');

        // Set varaible for how many questions the user has answered in the capability
        var capability_questions_not_answered = [];

        // Set varaible for the sum of all questions answered in a capability
        var capability_questions_answered = [];

        // Loop through each question in a cap
        $.each(questions, function(index, value) {
            var score = parseInt($(this).find('.score').text(), 10).toFixed(2);
            var benchmark = parseFloat($(this).find('.benchmark').text());
            var variance_space = $(this).find('.variance');

            var benchmark_minus_score = score - benchmark;

            if (score > 0) {
                question_scores.push(score);

                var isNegative = parseFloat(benchmark_minus_score).toFixed(1) < 0 ? true : false;

                if (parseFloat(score) > 0 && parseFloat(score) < 1.5) {
                    $(this).find('.score').addClass("red")
                } else if (parseFloat(score) >= 1.5 && parseFloat(score) < 3.5) {
                    $(this).find('.score').addClass("orange")
                } else if (parseFloat(score) >= 3.5 && parseFloat(score) <= 5) {
                    $(this).find('.score').addClass("green")
                }

                variance_space.html('<div class="variance-bar"><div class="wrap"><div class="negative"></div><div class="positive"></div></div></div><div class="variance-score">' + benchmark_minus_score.toFixed(2) + '</div>');

                if (isNegative) {

                    variance_space.find('.negative').addClass('active').append('<span></span>');
                    variance_space.find('.active span').css('width', Math.abs(benchmark_minus_score) * 20 + '%');
                } else {
                    variance_space.find('.positive').addClass('active').append('<span></span>');
                    variance_space.find('.active span').css('width', Math.abs(benchmark_minus_score) * 20 + '%');
                }

                overall_questions_answered.push(score);

            } else {
                variance_space.html('<div class="variance-bar"><div class="wrap"><div class="negative"></div><div class="positive"></div></div></div><div class="variance-score">N/A</div>');
                overall_questions_not_answered.push(score);
            }

            if (score == "0.00") {
                capability_questions_not_answered.push(score);
            } else {
                capability_questions_answered.push(score);
            }
        });

        // go through each capability adn find out how many answered on each
        var capability_divisor_int = questions.length - capability_questions_not_answered.length;


        var sum_of_cap_questions_answered = getArraySum(capability_questions_answered);

        var cap_final_math = sum_of_cap_questions_answered / capability_questions_answered.length;

        // Insert Capability Rows
        var capability_row = $('.capability-table').find('.capability-insert')[i];
        var capability_row_score = $(capability_row).find('.score');

        capability_row_score.text(cap_final_math.toFixed(2));

        i++;

    });


    var pillar_rows = $('.pillar');

    $.each(pillar_rows, function(index, value) {
        var pillar_number = $(this).data('pillar');
        var pillar_questions = $('.question[data-pillar="' + pillar_number + '"]');

        var answered_pillar_questions = [];

        $.each(pillar_questions, function(index, value) {
            // console.log($(this).find('.q-text').text());
            // console.log($(this).find('.score').text());

            var pillar_question_score = parseInt($(this).find('.score').text()).toFixed(0);

            if (pillar_question_score > 0) {
                answered_pillar_questions.push(pillar_question_score);
            }
        })


        // console.log('AMOUNT OF QUESTIONS ANSWERED IN PILLAR', answered_pillar_questions.length);
        var pillar_final_sum = getArraySum(answered_pillar_questions);
        // console.log('FINAL SUM OF ANSWERED QUESTIONS', pillar_final_sum);

        // console.log('PILLAR SUM DIVIDED BY NUMBER OF QUESTIONS ANSWERED', pillar_final_sum / answered_pillar_questions.length);

        var final_pillar_score = pillar_final_sum / answered_pillar_questions.length;
        $(this).find('.score').text(final_pillar_score.toFixed(2));


        if (parseFloat(final_pillar_score.toFixed(2)) > 0 && parseFloat(final_pillar_score.toFixed(2)) < 1.5) {
            $(this).find('.score').addClass("red");
        } else if (parseFloat(final_pillar_score.toFixed(2)) >= 1.5 && parseFloat(final_pillar_score.toFixed(2)) < 3.5) {
            $(this).find('.score').addClass("orange");
        } else if (parseFloat(final_pillar_score.toFixed(2)) >= 3.5 && parseFloat(final_pillar_score.toFixed(2)) <= 5) {
            $(this).find('.score').addClass("green");
        }

    });

    $.each(capabilites_row, function(index, value) {
        var final_cap_score = parseFloat($(this).find('.score').text());
        // console.log(final_cap_score);

        if (parseFloat(final_cap_score.toFixed(2)) > 0 && parseFloat(final_cap_score.toFixed(2)) < 1.5) {
            $(this).find('.score').addClass("red");
        } else if (parseFloat(final_cap_score.toFixed(2)) >= 1.5 && parseFloat(final_cap_score.toFixed(2)) < 3.5) {
            $(this).find('.score').addClass("orange");
        } else if (parseFloat(final_cap_score.toFixed(2)) >= 3.5 && parseFloat(final_cap_score.toFixed(2)) <= 5) {
            $(this).find('.score').addClass("green");
        }
    });


    var industry_benchmark = averages[industry];

    var industry_benchmark_final = parseFloat(industry_benchmark).toFixed(2);

    var sum_of_all_questions_answered = getArraySum(overall_questions_answered);
    var final_overall_score = sum_of_all_questions_answered / overall_questions_answered.length;

    console.log('INDUSTRY BENCHMARK', industry_benchmark_final)


    console.log('Questions Answered', overall_questions_answered.length)
    console.log('SUM OF QUESTIONS ANSWERED', sum_of_all_questions_answered)

    console.log('FINAL SCORE', final_overall_score.toFixed(2))

    var final_final_score = parseFloat(final_overall_score);
    console.log(final_final_score);

    var waitForCharts = setInterval(function() {
        if ($('#widget_2 #container_2 .highcharts-container').length) {

            var span = (industry_benchmark_final + 0.05);

            Highcharts.charts[0].update({
                yAxis: {
                    plotBands: {
                        min: 0,
                        max: 5,
                        zIndex: 99,
                        from: Math.round(industry_benchmark_final * 100) / 100,
                        to: (Math.round(industry_benchmark_final * 100) / 100 + 0.05),
                        color: '#000000',
                        thickness: '45%',
                        outerRadius: '105%',
                        label: {
                            text: industry_benchmark_final,
                            align: 'center',
                            style: {
                                color: '#000000',
                                fontSize: '22px',
                                fontWeight: 'bold',
                            },
                            x: 30,
                            y: 30
                        }
                    },
                },
                series: [{
                    name: 'Overall Score',
                    data: [final_final_score],
                    dataLabels: {
                        zIndex: 98,
                        format: '<div style="text-align:center">' +
                            '<span style="font-size:25px; color:#108DFF;">{y:.2f}</span><br/>'
                    }
                }]
            });

            clearInterval(waitForCharts);
        }
    }, 100);

    let overallscore = parseFloat(final_overall_score);

    if (overallscore >= 1 && overallscore < 1.8) {
        document.getElementById('dna-type').innerHTML = "Digital Novice";
        document.getElementById('dna-desc').innerHTML = "Digital Novices are just starting out on their transformation journeys. Their current processes are mostly manual with great potential for automation.";
    } else if (overallscore >= 1.8 && overallscore < 2.6) {
        document.getElementById('dna-type').innerHTML = "Digital Explorer";
        document.getElementById('dna-desc').innerHTML = "Digital Explorers have started to use technology and process automation to help their organization, albeit through a siloed approach.";
    } else if (overallscore >= 2.6 && overallscore < 3.4) {
        document.getElementById('dna-type').innerHTML = "Digital Intermediary";
        document.getElementById('dna-desc').innerHTML = "Digital intermediaries use automation, technology and data to assist with decision making with increasing levels of departmental coordination.";
    } else if (overallscore >= 3.4 && overallscore < 4.2) {
        document.getElementById('dna-type').innerHTML = "Digital Innovator";
        document.getElementById('dna-desc').innerHTML = "Digital innovators have a culture that is open to change and new ideas and have successfully incorporated technology & process automation in their business.";
    } else if (overallscore >= 4.2 && overallscore <= 5) {
        document.getElementById('dna-type').innerHTML = "Digital Leader";
        document.getElementById('dna-desc').innerHTML = "Digital Leaders have successfully adopted technology and process automation to connect their departments with strong governance and alignment in place.";
    }


    // date format
    if (document.getElementById('responsedate')) {
        let responsedate = document.getElementById('responsedate').innerText;
        const dates = responsedate.split(' ');
        let month = dates[0].slice(0, 3);
        let day = parseInt(dates[1].split(',')[0]);
        let day2 = (day < 10) ? "0" + day : day;

        var elementsDate = document.querySelectorAll('.date');
        for (var i = 0; i < elementsDate.length; i++) {
            elementsDate[i].innerHTML = month + " " + day2 + ", " + dates[2];
        }
    }

    $('.page-content').each(function(i, a) {
        $(a).append('<div class="pagenum">PAGE | 0' + (i + 1) + '</div>');
    });

    $('#widget_2').detach().appendTo('.chart-score');

    var all_scores = $(document).find('.score');

    $.each(all_scores, function(index, value) {
        var text = $(this).text();
        if (text == 'NaN') {
            $(this).text('N/A')
        }
    });

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