// Select place to display data
const detailJacket = document.querySelector("#detailsBody")

// Getting the ID from the querysting
const querySting = document.location.search
const params = new URLSearchParams(querySting)
const id = params.get("id")

// Adding the ID to the URL
url = "https://rainydays.flowerpoweraveroy.one/wp-json/wc/v3/products/" + id

// Using the Dynamic URL to fetch data fomr spesific jacket
async function getOneJacket() {
    try {
        const response = await fetch('https://rainydays.flowerpoweraveroy.one/wp-json/wc/v3/products/' + id, {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + btoa('ck_eaa2cb7cf29e1229ef59ef5bb89aeb61bf7383b9:cs_e309bc623b85de51c20577507401b4821682994d') }
        })
        const details = await response.json()
        console.log(details)


        createHtml(details)
    }
    catch (error) {
        console.log("Bro you gotta work on your coding-skills", error)
    }
}
getOneJacket()


function createHtml(details) {
    detailJacket.innerHTML = ""

    detailJacket.innerHTML = `
    <div id="detailsImageBox">
    <div>
        <img id="detailsImgBig" src="${details.images[0].src}" alt="Man posing jacket">
    </div>
    <div id="detailsImgSmallBox">
        <img id="detailsImgSmall" src="${details.images[0].src}" alt="Man posing jacket">
        <img id="detailsImgSmall" src="${details.images[0].src}" alt="Man posing jacket">
    </div>

</div>

<div id="detailsDescriptionBox">
    <h1>${details.name}</h1>
    <p>${details.price}</p>
    <p>Rating &#x2B50;&#x2B50;&#x2B50;&#x2B50;</p>
    <p>Pick a size <span is="detailsSize"><button class="sizeBtn">S</button> <button class="sizeBtn">M</button
                class="sizeBtn"> <button class="sizeBtn">L</button>
            <button class="sizeBtn">XL</button>
            <button class="sizeBtn">XXL</button>
        </span></p>
    <button id="detailsAdd">ADD TO CART</button>
    <h3>About the jacket</h3>
    ${details.description}
</div>
`
}



