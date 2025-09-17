function product(price, qlt) {
    return price * qlt;
}

function showbill() {
    let price = Number(document.getElementById("price").value);
    let qlt = Number(document.getElementById("qlt").value);
    let total = product(price, qlt);
    document.getElementById("bill").innerHTML = "Total: " + total;
}
