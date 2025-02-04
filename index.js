const correctAnswer = ['A','A','A','A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (event) =>{
  event.preventDefault();
    
  if(form.question3.value === 'B'){
    Swal.fire({
      title: "Are you sure?",
      text: "You can submit again girl.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,I'm sure !"
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
          title: "Submited!",
          icon: "success",
          draggable: true
        });
      }
    });
  }
  if(form.question3.value === 'A'){
    Swal.fire({
      title: "I love You!",
      text: "តាមសធាជ្រះថ្លា.",
      imageUrl: "Qr.jpg",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "Custom image"
    });
  }

  let score = 0;
  const userAnswers = [form.question1.value,form.question2.value,
                       form.question3.value,form.question4.value];
  userAnswers.forEach((answer,index)=>{
    if(answer === correctAnswer[index]){
      score += 25;
    }
  });
  window.scrollTo(0,0);
  result.classList.remove('d-none');

  let outputScore = 0;
  const setTimer = setInterval(() =>{
    result.querySelector('span').textContent = `${outputScore}%`;
    if(outputScore === score){
      clearInterval(setTimer);
    }else{
      outputScore++;
    }
  },10);
  // Swal.fire({
  //   title: "Submited!",
  //   icon: "success",
  //   draggable: true
  // });
});

// let i = 0;
// const setTimer = setInterval(() =>{
//   console.log('Hello world');
//   i++;
//   if(i === 5){
//     clearInterval(setTimer);
//   }
// }, 1000)
