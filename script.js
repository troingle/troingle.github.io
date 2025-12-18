var dark = true;

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("theme");

  button.addEventListener("click", function() {
    dark = !dark;
    if (dark){ // change to dark
        document.body.style.backgroundColor = "#2c2c2a";
        var links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = "#fc8181";
        });
        document.getElementById("theme").style.color = "#fc8181";
    }
    else { // change to light
        document.body.style.backgroundColor = "#979bc7";
        var links = document.querySelectorAll('a');
        links.forEach(link => {
            link.style.color = "#f3c0ce";
        });
        document.getElementById("theme").style.color = "#f3c0ce";
    }
  });

});
