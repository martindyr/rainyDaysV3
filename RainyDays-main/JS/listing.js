const url = "https://rainydays.flowerpoweraveroy.one/wp-json/wc/v3/products"

const jacketList = document.querySelector(".listingJackets")

async function getProducts() {
    try {
        const response = await fetch('https://rainydays.flowerpoweraveroy.one/wp-json/wc/v3/products', {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + btoa('ck_eaa2cb7cf29e1229ef59ef5bb89aeb61bf7383b9:cs_e309bc623b85de51c20577507401b4821682994d') }
        })
        const data = await response.json()
        console.log(data)

        createHtml(data)

    } catch {
        alert("Sorry this website is terrible and not working at the moment")
    }
}

getProducts()

function createHtml(data) {
    // TODO LOADING

    jacketList.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id)
        jacketList.innerHTML += `
        <div class="listingSingleJacket">
        <a href="Details.html?id=${data[i].id}">
            <img id="jacket" src="${data[i].images[0].src}">
        </a>
        <div id="jacketDescriptionBox">
            <p class="jacketDescription">${data[i].name}</p>
            <p class="jacketDescription">Color</p>
            <p class="jacketDescription">${data[i].price}</p>
            &#x2B50;
            &#x2B50;
            &#x2B50;
            &#x2B50;
            &#x2B50;
        </div>
        </div>`
    }
}

