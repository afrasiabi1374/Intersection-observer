// navigation 
const header = document.querySelector("header")
const sectionOne = document.querySelector(".home-intro")
const sectioOneOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-250px 0px 0px 0px"
}
const sectionOneObserver = new IntersectionObserver(
    (entries, sectionObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                //کلاس الحاق کن  اگه رسید به محدودش
                header.classList.add("nav-scrolled")
            } else {
                // کلاسو حذف کن اگه از محدودش گذشت
                header.classList.remove("nav-scrolled")
            }
        })
    },
    sectioOneOptions
)

sectionOneObserver.observe(sectionOne)
    // end navigation

//  Fade and scroll items into view while scrolling

const faders = document.querySelectorAll('.fade-in')
const appearOptions = {
    root: null,
    threshold: 0,
    rootMargin: " -200px 0px 0px 0px"
}
const appearOnScroll = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('appear')
                appearOnScroll.unobserve(entry.target)
            }
        })
    }, appearOptions
)

faders.forEach(
    fader => {
        appearOnScroll.observe(fader)
    }
)

// movin image and captions
imageCaptionOnScrollOptions = {
    root: null,
    threshold: .25,
    rootMargin: "0px 0px -250px 0px"
}
const imageCaptionOnScroll = new IntersectionObserver(
    (entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('move-zero')
                appearOnScroll.unobserve(entry.target)
            }
        })
    }, imageCaptionOnScrollOptions
)
const sliders = document.querySelectorAll(".slide-in")
sliders.forEach(
    slider => {
        imageCaptionOnScroll.observe(slider)
    }
)