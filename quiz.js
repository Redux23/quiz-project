const correctAnswers = ['A', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const timerText = document.getElementById('timer-display');
const startButton = document.querySelector('button');



let count = 60;

startButton.addEventListener('click', (e)=>{

const stopWatch = setInterval(()=>{

count -= 1;
timerText.textContent = count;

if (count === 0){
    clearInterval(stopWatch);
}
     
    
}, 1000)

setTimeout(()=>{
    popup.style.display = 'block';

   
   }, 60000);


   close.addEventListener('click',(e)=>{
    popup.style.display = 'none';

   
   });


});
  

form.addEventListener('submit', (e)=>{
    e.preventDefault()
   
let score = 0;
const answersValue = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];

answersValue.forEach((answer, i)=>{
    
    if(answer === correctAnswers[i]){

     score += 25;
    }
    
});

scrollTo(0,0);
let newAnswer = setTimeout(()=>{
    alert(`click ok to view your score`);
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
  
}, 3000)

  

});


   