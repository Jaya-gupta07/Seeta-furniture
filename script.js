function calculateCost(){

    let room = Number(document.getElementById("room").value);

    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);

    let area = length * width;

    let budget = Number(document.getElementById("budget").value);

    let total = room * area * budget;

    document.getElementById("result").innerHTML =
    "Estimated Cost: ₹" + total.toLocaleString("en-IN");

}


/* ================= MOBILE MENU ================= */

function toggleMenu(){

    const menu = document.getElementById("mobileMenu");
    const icon = document.querySelector(".menu-toggle");

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        icon.innerHTML = "✕";
    }else{
        icon.innerHTML = "☰";
    }

}


/* Close menu after clicking a navigation link */

document.querySelectorAll("#mobileMenu a").forEach(function(link){

    link.addEventListener("click", function(){

        document.getElementById("mobileMenu").classList.remove("active");

        document.querySelector(".menu-toggle").innerHTML = "☰";

    });

});
