const TimeLine = gsap.timeline()

TimeLine
.from('.nav',{autoAlpha:0, diration:1, x: -50 ,stagger:0.08})
.from('.title',{autoAlpha:0, diration:1, y: 30 })
.from('.tagline',{autoAlpha:0, diration:1, y: 50 })
.from('.desc',{autoAlpha:0, diration:1, y: 50 },"<")


.from('.beer',{autoAlpha:1, diration:1, y: -1000 })
