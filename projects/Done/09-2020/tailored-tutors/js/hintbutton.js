// App.Slides.registerEvent('rsOnUpdateNav', function() {
//     if (document.querySelector('.rsActiveSlide .question-hint') == null) {
//         return;
//     } else {
var cardContent = document.querySelector('.rsActiveSlide .card-content-item');
var contentArray = Array.prototype.slice.call(document.querySelector('.rsActiveSlide .card-content-item').children, 0);
contentArray.splice(2, 0, contentArray[0]);
contentArray.slice(1);
cardContent.children.forEach(element => {
    element = contentArray.slice(1);
});
// var hintButton = document.querySelector('.rsActiveSlide .question-hint');
// hintButton.classList.add('button');
// hintButton.innerHTML = "SEE ANSWER";
//     }
// });