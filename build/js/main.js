const initapp = () => {
    const hamburger_btn = document.getElementById('harmburger--button')
    const mobile_menu = document.getElementById('mobile-menu')


    const toggle_menu = () =>{
        mobile_menu.classList.toggle('hidden')
        mobile_menu.classList.toggle('flex')
        hamburger_btn.classList.toggle('toggle-btn')
    }

    hamburger_btn.addEventListener('click', toggle_menu)
    mobile_menu.addEventListener('click', toggle_menu)
}

document.addEventListener('DOMContentLoaded', initapp)