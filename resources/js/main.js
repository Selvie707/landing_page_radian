const navMenu = document.getElementById("nav-menu")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    const isClosed = navMenu.classList.contains('left-[-100%]')

    if (isClosed) {
        // Buka menu
        navMenu.classList.remove('left-[-100%]')
        navMenu.classList.add('left-0')

        // Ganti icon jadi close
        hamburger.classList.remove('ri-menu-line')
        hamburger.classList.add('ri-close-line')
    } else {
        // Tutup menu
        navMenu.classList.remove('left-0')
        navMenu.classList.add('left-[-100%]')

        // Ganti icon jadi menu
        hamburger.classList.remove('ri-close-line')
        hamburger.classList.add('ri-menu-line')
    }
})

// Scroll Reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true
})

// HOME
sr.reveal(`.home__data`)
sr.reveal(`.home__image`, {delay: 500, scale: 0.5})

// ABOUT US
sr.reveal(`.about__title`, {interval: 100})
sr.reveal(`.about__image1`, {scale: 0.5})
sr.reveal(`.about__content1`, {delay: 500, origin: "right"})
sr.reveal(`.about__image2`, {scale: 0.5})
sr.reveal(`.about__content2`, {delay: 500, origin: "left"})

// VALUE
sr.reveal(`.value__logo`)
sr.reveal(`.value__title`, {delay: 100})
sr.reveal(`.value__text`, {delay:500, interval: 100})

// BUSINESS
sr.reveal(`.business__title`, {interval: 100})
sr.reveal(`.business__card`, {delay:500, interval: 100})

// SERVICE
sr.reveal(`.service__title`, {interval: 100})
sr.reveal(`.service__content`, {delay:500, interval: 100})

// FAQ
sr.reveal(`.faq__title`, {interval: 100})
sr.reveal(`.faq__image`, {delay: 500, origin: "left"})
sr.reveal(`.faq__content`, {delay:500, interval: 100})

// FOOTER
sr.reveal(`.footer__logo`, {interval: 100})
sr.reveal(`.footer__contact_title`, {origin: "top"})
sr.reveal(`.footer__contact_content`, {delay: 100, interval: 100})
sr.reveal(`.footer__social_title`, {origin: "top"})
sr.reveal(`.footer__social_content`, {delay: 100, interval: 100})
sr.reveal(`.footer__bottom`, {delay: 500, origin: "top"})