function login(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

if (userName !== 'admin' &&  password !== '123') {
    document.getElementById('password-wrong').innerHTML = 'Please Check a Username and Password'
} else {
    if (userName == 'admin') {
        if (password == '123') {
            location.href = "../Dashboard.html"
        } else {
            document.getElementById('password-wrong').innerHTML = 'Please Check a Password.'
        }
    } else {
        document.getElementById('user-name-wrong').innerHTML = 'Please Check a Username.'
    }}
}

            // function productInfo(){
            // let product = document.querySelector('.card-cat');
            // product.addEventListener('click', function(e){
            //     console.log(e.img);
            // });
            // function productInfo() {
            //     let products = document.querySelectorAll('.card-cat');
            //     products.forEach(function(product) {
            //         product.addEventListener('click', function(e) {
            //             let img = e.target.querySelector('img');
            //             console.log(img.src);
            //         });
            //     });
            // }
        

{/* <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-md-6">
            <img  src="${products[i].image}" alt="" srcset="">
        </div>
        <div class="col-md-6">
            <h2>${products[i].title}</h2>
            <h6>${products[i].categore}</h6>
            <h2>price :${products[i].price}$</h2>
            <p>Descreption :</p>
            <div class="chouse">
                <div class="row">
                    <div class="col-md-3">
                        <h2>Color</h2>
                        <input type="color">
                    </div>
                    <div class="col-md-3">
                        <h2>Quantity</h2>
                        <h5></h5>
                    </div>
                    <div class="col-md-3">
                        <h2>Total Price</h2>
                        <h5></h5>
                    </div>
                </div>
            </div>
            <button type="button">Add To</button>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div> */}
