const list = document.getElementById('list')

function getproducts() {
    list.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(cart);
    cart.map((item, index) => {
        const newDiv = document.createElement('div')
        newDiv.className = 'newBoxBasket col-xl-3 col-md-6 col-sm-6 col-12'
        newDiv.innerHTML = `
        <div class = "myDivBasket">
        <img src="${item.image}" alt="">
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        <button onclick = "removeBasket(${index})">Reomve Cart</button>
        </div>
        
        `
        list.appendChild(newDiv);
    })
}


function removeBasket(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getproducts()
}
getproducts();