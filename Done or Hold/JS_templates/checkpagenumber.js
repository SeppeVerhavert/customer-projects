function checkpagenumber() {
    return App.Slides.slider.currSlideId;
}

App.Slides.registerEvent('rsOnUpdateNav', function() {
    checkpagenumber()
});

// const elem1 = document.getElementsByClassName("input form-item-answer");
// const attribute = document.createAttribute("placeholder");
// attribute.value = "Your Name";
// elem1.setAttributeNode(attribute);