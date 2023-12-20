
const products = document.getElementById('products')
const btn = document.getElementById('btn')
const inp = document.getElementById('inp')
const searchBtn = document.getElementById('searchBtn')
const sear = document.getElementById('sear')

let page = 1
let limit = 4
let pro = []


async function myFunc() {
    let skip = (page - 1) * limit
    const response = await axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product?page=${page}&limit=${limit}&skip=${skip}`)
    const data = await response.data
    pro = data
    console.log(data);
    pro.map((item) => {
        const div = document.createElement('div')
        div.className = 'box col-xl-3 col-md-4 col-sm-6 col-12'
        div.innerHTML = `
        <div class = "myDiv">
        <img src="${item.image}" alt="">
        <h5>${item.name}</h5>
        <p>${item.title}</p>
        <button onclick ="addToBasket(${item.id})" >Add to Basket</button>
        </div>
        `
        products.appendChild(div);
    })

    page++
}

btn.addEventListener('click', myFunc)

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(pro.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

myFunc();


function getbyname() {
    sear.innerHTML = ``
    products.style.display = 'none'
    sear.style.display = 'block'

    axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product?title=${inp.value}`)
        .then(res => {
            db = res.data
            db.map(item => {
                const div = document.createElement('div')
                div.innerHTML = `
                    <div class = "searchSear">
                    <img src="${item.image}" alt="">
                    <h5>${item.name}</h5>
                    <p>${item.title}</p>
                    </div>
                    `

                sear.append(div)
            })
        })
}

searchBtn.addEventListener('click', getbyname)