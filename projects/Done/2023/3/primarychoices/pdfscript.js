docReady(function () {
    var advancedElem = document.getElementById("advance").innerText;
    console.log(advancedElem);

    var advace_wood = document.getElementById("ixz0wh");
    var advace_fire = document.getElementById("ig1zt1");
    var advace_earth = document.getElementById("ijkvhi");
    var advace_metal = document.getElementById("igncb2");
    var advace_water = document.getElementById("i2zayl");

    // ADVACED ELEMENT
    if (advancedElem === "Wood") {
        advace_fire.style.display = "none";
        advace_earth.style.display = "none";
        advace_metal.style.display = "none";
        advace_water.style.display = "none";
    } else if (advancedElem === "Fire") {
        advace_wood.style.display = "none";
        advace_earth.style.display = "none";
        advace_metal.style.display = "none";
        advace_water.style.display = "none";
    } else if (advancedElem === "Earth") {
        advace_wood.style.display = "none";
        advace_fire.style.display = "none";
        advace_metal.style.display = "none";
        advace_water.style.display = "none";
    } else if (advancedElem === "Metal") {
        advace_wood.style.display = "none";
        advace_fire.style.display = "none";
        advace_earth.style.display = "none";
        advace_water.style.display = "none";
    } else if (advancedElem === "Water") {
        advace_wood.style.display = "none";
        advace_fire.style.display = "none";
        advace_earth.style.display = "none";
        advace_metal.style.display = "none";
    }
});


function docReady(fn) {
    // see if DOM is already available
    console.log("pretimeout");

    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);

    } else {
        document.addEventListener("DOMContentLoaded", fn, false);

        window.addEventListener('load', (event) => {
            console.log('DOM fully loaded and parsed');
        });
    }
}