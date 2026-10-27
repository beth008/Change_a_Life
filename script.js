//slideshow for index.html

const kindnessImage = document.getElementById("image");

if (kindnessImage) {
    const kindnessImages = [
        "Images/Image1.jpg",
        "Images/image2.jpg",
        "Images/image3.jpg",
        "Images/image4.jpg",
        "Images/images5.png"
    ];

    let currentImage = 0;

    setInterval(function() {
        kindnessImage.style.opacity = "0";

        setTimeout(function() {
            currentImage = (currentImage + 1) % kindnessImages.length;

            kindnessImage.src = kindnessImages[currentImage];

            kindnessImage.style.opacity = "1";
        }, 500);

    }, 3000);
}

//animate the headings in about.html
document.addEventListener("DOMContentLoaded", function(){
const headings = document.querySelectorAll(".aboutpage h4");

headings.forEach(function(heading, index){
    heading.style.opacity = "0";
    setTimeout(function() {
        heading.style.transition ="opacity 1s ease";
        heading.style.opacity = "1";
    }, index * 500);
});
});

//This is for team.html

const form = document.getElementById("jointeamform");
if(form){

form.addEventListener("submit",function(event){
    event.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const formMessage = document.getElementById("formMessage");

if(firstname === "" || lastname === "" || email=== "" || country === ""){
    formMessage.textContent = "Please fill in all the fields.";
    formMessage.style.color ="red";
    return;
}

if(!email.includes("@") || !email.includes(".")){
formMessage.textContent = "Please enter a valid email address.";
formMessage.styel.color = "red";
return;
}

formMessage.textContent = "Welcome to change a life, " + firstname + "!";
formMessage.style.color ="blue";

form.reset();

});
}

//Add Project
const projectForm = document.getElementById("projectform");

if (projectForm) {
    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("projectname").value.trim();
        const description = document.getElementById("projectdescription").value.trim();
        const location = document.getElementById("projectlocation").value.trim();

        const projects = JSON.parse(localStorage.getItem("projects")) || [];

        projects.push({
            name: name,
            description: description,
            location: location
        });

        localStorage.setItem("projects", JSON.stringify(projects));

        document.getElementById("projectMessage").textContent =
            "Project saved successfully!";

        projectForm.reset();
    });
}

const projectslist = document.getElementById("projectslist");
const noprojects = document.getElementById("noprojects");

if (projectslist && noprojects) {
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    if (projects.length === 0) {
        noprojects.textContent = "No projects have been added yet.";
    } else {
        projects.forEach(function(project) {
            const card = document.createElement("div");
            const heading = document.createElement("p");
            const description = document.createElement("p");
            const location = document.createElement("p");

            heading.textContent = "Project Title: " +project.name;
            description.textContent = "Description: " +project.description;
            location.textContent = "Where: " + project.location;

            card.appendChild(heading);
            card.appendChild(description);
            card.appendChild(location);

            projectslist.appendChild(card);
        });
    }
}