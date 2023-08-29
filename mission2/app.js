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
                            <button class="add-to-cart btn btn-lg btn-block btn-primary" onClick = tambahKeranjang(data)>Add to cart</button>
                        </div>
                    </div>
                </div>
            `;
    
            return colDiv;
        }

});

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

tambahKeranjang(data)


