// function heartIconChange() {
// let heart = document.querySelectorAll('.heart');
// let heart_reg = document.querySelector('#heart-reg');
// let heart_sol = document.querySelector('#heart-sol');

// heart.forEach((el)=>{
//     el.addEventListener('click' , ()=>{
//         if (heart_reg.style.display === 'inline') {
//             heart_reg.style.display = 'none'
//             heart_sol.style.display = 'inline'
//            } else {
//             heart_reg.style.display = 'inline'
//             heart_sol.style.display = 'none'
//            }
//         })
//     })
// }
// heartIconChange()

// function getCats(){
//   fetch(  'https://api.escuelajs.co/api/v1/categories?limit=5').then(res=>res.json()).then(json=>{
//     let cats = json
//     console.log(cats)
//     displayCats(cats)
//   })
// }
// getCats()
// function displayCats (cats){
//   let cartona = ''
//   cats.forEach((cat)=>{
//     cartona += `                        <div class="col-md-2">
//     <div class="border p-2 d-flex justify-content-center align-items-center flex-column">
//         <img class="w-100" src="${cat.image}" alt="">
//         <h6>${cat.name}</h6>
//     </div>
//   </div>`
//   })
//   document.querySelector(".cats").innerHTML = cartona
// }

function heartIconChange() {
    let hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart) => {
      heart.addEventListener('click', () => {
        let heart_reg = heart.querySelector('#heart-reg');
        let heart_sol = heart.querySelector('#heart-sol');
        if (heart_reg.style.display === 'inline') {
          heart_reg.style.display = 'none';
          heart_sol.style.display = 'inline';
        } else {
          heart_reg.style.display = 'inline';
          heart_sol.style.display = 'none';
        }
      });
    });
  }
  heartIconChange();

function productDetails (){
    let infoProduct = document.querySelectorAll(".info-product")
    infoProduct.forEach((ele)=>{
      ele.addEventListener('click',()=>{
        console.log('yes')

      })
    })
    
}
productDetails ()

// Typed
let typed = new Typed('#element', {
  strings: [
'Welcome To Happy Store WebSite...',
'You know what you should do?',
'Use your own!',
'Have a great day!',
],
stringsElement: null,
    typeSpeed: 50,
  });
// End Typed

// side bar 
function openSideBar (){
  let sidebar = document.querySelector('.sidebar');
  let openMenu = document.querySelector('.menu');
  let closeMenu = document.querySelector('.close');

  openMenu.addEventListener('click',()=>{
    if (sidebar.style.width === '0') {
      console.log(sidebar.style.width)
      sidebar.style.width = '50%'
    } else {
      sidebar.style.width = '0'
    }
  })
}
openSideBar ()





// let myHttp = new XMLHttpRequest();
// let cats =[]
// let imgs_categories = ['computer','jewelry','men','women'];
// let products =[]
// let loader = document.querySelector('.load');

// let auth = document.querySelector('#auth')
// let userInfo = document.querySelector('#user-info')
// let user_Name = document.querySelector('#user-Name')
// let user = localStorage.getItem('username')
// if (user) {
//   auth.remove()
//   userInfo.style.display ='inline';
//   user_Name.innerHTML= user;
//   console.log(user_Name);
// } else {
  
// }



// // function loading (){
// //     if (document.readyState != 'complete' ) {
// //         loader.style.display = 'inline-block'
// //     } else {
// //         loader.style.display = 'none'; 
// //     }
// // }
// // loading ()
// document.addEventListener("DOMContentLoaded", function(event) { 
//     const spinnerContainer = document.querySelector(".load");
//     window.addEventListener("load", function() {
//       spinnerContainer.style.display = "none";
//     });
//     window.addEventListener("beforeunload", function() {
//       spinnerContainer.style.display = "block";
//     });
//   });
// myHttp.open('GET','https://fakestoreapi.com/products/categories')
// myHttp.send();
// myHttp.addEventListener('readystatechange',()=>
// {
//     if (myHttp.readyState == 4 && myHttp.status == 200) {
//         cats = JSON.parse(myHttp.response) 
//         displayCategories ()
//     } else {
        
//     }
// })

// function displayCategories (){
//     let cartona_cat = '';
//     for (let i = 0; i < cats.length; i++) {

//         cartona_cat +=`<div class="col-md-3">
//         <div class="p-3 border box">
//             <div class="cont">
//                 <img src="images/${imgs_categories[i]}.PNG" alt="" srcset="">
//             </div>
//             <h3>${cats[i]}</h3>
//             <p>Lorem ipsum dolor sit amet.</p>
//         </div>
//       </div>`
//       document.querySelector('#cats').innerHTML = cartona_cat ;
        
//     }
// }
// fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(json=>{
//                 products = json ;
//                 displayProducts()
//             } )
//             .catch(error => {
//                 console.error('حدث خطأ:', error);
//               });

// function displayProducts (){

//     let cartona_products = '';
//     for ( let i = 0 ; i < products.length ; i++ ){
//         cartona_products += 
//         `<div class="card-cat col-md-3 col-sm-4 d-flex justify-content-between flex-column">
//         <div class="cat">
//             <div class="img">
//                 <img src="${products[i].image}" alt="">
//             </div>
//             <div class="cat-contint py-3 px-2">
//                 <span>${products[i].title}</span>
//             </div>
//         </div>
//         <div class="price d-flex justify-content-between align-items-center py-2">
//         <span class='pre'>Price : ${products[i].price}$</span>
//         <i class="fa-solid rounded-3 fa-cart-plus bg-dark p-2 text-light "></i>
//         </div>
//         </div>
//       </div>
//     </div>`
//     document.querySelector('#products').innerHTML = cartona_products;
//     }
//     productInfo()
// }
// function productInfo() {
//                 let products = document.querySelectorAll('.cat');
//                 products.forEach(function(product) {
//                     product.addEventListener('click', function(e) {
//                         let img = e.target.querySelector('img');
//                         let modal = document.querySelector('.cat').innerHTML = `<div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                         <div class="modal-dialog modal-dialog-centered">
//                           <div class="modal-content">
//                             <div class="modal-header">
//                               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                             </div>
//                             <div class="modal-body">
//                               <div class="row">
//                                 <div class="col-md-6">
//                                     <img  src="" alt="" srcset="">
//                                 </div>
//                                 <div class="col-md-6">
//                                     <h2></h2>
//                                     <h6></h6>
//                                     <h2>price :$</h2>
//                                     <p>Descreption :</p>
//                                     <div class="chouse">
//                                         <div class="row">
//                                             <div class="col-md-3">
//                                                 <h2>Color</h2>
//                                                 <input type="color">
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <h2>Quantity</h2>
//                                                 <h5></h5>
//                                             </div>
//                                             <div class="col-md-3">
//                                                 <h2>Total Price</h2>
//                                                 <h5></h5>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <button type="button">Add To</button>
//                                 </div>
//                               </div>
//                             </div>
//                             <div class="modal-footer">
//                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                               <button type="button" class="btn btn-primary">Save changes</button>
//                             </div>
//                           </div>`
//                     });
//                 });
//             }
// // data-bs-toggle="modal" data-bs-target="#exampleModal"
// {/*  */}

// const splide = new Splide( '.splide', {
//   type   : 'loop',
//   drag   : 'free',
//   focus  : 'center',
//   perPage: 3,
//   autoScroll: {
//     speed: 1,
//   },
// } );
// splide.mount();
