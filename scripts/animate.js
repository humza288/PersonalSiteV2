const cards = document.querySelectorAll('.card');
const forms = document.querySelectorAll('.contact-form');
    
let observer = new IntersectionObserver((enteries) => {
    enteries.forEach(entry => {
        if(entry.intersectionRatio > 0 ) {
            console.log("Hi")
            entry.target.style.opacity = '1';  
        }
    })
})


cards.forEach(card => {
    observer.observe(card);
})

forms.forEach(form => {
    observer.observe(form);
})