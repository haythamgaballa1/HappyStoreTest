
window.addEventListener('load', function() {
  var loading = document.querySelector('.loading');
  var body = document.querySelector('body')
  body.classList.add('overflow-visible')
  body.classList.remove('overflow-hidden')
  loading.style.display = 'none';
});

function darkMode(){
  let setting = document.querySelector('.setting ')
  let setting_click = document.querySelector('.settings')
  let darkMode = document.querySelector('.dark-mode')
setting.addEventListener('click', ()=>{
  if (setting_click.style.left == '-85px') {
    console.log ('yes')
    setting_click.style.left = '0'
  } else {
    setting_click.style.left = '-85px'
    console.log('no')
  }

  })
  darkMode.onclick = function(){
    document.body.classList.toggle('dark')
  }
}
darkMode()
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
function openSideBar() {
  let openMenu = document.querySelector('.menu');
  let sidebar = document.querySelector('.sidebar');
  let closeMenu = document.querySelector('.close');

  openMenu.addEventListener('click', () => {
    if (sidebar.style.left == '-100%') {
      sidebar.style.left = '0';
      console.log('yes')
    } else {
      sidebar.style.left = '-100%';
      console.log('no')

    }
  });

  closeMenu.addEventListener('click', () => {
    sidebar.style.left = '-100%';
  });
}
openSideBar();

// Cart System
function displayCarts ()
{
  let cartIcon = document.querySelector('.cart-count')
  
}

alertify.alert('This site is updated every Thursday until it is completed....Thank you for your visit');




