docReady(function() {
    /////////////////////////////////////////////////////////////////
    //**********************CAPABILITIES TEXTS**********************//

    //********************CURRENT/NEXT STAGE NAMES***************//
    current_growth_stage_name = ["Forming", "Survival", "Establishing ground", "Ready to consolidate/first phase of new growth", "Ready to take off for rapid growth", "Success in progress", "Keeping Growth"];
    next_growth_stage_name = ["Survival", "Establishing ground", "Ready to consolidate/first phase of new growth", "Keeping Growth", "Keeping Growth", "Keeping Growth", "Seeing success (revisit)"];

    //********************CURRENT STAGE DESCRIPTIONS***************//
    const current_stage_company_direction_description_set = [
        'Your business model is still developing; the main focus right now is to stay alive and make it work. You have a clear purpose and value proposition that you truly believe will solve a problem for a key customer group. You know the positive impact you want to have for the customer and how it will ultimately benefit the society you seek to serve.',

        'You are grabbing growth opportunities; you need them to survive and continue to be viable for yourself, your family, key alliances/investors you have now or hope to have in the future. For the first time you feel the demand and see the impact of your product. You are hungry for growth, constantly assessing your options.',

        'You have taken a big enough step in making a strong, noticeable footprint in your chosen customer community - you may even be starting to see your wish of benefiting society for the better beginning to have an effect, driving your confidence that a substantial growth strategy is appropriate. Competitors are taking notice and for the first time you are considering what is going on outside as well as within your company; a balanced mix between growth that is planned and reactive.',

        'You are moving confidently towards having a strong position in your market, enjoying good returns for your efforts. Your company has a positive growth rate, smaller than the past yet consistent and bringing you more than you imagined. Growth plans might be more focused on building stronger relations with current customers although you may be considering the next stage of growth such as diversifying to give more choice, growing value in your current customer community or finding ways of strengthening the value proposition, cheaper, faster, better.',

        'You have achieved a strong position in your market - maybe leading and having begun to make the positive impact on society you set out to achieve. Perhaps your intention now is to use your business as a platform for growth, pursue a greater impact with your purpose, reinvest your returns and launch into new areas, be it distribution, geography or diversification. You have identified 1 or 2 areas of your business model to use as the growth drivers for your value proposition. E.g. channels, customer segments, key partnerships/alliances.',

        'You are moving confidently towards having a strong position in your market, enjoying good returns for your efforts. Your company has a positive growth rate, smaller than the past yet consistent and bringing you more than you imagined. Growth plans might be more focused on firming up the path you are on, perhaps you are considering whether there is still more ground to be gained on your current path. Sometimes we can reach the crossroads at success and still have the questions about which direction to be answered: You know you are very much wanted in your community and you are on a good direction now.',

        'You have seen either a successful “take off” growth strategy that made the planned impact/returns or 1 or 2 phases of a more controlled growth plan. Your returns currently feel low in comparison to your revenue and your growth strategies sometimes struggle to have the effect you want. However, your original purpose was (and still is being) achieved and you\'re enjoying this level of growth with a good market position. Perhaps you\'re wondering what\'s next or how to improve returns/reignite the spirit. Something is making it feel like a burden.'
    ];

    const current_stage_company_structure_desc = [
        'Your structure is simple and flat. As the founder, you do most of the key activities, directly supervising any team members or others associated with delivery (e.g. interns or temporary contractors) and your formal systems/controls are minimal. You\'re maybe starting to think about how key partnerships/alliances would be useful to support delivery of your product/service in the future.',

        'You are still working as one team with an informal meeting and reporting structure supported with a few centralised systems/controls and signs of formality. You are focused on what is happening within your company and on customer impact, whilst working with fellow believers in your product/service either due to their technical expertise or family/friends/people known to you offering support. As you finalise your business model, you are identifying the need for key partnerships/alliances now and in the future. ',

        'Your conversations are about the recent past and how growth is going with functional specialists now beginning to be responsible for certain tasks. The balance is still towards opportunity driven growth and everyone remains flexible when these emerge. Maybe there\'s a formal meeting structure where your functional specialists discuss the value proposition and its delivery to the customer, with a possible right hand person emerging. You could now support partnerships and investment. ',

        'Your focus is building the right infrastructure; your 2nd in command is beginning to take full control of operations, leading the business smoothly and efficiently to supply ever-evolving quality to the customer. This is allowing you to take on the visionary role for future growth, building the infrastructure that will support the agreed direction, perhaps with a small group of trusted and experienced people. Growth strategies, once translated into the organisation, are supported by dynamic growth-led project teams ensuring measurable progression.',

        'You have a strategy board looking towards future growth and an operational board. Both have clearly defined roles ensuring the current business remains strong and relevant; a solid platform for growth to launch from. The structure, supporting both the existing and new business, includes dynamic project teams who translate the growth direction into measurable goals. This creates a way of balancing organisational control whilst elevating people to be the best they can be; a unified structure and united workforce, built on positive and inclusive working, all led by your customer purpose - driven by you. ',

        'Your focus is building the right infrastructure; your 2nd in command is beginning to take full control of operations, leading the business smoothly and efficiently to supply ever-evolving quality to the customer. This is allowing you to take on the visionary role for future growth in which every form it will be, building the infrastructure that will support the journey now and perhaps looking at how it could support any new direction of growth in the future, perhaps with a small group of trusted and experienced people. Growth strategies, once translated into the organisation, are supported by dynamic growth-led project teams ensuring measurable progression.',

        'You have a well established decision-making board for both company operations and the future vision. Your systems and controls are well established too. However, there\'s a feeling that something is missing and you can\'t pinpoint what. The structure feels too heavy and sluggish or a little bureaucratic for the level of new growth you\'re seeing, maybe there\'s a feeling of productivity that is missing or that you\'re growing for growings sake? With a structure that is so experienced, you\'re perhaps frustrated that it should be delivering more to the purpose.'
    ];

    const current_stage_value_creation_desc = [
        '...develop and begin to supply a basic product/service that could be of value to your defined customer segment. You truly believe it will be well received and initial feedback is supporting this. Your passion and the support of a few others (perhaps from a technical specialism) is currently taking you there. ',

        '...do basic reviews of your product/service; it’s working and is beginning to stabilise, although still some trial and error. You have a realistic picture of the strengths and weaknesses and you\'re beginning to generate clear ideas of what is required today and at greater volume levels to make it stronger, more efficient and deliver to the customer right every time. Partnerships/alliances are being considered or formally developed to ensure your value proposition is unique and can lead the market.',

        '...supply the product/service at an established yet basic value level. You\'re perhaps at a point where the quality is reassured and the value creation process is well oiled with key activities, resources, alliances and channels being established enough to support your hunger for the growth that you know the company needs (and wants). Measures of success are shared by all; team members are working with a clearer process where the controls and agreed ways of working support the huge growth strategy that you have.',

        '...supply the product/service at an added value level; the portfolio will or already has been developed to offer varying options in your current market. Quality is reassured and the value creation process is well oiled. The agreed company direction challenges the need for ongoing, growing returns by finding the innovation without the next huge growth era. Perhaps it\'s the development of added value, simple diversification of the product/service or adjustments in key activities, resources, alliances and channels, to create more options of finding and maintaining the uniqueness of your company.  ',

        '...choose to expand your current product/service into new markets, channels or other growth ideas from the strategy board. You are actively looking at all areas of the business model for this; using its established strength, new partnerships, alliances, increasing your key resources or an acquisition that will improve the delivery of the purpose to the customer in the new markets you have defined. You are constantly questioning how you keep and make yourself more unique, keeping your purpose relevant and making the impact you still hold dear.',

        ' ...supply the product/service at an added value level; the portfolio will or already has been developed to offer varying options in your current market. Quality is reassured and the value creation process is well oiled. The agreed company direction remains at his level with the awareness that there will be the need for ongoing, growing returns once you have made the decision about whether now is the right time to grow. Perhaps it\'s the development of added value, simple diversification of the product/service or adjustments in key activities, resources, alliances and channels, to create more options of finding and maintaining the uniqueness of your company. You are beginning these conversations.',

        'The value creation process stands strong and works well. It has remained the same for some time and although it delivers well, perhaps the measure of purpose has begun to lapse with how much it sits at the forefront of the thinking. There could be times when you feel that the establishment is too comfortable; this extends to partnerships, alliances, key resources. You are happy with the feel of the company, perhaps somewhere along the line there could be weaker links, you are just not sure where.'
    ];

    var current_stage_decision_making_desc = [
        '...with you, the founder(s), unanimously and informally. As it\'s so fast moving and changeable there is a need for flexibility. This is currently the approach that suits your growth strategy the best and is most enjoyable for you.',

        '...still with you the founder(s) although now more centralised involving opinions of a few key people. The growth decisions are focused around your product/service and growing your place in the market - or even creating the market itself. Perhaps you are beginning to delegate certain responsibilities around systems and processes in the value creation process. You might be beginning to use basic performance data, tracking volume and using quality measures to also support your decisions. ',

        '...from the top of the organisation. You are beginning to make important decisions with a group of trusted people. The process is easy for people to understand and allows for more of a smooth flow as not all decisions go through you, enabling key functional specialists to step into a more accountable role. You remain the visionary, leading direction decisions and maybe taking growth advice from a trusted advisor, coordinating some of the day-to-day decisions through a developing right-hand person.',

        '...throughout the organisation with logical order designed to ensure big decisions are made with a group of trusted leaders in the form of the operations board and its leader (which may no longer be you). From this board, the decisions flow throughout the organisation encouraging shared responsibility and enabling a smoother evolution of the value proposition to the customer. Your decision-making responsibility remains around the overall direction of the company, growth opportunities to stay forward thinking and relevant, and keeping the purpose strong.',

        '...throughout the organisation. The operational running of the company has long been delegated to your strong operational leader and direct team. As the founder(s) your interest and decisions remain on the effective delivery of the company purpose, ensuring a company structure that enables it and a drive that keeps it alive. This, as well as creating the approach for the new growth plans of diversification, new channels and moving the value creation process into a new era, including the speed and level of risk you wish to take to achieve this new direction.',

        'Throughout the organisation with logical order designed to ensure big decisions are made with a group of trusted leaders in the form of the operations board and its leader (which may no longer be you). From this board, the decisions flow throughout the organisation encouraging shared responsibility and enabling a smoother evolution of the value proposition to the customer. Your decision-making responsibility remains around the overall direction of the company, growth opportunities to stay forward thinking and relevant, and keeping the purpose strong and in your current case, how to grow forward.',

        '...within the leadership boards, there are fewer decisions to make and the strategic board has perhaps started making decisions that are too operational. You miss taking decisions about things that mattered for growth and driving your purpose; the courage and challenges that you and the strategic team used to make are minimised and conversations are now limited to costs and returns rather than pushing forward. You accept that not everything is about leaps in growth, yet it\'s certainly not about having very capable people talking about financial outcomes either.'
    ];

    //********************NEXT STAGE DESCRIPTIONS***************//
    const next_stage_company_direction_description_set = [
        'In this phase that you\'re wanting to move into, you will be grabbing every growth opportunity; you\'ll need them to survive and continue to be viable for yourself, your family and any key alliances/investors that you are looking to have. For the first time you\'re going to feel demand and see the impact of your product. You\'ll have a real hunger for growth and will be constantly assessing your options in order to get it.',

        'Once you\'ve got through the survival phase, you\'ll feel like you\'ve taken a big enough step in making a strong, noticeable footprint in your community, maybe even starting to see your wish of benefiting society for the better beginning to have an effect. You should now feel confident that a substantial growth strategy is appropriate especially as competitors will be starting to take notice. You\'ll be looking for a more balanced mix between growth that is planned and growth that is reactive. ',

        'You\'ve established ground and you want to start to see and enjoy the success and return on your efforts. Your market position will be strong - even the market leader - and you will now have a choice to make;' +
        '<br>--Consolidate and focus on building stronger relations with current customers, diversifying to give more choice, growing value or finding ways of strengthening the value proposition. Or: ' +
        '<br>--Propel forward to "take-off" to a rapid new growth era where you would pursue a greater impact with your purpose, reinvest your returns and launch into new areas.You will have to identify 1 - 2 growth drivers for your value proposition.E.g.channels, customer segments, key partnerships / alliances.',

        'You\'ve established ground and you want to start to see and enjoy the success and return on your efforts. Your market position will be strong - even the market leader - and you will now have a choice to make;' +
        '<br>--Consolidate and focus on building stronger relations with current customers, diversifying to give more choice, growing value or finding ways of strengthening the value proposition. Or: ' +
        '<br>--Propel forward to "take-off" to a rapid new growth era where you would pursue a greater impact with your purpose, reinvest your returns and launch into new areas.You will have to identify 1 - 2 growth drivers for your value proposition.E.g.channels, customer segments, key partnerships / alliances.',

        'You\'ve established ground and you want to start to see and enjoy the success and return on your efforts. Your market position will be strong - even the market leader - and you will now have a choice to make;' +
        '<br>--Consolidate and focus on building stronger relations with current customers, diversifying to give more choice, growing value or finding ways of strengthening the value proposition. Or: ' +
        '<br>--Propel forward to "take-off" to a rapid new growth era where you would pursue a greater impact with your purpose, reinvest your returns and launch into new areas.You will have to identify 1 - 2 growth drivers for your value proposition.E.g.channels, customer segments, key partnerships / alliances.',

        'You have achieved great success in your company, however success is not the last stage, the last stage is staying there. Keeping the momentum, energy and focus, always striving to increase the impact of your purpose. <br>The reason, as momentum decreases, is that it\'s more of a challenge to keep growth moving forward and not end up in the maturity era where growth goals are not big enough to avoid an unhealthy complacency. <br>-- Reignite growth possibilities by revisiting your purpose and the business model, asking yourself “where could we go next” either by focusing on building stronger relations with current customers, diversifying to give more choice, growing value or finding ways of strengthening the value proposition or further diversified expansion.',

        'Success is never the end of growth, keeping yourself growing is the challenge we are often faced for, keeping growth gave us the “rebirth” we probably needed and now we have to ensure that we always keep growth at the top of our direction, keeping out business relevant and the first choice for the customer we have worked so hard to establish as a loyal community. Constantly challenge the business model, to try and decide how to reignite and keep connected to the purpose, if you are not sure read “in progress” not every moment has to be a “take off” just staying relevant. <br>Just keep retuning to the 3 choice of growth: <br>Consolidate/ first stages, take off or keep things progressing forward until, you decide. Keep energy levels dynamic, growth should be the norm at all times, for as long as the world outside grows why would we want to be left behind as our customer and our community move on.',

        'Success is never the end of growth, keeping yourself growing is the challenge we are often faced for, keeping growth gave us the “rebirth” we probably needed and now we have to ensure that we always keep growth at the top of our direction, keeping out business relevant and the first choice for the customer we have worked so hard to establish as a loyal community. Constantly challenge the business model, to try and decide how to reignite and keep connected to the purpose, if you are not sure read “in progress” not every moment has to be a “take off” just staying relevant. <br>Just keep retuning to the 3 choice of growth: <br>Consolidate/ first stages, take off or keep things progressing forward until, you decide. Keep energy levels dynamic, growth should be the norm at all times, for as long as the world outside grows why would we want to be left behind as our customer and our community move on.'
    ];

    const next_stage_company_structure_desc = [
        'As you look to "survival" you\'ll still be working as one team with an informal structure. However, you will start having a few centralised systems/controls or signs of formality. Your focus is still on what is happening within your company and customer impact, and you\'re going to have believers working alongside you - whether that is due to their technical expertise or family/friends/people known to you. The noticeable difference in this phase is how you\'ll start to identify partnerships and alliances to support your business model. ',

        'You\'ll be start to have conversations about the recent past and how growth is going. You are going to have functional specialists beginning to be responsible for certain tasks and the balance will still be towards opportunity driven growth with everyone needing to remain flexible when these emerge, You are going to need a formal meeting structure where functional specialists discuss the value proposition and its delivery to the customer and it will also be time to find a right-hand person so you can start securing partnerships and investment. ',

        'You have found and on-boarded the 2nd in command and they\'ll be taking full control of operations; you\'ll be confident in them leading the business smoothly and efficiently to supply ever-evolving quality to the customer. <br>You will now be able to take on the visionary role for future growth and decide whether to stay, sell or take off into new opportunities beyond your current market. Whether you consolidate and have controlled growth with dynamic growth-led project teams, or use your platform to "take-off" and propel forward with a strategic board focused on supporting both existing and new business, you\'ll be the driver of purpose with a unified structure and united workforce.',

        'You have found and on-boarded the 2nd in command and they\'ll be taking full control of operations; you\'ll be confident in them leading the business smoothly and efficiently to supply ever-evolving quality to the customer. <br>You will now be able to take on the visionary role for future growth and decide whether to stay, sell or take off into new opportunities beyond your current market. Whether you consolidate and have controlled growth with dynamic growth-led project teams, or use your platform to "take-off" and propel forward with a strategic board focused on supporting both existing and new business, you\'ll be the driver of purpose with a unified structure and united workforce.',

        'You have found and on-boarded the 2nd in command and they\'ll be taking full control of operations; you\'ll be confident in them leading the business smoothly and efficiently to supply ever-evolving quality to the customer. <br>You will now be able to take on the visionary role for future growth and decide whether to stay, sell or take off into new opportunities beyond your current market. Whether you consolidate and have controlled growth with dynamic growth-led project teams, or use your platform to "take-off" and propel forward with a strategic board focused on supporting both existing and new business, you\'ll be the driver of purpose with a unified structure and united workforce.',

        'Whatever "success" will have looked like for you, you\'ll have a well established decision-making board for company operations and the future vision. However, this new phase of maturity will bring a feeling that something is missing and you can\'t pinpoint what. The structure feels heavy to you, sluggish or a little bureaucratic for the level of new growth you\'ll be seeing, maybe there will be a feeling of missing productivity. You\'ll have an experienced structure and perhaps a frustration as to why it\'s not delivering more for the purpose.',

        'Whatever "success" will have looked like for you, you\'ll have a well established decision-making board for company operations and the future vision. However, this new phase of maturity will bring a feeling that something is missing and you can\'t pinpoint what. The structure feels heavy to you, sluggish or a little bureaucratic for the level of new growth you\'ll be seeing, maybe there will be a feeling of missing productivity. You\'ll have an experienced structure and perhaps a frustration as to why it\'s not delivering more for the purpose.'
    ];

    const next_stage_value_creation_desc = [
        'At this stage, your value creation process needs to enable you to have basic reviews of your product/service; you\'ll be able to see it\'s working and is beginning to stabilise, although there will still be some trial and error. You\'ll have a more realistic picture of the strengths and weaknesses enabling you to generate clear ideas of what is required and how to make it stronger and more efficient at greater volume levels.You\'ll be starting to consider or be formally developing partnerships/alliances to ensure your value proposition is unique and can lead the market.',

        'You\'ll be looking for your value creation process to be at an established yet basic value level, getting to point where the quality is reassured and the process is well oiled.Key activities, resources, alliances and channels will be getting established to support your hunger for the growth that you know the company needs(and wants). Measures of success will be shared by all; team members should be working with a clearer process where the controls and agreed ways of working support the huge growth strategy that you have. ',

        'In order to see success, you will have to choose between a value creation process that is focused on either;  <br>--Supplying the product / service at an added value level with a developed portfolio and reassured quality.You\'ll have an agreed company direction that challenges the need for ongoing, growing returns by finding the innovation to maintain the uniqueness of your compancy without the next huge growth era. Or; <br>--Expanding your current product / service into new markets or channels.You\'ll be actively looking at all areas of your established business model for new partnerships/alliances or an acquisition that will improve the delivery of the purpose to the customer in more markets, whilst becoming more unique and making the impact you still hold dear.',

        'In order to see success, you will have to choose between a value creation process that is focused on either;  <br>--Supplying the product / service at an added value level with a developed portfolio and reassured quality.You\'ll have an agreed company direction that challenges the need for ongoing, growing returns by finding the innovation to maintain the uniqueness of your compancy without the next huge growth era. Or; <br>--Expanding your current product / service into new markets or channels.You\'ll be actively looking at all areas of your established business model for new partnerships/alliances or an acquisition that will improve the delivery of the purpose to the customer in more markets, whilst becoming more unique and making the impact you still hold dear.',

        'In order to see success, you will have to choose between a value creation process that is focused on either;  <br>--Supplying the product / service at an added value level with a developed portfolio and reassured quality.You\'ll have an agreed company direction that challenges the need for ongoing, growing returns by finding the innovation to maintain the uniqueness of your compancy without the next huge growth era. Or; <br>--Expanding your current product / service into new markets or channels.You\'ll be actively looking at all areas of your established business model for new partnerships/alliances or an acquisition that will improve the delivery of the purpose to the customer in more markets, whilst becoming more unique and making the impact you still hold dear.',

        'Looking to this phase, your value creation process will be standing strong and working well. It\'ll remain the same for some time and although it delivers well, the measure of purpose will begin to lapse with how much it sits at the forefront of the thinking.You\'ll have to navigate the times when you feel that the establishment is too comfortable. You might be happy with the feel of the company yet have a feeling that somewhere along the line there could be weaker links, you\'ll just not be sure where.',

        'Looking to this phase, your value creation process will be standing strong and working well. It\'ll remain the same for some time and although it delivers well, the measure of purpose will begin to lapse with how much it sits at the forefront of the thinking.You\'ll have to navigate the times when you feel that the establishment is too comfortable. You might be happy with the feel of the company yet have a feeling that somewhere along the line there could be weaker links, you\'ll just not be sure where.'
    ];

    const next_stage_decision_making_desc = [
        'Decision-making will still be with you the founder(s) although it\'ll have to be more centralised to involve the opinions of a few key people. The growth decisions will be focused around your product/service and growing your place in the market - or even how you create the market itself. You\'ll be looking to start delegating certain responsibilities, and basic performance data, tracking volume and quality measures will be needed to form and support your decisions.',

        'Decision-making will sit at the top of your organisation. You\'ll be starting to make important decisions with a group of trusted people allowing the process to be easy for everyone to understand; a smooth flow and not all decisions going through you will enable key functional specialists to step into more accountable roles. You\'ll remain the visionary, leading direction decisions and maybe taking growth advice from a trusted advisor with day-to-day decisions being coordinated through a developing right-hand person.',

        'Decision-making will sit throughout your organisation with logical order so big decisions are being made with a group of leaders you trust, encouraging shared responsibility and enabling a smoother evolution of the value proposition to the customer.<br>Following your well earned success, if you choose at this point to consolidate your business, your decision-making responsibility will be focused on the overall direction of the company, growth opportunities to stay forward thinking and relevant, and keeping the purpose strong. <br>If you choose to "take-off" into a new growth era, your decisions will have to be focused on keeping the purpose stronger than ever. This, as well as creating the approach for new growth plans (diversification, new channels, evolving the value creation process) and deciding on the speed and level of risk you\'ll be willing to take to achieve this new direction. ',

        'Decision-making will sit throughout your organisation with logical order so big decisions are being made with a group of leaders you trust, encouraging shared responsibility and enabling a smoother evolution of the value proposition to the customer.<br>Following your well earned success, if you choose at this point to consolidate your business, your decision-making responsibility will be focused on the overall direction of the company, growth opportunities to stay forward thinking and relevant, and keeping the purpose strong. <br>If you choose to "take-off" into a new growth era, your decisions will have to be focused on keeping the purpose stronger than ever. This, as well as creating the approach for new growth plans (diversification, new channels, evolving the value creation process) and deciding on the speed and level of risk you\'ll be willing to take to achieve this new direction. ',

        'Decision-making will sit throughout your organisation with logical order so big decisions are being made with a group of leaders you trust, encouraging shared responsibility and enabling a smoother evolution of the value proposition to the customer.<br>Following your well earned success, if you choose at this point to consolidate your business, your decision-making responsibility will be focused on the overall direction of the company, growth opportunities to stay forward thinking and relevant, and keeping the purpose strong. <br>If you choose to "take-off" into a new growth era, your decisions will have to be focused on keeping the purpose stronger than ever. This, as well as creating the approach for new growth plans (diversification, new channels, evolving the value creation process) and deciding on the speed and level of risk you\'ll be willing to take to achieve this new direction. ',

        'Decision-making will sit within the leadership boards. There will be fewer decisions to make and the strategic board will perhaps start making decisions that are too operational. The decisions and challenges that you\'re used to in the stage you\'re in now will be minimised and conversations will now be limited to costs and returns rather than pushing forward. You\'ll have to accept that not everything is about leaps in growth at this stage, yet you\'ll need to find a balance to not end up having very capable people talking about financial outcomes.',

        'Decision-making will sit within the leadership boards. There will be fewer decisions to make and the strategic board will perhaps start making decisions that are too operational. The decisions and challenges that you\'re used to in the stage you\'re in now will be minimised and conversations will now be limited to costs and returns rather than pushing forward. You\'ll have to accept that not everything is about leaps in growth at this stage, yet you\'ll need to find a balance to not end up having very capable people talking about financial outcomes.'
    ];

    //******************GROWTH STAGE STATEMENT***************//

    const growth_statment_company_direction = [
        'Created a new market or a unique offering in an existing market offering, your focus is to keep that up and to make your idea work.',
        'Saying yes to every growth opportunity, busy trying to perfect your offer and hoping to start seeing some return soon.',
        'A huge hunger for growth now you\'ve seen positive signs of your product/service making an impact - now is your time to be out there. ',
        'Starting to see good returns and confident with your market position. Focus is shifting more to the existing customer and market for growth opportunities.',
        'With a strong market position you are looking at how to reinvest and use your success as a platform for greater growth beyond your current operations.',
        'Starting to see good returns and a strong market position. Focus is shifting to what\'s next - consolidate for the existing customer or reinvest for greater growth beyond your current operations.',
        'After the reward of many growth moments, the direction of the company seems perhaps harder to define.'
    ];
    const growth_statment_company_structure = [
        'Simple and flat. You do everything with minimal systems in place.',
        'Working as one centralised team, united on cause, with few systems/controls and signs of formality.',
        'Developing, allowing functional expertise to build and offer value. Dynamic and still flexible to react quickly to opportunities.',
        'Becoming more formal, a 2nd in command is present and possibly leading an operational board with dynamic project teams driving growth.',
        'Having both a future thinking/governing board and a well established operational board. Dynamic project teams drive growth in both new and existing markets.',
        'Becoming more formal, a 2nd in command is leading a well established operational board with dynamic project teams driving growth.',
        'Having a well established way of doing things, the ability to maintain growth and company performance feels reassuringly consistent.'
    ];
    const growth_statment_value_creation = [
        'Supply a specific product/service that is functional for your customer.',
        'Supply a specific product/service, evolving from customer experiences that perhaps has new and improved options.',
        'Supply a product/service at an agreed basic value level, to a growing a defined customer group with reassured quality.',
        'Supply the product/service with added value and options, perhaps diversified. Your expertise and knowledge on your customer is your advantage.',
        'Supply multiple products/services, responding to customer needs and extending channels/product value to achieve the positive impact you wish to make.',
        'Supply multiple products/services where your customer knowledge is your advantage to add further value. If you\'ve decided to rapidly grow, you\'re extending channels/product value to see that positive impact.',
        'Supply a quality product/service that has been diversified, it\'s positively and well received benefitting a wide and loyal society in a mature market.'
    ];
    const growth_statment_decision_making = [
        'With you as the founder, based on a mix of beliefs and personal experience rather than data and evidence bringing a mix of trial and error.',
        'With you as the founder, using initial data to support beliefs and increasing knowledge of how the product/service is being received.',
        'From the top down. Decision-making is still not complex and is clear to everyone.',
        'Throughout the organisation dependant on the level of importance. The company direction comes from one source making decisions easy to make.',
        'Throughout the organisation with a mix of high risk investments and keeping the strength of the original company as the cash generator making it sometimes confusing.',
        'Throughout the organisation; this could be a combination of one source trying to lead or if you\'ve decided to rapidly grow, high risk investment opportunities could be seeing decision-making getting confusing.',
        'There are less high risk decisions to be made so perhaps the decision-making process has lapsed.'
    ];

    //******************CAPABILITIES ALIGNMENT***************//

    // related to company structure
    const capab_alignment_company_structure_row1 = [
        'You are just setting out with your idea and at this forming level you are focused internally with making this a viable business model. The structure is you as the founder(s) working with your own ideas, people you know, family and friends offering help, groups giving advice - seeing it gather momentum. You are beginning to trial the customer, using the help on offer to make the product/service as on message as you can, building the clearest customer picture you can in order to appear confident and valid - especially when it’s based on no actual evidence yet! You are supposed to be the company at this stage; with no structure it sometimes gives the proof that you might need to care about it enough to put the hours required to make it happen.',

        'When the structure of the company forms too quickly, it can cause unnecessary pressure. The energy levels between forming and survival are very similar, however the focus is very different; in the survival era you have green shoots of return on investment as your product shows the first stages of viability. It’s safer to begin committing to resources other than yourself, be it still family and friends, as if you move too soon, you could be getting people to commit to something that is not viable. ',

        'When the structure of a company is built too formally and too quickly, it can sometimes lead to over engineering the processes and systems. When you are still answering the question of whether the business model is viable and you are grabbing growth opportunities very quickly, you need a flat “in it together” structure so you can act with speed, sometimes making mistakes but all with the aim of making it happen. Freedom and familiarity with high energy is enabled by a structure that looks after new and existing business with a focus on one thing and one thing alone: “Do enough people want and need me and how well can I deliver?” This question leads your resourcing - it’s an “all hands on deck” approach, rather than being overburdened with functional roles.',

        'When the structure of a company is bigger than the growth strategy it supports, it will squash the initial forming of the product by forcing an over engineered thinking process. New business models should be ugly and raw - that’s what trial and error is for! Mature companies have forgotten this and form too many controls on every experiment, forgetting how to fail and failing is a critical part of the process.',

        'When the structure of a company is bigger than the growth strategy it supports, it will squash the initial forming of the product by forcing an over engineered thinking process. New business models should be ugly and raw - that’s what trial and error is for! Mature companies have forgotten this and form too many controls on every experiment, forgetting how to fail and failing is a critical part of the process.',

        'When the structure of a company is bigger than the growth strategy it supports, it will squash the initial forming of the product by forcing an over engineered thinking process. New business models should be ugly and raw - that’s what trial and error is for! Mature companies have forgotten this and form too many controls on every experiment, forgetting how to fail and failing is a critical part of the process.',

        'When the structure of a company is bigger than the growth strategy it supports, it will squash the initial forming of the product by forcing an over engineered thinking process. New business models should be ugly and raw - that’s what trial and error is for! Mature companies have forgotten this and form too many controls on every experiment, forgetting how to fail and failing is a critical part of the process.'
    ];

    const capab_alignment_company_structure_row2 = [
        'When structure remains at the forming level, there simply is not enough resources to create a reliable value and form to the product, so perhaps you are trying to grow the business away from an ideal avatar, bringing high levels of frustration in some areas, including within yourself as the founder. One step forward, two steps back and trying to gain ground far too soon.',

        'At this growth level the right balance in the structure brings a united, family feel. In fact, some may well be family members or good friends, dotted with a few technical innovators / general creators or new concept addicts. The informality keeps people excited, you have very little to offer other than being part of something new and for this reason the structure needs to be inclusive and everybody’s value has to matter, making a recognised contribution to the cause. You need donations of time, energy and believers, with a few others for the sense checking. The energy is high, the erratic activities are magnetic and the feeling of hope is the driver, supported by the evidence that is appearing.',

        'When the structure of a company is built too formally and too quickly, it can sometimes lead to over engineering the processes and systems. When you are still answering the question of whether the business model is viable and you are grabbing growth opportunities very quickly, you need a flat “in it together” structure so you can act with speed, sometimes making mistakes but all with the aim of making it happen. Freedom and familiarity with high energy is enabled by a structure that looks after new and existing business with a focus on one thing and one thing alone: “Do enough people want and need me and how well can I deliver?” This question leads your resourcing - it’s an “all hands on deck” approach, rather than being overburdened with functional roles.',

        'When the structure of a company adds formality too quickly, it can sometimes be responsible for over engineering the process because the value of the product/service is evolved before its core is ready. Rapid growth requires a high level of energy, focus and speed and building a structure that is too heavy tends to block this as well as creating a heavy financial burden on an establishing business. Overqualified people who can’t give all their value can sometimes begin to make processes and systems that maybe enhance the value of your product, not take growth to a new level.',

        'When the structure of a company adds formality too quickly, it can sometimes be responsible for over engineering the process because the value of the product/service is evolved before its core is ready. Rapid growth requires a high level of energy, focus and speed and building a structure that is too heavy tends to block this as well as creating a heavy financial burden on an establishing business. Overqualified people who can’t give all their value can sometimes begin to make processes and systems that maybe enhance the value of your product, not take growth to a new level.',

        'When the structure of a company adds formality too quickly, it can sometimes be responsible for over engineering the process because the value of the product/service is evolved before its core is ready. Rapid growth requires a high level of energy, focus and speed and building a structure that is too heavy tends to block this as well as creating a heavy financial burden on an establishing business. Overqualified people who can’t give all their value can sometimes begin to make processes and systems that maybe enhance the value of your product, not take growth to a new level.',

        'The structure at the maturity growth stage supports the maintenance of growth of the current company. It is very established so it can sometimes form a block for innovation, viability of new concepts or rapid growth - the energy and the hunger for changing “what works” is absent. High energy growth requires different behaviours, direction and focus. Sometimes, when a new business is introduced into a mature company and the structure is not adjusted, its presence and activities can be called a “distraction” or “a potential burden.”'
    ];

    const capab_alignment_company_structure_row3 = [
        'When structure remains at the forming level, there simply is not enough resources to create a reliable value and form to the product, so perhaps you are trying to grow the business away from an ideal avatar, bringing high levels of frustration in some areas, including within yourself as the founder. One step forward, two steps back and trying to gain ground far too soon.',

        'When structure remains in the survival stage it can cause an unbalance of resources, with people being directed towards repairing and addressing the issues of the value creation process rather than focusing on rapid growth and driving new opportunities. There could be increasing pressure on certain areas of the process that rely on ways of doing things in the past. New, key resources brought in struggle to find the space to add value and can become exhausted by living at an entrepreneurial energy level.',

        'At this growth level you should have the right balance of loyal people, who know your history and new resources who have lived rapid growth before. You need high energy, self-driven people with a new touch of expertise - resources who will not overburden with too many procedures or put too much pressure on the cost structure. The team should still be experienced and trusted enough to be responsible for day to day management giving you more freedom to lead your purpose. The company can enjoy the right elements of the unknown challenge.',

        'When the structure of a company adds formality too quickly, it can sometimes be responsible for over engineering the process because the value of the product/service is evolved before its core is ready. Rapid growth requires a high level of energy, focus and speed and building a structure that is too heavy tends to block this as well as creating a heavy financial burden on an establishing business. Overqualified people who can’t give all their value can sometimes begin to make processes and systems that maybe enhance the value of your product, not take growth to a new level.',

        'When the structure of a company adds formality too quickly, it can sometimes be responsible for over engineering the process because the value of the product/service is evolved before its core is ready. Rapid growth requires a high level of energy, focus and speed and building a structure that is too heavy tends to block this as well as creating a heavy financial burden on an establishing business. Overqualified people who can’t give all their value can sometimes begin to make processes and systems that maybe enhance the value of your product, not take growth to a new level.',

        'When the structure of a company adds formality too quickly, it can sometimes be responsible for over engineering the process because the value of the product/service is evolved before its core is ready. Rapid growth requires a high level of energy, focus and speed and building a structure that is too heavy tends to block this as well as creating a heavy financial burden on an establishing business. Overqualified people who can’t give all their value can sometimes begin to make processes and systems that maybe enhance the value of your product, not take growth to a new level.',

        'The structure at the maturity growth stage supports the maintenance of growth of the current company. It is very established so it can sometimes form a block for innovation, viability of new concepts or rapid growth - the energy and the hunger for changing “what works” is absent. High energy growth requires different behaviours, direction and focus. Sometimes, when a new business is introduced into a mature company and the structure is not adjusted, its presence and activities can be called a “distraction” or “a potential burden.”'
    ];

    const capab_alignment_company_structure_row4 = [
        'When structure is in forming mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist because you are so established in your market. In a company that is enjoying success and is looking for more growth, the structure needs to reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new structure within a success era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'When structure is in survival mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist because you are so established in your market. In a company that is enjoying success and is looking for more growth, the structure needs to reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change, as well as evolve it for the future. Perhaps you have a new structure within a success era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'If your structure is at this level you will have the right balance of loyal people, who know your history and new resources who have lived rapid growth before. Considering your current direction is in the success era, this slightly informal structure with only developing systems and processes, could give a level of inexperience and instability that drives higher risk in the more complex growth strategies that this growth stage requires. <br>The structure at this level is designed to be more opportunistic for rapid growth, allowing for a balance between entrepreneurial style with the move to include more experienced resources systems and controls. Growth strategies from the success era are more planned as your position in the market allows for more building upon your success, rather than establishing it.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When the structure of a company is built too formally too quickly, it can sometimes be responsible for over engineering the processes and systems. Without a clear direction on growth, the structure matures and becomes “the keeper” of stable returns. You are right to reignite growth in some form into this structure to prevent further demise and maybe this is what you are trying to achieve by reigniting new opportunities for growth. Change in direction of growth strategies requires a lot of new energy to reignite a mature company to move towards, perhaps also innovation, change and speed and having a structure that is too mature can block a seamless process. The structure can be slightly heavy on executive level resources with skills and experience - but maybe you are missing the more entrepreneurial style of energy to help make the change. As a top tip if you are here, the problem is never the cause and the cause is a diluted purpose and this is your starting point, the foundation of the spirit you had with the knowledge and capability of your successful company...simply priceless.'
    ];

    const capab_alignment_company_structure_row5 = [
        'When structure is in forming mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist because you are so established in your market. In a company that is enjoying success and is looking for more growth, the structure needs to reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new structure within a success era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'When structure is in survival mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist because you are so established in your market. In a company that is enjoying success and is looking for more growth, the structure needs to reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change, as well as evolve it for the future. Perhaps you have a new structure within a success era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'If your structure is at this level you will have the right balance of loyal people, who know your history and new resources who have lived rapid growth before. Considering your current direction is in the success era, this slightly informal structure with only developing systems and processes, could give a level of inexperience and instability that drives higher risk in the more complex growth strategies that this growth stage requires. <br>The structure at this level is designed to be more opportunistic for rapid growth, allowing for a balance between entrepreneurial style with the move to include more experienced resources systems and controls. Growth strategies from the success era are more planned as your position in the market allows for more building upon your success, rather than establishing it.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When the structure of a company is built too formally too quickly, it can sometimes be responsible for over engineering the processes and systems. Without a clear direction on growth, the structure matures and becomes “the keeper” of stable returns. You are right to reignite growth in some form into this structure to prevent further demise and maybe this is what you are trying to achieve by reigniting new opportunities for growth. Change in direction of growth strategies requires a lot of new energy to reignite a mature company to move towards, perhaps also innovation, change and speed and having a structure that is too mature can block a seamless process. The structure can be slightly heavy on executive level resources with skills and experience - but maybe you are missing the more entrepreneurial style of energy to help make the change. As a top tip if you are here, the problem is never the cause and the cause is a diluted purpose and this is your starting point, the foundation of the spirit you had with the knowledge and capability of your successful company...simply priceless.'
    ];

    const capab_alignment_company_structure_row6 = [
        'When structure is in forming mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist because you are so established in your market. In a company that is enjoying success and is looking for more growth, the structure needs to reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new structure within a success era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'When structure is in survival mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist because you are so established in your market. In a company that is enjoying success and is looking for more growth, the structure needs to reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change, as well as evolve it for the future. Perhaps you have a new structure within a success era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'If your structure is at this level you will have the right balance of loyal people, who know your history and new resources who have lived rapid growth before. Considering your current direction is in the success era, this slightly informal structure with only developing systems and processes, could give a level of inexperience and instability that drives higher risk in the more complex growth strategies that this growth stage requires. <br>The structure at this level is designed to be more opportunistic for rapid growth, allowing for a balance between entrepreneurial style with the move to include more experienced resources systems and controls. Growth strategies from the success era are more planned as your position in the market allows for more building upon your success, rather than establishing it.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When you reach this success stage and have established good ground through rapid growth, you can now reap the benefits of all the hard work. You, the founder, are at a crossroads, deciding whether to sell, exist with controlled growth or reinvest back into the next take-off stage. The structure you create is an essential part of supporting the right growth strategy, no matter which direction you take at this crossroads there is a common theme to all the outcomes. Your structure should always be built for growth, it’s always growth first. The theory behind this is to both effectively use the incredibly strong group of people that you have and to avoid early maturity/losing too much money in the journey for new opportunities. Think of the issue as bigger than structure alone; growth is the starting point of everything, and a company structure should always reflect a readiness for it, the type of strategy is irrelevant. A company that has made it this far should be proud and will have a strong business, it will certainly be capable of continuing strong growth. The question is, will it have the ability? And that comes to the alignment of purpose.',

        'When the structure of a company is built too formally too quickly, it can sometimes be responsible for over engineering the processes and systems. Without a clear direction on growth, the structure matures and becomes “the keeper” of stable returns. You are right to reignite growth in some form into this structure to prevent further demise and maybe this is what you are trying to achieve by reigniting new opportunities for growth. Change in direction of growth strategies requires a lot of new energy to reignite a mature company to move towards, perhaps also innovation, change and speed and having a structure that is too mature can block a seamless process. The structure can be slightly heavy on executive level resources with skills and experience - but maybe you are missing the more entrepreneurial style of energy to help make the change. As a top tip if you are here, the problem is never the cause and the cause is a diluted purpose and this is your starting point, the foundation of the spirit you had with the knowledge and capability of your successful company...simply priceless.'
    ];

    const capab_alignment_company_structure_row7 = [
        'When structure is in forming mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist. In a mature company ,the structure needs to always reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new structure within a mature company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/governing board to define a workable structure and coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'When structure is in survival mode, you have an imbalance of resources and energy levels meaning that all focus can remain on driving new opportunities, which no longer exist. In a mature company ,the structure needs to always reflect the support it gives to maintain a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new structure within a mature company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/governing board to define a workable structure and coexistence, so any new, key resources brought in don’t struggle to find the space to add value.',

        'You have a fast growth structure with limited growth direction, which means that you have growth-led leaders looking towards what they can grow. This can sometimes result in the overengineering of the processes and systems, changing the wrong things, a lot of effort for little return, and low levels of motivation with a high cost structure. Future thinkers will begin to future-think operations and without direction this causes confusion where the wrong things are being changed, conflict occurs and returns are diminishing. Too many people may mean that some are overqualified and begin to make processes and systems that simply don’t contribute towards the avatar. This situation tends to result in certain leaders moving on.',

        'You have a fast growth structure with limited growth direction, which means that you have growth-led leaders looking towards what they can grow. This can sometimes result in the overengineering of the processes and systems, changing the wrong things, a lot of effort for little return, and low levels of motivation with a high cost structure. Future thinkers will begin to future-think operations and without direction this causes confusion where the wrong things are being changed, conflict occurs and returns are diminishing. Too many people may mean that some are overqualified and begin to make processes and systems that simply don’t contribute towards the avatar. This situation tends to result in certain leaders moving on.',

        'You have a fast growth structure with limited growth direction, which means that you have growth-led leaders looking towards what they can grow. This can sometimes result in the overengineering of the processes and systems, changing the wrong things, a lot of effort for little return, and low levels of motivation with a high cost structure. Future thinkers will begin to future-think operations and without direction this causes confusion where the wrong things are being changed, conflict occurs and returns are diminishing. Too many people may mean that some are overqualified and begin to make processes and systems that simply don’t contribute towards the avatar. This situation tends to result in certain leaders moving on.',

        'You have a fast growth structure with limited growth direction, which means that you have growth-led leaders looking towards what they can grow. This can sometimes result in the overengineering of the processes and systems, changing the wrong things, a lot of effort for little return, and low levels of motivation with a high cost structure. Future thinkers will begin to future-think operations and without direction this causes confusion where the wrong things are being changed, conflict occurs and returns are diminishing. Too many people may mean that some are overqualified and begin to make processes and systems that simply don’t contribute towards the avatar. This situation tends to result in certain leaders moving on.',

        'The structure at the maturity growth level supports the maintenance of growth; it’s very established and works well. There are however, some key challenges to identify even when the structure is aligned to the direction. Quite often in the maturity stage, the structure is an outcome of past growth eras and sometimes, without a clear growth direction, can be slightly heavy on executive level resources. The energy levels that were once thriving and unified, have lessened and sometimes the negative outcomes include subcultures and growth strategies that don’t really contribute towards the original purpose or cause. The high-level resources produce intermittent progress rather than large shifts.'
    ];

    capab_alignment_company_structure = [capab_alignment_company_structure_row1, capab_alignment_company_structure_row2, capab_alignment_company_structure_row3, capab_alignment_company_structure_row4, capab_alignment_company_structure_row5, capab_alignment_company_structure_row6, capab_alignment_company_structure_row7];

    // related to value creation
    const capab_alignment_value_creation_row1 = [
        'The product is far from being formed to go to market; perhaps a lesser value product is being supplied that doesn’t quite fit the customer need...yet. This is of course normal. The questions you should be asking at the forming stage are questions, such as, “Is it a viable product?” “How can we get it to market?” The feel should be experimental, exciting, and unified. This is the most simple value creation process and will involve you and a few friends/family and it could all make sense!',

        'If you move too quickly on the value creation process you could miss key learnings about the process in the market. In the survival stage you are enhancing a process and testing it on the customer to get feedback, welcoming for the first-time (in some cases) external opinions. Your value creation process needs to be ready to be able to learn from this feedback, which means you should already have a basic proven process - with flaws - before you move forward to testing your product too formally.',

        'The value creation process at the establishing ground stage is ready to launch into a rapid growth period - it’s been tested and has proven its delivery and quality. If your product/service is still in the forming stage and your process is here, there is a chance that the product/service could remain poor quality or incomplete. If this is the case, the risk is that even with the best value creation process in the world it can\'t fill in the gaps. It\'s too early for you and this may bring about disappointment for yourself and in the partnerships/alliances that may be too soon to approach. ',

        'The value creation process at the seeing success stage is ready to launch into a rapid growth period - it’s been tested and has proven its delivery and quality. If your product/service is still in the forming stage and your process is here, there is a chance that the product/service could remain poor quality or incomplete. If this is the case, the risk is that even with the best value creation process in the world it can\'t fill in the gaps. Perhaps you have a new product/service you are trying to innovate within a success stage company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure and coexistence, so new key resources don’t struggle to find the space to add value.',

        'The value creation process at the seeing success stage is ready to launch into a rapid growth period - it’s been tested and has proven its delivery and quality. If your product/service is still in the forming stage and your process is here, there is a chance that the product/service could remain poor quality or incomplete. If this is the case, the risk is that even with the best value creation process in the world it can\'t fill in the gaps. Perhaps you have a new product/service you are trying to innovate within a success stage company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure and coexistence, so new key resources don’t struggle to find the space to add value.',

        'The value creation process at the seeing success stage is ready to launch into a rapid growth period - it’s been tested and has proven its delivery and quality. If your product/service is still in the forming stage and your process is here, there is a chance that the product/service could remain poor quality or incomplete. If this is the case, the risk is that even with the best value creation process in the world it can\'t fill in the gaps. Perhaps you have a new product/service you are trying to innovate within a success stage company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure and coexistence, so new key resources don’t struggle to find the space to add value.',

        'The value creation process at the keeping growth stage is supporting a very established product into a marketplace that you dominate. If your product/service is still in the forming stage and your process is here, there is a chance that the product/service could remain poor quality or incomplete. If this is the case, the risk is that even with the best value creation process in the world it can\'t fill in the gaps. Perhaps you have a new product/service you are trying to innovate within a maturing company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure and coexistence, so new key resources don’t struggle to find the space to add value.'
    ];
    const capab_alignment_value_creation_row2 = [
        'If your product/service is still being formed, it’s too early to go to market; perhaps a lesser value product is being supplied that doesn’t quite fit the customer need, brand promise and quality is questioned. The questions you should be asking at the forming stage are questions, such as, “Is it a viable product?” “How can we get it to market?” Questions that are very different from those asked at the success stage; these should have been answered and agreed before trialling to more real customers.',

        'It’s so important at this growth stage that you are preparing for the rapid growth coming in the next stage and the survival value creation process is focused around that happening. That’s why it\'s beneficial that you still own it internally and you can still enjoy evolving it quickly to adjust if things go wrong (and they will!) The process does the “survival” job well, adjustable and owned by people you could talk to everyday. You know more about your customer than ever before, and you need the process to be trialled enough to deliver consistently, flexible enough so that mistakes don’t become game changers.',

        'Although your basic product has evolved, your business model is still at the heart of everything you do and needs constant attention and adjustment. As the founder, you still need the time to work out what you need and where. Without this, you could jump into a value creation process that is being developed by experts or new partnerships, making a decision too soon. Sometimes you need to live it to know what it truly reacts to before you put too much pressure on adding more to it. It’s the difference between a small and a big shift in growth, just from investing in the wrong thing.',

        'There could be a danger in creating too many options and diversification before your basic core product has even properly gone to market. Adding value and enhancing an unproven concept before it\'s tested adds risk both for reputation and costs. Even if you have just proven viability, over engineering the product could cause margins that are too high for potential good return and diversity too quickly places pressure on a company structure that is not established, lacking the experience to cope. Reactionary leadership is the last thing you need if you want to survive in a strong position to establish ground.',

        'There could be a danger in creating too many options and diversification before your basic core product has even properly gone to market. Adding value and enhancing an unproven concept before it\'s tested adds risk both for reputation and costs. Even if you have just proven viability, over engineering the product could cause margins that are too high for potential good return and diversity too quickly places pressure on a company structure that is not established, lacking the experience to cope. Reactionary leadership is the last thing you need if you want to survive in a strong position to establish ground.',

        'There could be a danger in creating too many options and diversification before your basic core product has even properly gone to market. Adding value and enhancing an unproven concept before it\'s tested adds risk both for reputation and costs. Even if you have just proven viability, over engineering the product could cause margins that are too high for potential good return and diversity too quickly places pressure on a company structure that is not established, lacking the experience to cope. Reactionary leadership is the last thing you need if you want to survive in a strong position to establish ground.',

        'If your value creation process is mature it often means that it is well established in supplying a well-known product/service. It is set up to maintain and has lost its speed and ability to change and adapt to the evolving needs of the customer. The process would struggle to respond to changes and innovation of new initiatives without huge shifts, because of the ability of those who lead and are involved in it. Without a change in structure of the company to a new growth direction, the value creation process will just remain strong and deliver what it is currently good at delivering.'
    ];

    const capab_alignment_value_creation_row3 = [
        'If your product/service is still being formed, it’s too early to go to market; perhaps a lesser value product is being supplied that doesn’t quite fit the customer need, brand promise and quality is questioned. The questions you should be asking at the forming stage are questions, such as, “Is it a viable product?” “How can we get it to market?” Questions that are very different from those asked at the rapid growth stage; these should have been answered and agreed a long time ago. ',

        'The product/service could still have a few issues, so you don’t have total confidence in it yet. Therefore, it would be considered far too early to use in a rapid growth period. Pushing it too soon can cost unnecessary money in solving and “patching up” a seamless value creation process. The questions you should be asking at the survival stage are questions, such as, “How can we be more reassured of delivery?” “How much are we delivering to the needs of our customer?” Questions that should be answered and agreed before you take off into rapid growth in order to establish ground.',

        'Although your basic product has evolved, your business model is still very much at the heart of everything you do. It\'s effective and should be working seamlessly, yet it’s alive enough to challenge delivery with new, functional experts looking for better ways to give the customer more value so you stay unique and can power more opportunities. You need to know when to challenge it by reviewing it constantly from the shoes of the customer. When it’s coping with rapid increases in volume, reactionary leadership is exhausting as well as high risk, it\'s all about having constant awareness of its flow through the impact of the customer, and a unified approach because everybody knows what is important.',

        'There could be a danger in creating too many options and diversification before your basic core product has made its mark. There is no definitive line in the sand when the right time is, however at the very least, the product/service should be achieving the purpose for the customer it was designed to do. This is how you establish ground; to be known for changing something for the better and if you over do that value too soon it could dilute the brand identity, pricing, providing the customer with extras they don’t need (and just costs them more!). Over engineering the product could cause margins that are too high for potential good return and diversity too quickly places pressure on a company structure that is not established, lacking the experience to cope. Reactionary leadership is the last thing you need if you want to survive in a strong position to establish ground.',

        'There could be a danger in creating too many options and diversification before your basic core product has made its mark. There is no definitive line in the sand when the right time is, however at the very least, the product/service should be achieving the purpose for the customer it was designed to do. This is how you establish ground; to be known for changing something for the better and if you over do that value too soon it could dilute the brand identity, pricing, providing the customer with extras they don’t need (and just costs them more!). Over engineering the product could cause margins that are too high for potential good return and diversity too quickly places pressure on a company structure that is not established, lacking the experience to cope. Reactionary leadership is the last thing you need if you want to survive in a strong position to establish ground.',

        'There could be a danger in creating too many options and diversification before your basic core product has made its mark. There is no definitive line in the sand when the right time is, however at the very least, the product/service should be achieving the purpose for the customer it was designed to do. This is how you establish ground; to be known for changing something for the better and if you over do that value too soon it could dilute the brand identity, pricing, providing the customer with extras they don’t need (and just costs them more!). Over engineering the product could cause margins that are too high for potential good return and diversity too quickly places pressure on a company structure that is not established, lacking the experience to cope. Reactionary leadership is the last thing you need if you want to survive in a strong position to establish ground.',

        'If your value creation process is mature it often means that it is well established in supplying a well-known product/service. It is set up to maintain and has lost its speed and ability to change and adapt to the evolving needs of the customer. The process would struggle to respond to rapid growth, not necessarily because of its capability, but because of the ability of those who lead and are involved in it. Without a change in structure of the company to a new growth direction, the value creation process will just remain strong and deliver what it is currently good at delivering.'
    ];

    const capab_alignment_value_creation_row4 = [
        'When the value creation process is in forming mode, it could cause disruption to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. In a success stage company, the way we create our value to the customer needs to always reflect a good quality product/service, which has already changed the community it set out to change - and now it wants to do more. Perhaps you have a new value creation process within a success era company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value, and also have the opportunity to give back to the current process.',

        'When the value creation process is in survival mode, it could cause disruption to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. In a success stage company, the way we create our value to the customer needs to always reflect a good quality product/service which has already changed the community it set out to change - and now it wants to do more. Perhaps you have a new value creation process within a success era company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in (or new any new processes) don’t struggle to find the space to add value and also have the opportunity to give back to the current process.',

        'Growth strategies associated with the success stage require a well-established value creation process, remaining dynamic to allow for developments and innovation. When you place your value creation process at the level of gaining ground the processes that you are currently using may struggle or be slightly behind the level of experience and expertise to drive too much further growth, especially when it\'s related to added value, diversification or adding channels of distribution. Growth at the success level can sometimes involve inviting larger partnerships and alliances to support you. With this in mind, you have to be reaching out to them with the best and most reliable value creation process to appeal and build strong, healthy relationships and create win win situations.',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'When you are in the maturity era, your value creation process is delivering value to the customer and growth seems to have slowed down... There could be a challenge with this if you are considering another more fast-moving growth stage. It may be the best time to challenge the business model, to try and decide how the value creation process can support a new growth era. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service?” “Can we redesign it to support the returns we currently enjoy in the existing business and create a value process that supports more open opportunities?” With any challenge, always start with the question to the customer and the community your company is committed to changing. It’s amazing what can be found as opportunities at the same time as understanding how to support the existing business well. Discover things you didn’t know would be possible; levering off a mature company platform has huge benefits if you keep an open mind.'
    ];
    const capab_alignment_value_creation_row5 = [
        'When the value creation process is in forming mode, it could cause disruption to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. In a success stage company, the way we create our value to the customer needs to always reflect a good quality product/service, which has already changed the community it set out to change - and now it wants to do more. Perhaps you have a new value creation process within a success era company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value, and also have the opportunity to give back to the current process.',

        'When the value creation process is in survival mode, it could cause disruption to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. In a success stage company, the way we create our value to the customer needs to always reflect a good quality product/service which has already changed the community it set out to change - and now it wants to do more. Perhaps you have a new value creation process within a success era company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in (or new any new processes) don’t struggle to find the space to add value and also have the opportunity to give back to the current process.',

        'Growth strategies associated with the success stage require a well-established value creation process, remaining dynamic to allow for developments and innovation. When you place your value creation process at the level of gaining ground the processes that you are currently using may struggle or be slightly behind the level of experience and expertise to drive too much further growth, especially when it\'s related to added value, diversification or adding channels of distribution. Growth at the success level can sometimes involve inviting larger partnerships and alliances to support you. With this in mind, you have to be reaching out to them with the best and most reliable value creation process to appeal and build strong, healthy relationships and create win win situations.',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'When you are in the maturity era, your value creation process is delivering value to the customer and growth seems to have slowed down... There could be a challenge with this if you are considering another more fast-moving growth stage. It may be the best time to challenge the business model, to try and decide how the value creation process can support a new growth era. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service?” “Can we redesign it to support the returns we currently enjoy in the existing business and create a value process that supports more open opportunities?” With any challenge, always start with the question to the customer and the community your company is committed to changing. It’s amazing what can be found as opportunities at the same time as understanding how to support the existing business well. Discover things you didn’t know would be possible; levering off a mature company platform has huge benefits if you keep an open mind.'
    ];
    const capab_alignment_value_creation_row6 = [
        'When the value creation process is in forming mode, it could cause disruption to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. In a success stage company, the way we create our value to the customer needs to always reflect a good quality product/service, which has already changed the community it set out to change - and now it wants to do more. Perhaps you have a new value creation process within a success era company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in don’t struggle to find the space to add value, and also have the opportunity to give back to the current process.',

        'When the value creation process is in survival mode, it could cause disruption to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. In a success stage company, the way we create our value to the customer needs to always reflect a good quality product/service which has already changed the community it set out to change - and now it wants to do more. Perhaps you have a new value creation process within a success era company, which is struggling to find its place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define a workable structure of coexistence, so any new, key resources brought in (or new any new processes) don’t struggle to find the space to add value and also have the opportunity to give back to the current process.',

        'Growth strategies associated with the success stage require a well-established value creation process, remaining dynamic to allow for developments and innovation. When you place your value creation process at the level of gaining ground the processes that you are currently using may struggle or be slightly behind the level of experience and expertise to drive too much further growth, especially when it\'s related to added value, diversification or adding channels of distribution. Growth at the success level can sometimes involve inviting larger partnerships and alliances to support you. With this in mind, you have to be reaching out to them with the best and most reliable value creation process to appeal and build strong, healthy relationships and create win win situations.',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'Your value creation process is at the core of supporting any growth strategy successfully in whatever form. It should always remain evolving so that change, innovation, and developments are part of the norm, regardless of whether the new growth is different channels, markets, diversification or evolving greater loyalty. By “norm” I mean ability to grow; you have proven you are capable. It’s about the readiness to change and to challenge, not the new skills required (you can recruit these), it’s the want that makes the difference to success. Your value creation process should always remain unified through the red thread of purpose and understanding what value you can bring to the customer. New and existing businesses stand together with equal importance - there should never be a new child / old child syndrome where the existing operations of the company are classed as “Business as usual.” Just by the title alone you’ve gone into early retirement! Keep everything under the title of growth: growth through loyalty, growth through new markets etc. If your job doesn’t in some way contribute to the growth of purpose, what is the structure doing there?',

        'When you are in the maturity era, your value creation process is delivering value to the customer and growth seems to have slowed down... There could be a challenge with this if you are considering another more fast-moving growth stage. It may be the best time to challenge the business model, to try and decide how the value creation process can support a new growth era. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service?” “Can we redesign it to support the returns we currently enjoy in the existing business and create a value process that supports more open opportunities?” With any challenge, always start with the question to the customer and the community your company is committed to changing. It’s amazing what can be found as opportunities at the same time as understanding how to support the existing business well. Discover things you didn’t know would be possible; levering off a mature company platform has huge benefits if you keep an open mind.'
    ];


    const capab_alignment_value_creation_row7 = [
        'When the value creation process is in forming mode, it could cause disruption to a mature company and its established market, because at this stage the processes run like clockwork and are proven. In a mature company, the way we create our value to the customer needs to always reflect a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new value creation process within a mature era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/governing board to define a workable structure and coexistence, so any new, key resources brought in and new processes, don’t struggle to find the space to add value, and also have the opportunity to give back to the current process.',

        'When the value creation process is in forming mode, it could cause disruption to a mature company and its established market, because at this stage the processes run like clockwork and are proven. In a mature company, the way we create our value to the customer needs to always reflect a good quality product/service, which has already changed the community it set out to change. Perhaps you have a new value creation process within a mature era company, which is struggling to find its place amongst a more formal setting. As the founder, you will need to work closely with the strategy/governing board to define a workable structure and coexistence, so any new, key resources brought in and new processes, don’t struggle to find the space to add value, and also have the opportunity to give back to the current process.',

        'If you consider your value creation process as established as well as dynamic and your company is being classed as mature, never is there such a great time to challenge the business model, to try and decide how to reignite and reverse the aging process of the company and stay leading and relevant to the purpose. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service, is it really at an end?” “Why have we stopped asking this question?” It sounds too simple, so before you answer to anyone else about low returns, answer to your customers and the community your company was committed to changing.',

        'If you consider your value creation process as established as well as dynamic and your company is being classed as mature, never is there such a great time to challenge the business model, to try and decide how to reignite and reverse the aging process of the company and stay leading and relevant to the purpose. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service, is it really at an end?” “Why have we stopped asking this question?” It sounds too simple, so before you answer to anyone else about low returns, answer to your customers and the community your company was committed to changing.',

        'If you consider your value creation process as established as well as dynamic and your company is being classed as mature, never is there such a great time to challenge the business model, to try and decide how to reignite and reverse the aging process of the company and stay leading and relevant to the purpose. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service, is it really at an end?” “Why have we stopped asking this question?” It sounds too simple, so before you answer to anyone else about low returns, answer to your customers and the community your company was committed to changing.',

        'If you consider your value creation process as established as well as dynamic and your company is being classed as mature, never is there such a great time to challenge the business model, to try and decide how to reignite and reverse the aging process of the company and stay leading and relevant to the purpose. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service, is it really at an end?” “Why have we stopped asking this question?” It sounds too simple, so before you answer to anyone else about low returns, answer to your customers and the community your company was committed to changing.',

        'When you are in the maturity era, your value creation process is delivering value to the customer, however growth seems to have slowed down... <br>Never is there such a great time to challenge the business model, to try and decide how to reignite and reverse the aging process of the company and stay leading and relevant to the purpose. Ask yourself, “is our journey still impacting the purpose and what we wanted to change with our product/service, is it really at an end?” “Why have we stopped asking this question?” It sounds too simple, so before you answer to anyone else about low returns, answer to your customers and the community your company was committed to changing.<br>You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line. This exercise alone can reignite purpose and the process to discover things you didn’t know would be possible; levering off a mature company platform has huge benefits if you keep an open mind.'
    ];

    capab_alignment_value_creation = [capab_alignment_value_creation_row1, capab_alignment_value_creation_row2, capab_alignment_value_creation_row3, capab_alignment_value_creation_row4, capab_alignment_value_creation_row5, capab_alignment_value_creation_row6, capab_alignment_value_creation_row7];

    // related to decision making
    const capab_alignment_decision_making_row1 = [
        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. Being at the centre of all decision-making is essential in the forming stage; you are the company and therefore you know your product/service. Your challenge is to be sure of your purpose and keep it strong. As you seek advice from others you have to be open to accept that advice based on experience, always remembering to translate it into your value creation process , building it and always checking you are changing things to improve the power of your purpose, not diluting it. External voices can be very useful and essential, place it wisely. Trust in yourself and with this as your guide, you already have the answers.',

        'Opening up your business model means you have to be ready for external opinions and feedback. This is of course important in the right context, yet adding too much external opinion too soon can cause confusion on the direction, resulting in additional processes that are not really needed and adjusting things based too much on intuition or the unfounded views of others. Your main decisions at this stage should be focused internally on getting it right, reinforcing your purpose and beliefs. Once your beliefs have been proven to a few customers, the decision process becomes easier and clearer as you trust in yourself more.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In the early days of forming and survival, there are only small repositionings, letting go of small responsibilities. It’s all too new to reposition yourself completely for a new era; your business structure needs you, your energy and beliefs until you can afford to pay real overtime. It’s your drive, involvement and the excitement around really making a change that is sometimes the currency you need and the only one you can afford. The responsibility for viability is yours and the want for this to happen for you is everybody’s. Be there in every form; operational, strategic, sales, making tea, be there to receive until you really take off into growth.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In a rapid growth phase, the company often still needs the drive of its founder. Creating too much distance between the founder and the decision-making in opportunistic growth can cause a control heavy approach to happen too soon. It’s the balance in gaining ground, to be established and to still be dynamic. This is a challenge and therefore relies very much on the establishment of the operational board and the relationship between the founder and the right-hand person.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In a rapid growth phase, the company often still needs the drive of its founder. Creating too much distance between the founder and the decision-making in opportunistic growth can cause a control heavy approach to happen too soon. It’s the balance in gaining ground, to be established and to still be dynamic. This is a challenge and therefore relies very much on the establishment of the operational board and the relationship between the founder and the right-hand person.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In a rapid growth phase, the company often still needs the drive of its founder. Creating too much distance between the founder and the decision-making in opportunistic growth can cause a control heavy approach to happen too soon. It’s the balance in gaining ground, to be established and to still be dynamic. This is a challenge and therefore relies very much on the establishment of the operational board and the relationship between the founder and the right-hand person.',

        'When the decision-making process is in the maturity stage for a forming product, the established ways of working can often hinder its progress. Perhaps you have a new innovation you wish to create within a mature company to reignite growth. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner you may even give back to the current company in terms of energy and new ways of thinking.'
    ];

    const capab_alignment_decision_making_row2 = [
        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. You should still remain in the centre of all decision-making as you were when forming your company (this is appropriate in survival as well) The main decisions are different and the questions are more about are you ready to commit to the market and the decisions around this, rather than how can we make it work.',

        'With a more opportunities-led drive to growth and with finalising the ideal product portfolio, the founder needs to be highly involved in the decision-making process. It\'s natural that you are still in the centre of everything that goes on, the era needs quick decisions and until you truly know the level of impact you are having with the customer and how close it is to the original story and belief, this is where you are best to stay.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In the early days of forming and survival, there are only small repositionings, letting go of small responsibilities. It’s all too new to reposition yourself completely for a new era; your business structure needs you, your energy and beliefs until you can afford to pay real overtime. It’s your drive, involvement and the excitement around really making a change that is sometimes the currency you need and the only one you can afford. The responsibility for viability is yours and the want for this to happen for you is everybody’s. Be there in every form; operational, strategic, sales, making tea, be there to receive until you really take off into growth.',

        'When you are at the survival decisions being made are all about whether you are going to make it and how can you create a value creation process to achieve this. where the founder positions their role goes hand in hand and in success level you should have let go of and be working in a more collaborative process, When you are in survival, you company, which is still mainly you, needs speed, direct involvement from yourself, move too soon and vital decisions about creating a viable business model may be less impactful and decisions may have been past over to people who are yet to understand the purpose as well as you. Placing controls and systems that are meant for established business models too soon can squash the innovation and opportunity driven sales approach.',

        'When you are at the survival decisions being made are all about whether you are going to make it and how can you create a value creation process to achieve this. where the founder positions their role goes hand in hand and in success level you should have let go of and be working in a more collaborative process, When you are in survival, you company, which is still mainly you, needs speed, direct involvement from yourself, move too soon and vital decisions about creating a viable business model may be less impactful and decisions may have been past over to people who are yet to understand the purpose as well as you. Placing controls and systems that are meant for established business models too soon can squash the innovation and opportunity driven sales approach.',

        'When you are at the survival decisions being made are all about whether you are going to make it and how can you create a value creation process to achieve this. where the founder positions their role goes hand in hand and in success level you should have let go of and be working in a more collaborative process, When you are in survival, you company, which is still mainly you, needs speed, direct involvement from yourself, move too soon and vital decisions about creating a viable business model may be less impactful and decisions may have been past over to people who are yet to understand the purpose as well as you. Placing controls and systems that are meant for established business models too soon can squash the innovation and opportunity driven sales approach.',

        'If your company has a more established way of doing things already, it is very hard to create a way of doing things to reflect the needs of developing new business models within a mature one, which requires quick decision making. In any business forming stage, the company needs the spirit of its founder and in a mature business perhaps you are no longer completely integrated into the structure full time. This creates too much distance between the founder and the decision-making when you need it in a completely different way.'
    ];

    const capab_alignment_decision_making_row3 = [
        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. If you still remain in the centre of all decision-making as you were when forming your company (this is appropriate in forming), growth will slow. This positioning will stop the company structure from driving growth and fully using the expertise of everyone. Decision-making in the establishing ground stage needs to be used to unify and increase responsibility, getting ready for a larger more productive company. If things are still getting signed off by the founder at all levels of risk, the company tends to stutter',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. If you still remain in the centre of all decision-making as you were when you were taking your product/service to market for the first time, fighting for survival (this is appropriate in success), growth will slow. This positioning will stop the company structure from driving growth and fully using the expertise of everyone. Decision-making in the establishing ground stage needs to be used to unify and increase responsibility, getting ready for a larger more productive company. If things are still getting signed off by the founder at all levels of risk, the company tends to stutter.',

        'You as the founder should have moved away from the day to day operations, or at least be in the process of doing so. This is so important to do as it moves the decision-making process and allows more space to create a feeling of self-responsibility in your functional managers so they can protect what you have created. The operational company needs to learn to live without you so it\'s important to coach the team that you trust so you can have more freedom now to enjoy and plan the growth of your company from a different perspective, which is where you have chosen to position yourself.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In a rapid growth phase, the company often still needs the spirit of its founder and creating too much distance between the founder and the decision-making when still a good percentage of new growth is opportunity taking, you need the right balance between controls and direction. In the establishing ground era, the challenge is to find the balance between established and still being dynamic and this relies on the establishment of the operational board and the relationship between the founder and the right-hand person, whatever title they have.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In a rapid growth phase, the company often still needs the spirit of its founder and creating too much distance between the founder and the decision-making when still a good percentage of new growth is opportunity taking, you need the right balance between controls and direction. In the establishing ground era, the challenge is to find the balance between established and still being dynamic and this relies on the establishment of the operational board and the relationship between the founder and the right-hand person, whatever title they have.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. In a rapid growth phase, the company often still needs the spirit of its founder and creating too much distance between the founder and the decision-making when still a good percentage of new growth is opportunity taking, you need the right balance between controls and direction. In the establishing ground era, the challenge is to find the balance between established and still being dynamic and this relies on the establishment of the operational board and the relationship between the founder and the right-hand person, whatever title they have.',

        'If your company has a more established way of doing things already, it is very hard to create the way of doing things to reflect the needs of a company that is hungry for growth, which requires quick decision-making. In a rapid growth phase, the company often still needs the spirit of its founder and in a mature business, perhaps you are no longer completely integrated into the structure full-time. creating too much distance between the founder and the decision-making when you need to be part of it the most.'
    ];

    const capab_alignment_decision_making_row4 = [
        'When the decision-making process is in forming mode it could cause disruptions to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. Perhaps you have a new growth strategy to reignite the growth direction of a success era company and as the founder you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'When the decision-making process is in survival mode it could cause disruptions to a company that is at an overall level of success, driving for more growth and having a more established way of working. At this stage, the processes should be running like clockwork and are proven. Perhaps you have a new growth strategy to reignite the growth direction of a success era company and as the founder you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. During the establishing ground era you will be repositioning yourself away from the day to day operations of the business. This rapid growth phase still needs quick decision-making so you are still involved fairly heavily on helping make these when associated with growth. Having the founder so involved and central in growth decisions to this extent tends to hinder a more company-wide approach to decision-making that is seen at the success stage. At success level it requires more formality, controls and processes, to be strong enough to support growth and the decisions that need to be taken. In the success phase you are often surrounded by more experienced leaders looking at future strategies and this requires you to support decision-making and not lead it, a much more collaborative approach.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'If your company has a more established way of doing things already, it is very hard to create a way of doing things that re-establishes a hunger for growth. Quite often, it’s a challenge to switch mentality and run controls and disciplines for both established markets and the introduction of a new product, new market or diversification - especially when the current structure is too comfortable.<br>Where the founder positions their role in the company and how decisions are being made go hand in hand in every era and success is no different. You should position yourself depending on your choice of growth direction. Over the years you have given everything to the company, and you know very well by now where you are best placed. Place yourself to give the right space to others in the structure and keep your decision-making for purpose, unity and leading the growth strategy. Choose your position and don’t “float”- you should have the right leaders now, technical and operational specialists who you can elevate through increased responsibility towards growth. You will always have one thing that you will know more on; the direction of customer-led purpose and the red thread that runs through yourself to the community you have changed and will continue to change.'
    ];

    const capab_alignment_decision_making_row5 = [
        'When the decision-making process is in forming mode it could cause disruptions to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. Perhaps you have a new growth strategy to reignite the growth direction of a success era company and as the founder you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'When the decision-making process is in survival mode it could cause disruptions to a company that is at an overall level of success, driving for more growth and having a more established way of working. At this stage, the processes should be running like clockwork and are proven. Perhaps you have a new growth strategy to reignite the growth direction of a success era company and as the founder you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. During the establishing ground era you will be repositioning yourself away from the day to day operations of the business. This rapid growth phase still needs quick decision-making so you are still involved fairly heavily on helping make these when associated with growth. Having the founder so involved and central in growth decisions to this extent tends to hinder a more company-wide approach to decision-making that is seen at the success stage. At success level it requires more formality, controls and processes, to be strong enough to support growth and the decisions that need to be taken. In the success phase you are often surrounded by more experienced leaders looking at future strategies and this requires you to support decision-making and not lead it, a much more collaborative approach.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'If your company has a more established way of doing things already, it is very hard to create a way of doing things that re-establishes a hunger for growth. Quite often, it’s a challenge to switch mentality and run controls and disciplines for both established markets and the introduction of a new product, new market or diversification - especially when the current structure is too comfortable.<br>Where the founder positions their role in the company and how decisions are being made go hand in hand in every era and success is no different. You should position yourself depending on your choice of growth direction. Over the years you have given everything to the company, and you know very well by now where you are best placed. Place yourself to give the right space to others in the structure and keep your decision-making for purpose, unity and leading the growth strategy. Choose your position and don’t “float”- you should have the right leaders now, technical and operational specialists who you can elevate through increased responsibility towards growth. You will always have one thing that you will know more on; the direction of customer-led purpose and the red thread that runs through yourself to the community you have changed and will continue to change.'
    ];

    const capab_alignment_decision_making_row6 = [
        'When the decision-making process is in forming mode it could cause disruptions to a company that is at an overall level of success, driving for more growth because at this stage the processes should be running like clockwork and are proven. Perhaps you have a new growth strategy to reignite the growth direction of a success era company and as the founder you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'When the decision-making process is in survival mode it could cause disruptions to a company that is at an overall level of success, driving for more growth and having a more established way of working. At this stage, the processes should be running like clockwork and are proven. Perhaps you have a new growth strategy to reignite the growth direction of a success era company and as the founder you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/operations board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'Where the founder repositions their role in the company and how decisions are being made go hand in hand. During the establishing ground era you will be repositioning yourself away from the day to day operations of the business. This rapid growth phase still needs quick decision-making so you are still involved fairly heavily on helping make these when associated with growth. Having the founder so involved and central in growth decisions to this extent tends to hinder a more company-wide approach to decision-making that is seen at the success stage. At success level it requires more formality, controls and processes, to be strong enough to support growth and the decisions that need to be taken. In the success phase you are often surrounded by more experienced leaders looking at future strategies and this requires you to support decision-making and not lead it, a much more collaborative approach.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'When you are at the success level and facing choices: to sell, exist with controlled growth or take off to new areas, never is there such a great time to challenge the business model. Your most important decision making is around deciding the direction and where to invest your plentiful returns, which places you back in the centre of the company once again. Even if you have decided how you want to grow, it is still the time to challenge the business model, truly asking yourself, “have we really impacted what we set out to do?” “Are our processes, challenges, key activities, resources, partnerships as strong as they used to be?” Whether you are building up the business model for new markets, diversification, or growth through loyalty of your current market before you answer to anyone else, answer to your customers. You will be amazed at what founders have found as opportunities they would have missed if they just answered to the sales message, or the bottom line.',

        'If your company has a more established way of doing things already, it is very hard to create a way of doing things that re-establishes a hunger for growth. Quite often, it’s a challenge to switch mentality and run controls and disciplines for both established markets and the introduction of a new product, new market or diversification - especially when the current structure is too comfortable.<br>Where the founder positions their role in the company and how decisions are being made go hand in hand in every era and success is no different. You should position yourself depending on your choice of growth direction. Over the years you have given everything to the company, and you know very well by now where you are best placed. Place yourself to give the right space to others in the structure and keep your decision-making for purpose, unity and leading the growth strategy. Choose your position and don’t “float”- you should have the right leaders now, technical and operational specialists who you can elevate through increased responsibility towards growth. You will always have one thing that you will know more on; the direction of customer-led purpose and the red thread that runs through yourself to the community you have changed and will continue to change.'
    ];

    const capab_alignment_decision_making_row7 = [
        'When the decision-making process is in forming mode it could cause disruption to a mature company and its established way of working with processes running like clockwork. Perhaps you have a new growth strategy to reignite the growth direction and as the founder, you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder, you will need to work closely with the strategy/governing board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'When the decision-making process is in survival mode it could cause disruption to a mature company and its established way of working with processes running like clockwork. Perhaps you have a new growth strategy to reignite the growth direction and as the founder, you have repositioned yourself back into survival mode to generate these new opportunities. There may be a little conflict as you struggle to find your place amongst a more formal setting. As the founder you will need to work closely with the strategy/governing board to define new ways of working so that any efforts are clearly understood and are supported by the current business model. In this unified manner, you may even give back to the current company in terms of energy and new ways of thinking.',

        'If your company has a more established way of doing things already, it’s very hard to create new growth. The challenge of a maturing company is what to actually make decisions on. In the success growth phase, it means you have held on to a dynamic decision-making process that still respects both the operational and strategic future thinking of the business. Therefore, the greatest decision is how to reignite the want to grow more, reversing aging and the slightly bureaucratic ways of decision-making and doing things.',

        'If your company has a more established way of doing things already, it\'s very hard to create new growth. The challenge of a maturing company is what to actually make decisions on. In the success growth phase, it means you have held on to a dynamic decision-making process that still respects both the operational and strategic future thinking of the business. Therefore, the greatest decision is how to reignite the want to grow more, reversing aging and the slightly bureaucratic ways of decision-making and doing things.',

        'If your company has a more established way of doing things already, it\'s very hard to create new growth. The challenge of a maturing company is what to actually make decisions on. In the success growth phase, it means you have held on to a dynamic decision-making process that still respects both the operational and strategic future thinking of the business. Therefore, the greatest decision is how to reignite the want to grow more, reversing aging and the slightly bureaucratic ways of decision-making and doing things.',

        'If your company has a more established way of doing things already, it\'s very hard to create new growth. The challenge of a maturing company is what to actually make decisions on. In the success growth phase, it means you have held on to a dynamic decision-making process that still respects both the operational and strategic future thinking of the business. Therefore, the greatest decision is how to reignite the want to grow more, reversing aging and the slightly bureaucratic ways of decision-making and doing things.',

        'If your company has a more established way of doing things already, it\'s very hard to create new growth. The challenge of a maturing company is what to actually make decisions on if the growth strategies have slowed. As with all growth eras, where the founder places themselves is key; you need to decide what the direction could be, to reverse aging and reverse the slightly bureaucratic ways of decision-making. It must be something to prevent a fall.'
    ];
    capab_alignment_decision_making = [capab_alignment_decision_making_row1, capab_alignment_decision_making_row2, capab_alignment_decision_making_row3, capab_alignment_decision_making_row4, capab_alignment_decision_making_row5, capab_alignment_decision_making_row6, capab_alignment_decision_making_row7];



    /////////////////////////////////////////////////////////////////
    //**************************SECTION1***************************//
    // SORT and RETURN choices by score => DETERMINE THE LOGIC OF THE QUESTIONNAIRE
    const total_purpose_alignment = document.querySelector("#your_results > div:nth-child(7)").innerHTML;
    const total_team_alignment = document.querySelector("#your_results > div:nth-child(8)").innerHTML;
    const total_business_alignment = document.querySelector("#your_results > div:nth-child(9)").innerHTML;
    const total_customer_alignment = document.querySelector("#your_results > div:nth-child(10)").innerHTML;

    const average_nonalignment = (parseInt(total_purpose_alignment) + parseInt(total_team_alignment) + parseInt(total_business_alignment) + parseInt(total_customer_alignment)) / 4;

    const alignment = [{
            type_al: 'Purpose',
            score: total_purpose_alignment
        },

        {
            type_al: 'Team',
            score: total_team_alignment
        },

        {
            type_al: 'Business',
            score: total_business_alignment
        },

        {
            type_al: 'Customer',
            score: total_customer_alignment
        }

    ];

    alignment.sort((a, b) => {
        return b.score - a.score;
    });

    document.querySelector("#your_results > div:nth-child(3)").innerHTML = "Red is " + alignment[0].type_al;
    document.querySelector("#your_results > div:nth-child(4)").innerHTML = "Amber is " + alignment[1].type_al;
    document.querySelector("#your_results > div:nth-child(5)").innerHTML = "Yellow is " + alignment[2].type_al;
    document.querySelector("#your_results > div:nth-child(6)").innerHTML = "Green is " + alignment[3].type_al;

    /////////////////////////////////////////////////////////////////
    //**************************SECTION2***************************//

    //GROWTH ANSWERS AND THEIR VALUES
    const first_growth_answer = document.querySelector("#widget_15 > span > div:nth-child(16)");
    const first_growth_answer_value = first_growth_answer.innerHTML;
    const second_growth_answer = document.querySelector("#widget_15 > span > div:nth-child(13)");
    const second_growth_answer_value = second_growth_answer.innerHTML;
    const third_growth_answer = document.querySelector("#widget_15 > span > div:nth-child(14)");
    const third_growth_answer_value = third_growth_answer.innerHTML;
    const fourth_growth_answer = document.querySelector("#widget_15 > span > div:nth-child(15)");
    const fourth_growth_answer_value = fourth_growth_answer.innerHTML;

    //GROWTH DIFFERENCES FROM BASE LEVELS FORMULAS
    const first_difference_from_base = document.querySelector("#widget_15 > span > div:nth-child(31)").innerHTML;
    const second_difference_from_base = document.querySelector("#widget_15 > span > div:nth-child(32)").innerHTML;
    const third_difference_from_base = document.querySelector("#widget_15 > span > div:nth-child(33)").innerHTML;

    //textblock white
    const first_white_text = document.querySelector("#widget_15 > span > div:nth-child(23)");
    const second_white_text = document.querySelector("#widget_15 > span > div:nth-child(24)");
    const third_white_text = document.querySelector("#widget_15 > span > div:nth-child(25)");
    const fourth_white_text = document.querySelector("#widget_15 > span > div:nth-child(26)");
    const fifth_white_text = document.querySelector("#widget_15 > span > div:nth-child(27)");
    const text_block_white = [first_white_text, second_white_text, third_white_text, fourth_white_text, fifth_white_text];

    //textblock black
    const first_black_text = document.querySelector("#widget_15 > span > div:nth-child(18)");
    const second_black_text = document.querySelector("#widget_15 > span > div:nth-child(19)");
    const third_black_text = document.querySelector("#widget_15 > span > div:nth-child(20)");
    const fourth_black_text = document.querySelector("#widget_15 > span > div:nth-child(21)");
    const fifth_black_text = document.querySelector("#widget_15 > span > div:nth-child(22)");
    const text_block_black = [first_black_text, second_black_text, third_black_text, fourth_black_text, fifth_black_text];

    //colored pie
    const moving_pie = document.querySelector("#widget_23 > div");

    const left_general = ["13.2rem", "25.2rem", "38.2rem", "50.2rem", "62rem"];

    moving_pie_left = ["4.7rem", "16.4rem", "29.8rem", "41.7rem", "53.3rem"];
    moving_pie_transform1 = ["scale(0.5)", "scale(0.55)", "scale(0.6)", "scale(0.65)", "scale(0.7)"];
    moving_pie_top1 = ["45.1rem", "45.2rem", "45.4rem", "45.5rem", "45.9rem"];
    moving_pie_overfontsize1 = ["9.2px", "10.1px", "10.6px", "11.6px", "13.1px"];
    moving_pie_overfontsize1 = ["10.9px", "12.4px", "12.4px", "12.4px", "16.9px"];
    moving_pie_overfontleft1 = ["11.9rem", "11.6rem", "11.4rem", "11.2rem", "10.9rem"];

    moving_pie_transform2 = ["scale(0.5)", "scale(0.55)", "scale(0.6)", "scale(0.65)", "scale(0.75)"];
    moving_pie_top2 = ["41.4rem", "41.6rem", "41.8rem", "41.9rem", "42.3rem"];
    moving_pie_overfontsize2 = ["9.2px", "10.1px", "10.6px", "11.6px", "13.2px"];
    moving_pie_overfontleft2 = ["23.6rem", "23.3rem", "23.1rem", "22.9rem", "22.6rem"];

    moving_pie_transform3 = ["scale(0.55)", "scale(0.6)", "scale(0.65)", "scale(0.7)", "scale(0.9)"];
    moving_pie_top3 = ["37.2rem", "37.3rem", "37.4rem", "37.7rem", "38.7rem"];
    moving_pie_overfontsize3 = ["10.2px", "11.2px", "11.8px", "12.4px", "16.4px"];
    moving_pie_overfontleft3 = ["36.6rem", "36.4rem", "36.2rem", "36rem", "35.1rem"];

    moving_pie_transform4 = ["scale(0.6)", "scale(0.7)", "scale(0.75)", "scale(0.8)", "scale(1)"];
    moving_pie_top4 = ["32.7rem", "33rem", "33.2rem", "33.3rem", "34rem"];
    moving_pie_overfontsize4 = ["10.9px", "12.4px", "13.6px", "14.7px", "16.9px"];
    moving_pie_overfontleft4 = ["48.8rem", "48rem", "47.7rem", "47.4rem", "46.9rem"];

    moving_pie_transform5 = ["scale(0.6)", "scale(0.7)", "scale(0.75)", "scale(0.8)", "scale(1)"];
    moving_pie_top5 = ["25.6rem", "26rem", "26.2rem", "26.3rem", "27.3rem"];
    moving_pie_overfontsize5 = ["10.9px", "13px", "14.2px", "15.3px", "17.5px"];
    moving_pie_overfontleft5 = ["60.2rem", "59.6rem", "59.3rem", "59rem", "58.5rem"];

    moving_pie_transform = [moving_pie_transform1, moving_pie_transform2, moving_pie_transform3, moving_pie_transform4, moving_pie_transform5];
    moving_pie_top = [moving_pie_top1, moving_pie_top2, moving_pie_top3, moving_pie_top4, moving_pie_top5];
    moving_pie_overfontleft = [moving_pie_overfontleft1, moving_pie_overfontleft2, moving_pie_overfontleft3, moving_pie_overfontleft4, moving_pie_overfontleft5];
    moving_pie_overfontsize = [moving_pie_overfontsize1, moving_pie_overfontsize2, moving_pie_overfontsize3, moving_pie_overfontsize4, moving_pie_overfontsize5];

    var pie_position = 0;
    var scale_position = 0;
    var diam1_position = 0;
    var diam2_position = 0;
    var diam3_position = 0;
    var current_growth_stage_name;
    var next_growth_stage_name;

    /////////////////////////////////////////////////////////////////
    //*********************FIRST GROWTH ANSWER*********************//

    switch (first_growth_answer_value) {
        case '1':
            console.log("nr 1");
            pie_position = 0;
            break;
        case '2':
            console.log("nr 2");
            pie_position = 1;
            break;
        case '3':
            console.log("nr 3");
            pie_position = 2;
            break;
        case '4':
        case '5':
        case '6':
            console.log("nr 4/5/6");
            pie_position = 3;
            break;
        case '7':
            console.log("nr 7");
            pie_position = 4;
            break;
        default:
            console.log("def");
    }

    // check the needed scaling level for the piechart and white/black text
    switch (true) {
        //100%
        case average_nonalignment >= 0 && average_nonalignment < 3:
            scale_position = 0;
            console.log("first");
            break;
            //90%
        case average_nonalignment >= 3 && average_nonalignment < 6:
            scale_position = 1;
            console.log("dev");
            break;
            //80%
        case average_nonalignment >= 6 && average_nonalignment < 10:
            scale_position = 2;
            console.log("thirt");
            break;
            //70%
        case average_nonalignment >= 10 && average_nonalignment < 20:
            scale_position = 3;
            console.log("forth");
            break;
            //60%
        case average_nonalignment >= 20:
            scale_position = 4;
            console.log("fifffffft");
            break;

        default:
    }

    // to do after determining pie position and scale position
    moving_pie.style.left = moving_pie_left[pie_position];
    moving_pie.style.transform = moving_pie_transform[pie_position][scale_position];
    moving_pie.style.top = moving_pie_top[pie_position][scale_position];

    text_block_white.forEach(function(textwhite) {
        if (textwhite != text_block_white[pie_position]) {
            textwhite.style.visibility = "hidden";
        }
    });
    text_block_white[pie_position].style.left = moving_pie_overfontleft[pie_position][scale_position];
    text_block_white[pie_position].style.fontSize = moving_pie_overfontsize[pie_position][scale_position];
    text_block_black[pie_position].style.visibility = "hidden";


    // second row table
    switch (second_growth_answer_value) {
        case '1':
            console.log("nr 1");
            diam1_position = 0;
            break;
        case '2':
            console.log("nr 2");
            diam1_position = 1;
            break;
        case '3':
            console.log("nr 3");
            diam1_position = 2;
            break;
        case '4':
        case '5':
        case '6':
            console.log("nr 4/5/6");
            diam1_position = 3;
            break;
        case '7':
            console.log("nr 7");
            diam1_position = 4;
            break;
        default:
            console.log("def");
    }

    //third row table
    switch (third_growth_answer_value) {
        case '1':
            diam2_position = 0;
            break;
        case '2':
            console.log("nr 2");
            diam2_position = 1;
            break;
        case '3':
            console.log("nr 3");
            diam2_position = 2;
            break;
        case '4':
        case '5':
        case '6':
            console.log("nr 4/5/6");
            diam2_position = 3;
            break;
        case '7':
            console.log("nr 7");
            diam2_position = 4;
            break;
        default:
            console.log("def");
    }

    //fourth table row
    switch (fourth_growth_answer_value) {
        case '1':
            console.log("nr 1");
            diam3_position = 0;
            break;
        case '2':
            console.log("nr 2");
            diam3_position = 1;
            break;
        case '3':
            console.log("nr 3");
            diam3_position = 2;
            break;
        case '4':
        case '5':
        case '6':
            console.log("nr 4/5/6");
            diam3_position = 3;
            break;
        case '7':
            console.log("nr 7");
            diam3_position = 4;
            break;
        default:
            console.log("def");
    }

    /////////////////////////////////////////////////////////////////
    //***********************CAPABILITIES TEXT********************//

    //*********************BASE LEVEL***********************//
    //statement of the company direction
    document.querySelector("#capabilities_intro > div.statement").innerHTML = growth_statment_company_direction[first_growth_answer_value - 1];

    // current and next growth stage name
    document.querySelector("#current_growth > div.growth_stage_name").innerHTML = current_growth_stage_name[first_growth_answer_value - 1];
    document.querySelector("#next_growth > div.growth_stage_name").innerHTML = next_growth_stage_name[first_growth_answer_value - 1];

    // current and next growth stage description
    const capabilities_stage_start_text = "Your direction can be described as: ";
    document.querySelector("#current_growth > div.growth_desc").innerHTML = capabilities_stage_start_text + current_stage_company_direction_description_set[first_growth_answer_value - 1];
    document.querySelector("#next_growth > div.growth_desc").innerHTML = capabilities_stage_start_text + next_stage_company_direction_description_set[first_growth_answer_value - 1];


    //*********************COMPANY STRUCTURE LEVEL***********************//
    //*********************VALUE CREATION LEVEL**************************//
    //*********************DECISION MAKING LEVEL*************************//
    //statements
    document.querySelector("#company_structure > div.question-A").innerHTML = growth_statment_company_structure[second_growth_answer_value - 1];
    document.querySelector("#value_creation > div.question-A").innerHTML = growth_statment_value_creation[third_growth_answer_value - 1];
    document.querySelector("#decision_making > div.question-A").innerHTML = growth_statment_decision_making[fourth_growth_answer_value - 1];

    //definiton of growth stage
    document.querySelector("#company_structure > div.question-B").innerHTML = current_stage_company_structure_desc[second_growth_answer_value - 1];
    document.querySelector("#value_creation > div.question-B").innerHTML = current_stage_value_creation_desc[third_growth_answer_value - 1];
    document.querySelector("#decision_making > div.question-B").innerHTML = current_stage_decision_making_desc[fourth_growth_answer_value - 1];

    //capabilities alignment
    document.querySelector("#company_structure > div.question-C").innerHTML = capab_alignment_company_structure[first_growth_answer_value - 1][second_growth_answer_value - 1];
    document.querySelector("#value_creation > div.question-C").innerHTML = capab_alignment_value_creation[first_growth_answer_value - 1][third_growth_answer_value - 1];
    document.querySelector("#decision_making > div.question-C").innerHTML = capab_alignment_decision_making[first_growth_answer_value - 1][fourth_growth_answer_value - 1];


    /////////////////////////////////////////////////////////////////
    //**************************DIAMONDS_INIT**********************//
    const diam0 = document.querySelector("#widget_15 > span > div:nth-child(6)");
    const diam1 = document.querySelector("#widget_15 > span > div:nth-child(28)");
    const diam2 = document.querySelector("#widget_15 > span > div:nth-child(29)");
    const diam3 = document.querySelector("#widget_15 > span > div:nth-child(30)");

    diam0.style.top = "55.4rem";
    diam1.style.top = "58rem";
    diam2.style.top = "61rem";
    diam3.style.top = "64rem";

    diam0.style.left = left_general[pie_position];
    diam1.style.left = left_general[diam1_position];
    diam2.style.left = left_general[diam2_position];
    diam3.style.left = left_general[diam3_position];

    //diamonds backgrounds for row 2/3/4
    diamonds = [diam1, diam2, diam3];
    background_formulas = [first_difference_from_base, second_difference_from_base, third_difference_from_base];
    for (var i = 0; i < 3; i++) {
        if (Math.abs(background_formulas[i]) == 0) {
            diamonds[i].style.backgroundImage = "url(https://assets.surveyanyplace.com/media-library/production/75980/imagini_report/7LySi0o3RJi5xPhulB9m_4.png)";
        }
        if (Math.abs(background_formulas[i]) == 1) {
            diamonds[i].style.backgroundImage = "url(https://assets.surveyanyplace.com/media-library/production/75980/imagini_report/rA9MoDvhSBmcDc95uoQx_5.png)";
        }

    }

    /////////////////////////////////////////////////////////////////
    //*****************RED AMBER YELLOW GREEN*********************//

    /////////////////////////////////////////////////////////////////
    //*************************RED INTRO***************************//
    //this switch alters the RED INTRO section depending on what is the first ability by score
    switch (alignment[0].type_al) {
        case 'Purpose':
            document.querySelector("#red_intro > div:nth-child(1)").innerHTML = 'Purpose - What does good look and feel like';
            document.querySelector("#red_intro > div:nth-child(2)").innerHTML = 'A company powered by purpose tends to outperform those that are driven by results, especially when the goal of that purpose is something that is built from your desire to make society better. The outcome is a business (and people) with an innate passion for innovation and achieving something that is truly great and of significant value for their customer. <br> A meaningful purpose creates a bigger importance and everything and everyone can be unified within that.Every single person works towards this change in society and their contribution to it, which allows personal missions and agendas to be put to one side.';
            document.querySelector("#red_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Purpose" is red and you have been very honest with how you have answered. ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen?' +
                '</div>' +
                '<div>' +
                'There are very few companies that are purpose-led. In the traditional way of building a business, we tend to promote strong strategists rather than strong coaches of people.' +
                'It means that quite often we have amazing strategic leaders who perhaps have a lesser ability to coach others and therefore, the role of a company\'s purpose remains on the sidelines.' +
                '</div>' +
                '<div>' +
                'Addressing where purpose sits in your company is one step away from preparing for a growth plan that will feel like a pair of comfortable slippers, slippers that allow you to run like a superhuman!This is because the human brain needs a goal, a picture in the mind of what the end is, so it can work out what value it can have and therefore function at its best.' +
                '</div>' +
                '<div>' +
                'The simple shift of putting your purpose and the impact you want to have on society at the centre of your company, not only gives the human brain a goal, it also unites everyone in the want to provide value to what we do.' +
                'Non - alignment happens when the picture is not clear.When your purpose is sidelined and not clearly translated, it allows our brain to seek out a goal and create an end picture we think makes sense.Then, with good intentions, we all contribute our value towards that picture.So that could be 100 s or 1000 s of human brains all working towards what they think the picture is and I’ m sure you can imagine the impact that would bring on a business.' +
                '</div>' +
                '<div>' +
                'What does this mean?' +
                '</div>' +
                '<div>' +
                'Take the simplest of examples: the purpose of nutrition. How we look at "nutrition" and food intake is different for every individual, yet everybody has created a picture that leads to or represents the word "nutrition” - eating and fuelling the body so we function, which you can do in a thousand different ways. Stand up, go to the cupboard, take a piece of cake, eat a salad, make a sandwich, it\'s easy, you just do what you want as long as it</div>' +
                'fits in with the picture you have made of nutrition. You have decided over the years what is important to you - it might be to look good, feel fit, lose fat or you just don’ t really care...However, when you know what’ s important, it is easier to make decisions on what you should eat and you eat in this way because it\'s directed by the greater nutrition goal you set - that picture in your brain.' +
                '</div>' +
                '<div>' +
                'It\'s a very simple example, yet you can see how our personal purpose of something changes the actions we take. So, you can imagine how easily a company\'s purpose can be swayed by individual interpretations of that end picture unless it is translated into how we work, what we do and what we value and celebrate in our company.' +
                '<div>' +
                'As humans, we fill in our knowledge gaps with our own perception or how people behave around us. A company with a clear purpose, one that knows who they are, what to do, how to do it, why they do it, can be truly purpose - led as people know how they can be the best they can be towards your cause.If the purpose of Nutrition in a company of 30 people can be actioned in 30 different ways, so can the company\'s purpose.' +
                '</div>' +
                '<div>' +
                'The starting point of uniting people is by sharing the cause you are wanting to change in society, however big or small. People feel fulfilled, they can see how they can add value and, most importantly, make a difference for the customer.' +
                '</div>' +
                '<div>' +
                'What is the difference it can make for you?' +
                '</div>' +
                '<div>' +
                'There are benefits in both loss prevention and missed opportunities.One of the biggest losses is the weakening of your story into the community you want to change for the better. If the daily actions that we take are not towards the true customer then they are likely to take your product or experience your service and never have the WOW moment, seeing the difference it makes to them and their lives.' +
                'Nobody takes the time to talk about an OK product; the message won\'t spread through the community and keeping your current customers loyal becomes harder as what you once gave them as something truly different has lost its edge.This is one of the many potential direct losses when the purpose does not shout loud enough.For you as the founder, your purpose or that red thread that runs throughout your business, gives a unity that is stronger and far more joyful to be a part of.' +
                '</div>' +
                '<div>' +
                'What can you do?' +
                '</div>' +
                '<div>' +
                'Be brave...be amazing and ask yourself the hardest question of all: is the company still really living my purpose?' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The starting point: ' +
                '</div>' +
                '<div>' +
                'Purpose is defined as "A personal mission that identifies the contribution you want to make, translating it for the customer and into the society you want to transform."' +
                '</div>' +
                '<div>' +
                '1. How clear is the purpose of your company?' +
                '</div>' +
                '<div>' +
                '2. Are you and your team connected to your story and what you are truly trying to change?' +
                '</div>' +
                '<div>' +
                '3. Do you measure if you are making that difference?' +
                '</div>' +
                '<div>' +
                '4. The last and the most important: "Do we know what we should be proud for?" What guidelines should we have to measure if we are really making that difference? This is a good starting point for beginning to place purpose back at the centre, in the form of the customer story. ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of:' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >  ' +
                '</div>';
            break;
        case 'Team':
            document.querySelector("#red_intro > div:nth-child(1)").innerHTML = 'Team - What does good look and feel like';
            document.querySelector("#red_intro > div:nth-child(2)").innerHTML = 'Purpose lives throughout the wider company. The value creation process is owned by everyone and its delivery sits with us all, whatever the level or specialism. It’s a palpable, companywide attitude where bonuses, rewards and promotions are directly associated with contributions to and innovations towards the purpose, a measure that is really celebrated by all. <br>The tangible output is equal, shared values that keep the business seamlessly moving forwards.Leaders are coaches, inspiring their teams to be the best version of each other, driving innovative thinking and creating a culture of belonging and trust.One that you are proud to be a part of .';
            document.querySelector("#red_intro > div:nth-child(3)").innerHTML = '<div>' +
                ' "Team" is red and you have been very honest with how you have answered.' +
                '</div>' +
                '<div>' +
                'Why does non - alignment happen?' +
                '</div>' +
                '<div>' +
                'A team consists of individuals with their own unique contribution and way of acting(their values) created by our past, which makes non - alignment in this area quite common.Everybody has good intentions to get their job done and wanting, by human nature, to find fulfillment in what we do and adding value to others. People generally think they share a lot of the same values however, it\'s' +
                'the way we use them that creates the difference between us and here begins non-alignment. You hopefully have a group of great people wanting to make a difference for the company they work for and if you, as the founder, are still present, they want to support you on your purpose. The challenge is with fast moving companies who want to grow again, our energy is so focused on the "doing" ' +
                'that we forget to channel the energy and the good intentions into a clearly defined picture. As a company continues to grow, the power that is created through the unity of people who live and contribute to one cause, is lost. ' +
                '</div>' +
                '<div>' +
                'What does this mean?' +
                '</div>' +
                '<div>' +
                'When the team agrees on the shared values and ways of getting things done, innovation, change and decision - making feel seamless.Just being a part of your company feels easy for everyone. This is because everybody\'s daily behaviour is genuine and true, the group of individual and well-intentioned people we mentioned at the beginning, begin to create the best version of each other. Customers,' +
                'team members and founders begin to live and work from trust and not from doubt.' +
                '</div>' +
                '<div>' +
                'The message is always the same; consistent and true, and once you start to see this, we can coach and use this energy to elevate the organisation to be the best they can be for customer. In return, there is a greater fulfillment for the individual because they know how they transform the defined society you as the founder wished to make better - that\'s their purpose now.' +
                '</div>' +
                '<div>' +
                'I am sure we have heard or experienced a feeling related to the following statements at some point in our working lives: "So alignment means act in the way of the founder" "So you want everybody to be the same, like puppets, surely you are suppressing the individual\'s uniqueness?" "How can that be fulfilling? In my book that certainly does not create "  take off " growth"' +
                '</div>' +
                '<div>' +
                'In fact it \'s the opposite.Alignment to purpose through defined values and cause brings greater freedom because you know what is expected of you and what the value of your efforts are.You are no longer fighting to be heard above your colleague, you are united in the change the company is making and this is what you are recognised for - together. ' +
                '</div>' +
                '<div>' +
                'Sounds perfect, what could I consider doing to make a good start? Firstly,let\'s agree that alignment is a journey so it\'s about getting started and choosing an approach that is going to give you the greatest impact in the quickest time.Spend the week observing your team(perhaps with your leaders) getting a feel for whether "what good looks like" as described in your' +
                ' report exists in your company. Perhaps use the questions as a guide to see where the team are aligned and who or what the team are aligned to.' +
                '</div>' +
                '<div>' +
                'The company probably needs to make a shift and I am going to try and give you a hack to get started and make a difference quickly;' +
                '</div>' +
                '<div>' +
                'Start by creating the right environment for alignment.Let\'s undo the urban myth that creating alignment with people requires a "puppet" mentality and suppression of an individual\'s value.It\'s simply shifting where your purpose sits from my purpose to customer purpose. That\'s the simple hack to get you started.' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The first step is as simple as that.' +
                '</div>' +
                '<div>' +
                'What impact will it have for you as the founder?' +
                '</div>' +
                '<div>' +
                ' There are many benefits and you will feel the difference that living and working in a customer centric organisation makes for you. Working in collaberation is a feminine leadership trait - something you\'ll be naturally good at - so play to your strength, gain energy by elevating others and celebrating as a group.' +
                ' I can only talk from my experiences on the positive impact and if I had to highlight a few, I\'d start with when it was too busy to give purpose the voice it needed to stand above everything else. It was inconsistent yet when it\'s everybody\'s picture it became inspiring, we measured it and it led our celebrations.' +
                ' Subcultures disappeared and life was a bit more equal for everyone.The picture was clearer, actions and innovation and delivery of new projects felt seamless. I could lead and guide rather than sometimes leading with frustration and feeling trapped.Work was full of more joyful moments and there were so many individual' +
                ' stories of how the purpose was being achieved, these were the stories that went onto unite us all into market leadership. ' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the team strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div> ' +
                '<div>' +
                'The starting point:' +
                '</div>' +
                '<div>' +
                'Team is defined as "The group of people associated with the total organisation who collaborate in unity to achieve this joint purpose." This includes partnerships / alliances / investors.' +
                '</div>' +
                '<div>' + '1. Do people work for your purpose, as the founder, or the purpose for the customer?' +
                '</div>' +
                '<div>' + ' 2. Is it clear for the team what is important for the business and the impact we, together, want to have? ' +
                '</div>' +
                '<div>' +
                '3. Has your story been translated into the organisation, resulting in company values and how important do they view the customer and the society you are changing? ' +
                '</div>' +
                '<div>' + '4. Are you giving people the opportunity to give value and personally contribute?' +
                '</div>' +
                '<div>' + 'For support on how to answer these, have a read of:  ' +
                '</div>' +
                '<div>' + '  My growth story >' +
                '</div>' +
                '<div>' + '  The eating what we grow restaurant >' +
                '</div>' +
                '<div>' + '  Lindas story > ' +
                '</div>';

            break;
        case 'Business':
            document.querySelector("#red_intro > div:nth-child(1)").innerHTML = 'Business - What does good look and feel like';
            document.querySelector("#red_intro > div:nth-child(2)").innerHTML = 'When the value creation process is owned by everybody, there is a true belonging to the customer, the driver for “why we do it.” It ensures every decision made is servicing them and a unified aspiration for a better society. <br>The structure is built on this and the systems and processes in place are too, making it able to hold both the existing customer, and new ones.The visible energy of the leadership or management team is driven by the clarity that this brings, with little room for confusion or second - guessing.';
            document.querySelector("#red_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Business" is red and you have been very honest with how you have answered. ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'Consider the following list: company structure, leadership, delegation, motivation, processes, efficiency, protocols, information, measurement and there\’s more... It\’s a comprehensive to-do list of considerations just to create one product/service for a customer. Then, let\’s add “make it unique" - making sure the product connects emotionally with the customer, which brings another level of challenge. ' +
                '</div>' +
                '<div>' +
                'If you consider each area of creating a business a building block, putting them together so they\’re aligned and working seamlessly to ultimately create your dream in a perfect way, could be a little overwhelming. For the sake of this conversation, let\’s say there are 10 blocks needed to build a company that works like clockwork. ' +
                '</div>' +
                '<div>' +
                'The first challenge: not all of the blocks are needed on day 1, in fact adding blocks too soon can squash growth. ' +
                '</div>' +
                '<div>' +
                'Second challenge: whilst making and keeping your company viable through blood, sweat and tears, blocks can suddenly appear with the tag "need now" so of course we add it in. Whilst doing this, we never take things away and end up looking back upon a somewhat failed IKEA construction project, yet it\’s a business that produces a good value product for the customer and somehow, we\’ve made it! ' +
                '</div>' +
                '<div>' +
                'What does it mean?' +
                '</div>' +
                '<div>' +
                'Non-alignment in the business pillar can mean you have a flywheel (the way your blocks are placed together) that chugs rather than flows. Your business structure, from the way you create your product to the systems controls and resources you use, may not be built in the right way to support your growth and future plans. ' +
                '</div>' +
                '<div>' +
                'When you have lower volumes, you and the team can run around mending it and filling in the gaps. However, when you\’re looking to grow or grow again, non-alignment of your building blocks can result in damage and increased risk of your brand reputation. Not to mention it\’s exhausting constantly putting out fires and the founder can find themselves trapped in their own dream that they cannot wake from. ' +
                '</div>' +
                '<div>' +
                'Strengthening your capabilities as a company is of course important, this will not however create your alignment power. This can only be created by building your company based on its purpose, creating the red thread from the customer back to you allowing your business process to be built around this guiding north star. Imagine laying out your blocks again; they\’re not glued together, instead they\’re connected with a putty that has the right elasticity to keep you dynamic and flexible to be ready for opportunity, yet firm enough to bring clarity to enable people to know their way around, always leading to the purpose measure.   ' +
                '</div>' +
                '<div>' +
                'Sounds perfect, what could I consider doing to make a good start? Start with the most important question, one that makes you look at the core of what you do: what\’s important to your company that is in line with your purpose and the society you are wanting to change? ' +
                '</div>' +
                '<div>' +
                'When you are beginning to build your business and you\’re getting the first product to market, "it\’s all hands on deck.” The product/service has been accepted and you perhaps take on a few specialists to perfect it and, step by step, you know you are building your key activities that deliver the product to the customer. Experimentation is a necessity and it helps evolve yours and a few specialist viewpoints on what is needed and in which way. ' +
                '</div>' +
                '<div>' +
                'As you become more established, you know so much more about your customer, the purpose and the impact you are having. This can be your starting point to evolve the organisation into a customer purpose driven company, starting with the impact you are having now and asking yourself, is it what you hoped for? What is missing? From this picture, work the process backwards from addressing the customer needs, questioning each step back through the value creation process, question its validity, is it weak, strong, pressurised, not living to values, are there blockages, are we over-engineering anything or not contributing to the cause? ' +
                '</div>' +
                '<div>' +
                'What impact will it have for you as the founder? ' +
                '</div>' +
                '<div>' +
                'It will allow you to ask the really important questions around the building blocks of your company, taking the time out to assess whether your structure is supporting growth now and whether it could. ' +
                '</div>' +
                '<div>' +
                'When you work the process back from the customer you can begin to create a purpose-led company - or if you already class yourself as one now, it’ll allow you to take your current red thread and increase its strength. Most importantly, take a step back and admire what you\’ve done, celebrate, close the scene and then release it into a new era of service, stronger, fitter and powered truly by purpose. ' +
                '</div>' +
                '<div>' +
                ' "Remember the more aligned you are to the ability of the business strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                ' The starting point:' +
                '</div>' +
                '<div>' +
                'Business is defined as "The level of organisation that brings your product/service to the market, the inner workings that enable this to happen." ' +
                '</div>' +
                '<div>' +
                '1. Where does the business process run smoothly and where does it struggle? ' +
                '</div>' +
                '<div>' +
                '2. Does the business process work from the customer/society\’s purpose back to you, ensuring the red thread of purpose is uninterrupted? It may be worth reviewing it with this in mind, where can you influence your new purpose measure? ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of: ' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' +
                'Rose\’s story>     ' +
                '</div>';

            break;
        case 'Customer':
            document.querySelector("#red_intro > div:nth-child(1)").innerHTML = 'Customer - What does good look and feel like';
            document.querySelector("#red_intro > div:nth-child(2)").innerHTML = 'The avatar - the customer profile - is clear and also still evolving. The company comes together to always provide the best solution for the customer. This sees everyone marching in one direction, knowing exactly who they are doing it for in an environment that is collaborative and honest.<br>The whole company wants to be agile, reacting to changes in the customer’ s needs with innovative thinking, evolving alongside them to provide the best and most relevant product or service.With a specific customer profile, there is clarity and efficiency in the processes used to build up to the bigger goal of serving more customers like this one, in order to make the change and impact in the society we serve.';
            document.querySelector("#red_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Customer" is red and you have been very honest with how you have answered.     ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'First of all, having red in customer alignment does not mean you have unhappy customers, far from it. So, where does the non-alignment come from if your customers are satisfied? The answer is from the difference between capability and ability. Your company is more than capable of producing satisfied and happy customers, that\’s how you have set it up. Ability, however, represents whether your company could power actual growth through the alignment you have to your customer and the community in which you serve. That level of power can only be achieved when your connection to your customer creates a truly authentic relationship that make and keep you as the only option for that product/service - ensuring they talk about you to others too. This authentic connection will bring them back time and time again. ' +
                '</div>' +
                '<div>' +
                'What makes the relationship so authentic? ' +
                '</div>' +
                '<div>' +
                'The alignment of the founder\’s story to their belief and personal purpose; how much are you actually helping to make that customer\’s life better? And for this, you need a different measure. This is the alignment. ' +
                '</div>' +
                '<div>' +
                'What does it mean? ' +
                '</div>' +
                '<div>' +
                'Customer satisfaction is of course important and it will ensure a company grows, allowing us to understand the effectiveness of the product/service we provide. True customer alignment, the connection of 2 beliefs, is all about value-creation and how much it matches with the emotions of the customer so it\’s in line with your beliefs and your cause. When the values and purpose are known and match, the customer, team, founder and business will understand each other. This creates a win-win situation bound by emotions - and not the product - which is of a higher and more loyal level, the level that creates true raving fans. Imagine having an authentic relationship with people who you may have never met? Through your product/service you have told them your story and with the supply of your product let them know you understand there\’s. - now it\’s personal and that\’s a relationship that\’s harder to leave.  \’sounds perfect, what could I consider doing to make a good  start? ' +
                '</div>' +
                '<div>' +
                'Begin by writing your story - in your mind or on paper. Why did you start this journey and what beliefs and experiences have led you to wanting to address this issue to this defined customer? Why do you care so much about changing things for the better? What\’s important for you? Then change places: what benefits can you give your defined customer? What are their needs? Why do they need you to make things better? What are their beliefs that led them to need this solved? Why do they care about it so much? ' +
                '</div>' +
                '<div>' +
                'Be hard with yourself; don\'t make an operational list!Your story is not about solving a task because you are then only as good as the next task solving product that comes along.Your story is about how you connect authentically, at the emotional level.This is the red thread, what connects you to them, their story to yours.It\’ s this story that you can begin to transfer to others, translating it into the values and the communications of your business to consistently be authentic and protect the most important connection in your company - and that\’s alignment.' +
                '</div>' +
                '<div>' +
                'What impact will it have for you as the founder? ' +
                '</div>' +
                '<div>' +
                '\’staying authentic to your cause is personally important for many reasons.Sometimes it can feel a bit alone, especially when the pressure is high.Having a visual board, a piece of paper or however you record your thoughts, of your story is always a good reminder of why you do what you do and whether you are still on track.when you hand over the "reins" to the customer to be the visual statue of that story for the company, the picture that the company follows and adds value, you will feel the equality change in the organisation as you begin to walk side by side.' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the customer strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The starting point: ' +
                '</div>' +
                '<div>' +
                'Customer is defined as "A specific identity with clear needs to satisfy and behaviours to observe, the reason you and your business exist." ' +
                '</div>' +
                '<div>' +
                '1. How much do you extend your thoughts and actions from the shoes of the customer and the society that you are striving to change? ' +
                '</div>' +
                '<div>' +
                '2. Does your purpose get the attention and innovation it needs?   ' +
                '</div>' +
                '<div>' +
                '3. Does your customer still get the value in the product that they need? Would it still inspire them enough to talk about it and how do you know that? ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of: ' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant > ';

            break;
        default:
            console.log("default");
    }

    /////////////////////////////////////////////////////////////////
    //*************************AMBER INTRO***************************//
    //this switch alters the AMBER INTRO section depending on what is the second ability by score

    switch (alignment[1].type_al) {
        case 'Purpose':
            document.querySelector("#amber_intro > div:nth-child(1)").innerHTML = 'Purpose - What does good look and feel like';
            document.querySelector("#amber_intro > div:nth-child(2)").innerHTML = 'A company powered by purpose tends to outperform those that are driven by results, especially when the goal of that purpose is something that is built from your desire to make society better. The outcome is a business (and people) with an innate passion for innovation and achieving something that is truly great and of significant value for their customer. <br> A meaningful purpose creates a bigger importance and everything and everyone can be unified within that.Every single person works towards this change in society and their contribution to it, which allows personal missions and agendas to be put to one side.';
            document.querySelector("#amber_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Purpose" is amber and you have been very honest with how you have answered. ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen?' +
                '</div>' +
                '<div>' +
                'There are very few companies that are purpose-led. In the traditional way of building a business, we tend to promote strong strategists rather than strong coaches of people.' +
                'It means that quite often we have amazing strategic leaders who perhaps have a lesser ability to coach others and therefore, the role of a company\'s purpose remains on the sidelines.' +
                '</div>' +
                '<div>' +
                'Addressing where purpose sits in your company is one step away from preparing for a growth plan that will feel like a pair of comfortable slippers, slippers that allow you to run like a superhuman!This is because the human brain needs a goal, a picture in the mind of what the end is, so it can work out what value it can have and therefore function at its best.' +
                '</div>' +
                '<div>' +
                'The simple shift of putting your purpose and the impact you want to have on society at the centre of your company, not only gives the human brain a goal, it also unites everyone in the want to provide value to what we do.' +
                'Non - alignment happens when the picture is not clear.When your purpose is sidelined and not clearly translated, it allows our brain to seek out a goal and create an end picture we think makes sense.Then, with good intentions, we all contribute our value towards that picture.So that could be 100 s or 1000 s of human brains all working towards what they think the picture is and I’ m sure you can imagine the impact that would bring on a business.' +
                '</div>' +
                '<div>' +
                'What does this mean?' +
                '</div>' +
                '<div>' +
                'Take the simplest of examples: the purpose of nutrition. How we look at "nutrition" and food intake is different for every individual, yet everybody has created a picture that leads to or represents the word "nutrition” - eating and fuelling the body so we function, which you can do in a thousand different ways. Stand up, go to the cupboard, take a piece of cake, eat a salad, make a sandwich, it\'s easy, you just do what you want as long as it</div>' +
                'fits in with the picture you have made of nutrition. You have decided over the years what is important to you - it might be to look good, feel fit, lose fat or you just don’ t really care...However, when you know what’ s important, it is easier to make decisions on what you should eat and you eat in this way because it\'s directed by the greater nutrition goal you set - that picture in your brain.' +
                '</div>' +
                '<div>' +
                'It\'s a very simple example, yet you can see how our personal purpose of something changes the actions we take. So, you can imagine how easily a company\'s purpose can be swayed by individual interpretations of that end picture unless it is translated into how we work, what we do and what we value and celebrate in our company.' +
                '<div>' +
                'As humans, we fill in our knowledge gaps with our own perception or how people behave around us. A company with a clear purpose, one that knows who they are, what to do, how to do it, why they do it, can be truly purpose - led as people know how they can be the best they can be towards your cause.If the purpose of Nutrition in a company of 30 people can be actioned in 30 different ways, so can the company\'s purpose.' +
                '</div>' +
                '<div>' +
                'The starting point of uniting people is by sharing the cause you are wanting to change in society, however big or small. People feel fulfilled, they can see how they can add value and, most importantly, make a difference for the customer.' +
                '</div>' +
                '<div>' +
                'What is the difference it can make for you?' +
                '</div>' +
                '<div>' +
                'There are benefits in both loss prevention and missed opportunities.One of the biggest losses is the weakening of your story into the community you want to change for the better. If the daily actions that we take are not towards the true customer then they are likely to take your product or experience your service and never have the WOW moment, seeing the difference it makes to them and their lives.' +
                'Nobody takes the time to talk about an OK product; the message won\'t spread through the community and keeping your current customers loyal becomes harder as what you once gave them as something truly different has lost its edge.This is one of the many potential direct losses when the purpose does not shout loud enough.For you as the founder, your purpose or that red thread that runs throughout your business, gives a unity that is stronger and far more joyful to be a part of.' +
                '</div>' +
                '<div>' +
                'What can you do?' +
                '</div>' +
                '<div>' +
                'Be brave...be amazing and ask yourself the hardest question of all: is the company still really living my purpose?' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The starting point: ' +
                '</div>' +
                '<div>' +
                'Purpose is defined as "A personal mission that identifies the contribution you want to make, translating it for the customer and into the society you want to transform."' +
                '</div>' +
                '<div>' +
                '1. How clear is the purpose of your company?' +
                '</div>' +
                '<div>' +
                '2. Are you and your team connected to your story and what you are truly trying to change?' +
                '</div>' +
                '<div>' +
                '3. Do you measure if you are making that difference?' +
                '</div>' +
                '<div>' +
                '4. The last and the most important: "Do we know what we should be proud for?" What guidelines should we have to measure if we are really making that difference? This is a good starting point for beginning to place purpose back at the centre, in the form of the customer story. ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of:' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >  ' +
                '</div>';

            break;
        case 'Team':
            document.querySelector("#amber_intro > div:nth-child(1)").innerHTML = 'Team - What does good look and feel like';
            document.querySelector("#amber_intro > div:nth-child(2)").innerHTML = 'Purpose lives throughout the wider company. The value creation process is owned by everyone and its delivery sits with us all, whatever the level or specialism. It’s a palpable, companywide attitude where bonuses, rewards and promotions are directly associated with contributions to and innovations towards the purpose, a measure that is really celebrated by all. <br>The tangible output is equal, shared values that keep the business seamlessly moving forwards.Leaders are coaches, inspiring their teams to be the best version of each other, driving innovative thinking and creating a culture of belonging and trust.One that you are proud to be a part of .';
            document.querySelector("#amber_intro > div:nth-child(3)").innerHTML = '<div>' +
                ' "Team" is amber and you have been very honest with how you have answered.' +
                '</div>' +
                '<div>' +
                'Why does non - alignment happen?' +
                '</div>' +
                '<div>' +
                'A team consists of individuals with their own unique contribution and way of acting(their values) created by our past, which makes non - alignment in this area quite common.Everybody has good intentions to get their job done and wanting, by human nature, to find fulfillment in what we do and adding value to others. People generally think they share a lot of the same values however, it\'s' +
                'the way we use them that creates the difference between us and here begins non-alignment. You hopefully have a group of great people wanting to make a difference for the company they work for and if you, as the founder, are still present, they want to support you on your purpose. The challenge is with fast moving companies who want to grow again, our energy is so focused on the "doing" ' +
                'that we forget to channel the energy and the good intentions into a clearly defined picture. As a company continues to grow, the power that is created through the unity of people who live and contribute to one cause, is lost. ' +
                '</div>' +
                '<div>' +
                'What does this mean?' +
                '</div>' +
                '<div>' +
                'When the team agrees on the shared values and ways of getting things done, innovation, change and decision - making feel seamless.Just being a part of your company feels easy for everyone. This is because everybody\'s daily behaviour is genuine and true, the group of individual and well-intentioned people we mentioned at the beginning, begin to create the best version of each other. Customers,' +
                'team members and founders begin to live and work from trust and not from doubt.' +
                '</div>' +
                '<div>' +
                'The message is always the same; consistent and true, and once you start to see this, we can coach and use this energy to elevate the organisation to be the best they can be for customer. In return, there is a greater fulfillment for the individual because they know how they transform the defined society you as the founder wished to make better - that\'s their purpose now.' +
                '</div>' +
                '<div>' +
                'I am sure we have heard or experienced a feeling related to the following statements at some point in our working lives: "So alignment means act in the way of the founder" "So you want everybody to be the same, like puppets, surely you are suppressing the individual\'s uniqueness?" "How can that be fulfilling? In my book that certainly does not create "  take off " growth"' +
                '</div>' +
                '<div>' +
                'In fact it \'s the opposite.Alignment to purpose through defined values and cause brings greater freedom because you know what is expected of you and what the value of your efforts are.You are no longer fighting to be heard above your colleague, you are united in the change the company is making and this is what you are recognised for - together. ' +
                '</div>' +
                '<div>' +
                'Sounds perfect, what could I consider doing to make a good start? Firstly,let\'s agree that alignment is a journey so it\'s about getting started and choosing an approach that is going to give you the greatest impact in the quickest time.Spend the week observing your team(perhaps with your leaders) getting a feel for whether "what good looks like" as described in your' +
                ' report exists in your company. Perhaps use the questions as a guide to see where the team are aligned and who or what the team are aligned to.' +
                '</div>' +
                '<div>' +
                'The company probably needs to make a shift and I am going to try and give you a hack to get started and make a difference quickly;' +
                '</div>' +
                '<div>' +
                'Start by creating the right environment for alignment.Let\'s undo the urban myth that creating alignment with people requires a "puppet" mentality and suppression of an individual\'s value.It\'s simply shifting where your purpose sits from my purpose to customer purpose. That\'s the simple hack to get you started.' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The first step is as simple as that.' +
                '</div>' +
                '<div>' +
                'What impact will it have for you as the founder?' +
                '</div>' +
                '<div>' +
                ' There are many benefits and you will feel the difference that living and working in a customer centric organisation makes for you. Working in collaberation is a feminine leadership trait - something you\'ll be naturally good at - so play to your strength, gain energy by elevating others and celebrating as a group.' +
                ' I can only talk from my experiences on the positive impact and if I had to highlight a few, I\'d start with when it was too busy to give purpose the voice it needed to stand above everything else. It was inconsistent yet when it\'s everybody\'s picture it became inspiring, we measured it and it led our celebrations.' +
                ' Subcultures disappeared and life was a bit more equal for everyone.The picture was clearer, actions and innovation and delivery of new projects felt seamless. I could lead and guide rather than sometimes leading with frustration and feeling trapped.Work was full of more joyful moments and there were so many individual' +
                ' stories of how the purpose was being achieved, these were the stories that went onto unite us all into market leadership. ' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the team strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div> ' +
                '<div>' +
                'The starting point:' +
                '</div>' +
                '<div>' +
                'Team is defined as "The group of people associated with the total organisation who collaborate in unity to achieve this joint purpose." This includes partnerships / alliances / investors.' +
                '</div>' +
                '<div>' +
                '1. Do people work for your purpose, as the founder, or the purpose for the customer?' +
                '</div>' +
                '<div>' +
                '2. Is it clear for the team what is important for the business and the impact we, together, want to have? ' +
                '</div>' +
                '<div>' +
                '3. Has your story been translated into the organisation, resulting in company values and how important do they view the customer and the society you are changing? ' +
                '</div>' +
                '<div>' +
                '4. Are you giving people the opportunity to give value and personally contribute?' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of:  ' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' + 'Lindas story > ' +
                '</div>';

            break;
        case 'Business':
            document.querySelector("#amber_intro > div:nth-child(1)").innerHTML = 'Business - What does good look and feel like';
            document.querySelector("#amber_intro > div:nth-child(2)").innerHTML = 'When the value creation process is owned by everybody, there is a true belonging to the customer, the driver for “why we do it.” It ensures every decision made is servicing them and a unified aspiration for a better society. <br>The structure is built on this and the systems and processes in place are too, making it able to hold both the existing customer, and new ones.The visible energy of the leadership or management team is driven by the clarity that this brings, with little room for confusion or second - guessing.';
            document.querySelector("#amber_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Business" is amber and you have been very honest with how you have answered. ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'Consider the following list: company structure, leadership, delegation, motivation, processes, efficiency, protocols, information, measurement and there\’s more... It\’s a comprehensive to-do list of considerations just to create one product/service for a customer. Then, let\’s add “make it unique" - making sure the product connects emotionally with the customer, which brings another level of challenge. ' +
                '</div>' +
                '<div>' +
                'If you consider each area of creating a business a building block, putting them together so they\’re aligned and working seamlessly to ultimately create your dream in a perfect way, could be a little overwhelming. For the sake of this conversation, let\’s say there are 10 blocks needed to build a company that works like clockwork. ' +
                '</div>' +
                '<div>' +
                'The first challenge: not all of the blocks are needed on day 1, in fact adding blocks too soon can squash growth. ' +
                '</div>' +
                '<div>' +
                'Second challenge: whilst making and keeping your company viable through blood, sweat and tears, blocks can suddenly appear with the tag "need now" so of course we add it in. Whilst doing this, we never take things away and end up looking back upon a somewhat failed IKEA construction project, yet it\’s a business that produces a good value product for the customer and somehow, we\’ve made it! ' +
                '</div>' +
                '<div>' +
                'What does it mean?' +
                '</div>' +
                '<div>' +
                'Non-alignment in the business pillar can mean you have a flywheel (the way your blocks are placed together) that chugs rather than flows. Your business structure, from the way you create your product to the systems controls and resources you use, may not be built in the right way to support your growth and future plans. ' +
                '</div>' +
                '<div>' +
                'When you have lower volumes, you and the team can run around mending it and filling in the gaps. However, when you\’re looking to grow or grow again, non-alignment of your building blocks can result in damage and increased risk of your brand reputation. Not to mention it\’s exhausting constantly putting out fires and the founder can find themselves trapped in their own dream that they cannot wake from. ' +
                '</div>' +
                '<div>' +
                'Strengthening your capabilities as a company is of course important, this will not however create your alignment power. This can only be created by building your company based on its purpose, creating the red thread from the customer back to you allowing your business process to be built around this guiding north star. Imagine laying out your blocks again; they\’re not glued together, instead they\’re connected with a putty that has the right elasticity to keep you dynamic and flexible to be ready for opportunity, yet firm enough to bring clarity to enable people to know their way around, always leading to the purpose measure.   ' +
                '</div>' +
                '<div>' +
                'Sounds perfect, what could I consider doing to make a good start? Start with the most important question, one that makes you look at the core of what you do: what\’s important to your company that is in line with your purpose and the society you are wanting to change? ' +
                '</div>' +
                '<div>' +
                'When you are beginning to build your business and you\’re getting the first product to market, "it\’s all hands on deck.” The product/service has been accepted and you perhaps take on a few specialists to perfect it and, step by step, you know you are building your key activities that deliver the product to the customer. Experimentation is a necessity and it helps evolve yours and a few specialist viewpoints on what is needed and in which way. ' +
                '</div>' +
                '<div>' +
                'As you become more established, you know so much more about your customer, the purpose and the impact you are having. This can be your starting point to evolve the organisation into a customer purpose driven company, starting with the impact you are having now and asking yourself, is it what you hoped for? What is missing? From this picture, work the process backwards from addressing the customer needs, questioning each step back through the value creation process, question its validity, is it weak, strong, pressurised, not living to values, are there blockages, are we over-engineering anything or not contributing to the cause? ' +
                '</div>' +
                '<div>' +
                'What impact will it have for you as the founder? ' +
                '</div>' +
                '<div>' +
                'It will allow you to ask the really important questions around the building blocks of your company, taking the time out to assess whether your structure is supporting growth now and whether it could. ' +
                '</div>' +
                '<div>' +
                'When you work the process back from the customer you can begin to create a purpose-led company - or if you already class yourself as one now, it’ll allow you to take your current red thread and increase its strength. Most importantly, take a step back and admire what you\’ve done, celebrate, close the scene and then release it into a new era of service, stronger, fitter and powered truly by purpose. ' +
                '</div>' +
                '<div>' +
                ' "Remember the more aligned you are to the ability of the business strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                ' The starting point:' +
                '</div>' +
                '<div>' +
                'Business is defined as "The level of organisation that brings your product/service to the market, the inner workings that enable this to happen." ' +
                '</div>' +
                '<div>' +
                '1. Where does the business process run smoothly and where does it struggle? ' +
                '</div>' +
                '<div>' +
                '2. Does the business process work from the customer/society\’s purpose back to you, ensuring the red thread of purpose is uninterrupted? It may be worth reviewing it with this in mind, where can you influence your new purpose measure? ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of: ' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' +
                'Rose\’s story>     ' +
                '</div>';

            break;
        case 'Customer':
            document.querySelector("#amber_intro > div:nth-child(1)").innerHTML = 'Customer - What does good look and feel like';
            document.querySelector("#amber_intro > div:nth-child(2)").innerHTML = 'The avatar - the customer profile - is clear and also still evolving. The company comes together to always provide the best solution for the customer. This sees everyone marching in one direction, knowing exactly who they are doing it for in an environment that is collaborative and honest.<br>The whole company wants to be agile, reacting to changes in the customer’ s needs with innovative thinking, evolving alongside them to provide the best and most relevant product or service.With a specific customer profile, there is clarity and efficiency in the processes used to build up to the bigger goal of serving more customers like this one, in order to make the change and impact in the society we serve.';
            document.querySelector("#amber_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Customer" is amber and you have been very honest with how you have answered.     ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'First of all, having amber in customer alignment does not mean you have unhappy customers, far from it. So, where does the non-alignment come from if your customers are satisfied? The answer is from the difference between capability and ability. Your company is more than capable of producing satisfied and happy customers, that\’s how you have set it up. Ability, however, represents whether your company could power actual growth through the alignment you have to your customer and the community in which you serve. That level of power can only be achieved when your connection to your customer creates a truly authentic relationship that make and keep you as the only option for that product/service - ensuring they talk about you to others too. This authentic connection will bring them back time and time again. ' +
                '</div>' +
                '<div>' +
                'What makes the relationship so authentic? ' +
                '</div>' +
                '<div>' +
                'The alignment of the founder\’s story to their belief and personal purpose; how much are you actually helping to make that customer\’s life better? And for this, you need a different measure. This is the alignment. ' +
                '</div>' +
                '<div>' +
                'What does it mean? ' +
                '</div>' +
                '<div>' +
                'Customer satisfaction is of course important and it will ensure a company grows, allowing us to understand the effectiveness of the product/service we provide. True customer alignment, the connection of 2 beliefs, is all about value-creation and how much it matches with the emotions of the customer so it\’s in line with your beliefs and your cause. When the values and purpose are known and match, the customer, team, founder and business will understand each other. This creates a win-win situation bound by emotions - and not the product - which is of a higher and more loyal level, the level that creates true raving fans. Imagine having an authentic relationship with people who you may have never met? Through your product/service you have told them your story and with the supply of your product let them know you understand there\’s. - now it\’s personal and that\’s a relationship that\’s harder to leave. ' +
                '</div>' +
                '<div>' +
                'Sounds perfect, what could I consider doing to make a good start? Begin by writing your story - in your mind or on paper. Why did you start this journey and what beliefs and experiences have led you to wanting to address this issue to this defined customer? Why do you care so much about changing things for the better? What\’s important for you? Then change places: what benefits can you give your defined customer? What are their needs? Why do they need you to make things better? What are their beliefs that led them to need this solved? Why do they care about it so much? ' +
                '</div>' +
                '<div>' +
                'Be hard with yourself; don\'t make an operational list!Your story is not about solving a task because you are then only as good as the next task solving product that comes along.Your story is about how you connect authentically, at the emotional level. This is the red thread, what connects you to them, their story to yours.It\’ s this story that you can begin to transfer to others, translating it into the values and the communications of your business to consistently be authentic and protect the most important connection in your company - and that\’s alignment.' +
                '</div>' +
                '<div>' +
                'What impact will it have for you as the founder? ' +
                '</div>' +
                '<div>' +
                'Staying authentic to your cause is personally important for many reasons. Sometimes it can feel a bit alone, especially when the pressure is high.Having a visual board, a piece of paper or however you record your thoughts, of your story is always a good reminder of why you do what you do and whether you are still on track.when you hand over the "reins" to the customer to be the visual statue of that story for the company, the picture that the company follows and adds value, you will feel the equality change in the organisation as you begin to walk side by side.' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the customer strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The starting point: ' +
                '</div>' +
                '<div>' +
                'Customer is defined as "A specific identity with clear needs to satisfy and behaviours to observe, the reason you and your business exist." ' +
                '</div>' +
                '<div>' +
                '1. How much do you extend your thoughts and actions from the shoes of the customer and the society that you are striving to change? ' +
                '</div>' +
                '<div>' +
                '2. Does your purpose get the attention and innovation it needs?   ' +
                '</div>' +
                '<div>' +
                '3. Does your customer still get the value in the product that they need? Would it still inspire them enough to talk about it and how do you know that? ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of: ' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant > ';
            break;
        default:
            console.log("default");
    }

    /////////////////////////////////////////////////////////////////
    //***********************YELLOW INTRO**************************//
    //this switch alters the YELLOW INTRO section depending on what is the second ability by score

    switch (alignment[2].type_al) {
        case 'Purpose':
            document.querySelector("#yellow_intro > div:nth-child(1)").innerHTML = 'Purpose - What does good look and feel like';
            document.querySelector("#yellow_intro > div:nth-child(2)").innerHTML = 'A company powered by purpose tends to outperform those that are driven by results, especially when the goal of that purpose is something that is built from your desire to make society better. The outcome is a business (and people) with an innate passion for innovation and achieving something that is truly great and of significant value for their customer. <br> A meaningful purpose creates a bigger importance and everything and everyone can be unified within that.Every single person works towards this change in society and their contribution to it, which allows personal missions and agendas to be put to one side.';
            document.querySelector("#yellow_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Purpose" is yellow and you have been very honest with how you have answered. ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen?' +
                '</div>' +
                '<div>' +
                'There are very few companies that are purpose-led. In the traditional way of building a business, we tend to promote strong strategists rather than strong coaches of people.' +
                'It means that quite often we have amazing strategic leaders who perhaps have a lesser ability to coach others and therefore, the role of a company\'s purpose remains on the sidelines.' +
                '</div>' +
                '<div>' +
                'Addressing where purpose sits in your company is one step away from preparing for a growth plan that will feel like a pair of comfortable slippers, slippers that allow you to run like a superhuman!This is because the human brain needs a goal, a picture in the mind of what the end is, so it can work out what value it can have and therefore function at its best.' +
                '</div>' +
                '<div>' +
                'The simple shift of putting your purpose and the impact you want to have on society at the centre of your company, not only gives the human brain a goal, it also unites everyone in the want to provide value to what we do.' +
                'Non - alignment happens when the picture is not clear. When your purpose is sidelined and not clearly translated, it allows our brain to seek out a goal and create an end picture we think makes sense. Then, with good intentions, we all contribute our value towards that picture.So that could be 100 s or 1000 s of human brains all working towards what they think the picture is and I\’m sure you can imagine the impact that would bring on a business.' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The starting point: ' +
                '</div>' +
                '<div>' +
                'Purpose is defined as "A personal mission that identifies the contribution you want to make, translating it for the customer and into the society you want to transform."' +
                '</div>' +
                '<div>' +
                '1. How clear is the purpose of your company?' +
                '</div>' +
                '<div>' +
                '2. Are you and your team connected to your story and what you are truly trying to change?' +
                '</div>' +
                '<div>' +
                '3. Do you measure if you are making that difference?' +
                '</div>' +
                '<div>' +
                '4. The last and the most important: "Do we know what we should be proud for?" What guidelines should we have to measure if we are really making that difference? This is a good starting point for beginning to place purpose back at the centre, in the form of the customer story. ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of:' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >  ' +
                '</div>';

            break;
        case 'Team':
            document.querySelector("#yellow_intro > div:nth-child(1)").innerHTML = 'Team - What does good look and feel like';
            document.querySelector("#yellow_intro > div:nth-child(2)").innerHTML = 'Purpose lives throughout the wider company. The value creation process is owned by everyone and its delivery sits with us all, whatever the level or specialism. It’s a palpable, companywide attitude where bonuses, rewards and promotions are directly associated with contributions to and innovations towards the purpose, a measure that is really celebrated by all. <br>The tangible output is equal, shared values that keep the business seamlessly moving forwards.Leaders are coaches, inspiring their teams to be the best version of each other, driving innovative thinking and creating a culture of belonging and trust.One that you are proud to be a part of .';
            document.querySelector("#yellow_intro > div:nth-child(3)").innerHTML = '<div>' +
                ' "Team" is yellow and you have been very honest with how you have answered.' +
                '</div>' +
                '<div>' +
                'Why does non - alignment happen?' +
                '</div>' +
                '<div>' +
                'A team consists of individuals with their own unique contribution and way of acting(their values) created by our past, which makes non - alignment in this area quite common.Everybody has good intentions to get their job done and wanting, by human nature, to find fulfillment in what we do and adding value to others. People generally think they share a lot of the same values however, it\'s' +
                'the way we use them that creates the difference between us and here begins non-alignment. You hopefully have a group of great people wanting to make a difference for the company they work for and if you, as the founder, are still present, they want to support you on your purpose. The challenge is with fast moving companies who want to grow again, our energy is so focused on the "doing" ' +
                'that we forget to channel the energy and the good intentions into a clearly defined picture. As a company continues to grow, the power that is created through the unity of people who live and contribute to one cause, is lost. ' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div> ' +
                '<div>' +
                'The starting point:' +
                '</div>' +
                '<div>' +
                'Team is defined as "The group of people associated with the total organisation who collaborate in unity to achieve this joint purpose." This includes partnerships / alliances / investors.' +
                '</div>' +
                '<div>' +
                '1. Do people work for your purpose, as the founder, or the purpose for the customer?' +
                '</div>' +
                '<div>' +
                '2. Is it clear for the team what is important for the business and the impact we, together, want to have? ' +
                '</div>' +
                '<div>' +
                '3. Has your story been translated into the organisation, resulting in company values and how important do they view the customer and the society you are changing? ' +
                '</div>' +
                '<div>' +
                '4. Are you giving people the opportunity to give value and personally contribute?' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of:  ' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' + 'Lindas story > ' +
                '</div>';

            break;
        case 'Business':
            document.querySelector("#yellow_intro > div:nth-child(1)").innerHTML = 'Business - What does good look and feel like';
            document.querySelector("#yellow_intro > div:nth-child(2)").innerHTML = 'When the value creation process is owned by everybody, there is a true belonging to the customer, the driver for “why we do it.” It ensures every decision made is servicing them and a unified aspiration for a better society. <br>The structure is built on this and the systems and processes in place are too, making it able to hold both the existing customer, and new ones.The visible energy of the leadership or management team is driven by the clarity that this brings, with little room for confusion or second - guessing.';
            document.querySelector("#yellow_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Business" is yellow and you have been very honest with how you have answered. ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'Consider the following list: company structure, leadership, delegation, motivation, processes, efficiency, protocols, information, measurement and there\’s more... It\’s a comprehensive to-do list of considerations just to create one product/service for a customer. Then, let\’s add “make it unique" - making sure the product connects emotionally with the customer, which brings another level of challenge. ' +
                '</div>' +
                '<div>' +
                'If you consider each area of creating a business a building block, putting them together so they\’re aligned and working seamlessly to ultimately create your dream in a perfect way, could be a little overwhelming. For the sake of this conversation, let\’s say there are 10 blocks needed to build a company that works like clockwork. ' +
                '</div>' +
                '<div>' +
                'The first challenge: not all of the blocks are needed on day 1, in fact adding blocks too soon can squash growth. ' +
                '</div>' +
                '<div>' +
                'Second challenge: whilst making and keeping your company viable through blood, sweat and tears, blocks can suddenly appear with the tag "need now" so of course we add it in. Whilst doing this, we never take things away and end up looking back upon a somewhat failed IKEA construction project, yet it\’s a business that produces a good value product for the customer and somehow, we\’ve made it! ' +
                '</div>' +
                '<div>' +
                //maybe this should not be here
                'What does it mean?' +
                '</div>' +
                '<div>' +
                //maybe this should not be here
                'Non-alignment in the business pillar can mean you have a flywheel (the way your blocks are placed together) that chugs rather than flows. Your business structure, from the way you create your product to the systems controls and resources you use, may not be built in the right way to support your growth and future plans. ' +
                '</div>' +
                '<div>' +
                ' "Remember the more aligned you are to the ability of the business strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                ' The starting point:' +
                '</div>' +
                '<div>' +
                'Business is defined as "The level of organisation that brings your product/service to the market, the inner workings that enable this to happen." ' +
                '</div>' +
                '<div>' +
                '1. Where does the business process run smoothly and where does it struggle? ' +
                '</div>' +
                '<div>' +
                '2. Does the business process work from the customer/society\’s purpose back to you, ensuring the red thread of purpose is uninterrupted? It may be worth reviewing it with this in mind, where can you influence your new purpose measure? ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of: ' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' +
                'Rose\’s story>     ' +
                '</div>';

            break;
        case 'Customer':
            document.querySelector("#yellow_intro > div:nth-child(1)").innerHTML = 'Customer - What does good look and feel like';
            document.querySelector("#yellow_intro > div:nth-child(2)").innerHTML = 'The avatar - the customer profile - is clear and also still evolving. The company comes together to always provide the best solution for the customer. This sees everyone marching in one direction, knowing exactly who they are doing it for in an environment that is collaborative and honest.<br>The whole company wants to be agile, reacting to changes in the customer’ s needs with innovative thinking, evolving alongside them to provide the best and most relevant product or service.With a specific customer profile, there is clarity and efficiency in the processes used to build up to the bigger goal of serving more customers like this one, in order to make the change and impact in the society we serve.';
            document.querySelector("#yellow_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Customer" is yellow and you have been very honest with how you have answered.     ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'Non-alignment here can come from the difference between capability and ability. Your company is more than capable of producing satisfied and happy customers, that\’s how you have set it up. Ability, however, represents whether your company could power actual growth through the alignment you have to your customer and the community in which you serve. That level of power can only be achieved when your connection to your customer creates a truly authentic relationship that make and keep you as the only option for that product/service - ensuring they talk about you to others too. This authentic connection will bring them back time and time again. ' +
                '</div>' +
                '<div>' +
                'What makes the relationship so authentic? ' +
                '</div>' +
                '<div>' +
                'The alignment of the founder\’s story to their belief and personal purpose; how much are you actually helping to make that customer\’s life better? And for this, you need a different measure.' +
                'The measure that lets you know how much your story is connecting to their story, how connected are they emotionally to your purpose. This authentic connection will bring them back time and time again.' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the customer strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'The starting point: ' +
                '</div>' +
                '<div>' +
                'Customer is defined as "A specific identity with clear needs to satisfy and behaviours to observe, the reason you and your business exist." ' +
                '</div>' +
                '<div>' +
                '1. How much do you extend your thoughts and actions from the shoes of the customer and the society that you are striving to change? ' +
                '</div>' +
                '<div>' +
                '2. Does your purpose get the attention and innovation it needs?   ' +
                '</div>' +
                '<div>' +
                '3. Does your customer still get the value in the product that they need? Would it still inspire them enough to talk about it and how do you know that? ' +
                '</div>' +
                '<div>' +
                'For support on how to answer these, have a read of: ' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant > ';
            break;
        default:
            console.log("default");
    }

    /////////////////////////////////////////////////////////////////
    //************************GREEN INTRO**************************//
    //this switch alters the GREEN INTRO section depending on what is the second ability by score

    switch (alignment[3].type_al) {
        case 'Purpose':
            document.querySelector("#green_intro > div:nth-child(1)").innerHTML = 'Purpose - What does good look and feel like';
            document.querySelector("#green_intro > div:nth-child(2)").innerHTML = 'A company powered by purpose tends to outperform those that are driven by results, especially when the goal of that purpose is something that is built from your desire to make society better. The outcome is a business (and people) with an innate passion for innovation and achieving something that is truly great and of significant value for their customer. <br> A meaningful purpose creates a bigger importance and everything and everyone can be unified within that.Every single person works towards this change in society and their contribution to it, which allows personal missions and agendas to be put to one side.';
            document.querySelector("#green_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Purpose" is green, which is fantastic! A reflection of what must have been a lot of hard work. Hopefully the below will help you always ensure perfect alignment on your purpose.' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen?' +
                '</div>' +
                '<div>' +
                'There are very few companies that are purpose-led. In the traditional way of building a business, we tend to promote strong strategists rather than strong coaches of people.' +
                'It means that quite often we have amazing strategic leaders who perhaps have a lesser ability to coach others and therefore, the role of a company\'s purpose remains on the sidelines.' +
                '</div>' +
                '<div>' +
                'Addressing where purpose sits in your company is one step away from preparing for a growth plan that will feel like a pair of comfortable slippers, slippers that allow you to run like a superhuman! This is because the human brain needs a goal, a picture in the mind of what the end is, so it can work out what value it can have and therefore function at its best.' +
                '</div>' +
                '<div>' +
                'The simple shift of putting your purpose and the impact you want to have on society at the centre of your company, not only gives the human brain a goal, it also unites everyone in the want to provide value to what we do.' +
                'Non - alignment happens when the picture is not clear. When your purpose is sidelined and not clearly translated, it allows our brain to seek out a goal and create an end picture we think makes sense. Then, with good intentions, we all contribute our value towards that picture.So that could be 100 s or 1000 s of human brains all working towards what they think the picture is and I\’m sure you can imagine the impact that would bring on a business.' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'Questions you can always keep front of mind:' +
                '</div>' +
                '<div>' +
                'Purpose is defined as "A personal mission that identifies the contribution you want to make, translating it for the customer and into the society you want to transform."' +
                '</div>' +
                '<div>' +
                '1. How clear is the purpose of your company?' +
                '</div>' +
                '<div>' +
                '2. Are you and your team connected to your story and what you are truly trying to change?' +
                '</div>' +
                '<div>' +
                '3. Do you measure if you are making that difference?' +
                '</div>' +
                '<div>' +
                '4. The last and the most important: "Do we know what we should be proud for?" What guidelines should we have to measure if we are really making that difference? This is a good starting point for beginning to place purpose back at the centre, in the form of the customer story. ' +
                '</div>' +
                '<div>' +
                'To see how this has come to life for others, have a read of:' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >  ' +
                '</div>';

            break;
        case 'Team':
            document.querySelector("#green_intro > div:nth-child(1)").innerHTML = 'Team - What does good look and feel like';
            document.querySelector("#green_intro > div:nth-child(2)").innerHTML = 'Purpose lives throughout the wider company. The value creation process is owned by everyone and its delivery sits with us all, whatever the level or specialism. It’s a palpable, companywide attitude where bonuses, rewards and promotions are directly associated with contributions to and innovations towards the purpose, a measure that is really celebrated by all. <br>The tangible output is equal, shared values that keep the business seamlessly moving forwards. Leaders are coaches, inspiring their teams to be the best version of each other, driving innovative thinking and creating a culture of belonging and trust. One that you are proud to be a part of .';
            document.querySelector("#green_intro > div:nth-child(3)").innerHTML = '<div>' +
                ' "Team" is green, which is fantastic! A reflection of what must have been a lot of hard work. Hopefully the below will help you always ensure perfect alignment on your purpose.  ' +
                '</div>' +
                '<div>' +
                'Why does non - alignment happen?' +
                '</div>' +
                '<div>' +
                'A team consists of individuals with their own unique contribution and way of acting (their values) created by our past, which makes non-alignment in this area quite common. Everybody has good intentions to get their job done and wanting, by human nature, to find fulfillment in what we do and adding value to others. People generally think they share a lot of the same values however, it\'s' +
                'the way we use them that creates the difference between us and here begins non-alignment. You hopefully have a group of great people wanting to make a difference for the company they work for and if you, as the founder, are still present, they want to support you on your purpose. The challenge is with fast moving companies who want to grow again, our energy is so focused on the "doing" ' +
                'that we forget to channel the energy and the good intentions into a clearly defined picture. As a company continues to grow, the power that is created through the unity of people who live and contribute to one cause, is lost. ' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the purpose strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div> ' +
                '<div>' +
                'The starting point:' +
                '</div>' +
                '<div>' +
                'Team is defined as "The group of people associated with the total organisation who collaborate in unity to achieve this joint purpose." This includes partnerships / alliances / investors.' +
                '</div>' +
                '<div>' +
                '1. Do people work for your purpose, as the founder, or the purpose for the customer?' +
                '</div>' +
                '<div>' +
                '2. Is it clear for the team what is important for the business and the impact we, together, want to have? ' +
                '</div>' +
                '<div>' +
                '3. Has your story been translated into the organisation, resulting in company values and how important do they view the customer and the society you are changing? ' +
                '</div>' +
                '<div>' +
                '4. Are you giving people the opportunity to give value and personally contribute?' +
                '</div>' +
                '<div>' +
                'To see how this has come to life for others, have a read of:  ' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' + 'Lindas story > ' +
                '</div>';

            break;
        case 'Business':
            document.querySelector("#green_intro > div:nth-child(1)").innerHTML = 'Business - What does good look and feel like';
            document.querySelector("#green_intro > div:nth-child(2)").innerHTML = 'When the value creation process is owned by everybody, there is a true belonging to the customer, the driver for “why we do it.” It ensures every decision made is servicing them and a unified aspiration for a better society. <br>The structure is built on this and the systems and processes in place are too, making it able to hold both the existing customer, and new ones.The visible energy of the leadership or management team is driven by the clarity that this brings, with little room for confusion or second - guessing.';
            document.querySelector("#green_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Business" is green, which is fantastic! A reflection of what must have been a lot of hard work. Hopefully the below will help you always ensure perfect alignment on your purpose.   ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'Consider the following list: company structure, leadership, delegation, motivation, processes, efficiency, protocols, information, measurement and there\’s more... It\’s a comprehensive to-do list of considerations just to create one product/service for a customer. Then, let\’s add “make it unique" - making sure the product connects emotionally with the customer, which brings another level of challenge. ' +
                '</div>' +
                '<div>' +
                'If you consider each area of creating a business a building block, putting them together so they\’re aligned and working seamlessly to ultimately create your dream in a perfect way, could be a little overwhelming. For the sake of this conversation, let\’s say there are 10 blocks needed to build a company that works like clockwork. ' +
                '</div>' +
                '<div>' +
                'The first challenge: not all of the blocks are needed on day 1, in fact adding blocks too soon can squash growth. ' +
                '</div>' +
                '<div>' +
                'Second challenge: whilst making and keeping your company viable through blood, sweat and tears, blocks can suddenly appear with the tag "need now" so of course we add it in. Whilst doing this, we never take things away and end up looking back upon a somewhat failed IKEA construction project, yet it\’s a business that produces a good value product for the customer and somehow, we\’ve made it! ' +
                '</div>' +
                '<div>' +
                //maybe this should not be here
                'What does it mean?' +
                '</div>' +
                '<div>' +
                //maybe this should not be here
                'Non-alignment in the business pillar can mean you have a flywheel (the way your blocks are placed together) that chugs rather than flows. Your business structure, from the way you create your product to the systems controls and resources you use, may not be built in the right way to support your growth and future plans. ' +
                '</div>' +
                '<div>' +
                ' "Remember the more aligned you are to the ability of the business strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                ' The starting point:' +
                '</div>' +
                '<div>' +
                'Business is defined as "The level of organisation that brings your product/service to the market, the inner workings that enable this to happen." ' +
                '</div>' +
                '<div>' +
                '1. Where does the business process run smoothly and where does it struggle? ' +
                '</div>' +
                '<div>' +
                '2. Does the business process work from the customer/society\’s purpose back to you, ensuring the red thread of purpose is uninterrupted? It may be worth reviewing it with this in mind, where can you influence your new purpose measure? ' +
                '</div>' +
                '<div>' +
                'To see how this has come to life for others, have a read of: ' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant >' +
                '</div>' +
                '<div>' +
                'Rose\’s story>     ' +
                '</div>';

            break;
        case 'Customer':
            document.querySelector("#green_intro > div:nth-child(1)").innerHTML = 'Customer - What does good look and feel like';
            document.querySelector("#green_intro > div:nth-child(2)").innerHTML = 'The avatar - the customer profile - is clear and also still evolving. The company comes together to always provide the best solution for the customer. This sees everyone marching in one direction, knowing exactly who they are doing it for in an environment that is collaborative and honest.<br>The whole company wants to be agile, reacting to changes in the customer’ s needs with innovative thinking, evolving alongside them to provide the best and most relevant product or service.With a specific customer profile, there is clarity and efficiency in the processes used to build up to the bigger goal of serving more customers like this one, in order to make the change and impact in the society we serve.';
            document.querySelector("#green_intro > div:nth-child(3)").innerHTML = '<div>' +
                '"Customer" is green, which is fantastic! A reflection of what must have been a lot of hard work. Hopefully the below will help you always ensure perfect alignment on your purpose.       ' +
                '</div>' +
                '<div>' +
                'Why does non-alignment happen? ' +
                '</div>' +
                '<div>' +
                'Non-alignment here can come from the difference between capability and ability. Your company is more than capable of producing satisfied and happy customers, that\’s how you have set it up. Ability, however, represents whether your company could power actual growth through the alignment you have to your customer and the community in which you serve. That level of power can only be achieved when your connection to your customer creates a truly authentic relationship that make and keep you as the only option for that product/service - ensuring they talk about you to others too. This authentic connection will bring them back time and time again. ' +
                '</div>' +
                '<div>' +
                'What makes the relationship so authentic? ' +
                '</div>' +
                '<div>' +
                'The alignment of the founder\’s story to their belief and personal purpose; how much are you actually helping to make that customer\’s life better? And for this, you need a different measure.' +
                'The measure that lets you know how much your story is connecting to their story, how connected are they emotionally to your purpose. This authentic connection will bring them back time and time again.' +
                '</div>' +
                '<div>' +
                '"Remember the more aligned you are to the ability of the customer strengthens your powerball to navigate and power through the forces you face as you grow more"' +
                '</div>' +
                '<div>' +
                'Questions you can always keep front of mind:' +
                '</div>' +
                '<div>' +
                'Customer is defined as "A specific identity with clear needs to satisfy and behaviours to observe, the reason you and your business exist." ' +
                '</div>' +
                '<div>' +
                '1. How much do you extend your thoughts and actions from the shoes of the customer and the society that you are striving to change? ' +
                '</div>' +
                '<div>' +
                '2. Does your purpose get the attention and innovation it needs?   ' +
                '</div>' +
                '<div>' +
                '3. Does your customer still get the value in the product that they need? Would it still inspire them enough to talk about it and how do you know that? ' +
                '</div>' +
                '<div>' +
                'To see how this has come to life for others, have a read of: ' +
                '</div>' +
                '<div>' +
                'My story >' +
                '</div>' +
                '<div>' +
                'My growth story >' +
                '</div>' +
                '<div>' +
                'The eating what we grow restaurant > ';
            break;
        default:
            console.log("default");
    }

    /////////////////////////////////////////////////////////////////
    //********************PIECHART COLORS N/A**********************//

    const colors = ["rgb(229, 68, 60)", "rgb(228, 96, 8)", "rgb(243, 158, 54)", "rgb(78, 175, 118)"];
    console.log(document.querySelector("#widget_23"));

    for (var i = 0; i < alignment.length; i++) {
        switch (alignment[i].type_al) {
            case 'Purpose':
                document.querySelector("#widget_23 svg > g.highcharts-series-group > g.highcharts-series.highcharts-series-0.highcharts-pie-series.highcharts-tracker > path.highcharts-point.highcharts-color-2").style.fill = colors[i];
                break;
            case 'Team':
                document.querySelector("#widget_23 svg > g.highcharts-series-group > g.highcharts-series.highcharts-series-0.highcharts-pie-series.highcharts-tracker > path.highcharts-point.highcharts-color-1").style.fill = colors[i];
                break;
            case 'Business':
                document.querySelector("#widget_23 svg > g.highcharts-series-group > g.highcharts-series.highcharts-series-0.highcharts-pie-series.highcharts-tracker > path.highcharts-point.highcharts-color-3").style.fill = colors[i];
                break;
            case 'Customer':
                document.querySelector("#widget_23 svg > g.highcharts-series-group > g.highcharts-series.highcharts-series-0.highcharts-pie-series.highcharts-tracker > path.highcharts-point.highcharts-color-0").style.fill = colors[i];
                break;
            default:
                console.log("default");
        }

    }

});

function docReady(fn) {
    // see if DOM is already available

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick

        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn, false);
    }
}