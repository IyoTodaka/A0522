const TimeLine = gsap.timeline()
// const img = document.querySelector('.deer')

TimeLine
.from('.logo',{autoAlpha:0, diration:1, x: -50 })
.from('.menu-links',{autoAlpha:0, diration:1, x: -50 },"<")
.from('.title',{autoAlpha:0, diration:1, y: 30 })
.from('.tagline',{autoAlpha:0, diration:1, y: 50 })
.from('.desc',{autoAlpha:0, diration:1, y: 50 },"<")

.from('.deer img',{autoAlpha:0, diration:1, y: -150 })
