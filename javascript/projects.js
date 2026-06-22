let currentProject = 0;

const slides = document.querySelectorAll(".project-slide");
const dots = document.querySelectorAll(".dot");

function showProject(index){

    slides.forEach(slide =>
        slide.classList.remove("active")
    );

    dots.forEach(dot =>
        dot.classList.remove("active-dot")
    );

    slides[index].classList.add("active");

    dots[index].classList.add("active-dot");
}

function nextProject(){

    currentProject++;

    if(currentProject >= slides.length){
        currentProject = 0;
    }

    showProject(currentProject);
}

function previousProject(){

    currentProject--;

    if(currentProject < 0){
        currentProject = slides.length - 1;
    }

    showProject(currentProject);
}