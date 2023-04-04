document.addEventListener("DOMContentLoaded", function () {
    var advancedElem = document.getElementById("advance").innerText;
    var adaptiveElem = document.getElementById("adaptive").innerText;
    var passiveElem = document.getElementById("passive").innerText;

    var advace_wood = document.getElementById("ixz0wh");
    var advace_fire = document.getElementById("ig1zt1");
    var advace_earth = document.getElementById("ijkvhi");
    var advace_metal = document.getElementById("igncb2");
    var advace_water = document.getElementById("i2zayl");

    var adaptive_wood = document.getElementById("ihp6p");
    var adaptive_fire = document.getElementById("idpej");
    var adaptive_earth = document.getElementById("in7q8");
    var adaptive_metal = document.getElementById("ixyeh");
    var adaptive_water = document.getElementById("idb42");

    var passive_wood = document.getElementById("ijcfh");
    var passive_fire = document.getElementById("i1jfb");
    var passive_earth = document.getElementById("in76y");
    var passive_metal = document.getElementById("i0tehe");
    var passive_water = document.getElementById("i1ulf5");

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

    // ADAPTIVE ELEMENT
    if (adaptiveElem === "Wood") {
        adaptive_fire.style.display = "none";
        adaptive_earth.style.display = "none";
        adaptive_metal.style.display = "none";
        adaptive_water.style.display = "none";
    } else if (adaptiveElem === "Fire") {
        adaptive_wood.style.display = "none";
        adaptive_earth.style.display = "none";
        adaptive_metal.style.display = "none";
        adaptive_water.style.display = "none";
    } else if (adaptiveElem === "Earth") {
        adaptive_wood.style.display = "none";
        adaptive_fire.style.display = "none";
        adaptive_metal.style.display = "none";
        adaptive_water.style.display = "none";
    } else if (adaptiveElem === "Metal") {
        adaptive_wood.style.display = "none";
        adaptive_fire.style.display = "none";
        adaptive_earth.style.display = "none";
        adaptive_water.style.display = "none";
    } else if (adaptiveElem === "Water") {
        adaptive_wood.style.display = "none";
        adaptive_fire.style.display = "none";
        adaptive_earth.style.display = "none";
        adaptive_metal.style.display = "none";
    }

    // ADAPTIVE ELEMENT
    if (passiveElem === "Wood") {
        passive_fire.style.display = "none";
        passive_earth.style.display = "none";
        passive_metal.style.display = "none";
        passive_water.style.display = "none";
    } else if (passiveElem === "Fire") {
        passive_wood.style.display = "none";
        passive_earth.style.display = "none";
        passive_metal.style.display = "none";
        passive_water.style.display = "none";
    } else if (passiveElem === "Earth") {
        passive_wood.style.display = "none";
        passive_fire.style.display = "none";
        passive_metal.style.display = "none";
        passive_water.style.display = "none";
    } else if (passiveElem === "Metal") {
        passive_wood.style.display = "none";
        passive_fire.style.display = "none";
        passive_earth.style.display = "none";
        passive_water.style.display = "none";
    } else if (passiveElem === "Water") {
        passive_wood.style.display = "none";
        passive_fire.style.display = "none";
        passive_earth.style.display = "none";
        passive_metal.style.display = "none";
    }

    console.log("function loaded");
});