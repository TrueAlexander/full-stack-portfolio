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
import apiShow from './sections/api-show/api-show'

AOS.init()
document.addEventListener("DOMContentLoaded", yall)
header()
opinions()
apiShow()
contact()
resizeAnimation()
antiFouc()