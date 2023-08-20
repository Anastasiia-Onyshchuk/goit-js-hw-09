const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name ="delay"]'), 
  step: document.querySelector('input[name = "step"]'),
  amount: document.querySelector('input[name = "amount"]'),
}

refs.form.addEventListener('submit', createPromise())
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  })
  setTimeout(() => {
      if (shouldResolve) {
    resolve ({position, delay})
  } else {
reject ([{position, delay}])
  }
  }, delay)

}
// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });