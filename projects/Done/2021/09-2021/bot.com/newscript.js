docReady(function() {

    const benchmarks = {
        'Clothing & Textiles': [3.7, 3.48, 3.51, 3.72, 3.63, 3.37, 3.23, 3.49, 3.41, 3.59, 3.75, 3.68, 3.78, 3.71, 3.65, 3.56, 3.65, 3.71, 3.59, 3.57, 3.66, 3.83, 3.62, 3.68, 3.83, 3.68, 3.57, 3.6, 3.69, 3.56, 3.64, 3.77, 3.67, 3.64, 3.83, 3.67, 3.72, 3.84, 3.82, 3.72, 3.69],
        'Construction & Infrastructure': [3.44, 3.34, 3.11, 3.46, 3.5, 3.18, 3.09, 3.55, 3.45, 3.38, 3.56, 3.39, 3.59, 3.53, 3.38, 3.49, 3.48, 3.58, 3.44, 3.39, 3.71, 3.64, 3.45, 3.42, 3.76, 3.49, 3.51, 3.45, 3.56, 3.57, 3.57, 3.46, 3.38, 3.52, 3.67, 3.53, 3.52, 3.54, 3.49, 3.39, 3.44],
        'Consumer Goods / Retail': [3.71, 3.64, 3.45, 3.64, 3.74, 3.62, 3.48, 3.69, 3.55, 3.62, 3.71, 3.74, 3.84, 3.67, 3.74, 3.64, 3.66, 3.92, 3.5, 3.75, 3.67, 3.75, 3.66, 3.7, 3.9, 3.76, 3.67, 3.57, 3.84, 3.67, 3.75, 3.7, 3.62, 3.79, 3.83, 3.53, 3.71, 3.71, 3.75, 3.61, 3.64],
        'Education': [3.29, 3.17, 3.05, 3.41, 3.34, 3.15, 3.07, 3.08, 3.11, 3.4, 3.52, 3.41, 3.58, 3.34, 3.31, 3.21, 3.62, 3.57, 3.28, 3.4, 3.65, 3.69, 3.66, 3.61, 3.73, 3.28, 3.5, 3.36, 3.38, 3.23, 3.48, 3.38, 3.37, 3.53, 3.67, 3.59, 3.47, 3.48, 3.89, 3.53, 3.16],
        'Finance': [3.77, 3.67, 3.38, 3.71, 3.75, 3.69, 3.83, 3.84, 3.78, 3.79, 3.82, 3.84, 4.17, 3.91, 3.77, 3.86, 3.95, 4.07, 3.7, 3.84, 4.03, 4.03, 3.82, 3.96, 3.93, 3.87, 3.9, 3.91, 3.88, 3.75, 3.92, 3.96, 3.77, 3.96, 4.08, 3.91, 3.99, 3.83, 3.91, 3.95, 3.84],
        'Food & Beverage / Agriculture': [3.71, 3.49, 3.28, 3.44, 3.6, 3.38, 2.99, 3.08, 3.28, 3.31, 3.57, 3.53, 3.6, 3.58, 3.58, 3.39, 3.44, 3.59, 3.51, 3.47, 3.62, 3.63, 3.59, 3.49, 3.53, 3.26, 3.23, 3.3, 3.51, 3.51, 3.53, 3.48, 3.36, 3.28, 3.51, 3.44, 3.7, 3.38, 3.52, 3.55, 3.5],
        'Health & Wellness & Beauty': [3.19, 3.17, 3.17, 3.12, 3.6, 3.27, 2.67, 3.04, 2.96, 3.14, 3.3, 3.06, 3.21, 3.23, 3.39, 3.27, 3.35, 3.46, 2.9, 2.96, 3.72, 3.37, 3.53, 2.88, 2.96, 3.04, 3.12, 3.22, 3.36, 3.37, 3.33, 3.06, 3.13, 2.94, 3.47, 3.04, 3.08, 3.29, 3.08, 3.13, 3.1],
        'Healthcare & Medical Tech': [3.32, 3.34, 3.23, 3.47, 3.37, 3.26, 3.03, 3.44, 3.33, 3.43, 3.54, 3.39, 3.55, 3.44, 3.23, 3.36, 3.54, 3.6, 3.47, 3.37, 3.44, 3.81, 3.73, 3.52, 3.63, 3.44, 3.49, 3.4, 3.45, 3.26, 3.48, 3.42, 3.43, 3.36, 3.69, 3.27, 3.56, 3.46, 3.42, 3.44, 3.12],
        'Information Technology (IT)': [3.73, 3.65, 3.46, 3.71, 3.74, 3.69, 3.71, 3.86, 3.89, 3.8, 3.96, 3.88, 4.08, 3.99, 3.86, 3.98, 3.95, 4.06, 3.78, 3.86, 3.96, 4.06, 3.72, 3.89, 3.97, 3.95, 3.95, 3.78, 3.97, 4.03, 4.03, 3.93, 3.77, 3.96, 4.12, 4.03, 3.99, 3.86, 3.97, 3.82, 3.93],
        'Machinery and Parts & Equipment': [3.58, 3.42, 3.37, 3.59, 3.48, 3.18, 3.11, 3.47, 3.24, 3.43, 3.54, 3.32, 3.65, 3.49, 3.45, 3.5, 3.65, 3.62, 3.27, 3.32, 3.23, 3.61, 3.6, 3.68, 3.51, 3.55, 3.48, 3.36, 3.57, 3.43, 3.51, 3.79, 3.34, 3.52, 3.62, 3.36, 3.53, 3.35, 3.63, 3.48, 3.52],
        'Mainstreet / Restaurants': [3.19, 3.17, 3.17, 3.12, 3.6, 3.27, 2.67, 3.04, 2.96, 3.14, 3.3, 3.06, 3.21, 3.23, 3.39, 3.27, 3.35, 3.46, 2.9, 2.96, 3.72, 3.37, 3.53, 2.88, 2.96, 3.04, 3.12, 3.22, 3.36, 3.37, 3.33, 3.06, 3.13, 2.94, 3.47, 3.04, 3.08, 3.29, 3.08, 3.13, 3.1],
        'Manufacturing': [3.7, 3.48, 3.51, 3.72, 3.63, 3.37, 3.23, 3.49, 3.41, 3.59, 3.75, 3.68, 3.78, 3.71, 3.65, 3.56, 3.65, 3.71, 3.59, 3.57, 3.66, 3.83, 3.62, 3.68, 3.83, 3.68, 3.57, 3.6, 3.69, 3.56, 3.64, 3.77, 3.67, 3.64, 3.83, 3.67, 3.72, 3.84, 3.82, 3.72, 3.69],
        'Materials': [3.58, 3.42, 3.37, 3.59, 3.48, 3.18, 3.11, 3.47, 3.24, 3.43, 3.54, 3.32, 3.65, 3.49, 3.45, 3.5, 3.65, 3.62, 3.27, 3.32, 3.23, 3.61, 3.6, 3.68, 3.51, 3.55, 3.48, 3.36, 3.57, 3.43, 3.51, 3.79, 3.34, 3.52, 3.62, 3.36, 3.53, 3.35, 3.63, 3.48, 3.52],
        'Not for Profit / Public Service': [3.27, 3.21, 2.98, 2.96, 3.4, 2.91, 2.43, 2.86, 2.98, 3.19, 3.1, 3.02, 3.18, 3.15, 3.02, 2.92, 3.44, 3.23, 3.13, 3.2, 3.51, 3.63, 3.73, 3.4, 3.58, 3.15, 3.17, 3.18, 3.29, 2.92, 3.18, 3.08, 3.31, 3.1, 3.3, 3.11, 3.11, 3.33, 3.77, 3.31, 3.14],
        'Oil & Gas / Energy': [3.53, 3.32, 3.46, 3.52, 3.44, 3.08, 2.82, 3.38, 3.4, 3.31, 3.56, 3.63, 3.71, 3.56, 3.53, 3.55, 3.75, 3.56, 3.43, 3.71, 3.45, 3.84, 3.65, 3.84, 3.79, 3.56, 3.48, 3.68, 3.62, 3.65, 3.52, 3.52, 3.77, 3.56, 3.92, 3.75, 3.58, 3.68, 3.92, 3.65, 3.66],
        'Other': [3.34, 3.28, 3.2, 3.31, 3.24, 3.23, 3.01, 3.09, 3.28, 3.19, 3.24, 3.31, 3.37, 3.37, 3.39, 3.25, 3.36, 3.45, 3.14, 3.26, 3.47, 3.51, 3.47, 3.42, 3.51, 3.28, 3.19, 3.22, 3.31, 3.31, 3.42, 3.38, 3.19, 3.13, 3.46, 3.24, 3.34, 3.4, 3.61, 3.54, 3.19],
        'Power & Utilities': [3.53, 3.32, 3.46, 3.52, 3.44, 3.08, 2.82, 3.38, 3.4, 3.31, 3.56, 3.63, 3.71, 3.56, 3.53, 3.55, 3.75, 3.56, 3.43, 3.71, 3.45, 3.84, 3.65, 3.84, 3.79, 3.56, 3.48, 3.68, 3.62, 3.65, 3.52, 3.52, 3.77, 3.56, 3.92, 3.75, 3.58, 3.68, 3.92, 3.65, 3.66],
        'Real Estate': [3.8, 3.8, 3.55, 3.55, 3.58, 3.36, 3.2, 3.62, 3.48, 3.41, 3.71, 3.52, 3.55, 3.67, 3.53, 3.61, 3.63, 3.65, 3.36, 3.59, 3.67, 3.76, 3.69, 3.68, 3.77, 3.67, 3.67, 3.66, 3.66, 3.77, 3.63, 3.69, 3.51, 3.5, 3.78, 3.51, 3.67, 3.74, 3.91, 3.58, 3.58],
        'Professional Services': [3.54, 3.33, 3.25, 3.38, 3.35, 3.16, 2.97, 3.32, 3.24, 3.42, 3.61, 3.47, 3.64, 3.52, 3.39, 3.29, 3.63, 3.55, 3.39, 3.43, 3.47, 3.8, 3.7, 3.62, 3.7, 3.45, 3.6, 3.45, 3.57, 3.5, 3.54, 3.45, 3.5, 3.47, 3.58, 3.45, 3.54, 3.65, 3.77, 3.62, 3.45],
        'Telecommunications': [3.71, 3.62, 3.35, 3.67, 3.55, 3.65, 3.58, 3.62, 3.75, 3.53, 3.68, 3.77, 4, 3.91, 3.8, 3.74, 3.65, 3.86, 3.41, 3.71, 3.88, 3.96, 3.6, 3.64, 3.87, 3.67, 3.69, 3.69, 3.74, 3.76, 3.99, 3.85, 3.75, 3.74, 3.94, 3.81, 3.88, 3.69, 3.79, 3.72, 3.74],
        'Transport & Logistics & Warehousing': [3.54, 3.71, 3.52, 3.73, 3.59, 3.49, 3.42, 3.67, 3.59, 3.56, 3.89, 3.54, 3.88, 3.76, 3.88, 3.64, 3.86, 3.96, 3.65, 3.72, 3.74, 3.88, 3.78, 3.99, 3.84, 3.7, 3.49, 3.77, 3.78, 3.72, 3.7, 3.94, 3.83, 3.76, 3.76, 3.88, 3.79, 3.79, 4, 3.59, 3.67]
    };

    const capabilities = {
        'Clothing & Textiles': [3.61, 3.42, 3.68, 3.67, 3.67, 3.67, 3.74, 3.69],
        'Construction & Infrastructure': [3.37, 3.33, 3.49, 3.55, 3.53, 3.54, 3.5, 3.44],
        'Consumer Goods / Retail': [3.64, 3.59, 3.71, 3.71, 3.72, 3.74, 3.69, 3.64],
        'Education': [3.25, 3.16, 3.43, 3.6, 3.5, 3.37, 3.57, 3.16],
        'Finance': [3.66, 3.79, 3.9, 3.93, 3.91, 3.88, 3.92, 3.84],
        'Food & Beverage / Agriculture': [3.5, 3.21, 3.53, 3.58, 3.36, 3.51, 3.47, 3.5],
        'Health & Wellness & Beauty': [3.25, 3.02, 3.24, 3.4, 3.04, 3.28, 3.15, 3.1],
        'Healthcare & Medical Tech': [3.35, 3.3, 3.46, 3.59, 3.5, 3.4, 3.45, 3.12],
        'Information Technology (IT)': [3.66, 3.79, 3.95, 3.9, 3.91, 3.99, 3.94, 3.93],
        'Machinery and Parts & Equipment': [3.49, 3.29, 3.5, 3.44, 3.52, 3.58, 3.48, 3.52],
        'Mainstreet / Restaurants': [3.25, 3.02, 3.24, 3.4, 3.04, 3.28, 3.15, 3.1],
        'Manufacturing': [3.61, 3.42, 3.68, 3.67, 3.67, 3.67, 3.74, 3.69],
        'Materials': [3.49, 3.29, 3.5, 3.44, 3.52, 3.58, 3.48, 3.52],
        'Not for Profit / Public Service': [3.16, 2.87, 3.13, 3.52, 3.3, 3.12, 3.29, 3.14],
        'Oil & Gas / Energy': [3.45, 3.2, 3.59, 3.66, 3.67, 3.58, 3.73, 3.66],
        'Other': [3.27, 3.16, 3.32, 3.43, 3.32, 3.35, 3.36, 3.19],
        'Power & Utilities': [3.45, 3.2, 3.59, 3.66, 3.67, 3.58, 3.73, 3.66],
        'Real Estate': [3.66, 3.41, 3.58, 3.68, 3.69, 3.69, 3.65, 3.58],
        'Professional Services': [3.37, 3.22, 3.5, 3.6, 3.56, 3.51, 3.57, 3.45],
        'Telecommunications': [3.58, 3.63, 3.76, 3.79, 3.71, 3.83, 3.79, 3.74],
        'Transport & Logistics & Warehousing': [3.62, 3.55, 3.78, 3.78, 3.76, 3.78, 3.8, 3.67]
    };

    const pillars = {
        'Clothing & Textiles': [3.68, 3.6, 3.67, 3.73, 3.54],
        'Construction & Infrastructure': [3.49, 3.46, 3.52, 3.5, 3.4],
        'Consumer Goods / Retail': [3.7, 3.59, 3.69, 3.74, 3.66],
        'Education': [3.42, 3.22, 3.62, 3.54, 3.3],
        'Finance': [3.86, 3.81, 3.93, 3.95, 3.79],
        'Food & Beverage / Agriculture': [3.48, 3.47, 3.47, 3.46, 3.41],
        'Health & Wellness & Beauty': [3.23, 3.05, 3.34, 3.1, 3.19],
        'Healthcare & Medical Tech': [3.42, 3.34, 3.64, 3.48, 3.35],
        'Information Technology (IT)': [3.93, 3.9, 3.92, 3.92, 3.77],
        'Machinery and Parts & Equipment': [3.47, 3.38, 3.58, 3.58, 3.38],
        'Mainstreet / Restaurants': [3.23, 3.05, 3.34, 3.1, 3.19],
        'Manufacturing': [3.68, 3.6, 3.67, 3.73, 3.54],
        'Materials': [3.47, 3.38, 3.58, 3.58, 3.38],
        'Not for Profit / Public Service': [3.12, 3.1, 3.49, 3.34, 3.09],
        'Oil & Gas / Energy': [3.63, 3.51, 3.68, 3.69, 3.36],
        'Other': [3.3, 3.25, 3.38, 3.43, 3.24],
        'Power & Utilities': [3.63, 3.51, 3.68, 3.69, 3.36],
        'Real Estate': [3.62, 3.52, 3.69, 3.7, 3.56],
        'Professional Services': [3.5, 3.4, 3.68, 3.58, 3.34],
        'Telecommunications': [3.78, 3.7, 3.72, 3.76, 3.65],
        'Transport & Logistics & Warehousing': [3.76, 3.67, 3.75, 3.85, 3.62]
    };

    const averages = {
        'Clothing & Textiles': 3.65,
        'Health & Wellness & Beauty': 3.19,
        'Materials': 3.47,
        'Power & Utilities': 3.57,
        'Construction & Infrastructure': 3.47,
        'Consumer Goods / Retail': 3.69,
        'Education': 3.41,
        'Finance': 3.86,
        'Food & Beverage / Agriculture': 3.46,
        'Healthcare & Medical Tech': 3.43,
        'Information Technology (IT)': 3.89,
        'Machinery and Parts & Equipment': 3.47,
        'Mainstreet / Restaurants': 3.19,
        'Manufacturing': 3.65,
        'Not for Profit / Public Service': 3.2,
        'Oil & Gas / Energy': 3.57,
        'Other': 3.32,
        'Professional Services': 3.48,
        'Real Estate': 3.62,
        'Telecommunications': 3.73,
        'Transport & Logistics & Warehousing': 3.73
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