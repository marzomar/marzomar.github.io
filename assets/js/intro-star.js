var byline = document.getElementById('byline');     // Find the H2
bylineText = byline.innerHTML;                                      // Get the content of the H2
bylineArr = bylineText.split('');                                   // Split content into array
byline.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
  span = document.createElement("span");                    // Create a <span> element
  letter = document.createTextNode(bylineArr[i]);   // Create the letter
  if(bylineArr[i] == ' ') {                                             // If the letter is a space...
    byline.appendChild(letter);                 // ...Add the space without a span
  } else {
        span.appendChild(letter);                       // Add the letter to the span
    byline.appendChild(span);                   // Add the span to the h2
  }
}

var text = document.getElementById("sw")
var anime = document.getElementById("cr")
var logo = document.getElementById("sd")
var sound = document.getElementById("sound");
sound.volume = 0.6;


setTimeout(function () {
  window.location.href = "../../modeStar/modeStar.html";
}, 26000);

setTimeout(() => {
  logo.style.display= "none";
  text.style.display= "block";
  text.classList.add("star-wars");
  anime.classList.add("crawl");
}, 6700);

