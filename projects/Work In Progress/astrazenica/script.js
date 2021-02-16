docReady(function() {

    var answer = parseInt(document.getElementById('answer').innerText);
    var outcome = '';
    if (answer <= 10) outcome = 'low';
    else if (answer <= 17) outcome = 'medium';
    else outcome = 'high';
    console.log(outcome);
    switch (outcome) {
        case 'low':
            document.getElementById('bluebox').style.display = "none";
            break;
        case 'medium':
            document.getElementsByTagName('h1')[0].innerText = 'Nguy cÆ¡ trung bÃ¬nh';
            document.getElementsByTagName('h3')[0].innerText = 'Nguy cÆ¡ phá»¥ thuá»™c trung bÃ¬nh ';
            document.getElementsByTagName('p')[1].innerHTML = 'BÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh ráº¥t cáº§n thiáº¿t vá»›i báº¡n. NhÆ°ng báº¡n cÃ³ thá»ƒ Ä‘ang phá»¥ thuá»™c vÃ o thuá»‘c. Äiá»u nÃ y dá»… hiá»ƒu vÃ¬ nÃ³ giÃºp báº¡n cáº£m tháº¥y khá»e hÆ¡n ngay khi hÃ­t. Má»™t sá»‘ ngÆ°á»i xem bÃ¬nh xá»‹t cáº¯t cÆ¡n lÃ  thuá»‘c quan trá»ng nháº¥t trong Ä‘iá»u trá»‹ hen. NhÆ°ng viá»‡c sá»­ dá»¥ng bÃ¬nh xá»‹t cáº¯t cÆ¡n â‰¥ 3 láº§n/ tuáº§n cÃ³ thá»ƒ lÃ  dáº¥u hiá»‡u hen cá»§a báº¡n Ä‘ang khÃ´ng Ä‘Æ°á»£c kiá»ƒm soÃ¡t tá»‘t<sup>1</sup>  4. Báº¡n nÃªn chia sáº» káº¿t quáº£ nÃ y vá»›i bÃ¡c sÄ©, y tÃ¡ hay dÆ°á»£c sÄ© cá»§a báº¡n.';
            document.getElementsByTagName('p')[2].innerText = 'BÃ¬nh xá»‹t cáº¯t cÆ¡n cÃ³ nhá»¯ng â€œÄiá»ƒm tá»‘tâ€ vÃ  nhá»¯ng â€œÄiá»ƒm chÆ°a tá»‘tâ€ HÃ£y Ä‘á»c tiáº¿p Ä‘á»ƒ tÃ¬m hiá»ƒu thÃªm.';
            document.getElementById('reliever_text').innerHTML = 'CÃ³ váº» tÃ´i Ä‘ang phá»¥ thuá»™c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh. Káº¿t quáº£ bÃ i Ä‘Ã¡nh giÃ¡ cho tháº¥y tÃ´i Ä‘ang phá»¥ thuá»™c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh á»Ÿ má»©c Ä‘á»™ trung bÃ¬nh.';
            document.querySelector('.infobox p').innerText = 'TÃ´i Ä‘Ã£ hoÃ n thÃ nh bÃ i Ä‘Ã¡nh giÃ¡ * vÃ  káº¿t quáº£ tÃ´i Ä‘ang cÃ³ nguy cÆ¡ phá»¥ thuá»™c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n Ä‘á»ƒ kiá»ƒm soÃ¡t hen. Äiá»u nÃ y cÃ³ nghÄ©a lÃ  hen cá»§a tÃ´i cÃ³ thá»ƒ Ä‘ang khÃ´ng Ä‘Æ°á»£c kiá»ƒm soÃ¡t tá»‘t nhÆ° mong muá»‘n.';
            document.getElementById('whentotalktoyourdoctor').innerHTML = 'Káº¿t quáº£ cho tháº¥y báº¡n á»Ÿ má»©c nguy cÆ¡ tháº¥p phá»¥ thuá»™c bÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh. Tuy nhiÃªn, báº¡n váº«n nÃªn gáº·p bÃ¡c sÄ©, y tÃ¡, dÆ°á»£c sÄ© Ä‘á»ƒ kiá»ƒm tra them náº¿u:';
            document.getElementById('reliever_heding').innerHTML = 'Káº¿t quáº£ chi tiáº¿t bÃ i Ä‘Ã¡nh giÃ¡ má»©c Ä‘á»™ phá»¥ thuá»™c thuá»‘c cáº¯t cÆ¡n.';
            document.getElementById('footer_heading').innerHTML = 'ÄÃ¢y khÃ´ng pháº£i lÃ  khuyáº¿n cÃ¡o y khoa. KHÃ”NG Dá»ªNG HOáº¶C THAY Äá»”I Ä‘iá»u trá»‹ hen mÃ  khÃ´ng cÃ³ sá»± tÆ° váº¥n tá»« bÃ¡c sÄ© cá»§a báº¡n.';
            document.getElementById('sscontent').innerHTML = 'Báº¡n cÃ³ thá»ƒ chá»¥p mÃ n hÃ¬nh, lÆ°u trÃªn Ä‘iá»‡n thoáº¡i hoáº·c in trang nÃ y.';
            document.getElementById('artcover_content').innerHTML = 'Chia sáº» káº¿t quáº£ vá»›i bÃ¡c sÄ©, y tÃ¡ hay dÆ°á»£c sÄ© cá»§a báº¡n';
            break;
        case 'high':
            document.getElementsByTagName('h1')[0].innerText = 'Nguy cÆ¡ cao';
            document.getElementsByTagName('h3')[0].innerText = 'Nguy cÆ¡ phá»¥ thuá»™c cao.';
            document.getElementsByTagName('p')[1].innerHTML = 'Báº¡n cÃ³ thá»ƒ Ä‘ang phá»¥ thuá»™c quÃ¡ má»©c bÃ¬nh xá»‹t cáº¯t cÆ¡n Äiá»u nÃ y dá»… hiá»ƒu vÃ¬ nÃ³ giÃºp báº¡n cáº£m tháº¥y khá»e hÆ¡n ngay khi hÃ­t. Má»™t sá»‘ ngÆ°á»i xem bÃ¬nh xá»‹t cáº¯t cÆ¡n lÃ  thuá»‘c quan trá»ng nháº¥t trong Ä‘iá»u trá»‹ hen. NhÆ°ng viá»‡c sá»­ dá»¥ng bÃ¬nh xá»‹t cáº¯t cÆ¡n â‰¥ 3 láº§n/ tuáº§n cÃ³ thá»ƒ lÃ  dáº¥u hiá»‡u hen cá»§a báº¡n Ä‘ang khÃ´ng Ä‘Æ°á»£c kiá»ƒm soÃ¡t tá»‘t <sup> 1</sup>. Báº¡n nÃªn chia sáº» káº¿t quáº£ nÃ y vá»›i bÃ¡c sÄ©, y tÃ¡ hay dÆ°á»£c sÄ© cá»§a báº¡n.';
            document.getElementsByTagName('p')[2].innerText = 'BÃ¬nh xá»‹t cáº¯t cÆ¡n cÃ³ nhá»¯ng â€œÄiá»ƒm tá»‘tâ€ vÃ  nhá»¯ng â€œÄiá»ƒm chÆ°a tá»‘tâ€ HÃ£y Ä‘á»c tiáº¿p Ä‘á»ƒ tÃ¬m hiá»ƒu thÃªm.';
            document.getElementById('reliever_text').innerHTML = 'CÃ³ váº» tÃ´i Ä‘ang quÃ¡ phá»¥ thuá»™c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh. Káº¿t quáº£ bÃ i Ä‘Ã¡nh giÃ¡ cho tháº§y tÃ´i Ä‘ang quÃ¡ phá»¥ thuá»™c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh.';
            document.querySelector('.infobox p').innerText = 'TÃ´i Ä‘Ã£ hoÃ n thÃ nh bÃ i Ä‘Ã¡nh giÃ¡ * vÃ  káº¿t quáº£ tÃ´i Ä‘ang quÃ¡ phá»¥ thuá»™c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n Ä‘á»ƒ kiá»ƒm soÃ¡t hen. Äiá»u nÃ y cÃ³ nghÄ©a lÃ  tÃ´i cÃ³ thá»ƒ Ä‘ang khÃ´ng Ä‘Æ°á»£c kiá»ƒm soÃ¡t tá»‘t nhÆ° mong muá»‘n.';
            document.getElementById('whentotalktoyourdoctor').innerHTML = 'Káº¿t quáº£ cho tháº¥y báº¡n Ä‘ang phá»¥ thuá»™c quÃ¡ má»©c vÃ o bÃ¬nh xá»‹t cáº¯t cÆ¡n mÃ u xanh. Tuy nhiÃªn, báº¡n váº«n nÃªn gáº·p bÃ¡c sÄ©, y tÃ¡, dÆ°á»£c sÄ© Ä‘á»ƒ kiá»ƒm tra thÃªm náº¿u:';
            document.getElementById('reliever_heding').innerHTML = 'Káº¿t quáº£ chi tiáº¿t bÃ i Ä‘Ã¡nh giÃ¡ má»©c Ä‘á»™ phá»¥ thuá»™c thuá»‘c cáº¯t cÆ¡n.';
            document.getElementById('footer_heading').innerHTML = 'ÄÃ¢y khÃ´ng pháº£i lÃ  khuyáº¿n cÃ¡o y khoa. KHÃ”NG Dá»ªNG HOáº¶C THAY Äá»”I Ä‘iá»u trá»‹ hen mÃ  khÃ´ng cÃ³ sá»± tÆ° váº¥n tá»« bÃ¡c sÄ© cá»§a báº¡n.';
            document.getElementById('sscontent').innerHTML = 'Báº¡n cÃ³ thá»ƒ chá»¥p mÃ n hÃ¬nh, lÆ°u trÃªn Ä‘iá»‡n thoáº¡i hoáº·c in trang nÃ y.';
            document.getElementById('artcover_content').innerHTML = 'Chia sáº» káº¿t quáº£ vá»›i bÃ¡c sÄ©, y tÃ¡ hay dÆ°á»£c sÄ© cá»§a báº¡n';
            break;
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


/*

*/