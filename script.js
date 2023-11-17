//copy date
let currentYear = new Date().getFullYear()
let current = (document.querySelector('.current').innerHTML = currentYear)
let span = document.querySelector('.skill')

let skills = ['FrontEnd', 'UI&UX Design', 'Web Design', 'Motion', 'Wordpress'];

let tl = gsap.timeline({ defaults: { duration: 0.75, ease: 'Power3.easeOut' } })
tl.fromTo('.headerLogo', { scale: 1.4 }, { scale: 1.2, y:'56px',duration: 1.5, ease:"elastic.out(0.5)" })

tl.fromTo('.a-1',{ x:-10, opacity:0},{x:10, opacity:1, delay:0.1, duration:1.2}, "<5%" )
tl.fromTo('.a-2',{ x:-10, opacity:0},{x:10, opacity:1, delay:0.1, duration:1.2}, "<9%" )
tl.fromTo('.a-3',{ x:-10, opacity:0},{x:10, opacity:1, delay:0.1, duration:1.2},'<10%' )



//skills ramdom
let loopi = (max = 5)=>{
span.innerText=(
  skills[Math.floor(Math.random() * max)])
}
setInterval(loopi, 2000)



/*gsap.to('.element-1', {
  x: -700,
  y: -100, // any properties (not limited to CSS)
  delay: 0,
  duration: 20,
  ease: 'none',
  stagger: 0.1, // stagger start times
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 0, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true
})
gsap.to('.element-2', {
  x: 500,
  y: -300, // any properties (not limited to CSS)
  delay: 0,
  duration: 20,
  ease: 'none',
  stagger: 0.1, // stagger start times
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true
})
gsap.to('.element-3', {
  x: -800,
  y: -300, // any properties (not limited to CSS)
  delay: 0,
  duration: 20,
  ease: 'none',
  stagger: 0.1, // stagger start times
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true
})
gsap.to('.element-4', {
  x: 100,
  y: -400, // any properties (not limited to CSS)
  delay: 0,
  duration: 20,
  ease: 'none',
  stagger: 0.1, // stagger start times
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true
})
gsap.to('.element-5', {
  x: 300,
  y: 221, // any properties (not limited to CSS)
  delay: 0,
  duration: 20,
  ease: 'none',
  stagger: 0.1, // stagger start times
  repeat: -1, // number of repeats (-1 for infinite)
  repeatDelay: 1, // seconds between repeats
  repeatRefresh: true, // invalidates on each repeat
  yoyo: true, // if true > A-B-B-A, if false > A-B-A-B
  yoyoEase: true
})

*/