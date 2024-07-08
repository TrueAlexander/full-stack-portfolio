//to disable animations when resize the window screen

const resizeAnimation = () => {
  let resizeTimer;
  window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper")
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resize-animation-stopper")
    }, 400)
  })
}

export default resizeAnimation
