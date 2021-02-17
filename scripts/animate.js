const cards = document.querySelectorAll('.card');
const nav = document.querySelector('.nav');
const forms = document.querySelectorAll('.contact-form');
const project_images = document.querySelectorAll('.project-image');

let observer = new IntersectionObserver((enteries) => {
    enteries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.transform = "translateY(0px)"
            entry.target.style.opacity = '1';  
        }
    })
})

project_images.forEach(project_images => {
    observer.observe(project_images)
})


cards.forEach(card => {
    observer.observe(card);
})

forms.forEach(form => {
    observer.observe(form);
})



