const articles = document.querySelectorAll(".box");
const nawigacja = document.querySelector("nav");
const click_to_swipe = document.querySelector(".swiper");
const instruction_box = document.querySelectorAll(".instructionbox");
const unselected_instruction_box = document.querySelectorAll(".unselected_instructionbox");
const nav_options = document.querySelectorAll(".opcja_nav");
nav_options.forEach(option => {
    option.addEventListener('click', function(){
        nawigacja.classList.toggle("swiped");
        click_to_swipe.classList.toggle("rotate_swipe");
    });
});

articles.forEach(article => {
    article.addEventListener('click', function(element){
        if(!article.classList.contains("selected")){
            articles.forEach(article => {
                article.style.width = "1%";
                article.style.display = "none";
                article.style.marginLeft = "0px";
            });
            instruction_box.forEach(instruction => {
                instruction.style.display = "none";
            });
            unselected_instruction_box.forEach(instruction => {
                instruction.style.display = "flex";
            });
            article.style.pointerEvents = "none";
            setTimeout(() => {
                article.style.pointerEvents = "auto";
            }, 760);
            article.style.position = "fixed";
            article.style.display = "block";
            
            article.style.width = "100%";
            article.classList.add("selected");
        }else{
            articles.forEach(article => {
                setTimeout(() => {
                    article.style.display = "flex";
                    article.style.pointerEvents = "auto";
                    article.style.position = "relative";
                    article.classList.remove("selected");
                    article.style.marginLeft = "40px";
                    instruction_box.forEach(instruction => {
                        instruction.style.display = "flex";
                    });
                    unselected_instruction_box.forEach(instruction => {
                        instruction.style.display = "none";
                    });
                }, 760);
                if(window.screen.width > 700){
                    article.style.width = "33%";
                }else{
                    article.style.width = "70%";
                };
            });
            article.style.pointerEvents = "none";
            
        };
        
    });

});
function resize(){
    articles.forEach(article => {
        if(window.screen.width > 700){
            if(!article.classList.contains("selected")){
                article.style.width = "33%";
            };
        }else{
            if(!article.classList.contains("selected")){
                article.style.width = "65%";
            };
        };
    });
};
window.onresize = resize;

click_to_swipe.addEventListener('click', function(){
    nawigacja.classList.toggle("swiped");
    click_to_swipe.classList.toggle("rotate_swipe");
});


const prices = {
   host:300 
};
document.addEventListener("DOMContentLoaded", function() {
        const produkt = "host"; 
        showPrice(produkt, "result");
 });

 
function showPrice(productName, elementId) {
    const outputElement = document.getElementById(elementId);
    if (prices.hasOwnProperty(productName)) {
        if(outputElement){
            outputElement.textContent = prices[productName] + " zł";
        };
    } else {
        outputElement.textContent = "Produkt niedostępny";
    }
}


