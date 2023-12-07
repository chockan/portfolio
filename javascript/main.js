// show menu
//
//const showMenu=(toggleId,navId)=>{
    //const toggle=document.getElementById(toggleId),
         // nav=document.getElementById(navId)

   // if (toggle && nav){
       // toggle.addEventListener('click',() =>{
         //   nav.classList.toggle('show')
      //  });
   // }

//}
//showMenu('nav_toggle','nav_menu');

//

// Get a reference to the icon element and the nav_menu element
// Get a reference to the nav_menu element
function my1() {
    var navList = document.querySelector('.nav_list');
    navList.style.right = '-100%';
}

function my2() {
    var navList = document.querySelector('.nav_list');
    navList.style.right = '0';
}






//active & remote active
const navlink= document.querySelectorAll('.nav_link')

function linkAction(){
   navlink.forEach(n=> n.classList.remove('active'))
   this.classList.add('active')

}

navlink.forEach(n=> n.addEventListener('click',linkAction))

