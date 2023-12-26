// let getAllProduct = document.querySelector('#allProduct')
// let getMenClothing = document.querySelector('#menclothing')
// let getWomenClothing = document.querySelector('#womenclothing')
// let getJewelery = document.querySelector('#jewelery')
// let getElectronics = document.querySelector('#electronics')


// getAllProduct.addEventListener("click",()=>{
//   getProducts(getMenClothing.value)
// })


// function getCategorys(){
//   fetch(`https://fakestoreapi.com/products/categories`)
//   .then(res=>res.json())
//   .then(json=>{
//     let categorys = json
//     console.log(categorys)
//   })
// }
// getCategorys()



// function filterWithCategorys(cat){
//   fetch(`https://fakestoreapi.com/products/category/${cat}`)
//   .then(res=>res.json())
//   .then(json=>{
//     let categorys = json
//     let cartona = ''
//       categorys.forEach((product)=>{
//         cartona += `<div class=" col-md-3 col-sm-6 col-6 ">
//         <div class="Product border card h-100 p-3 d-flex justify-content-center  flex-column">
//             <div class="position-relative">
//                 <img class="w-100" src="${product.image}" alt="">
//                 <div class="over-lay position-absolute top-0 h-100 d-flex align-items-center justify-content-center">
//                     <ul class="d-flex  align-items-center justify-content-center">
//                         <li  style="width: 40px; height: 40px;" class="heart me-3 bg-gray-900 d-flex align-items-center justify-content-center rounded-pill">
//                             <i id="heart-reg"  class=" fa-regular hover  fa-heart" style="display: inline;"></i>
//                          <i id="heart-sol" class="fa-solid fa-heart text-warning " style="display: none;"></i>
//                        </li>
//                         <li style="width: 40px; height: 40px;" class="me-3 bg-gray-900 d-flex align-items-center justify-content-center rounded-pill"><a href="#" class="text-gray"><i class="fa-solid fa-cart-shopping"></i></a></li>
//                         <li style="width: 40px; height: 40px;" class="  bg-gray-900 d-flex align-items-center justify-content-center rounded-pill"><a href="#" class="text-gray"><i class="fa-regular fa-eye"></i></a></li>
//                     </ul>
//                 </div>
//             </div> 
//             <span class="d-flex align-items-center mb-2">
//                 <ul class="d-flex align-items-center justify-content-center">
//                     <li><i class="fa-solid fa-star text-orange"></i></li>
//                     <li><i class="fa-solid fa-star text-orange"></i></li>
//                     <li><i class="fa-solid fa-star text-orange"></i></li>
//                     <li><i class="fa-solid fa-star text-orange"></i></li>
//                     <li><i class="fa-solid fa-star text-orange"></i></li>
//                 </ul>
//                 <span>(597)</span>
//             </span>
//             <p>${product.title}</p>
//             <span class="secondry-color">$${product.price}</span>
//         </div>
//     </div>`
//       })
//       document.querySelector('.products_list').innerHTML = cartona
//     });
//     console.log(categorys)
//   }
// filterWithCategorys("jewelery")


window.addEventListener('load', function() {
  var loading = document.querySelector('.loading');
  var body = document.querySelector('body')
  body.classList.add('overflow-visible')
  body.classList.remove('overflow-hidden')
  loading.style.display = 'none';
});

function displayLengthProducts(Product)
{
  let productsLength = document.querySelector('.productsLength')
  productsLength.innerHTML = Product.length
}


function getProducts(){
  // https://api.escuelajs.co/api/v1/products?limit=40&offset=10

  fetch('https://api.escuelajs.co/api/v1/products?limit=40&offset=10').then(res=>res.json()).then(json=>{
    let products = json
    displayProducts(products)
    displayLengthProducts(products)
  })
}
  getProducts()
function displayProducts(products){
  let cartona = ''
  products.forEach((product)=>{
    cartona += `<div class="col-md-3 col-sm-6 col-6 ">
    <div class="Product border card h-100 p-3 d-flex justify-content-center  flex-column">
        <div class="position-relative">

        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="${product.images[0]}" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="${product.images[1]}" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="${product.images[2]}" alt="Third slide">
          </div>
        </div>
      </div>
            <img class="w-100" src="" alt="">


            <div class="over-lay position-absolute top-0 h-100 d-flex align-items-center justify-content-center">
                <ul class="d-flex  align-items-center justify-content-center">
                    <li  style="width: 40px; height: 40px;" class="heart me-3 bg-gray-900 d-flex align-items-center justify-content-center rounded-pill">
                        <i id="heart-reg"  class=" fa-regular hover  fa-heart" style="display: inline;"></i>
                     <i id="heart-sol" class="fa-solid fa-heart text-warning " style="display: none;"></i>
                   </li>
                    <li style="width: 40px; height: 40px;" class="me-3 bg-gray-900 d-flex align-items-center justify-content-center rounded-pill"><a href="#" class="text-gray"><i class="fa-solid fa-cart-shopping"></i></a></li>
                    <li style="width: 40px; height: 40px;" class="  bg-gray-900 d-flex align-items-center justify-content-center rounded-pill"><a href="#" class="text-gray"><i class="fa-regular fa-eye"></i></a></li>
                </ul>
            </div>
        </div> 
        <span class="d-flex align-items-center mb-2">
            <ul class="d-flex align-items-center justify-content-center">
                <li><i class="fa-solid fa-star text-orange stars "></i></li>
                <li><i class="fa-solid fa-star text-orange stars "></i></li>
                <li><i class="fa-solid fa-star text-orange stars "></i></li>
                <li><i class="fa-solid fa-star text-orange stars "></i></li>
                <li><i class="fa-solid fa-star text-orange stars "></i></li>
            </ul>
            <span>(597)</span>
        </span>
        <p>${product.title}</p>
        <span class="secondry-color">$${product.price}</span>
    </div>
</div>`
  })
  document.querySelector('.products_list').innerHTML = cartona

}

function displayCart (){
  let cart = document.querySelector('.Cart-box')
  let cartIcon = document.querySelector('.fa-cart-shopping')

  cartIcon.addEventListener('click' , function(){
    if (cart.style.display == 'none') {
      cart.style.display = 'flex'
    } else {
      cart.style.display = 'none'
    }
  })
  checkOut()
  hideCart()
}
displayCart()
function hideCart () {
  let closeCart = document.querySelector('.closeCart')
  let cart = document.querySelector('.Cart-box')
  closeCart.addEventListener('click' , function(){
    cart.style.display = 'none'
  })

}
function checkOut() {
  let checkOut = document.querySelector('.checkOut')
  checkOut.addEventListener('click' , function(){
    window.location.href = "./signup.html";
  })
}
