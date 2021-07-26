/*================= MENU SHOW Y HIDDEN ============ */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
      
// ===================== MENU SHOW =================== 
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

//================== MENU HIDDEN ================= 
// validate if constant exists 
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
} 

// ============ REMOVE MENU MOBILE ================ 

const navLink =document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    // when we click on each nav__link, we emove the show-menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))


// ============== ACCORDION SKILLS =================


const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length ; i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills);
})


//=================== QUALIFICATION TABS=======================


const tabs= document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

//================== SERVICES MODAL ===========================
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')
    
let modal =function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

// =================PORTFOLIO SWIPER======================
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
        clickable: true,
    },
});

//================= TESTIMONIAL =====================

let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true, 
    spaceBetween: 48,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

//============== Scroll section active link =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

//================ CHANGE BACKGROUND HEADER ========================
function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add the scroll header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
} 
window.addEventListener('scroll', scrollHeader)

//===================== Show scrolup Top ==================
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 560 viewport innerHeight, add the show-scroll class to a tag with a scroll \
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//==================== dark light theme ====================

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate /deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // add or remove the dark / icon theme 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

//========== Form submission code (google script code)=====================

// var sheetName = 'Sheet1'
// 		var scriptProp = PropertiesService.getScriptProperties()

// 		function intialSetup () {
// 		  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
// 		  scriptProp.setProperty('key', activeSpreadsheet.getId())
// 		}

// 		function doPost (e) {
// 		  var lock = LockService.getScriptLock()
// 		  lock.tryLock(10000)

// 		  try {
// 			var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
// 			var sheet = doc.getSheetByName(sheetName)

// 			var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
// 			var nextRow = sheet.getLastRow() + 1

// 			var newRow = headers.map(function(header) {
// 			  return header === 'timestamp' ? new Date() : e.parameter[header]
// 			})

// 			sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

// 			return ContentService
// 			  .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
// 			  .setMimeType(ContentService.MimeType.JSON)
// 		  }

// 		  catch (e) {
// 			return ContentService
// 			  .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
// 			  .setMimeType(ContentService.MimeType.JSON)
// 		  }

// 		  finally {
// 			lock.releaseLock()
// 		  }
// 		} 