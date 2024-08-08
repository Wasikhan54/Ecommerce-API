document.addEventListener('DOMContentLoaded', (event) => {
    const text = "Shop Smarter, Live Better Today";
    const heading = document.getElementById('typing-heading');
    let index = 0;

    function type() {
        if (index < text.length) {
            heading.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});

function data() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        // console.log(data[0]);
        const products = document.querySelector('.product-grid');
        data.map(element => {
            const productItems = document.createElement('div');
            productItems.className = 'product-item';
            console
            productItems.innerHTML = `<div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${element.image}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.price}</p>
                </div>
            </div>`
            products.appendChild(productItems)
        });
    })
    .catch(error => console.log('Error fetching products:', error))
                
                
           
    
}
const menButton = document.querySelector("#men");
if (menButton) {
    menButton.addEventListener('click', async => {
        fetch("https://fakestoreapi.com/products/category/men%27s%20clothing")
        .then(mensData =>  mensData.json())
        .then(men => {
            console.log(men); // This will log the men's clothing data to the console
            const products = document.querySelector('.product-grid');
            products.innerHTML = ''; // Clear previous products
            men.forEach(element => {
                const productItems = document.createElement('div');
                productItems.className = 'product-item';
                productItems.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">$${element.price}</p>
                        </div>
                    </div>`;
                products.appendChild(productItems);
            });
        })
        .catch(error => console.log('Error fetching men\'s clothing:', error));
    });
}

const womemButton = document.querySelector("#women");
if (womemButton) {
    womemButton.addEventListener('click', async => {
        fetch("https://fakestoreapi.com/products/category/women%27s%20clothing  ")
        .then(womenData =>  womenData.json())
        .then(women => {
            console.log(women); // This will log the men's clothing data to the console
            const products = document.querySelector('.product-grid');
            products.innerHTML = ''; // Clear previous products
            women.forEach(element => {
                const productItems = document.createElement('div');
                productItems.className = 'product-item';
                productItems.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">$${element.price}</p>
                        </div>
                    </div>`;
                products.appendChild(productItems);
            });
        })
        .catch(error => console.log('Error fetching men\'s clothing:', error));
    });
}
const jewlleryButton = document.querySelector("#Jewllery    ");
if (jewlleryButton) {
    jewlleryButton.addEventListener('click', async => {
        fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(jewlleryData =>  jewlleryData.json())
        .then(jewllery => {
            console.log(jewllery); // This will log the men's clothing data to the console
            const products = document.querySelector('.product-grid');
            products.innerHTML = ''; // Clear previous products
            jewllery.forEach(element => {
                const productItems = document.createElement('div');
                productItems.className = 'product-item';
                productItems.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">$${element.price}</p>
                        </div>
                    </div>`;
                products.appendChild(productItems);
            });
        })
        .catch(error => console.log('Error fetching men\'s clothing:', error));
    });
}
const electronicButton = document.querySelector("#Electronic");
if (electronicButton) {
    electronicButton.addEventListener('click', async => {
        fetch("https://fakestoreapi.com/products/category/electronics")
        .then(electronicData =>  electronicData.json())
        .then(electronic => {
            console.log(electronic); // This will log the men's clothing data to the console
            const products = document.querySelector('.product-grid');
            products.innerHTML = ''; // Clear previous products
            electronic.forEach(element => {
                const productItems = document.createElement('div');
                productItems.className = 'product-item';
                productItems.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${element.image}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">$${element.price}</p>
                        </div>
                    </div>`;
                products.appendChild(productItems);
            });
        })
        .catch(error => console.log('Error fetching men\'s clothing:', error));
    });
}
data()