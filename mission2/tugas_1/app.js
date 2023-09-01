document.addEventListener("DOMContentLoaded", function() {
    var productsCol = document.getElementById("product-col");
    var productsRow = document.getElementById("product-row");

    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.length; i++) {
                var card = createProductCard(data[i]);
                if(i < 2){
                    productsCol.appendChild(card);
                }
                else{
                    productsRow.appendChild(card);
                }
                
            }
        });

        function createProductCard(data) {
            const colDiv = document.createElement("div");
            colDiv.className = "col-auto product-card";
            colDiv.innerHTML = `
                <div class="card" style="width: 15rem; height:100%">
                    <img class="card-img-top" src="images/${data.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">Price : Rp. ${data.price}</p>
                        <p class="card-text">${data.description}</p>
                        <div class="bottom-card text-center">
                            <button class="btn btn-outline-primary" onclick="kurangQty('qty_${data.id}')">-</button>
                            <input class="text-center m-2" type="text" id="qty_${data.id}" value="0">
                            <button class="btn btn-outline-primary" onclick="tambahQty('qty_${data.id}')">+</button>
                            <button class="add-to-cart btn btn-lg btn-block btn-primary" onClick="tambahKeranjang('${data.name}', ${data.price}, '${data.id}')">Add to cart</button>
                        </div>
                    </div>
                </div>
            `;
        
            return colDiv;
        }

        showTotalHarga()
});

var totalHarga = 0;

function kurangQty(qty_id) {
    const inputElement = document.getElementById(qty_id);
    let qty = parseInt(inputElement.value);
    if(qty != 0){
        qty--;
    }
    inputElement.value = qty;
}

function tambahQty(qty_id) {
    const inputElement = document.getElementById(qty_id);
    let qty = parseInt(inputElement.value);
    qty++;
    inputElement.value = qty;
}

function tambahKeranjang(name, price, id){
    var listCart = document.getElementById("list-cart");
    var qty = document.getElementById("qty_"+id);
    
    totalHarga += price * qty.value;
    
    const rowDiv = document.createElement("div");
    rowDiv.className = "row";
    rowDiv.innerHTML = `
            <div class="col-6">
                ${name}
            </div>
            <div class="col-2">
                x${qty.value}
            </div>
            <div class="col-4">
                Rp. ${(price*qty.value).toLocaleString("id-ID")}
            </div>
            <hr style="width:100%;">
    `;

    if(qty.value != 0){
        showTotalHarga()
        listCart.appendChild(rowDiv);
    }
    else{
        alert("Please add quantity of the product ;)")
    }
    
}

function showTotalHarga() {
    const hargaTotal = document.getElementById('total-harga');
    hargaTotal.innerHTML = `<h5>Total Harga : Rp. ${totalHarga.toLocaleString("id-ID")}</h5>`;
}



