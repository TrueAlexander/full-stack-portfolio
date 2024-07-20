const apiShow = () => {

const fetchData = () => {
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => text.innerHTML = data.slip.advice)
  .catch(error => console.error('Error:', error))
}

const text = document.querySelector(".api-show__text")
const button = document.querySelector(".api-show__button")

fetchData()

button.addEventListener("click", fetchData)
  
}

export default apiShow