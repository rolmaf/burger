let x = document.querySelector("#bar-container");

x.addEventListener("click", burgerF);

function burgerF() {
    let element = document.querySelector("#menu");
    element.classList.toggle("opened");
    x.classList.toggle("change");
};

document.querySelectorAll("section").forEach(item => {
    let red = Math.ceil(Math.random() * 244);
    let green = Math.ceil(Math.random() * 244);
    let blue = Math.ceil(Math.random() * 244);
    let rgb = `rgb(${red}, ${green}, ${blue}`;
    item.style.backgroundColor = `${rgb}`;
    console.log(item);
})

$("#menu").on("click", "a", function (event) {
    event.preventDefault();
    let href = $(this).attr('href');
    $('body,html').animate({
        scrollTop: $(href).offset().top
    }, 1000);
});