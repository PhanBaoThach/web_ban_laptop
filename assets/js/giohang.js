const price = 15990000;
const discount = 2000000;

function changeQty(val) {
    let qty = document.getElementById("qty");
    let number = parseInt(qty.value) + val;
    if (number < 1) number = 1;
    qty.value = number;

    let total = price * number;
    let final = total - discount;

    document.getElementById("total").innerText =
        total.toLocaleString("vi-VN") + "đ";

    document.getElementById("final").innerText =
        final.toLocaleString("vi-VN") + "đ";
}
