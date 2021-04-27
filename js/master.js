// Toggle function

const burger = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener( 'click', () => {
        nav.classList.toggle('nav-open')
        
        // animated nav link
        navLinks.forEach( ( link , index ) => {
            if(link.style.animation){
                link.style.animation=""
            }else{
                link.style.animation = `link-fade .3s ease-in forwards ${index/7 + .3}s`
            }
        })

        //Change Burger Icon 
        burger.classList.toggle('toggle')
    })
}

burger()