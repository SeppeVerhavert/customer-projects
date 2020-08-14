require(['underscore'], function(_) {
    App.ev.once('afterRenderOutro', function() {

        //      -----   Your JS here     -----       //

        const modal = document.querySelector("#content0 > div > div > div > div > div.card-body > form > div > div > div.container.branding-container");

        // Get the button that opens the modal
        const btn_modal = document.querySelector("#outcome-0 > div:nth-child(4) > span");

        // Get the element that closes the modal
        const closing_element = document.querySelector("#content0 > div > div > div > div > div.card-body > form > div > div > div.container.branding-container > div:nth-child(1)");

        // When the user clicks the button, open the modal
        btn_modal.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks, close the modal
        closing_element.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

    });
});