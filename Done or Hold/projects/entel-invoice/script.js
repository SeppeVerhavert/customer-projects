setTimeout(function() {
  let date = document.getElementById("response-date");
  let newDate = date.innerHTML.slice(0, -9);
  date.innerHTML = newDate;
}, 200);
