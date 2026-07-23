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