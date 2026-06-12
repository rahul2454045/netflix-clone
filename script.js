const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 20px rgba(229,9,20,0.8)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});




const faqs =
document.querySelectorAll(".faq-question");

faqs.forEach(btn => {

    btn.addEventListener("click", () => {

        const answer =
        btn.nextElementSibling;

        if(answer.style.maxHeight){

            answer.style.maxHeight = null;

        }else{

            answer.style.maxHeight =
            answer.scrollHeight + "px";

        }

    });

});

window.addEventListener("scroll", () => {

    document
    .querySelectorAll(".reveal")
    .forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.classList.add("active");

        }

    });

});




