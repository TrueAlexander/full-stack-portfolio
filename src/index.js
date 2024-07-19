import './styles/index.scss'
import antiFouc from './antiFouc'
import yall from 'yall-js'
import resizeAnimation from './resizeAnimation'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'
import header from './sections/header/header'
import opinions from './sections/opinions/opinions'
import contact from './sections/contact/contact'

AOS.init()
document.addEventListener("DOMContentLoaded", yall)
header()
opinions()
contact()
resizeAnimation()
antiFouc()

// let repeat = true
// console.log('sera')
// while(repeat) {console.log('sera')}

// for (let count=10; count>0; count=count-1) {
//   console.log(count)
// }

function Car(color) {
  this.wheels = 4
  this.color = color
}

let myCar = new Car("blue")

console.log(myCar)