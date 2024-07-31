function data() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json  => {

                const results = json
                results.forEach(elements => {
                    console.log(elements)
                    const card =document.querySelector('#main');
                    document.querySelector("#cardImg").src = elements.src 
                });
            }).catch(error => console.error('Error fetching job data:', error));

}
data()