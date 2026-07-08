// =============================
// MOBILE NAVIGATION
// =============================


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});







// =============================
// NAVBAR SCROLL EFFECT
// =============================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.15)";


    }else{


        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.08)";


    }


});








// =============================
// ANIMATED COUNTERS
// =============================


const counters =
document.querySelectorAll(".counter");


const startCounter = (counter)=>{


    const target =
    Number(counter.dataset.target);


    let count = 0;


    const speed = target / 80;



    const update = ()=>{


        if(count < target){


            count += speed;


            counter.textContent =
            Math.ceil(count);



            setTimeout(update,25);


        }else{


            counter.textContent =
            target;


        }


    };


    update();


};





const counterObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        startCounter(entry.target);


        counterObserver.unobserve(entry.target);


    }


});


},
{
threshold:.5
});




counters.forEach(counter=>{


    counterObserver.observe(counter);


});










// =============================
// SCROLL REVEAL ANIMATION
// =============================



const revealElements =
document.querySelectorAll(
".card, .why-card, .testimonial, .gallery-grid img"
);



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


    }


});


},
{
threshold:.15
});




revealElements.forEach(element=>{


    element.classList.add("hidden");


    revealObserver.observe(element);


});









// =============================
// WHATSAPP MESSAGE
// =============================


const whatsappLinks =
document.querySelectorAll(
".floating-whatsapp, .whatsapp"
);



const phoneNumber =
"254700000000";



const message =
"Hello, I am interested in your construction materials. I would like to request a quotation.";



whatsappLinks.forEach(link=>{


    link.href =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


});










// =============================
// FOOTER YEAR
// =============================


const footer =
document.querySelector("footer p");



if(footer){


    footer.innerHTML =
    `© ${new Date().getFullYear()} KE Builders. Powered by Bluepeek Tech Hub`;


}

// SOCIAL MEDIA TOGGLE

const socialToggle =
document.querySelector(".social-toggle");


const socialContainer =
document.querySelector(".social-container");



if(socialToggle){

    socialToggle.addEventListener("click",()=>{

        socialContainer.classList.toggle("active");

    });

}