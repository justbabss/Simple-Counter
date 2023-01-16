const User = document.querySelector("#User")
const Inputfield = document.querySelector("#Inputfield")
const button1 = document.querySelector("#button1")
const Reset = document.querySelector("#reset")
const Button2 = document.querySelector("#button2")

let val = 0
console.log(button1
  )
const handlebutton1 = () => {
  val += Number(Inputfield.value)
  User.innerHTML = val

  checkValue()
}

console.log(Button2
  )
const handlebutton2 = () => {
  val -= Number(Inputfield.value)
  User.innerHTML = val

  checkValue()
}

console.log(Reset
  )
const handleReset = () => {
  val = 0
  User.innerHTML = val

  checkValue ()
}

const checkValue = () =>{
  if(val > 0){
      User.style.color = "blue"
  }else if(val < 0){
      User.style.color = "red"
  }else{
      User.style.color = "black"
  }
} 

button1.addEventListener("click", handlebutton1)
Button2.addEventListener("click", handlebutton2)
Reset.addEventListener("click", handleReset)















