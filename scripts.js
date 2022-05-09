function revealProjects() {
    var cv = document.getElementById('cv');
    var projects = document.getElementById('projects')

    /* Display switch */
    cv.classList.add('hidden-right');
    setTimeout(function() {
        projects.classList.remove('hidden-left');
    }, 900); 

    /* Buttons switch*/
    document.getElementById("projects-button").classList.add('selected');
    document.getElementById("cv-button").classList.remove('selected');
}

function revealCV() {
    var cv = document.getElementById('cv');
    var projects = document.getElementById('projects')

    /* Display switch */
    projects.classList.add('hidden-left');
    setTimeout(function() {
        cv.classList.remove('hidden-right');
    }, 500); 

    /* Buttons switch */
    document.getElementById("projects-button").classList.remove('selected');
    document.getElementById("cv-button").classList.add('selected');
}

var slideIndex = 0;

function changeSlide() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    
    slides[slideIndex-1].style.display = "block";
    setTimeout(changeSlide, 10000);
}