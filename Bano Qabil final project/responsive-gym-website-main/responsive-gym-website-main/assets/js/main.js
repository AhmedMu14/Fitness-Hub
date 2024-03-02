/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

    /*=============== REMOVE MENU MOBILE ===============*/
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

}

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header')
        : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== CALCULATE JS ===============*/
const calculateform = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculatekg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e) => {
    e.preventDefault()
    //check if the fields have value
    if (calculateCm.value === '' || calculatekg.value === '') {
        //Add and remove color
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        //show message
        calculateMessage.textContent = 'Fill in the height and weight '

        //Remove message three seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000);
    } else {
        //BMI formula
        const cm = calculateCm.value / 100,
            kg = calculatekg.value,
            bmi = Math.round(kg / (cm * cm))

        //show your health 
        if (bmi < 18.5) {
            //add color and display message
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
        } else if (bmi < 25) {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `your BMI is ${bmi} and you are healthy`
        } else {
            calculateMessage.classList.add('color-green')
            calculateMessage.textContent = `your BMI is ${bmi} and you are overweight`
        }

        // To clear the input field
        calculateCm.value=''
        calculatekg.value=''
        
        // Remove message four seconds
        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 4000);

    }
}

calculateform.addEventListener('submit', calculateBmi)

