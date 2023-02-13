const projectNames = {
  1: {
    name: "pokecord [1/5]",
    live: "https://pokecord-ruby.vercel.app",
    repo: "https://github.com/aymak91/pokecord",
    technologies: "React, Redux, Firebase, Google Authentication, Tailwind CSS, HTML",
    description: "Discord clone with a Pokemon aesthetic!"
  },
  2: {
    name: "Pathfinder [2/5]",
    live: "https://aymak91.github.io/pathfinding_visualizer/",
    repo: "https://github.com/aymak91/pathfinding_visualizer",
    technologies: "Javascript, HTML, CSS",
    description: "Interactive pathfinding visualization using the breadth-first search graph traversal algorithm."
  },
  3: {
    name: "woofblr [3/5]",
    live: "https://woofblr.herokuapp.com/#/",
    repo: "https://github.com/aymak91/woofblr",
    technologies: "React, Redux, Ruby on Rails, Postgres, AWS S3, HTML, CSS",
    description: "Woof! woofblr is a full-stack web-application clone of Tumblr, except for dogs! Users can create various types of posts such as text and images. A dashboard displays content posted by other users that a user follows."
  },
  4: {
    name: "BoneMeatsKibble [4/5]",
    live: "https://bone-meats-kibble.herokuapp.com",
    repo: "https://github.com/aymak91/bone-meats-kibble",
    technologies: "Javascript, React, Node.js, Express, MongoDB, AWS S3, HTML, CSS",
    description: "BoneMeatsKibble is a MERN stack project where you can add profiles for your beloved canines and find matches for them. Find a pal for your pup, or perhaps something more!"
  },
  5: {
    name: "Hungry Wolf [5/5]",
    live: "https://aymak91.github.io/hungry-wolf",
    repo: "https://github.com/aymak91/hungry-wolf",
    technologies: "Javascript, Canvas, HTML, CSS",
    description: "Hungry Wolf is a JavaScript game where you play Wolfey, a young pooch who has found a juicy piece of meat on a farm but now must avoid capture by the angry local farmers. How many farmers can you scare away before capture?!"
  },
}

document.addEventListener("DOMContentLoaded", () => {
  let slides = document.getElementsByClassName("mySlides");
  slides[0].style.display = "block";
  document.getElementById("current-slide-info").innerHTML = `
    <div>
      <h2>pokecord [1/5]</h2></ br>
      <center><h3>
        <a href="https://pokecord-ruby.vercel.app" target="_blank">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="https://github.com/aymak91/pokecord" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </h3></center>
    </div>
  `;
  document.getElementById("current-slide-description").innerHTML = `
    <p><i>${projectNames[1].technologies}</i></p>
    <p>${projectNames[1].description}</p>
  `;
  document.addEventListener("keydown", (e) => {
    // left: 37, right: 39
    if (e.keyCode === 37) {
      plusSlides(-1);
    } else if (e.keyCode === 39) {
      plusSlides(1);
    }
  });
})
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  if (slides[slideIndex-1]) {
    slides[slideIndex - 1].style.display = "block";

    let inner = `<div>
      <h2>${projectNames[slideIndex].name.toUpperCase()}</h2> </ br>
      <center><h3>
      <a href=${projectNames[slideIndex].live} target="_blank"><i class="fas fa-external-link-alt"></i></a>
      <a href=${projectNames[slideIndex].repo}><i class="fab fa-github"></i></a>
      </div>
    </h3></center>`;
    document.getElementById("current-slide-info").innerHTML = inner;

    document.getElementById("current-slide-description").innerHTML = `
      <p><i>${projectNames[slideIndex].technologies}</i></p>
      <p>${projectNames[slideIndex].description}</p>
    `;
  }
}