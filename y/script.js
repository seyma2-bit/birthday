document.addEventListener("DOMContentLoaded", () => {

    const cake = document.querySelector(".cake");

    cake.addEventListener("click", () => {
        cake.classList.toggle("celebrate");
    });

});