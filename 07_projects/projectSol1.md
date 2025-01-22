# solution code of every project
## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css)
## color changer (project 1st)
``` javascript
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
 console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow')
    {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'pink')
    {
      body.style.backgroundColor = e.target.id
    }
  })
})
```

## BMI Calculator (project 2nd)
``` javascript
 const form = document.querySelector('form')
//  this will give empty values that's why we have to write this inside the function
// const height = parseInt(document.querySelector('#height').value) 
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e)
{
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`
  }else if (weight === '' || weight < 0 || isNaN(weight))
  {
    results.innerHTML = `please give a valid weight ${weight}`
  }else{
    const bmi = ((weight / (height * height)) * 10000).toFixed(2);


   // Determine BMI category
   let category = '';
   if (bmi < 18.6) {
     category = 'Underweight';
   } else if (bmi >= 18.6 && bmi <= 24.9) {
     category = 'Normal Range';
   } else {
     category = 'Overweight';
   }
   
   // Show the result
   results.innerHTML = `<span>BMI: ${bmi} - ${category}</span>`
  } 
})
```

## Digital Clock (project 3rd)
```javascript
const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') 
//can use any of the above mentioned method
setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
},1000)  // 1000 fo 1 second
```