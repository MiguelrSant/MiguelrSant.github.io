document.addEventListener('DOMContentLoaded', () => {
    
    let tl1 = new TimelineMax();

    tl1.fromTo('.nav-logo', .8, 
    { y: 12, opacity: 0,},
    { y: 4, opacity: 1, ease: Expo.Out}, '-=0.5')

    .fromTo('.nav-item', .8, 
    { y: 12, opacity: 0,},
    { y: 0, opacity: 1, ease: Expo.Out}, '-=0.5')

    .fromTo('.up', .8, 
    { y: 12, opacity: 0,},
    { y: 0, opacity: 1, ease: Expo.Out}, '-=0.8')
})