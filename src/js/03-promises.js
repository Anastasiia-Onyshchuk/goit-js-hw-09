import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name ="delay"]'), 
  step: document.querySelector('input[name = "step"]'),
  amount: document.querySelector('input[name = "amount"]'),
}

refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const delayValue = parseInt(refs.delay.value);
  const stepValue = parseInt(refs.step.value);
  const amountValue = parseInt(refs.amount.value);
  const promises = [];
  let count = 1;

  function handlePromise(promise) {
    promise
      .then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        count++;
        console.log(typeof (Notiflix.Notify));
        if (count <= amountValue) {
          handlePromise(createPromise(count, delay + (count - 1) * stepValue));
        }
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        count++;
        if (count <= amountValue) {
          handlePromise(createPromise(count, delay + (count - 1) * stepValue));
        }
      });
  }
  handlePromise(createPromise(count, delayValue));
})
function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject([{ position, delay }])
      }
    }, delay);
  });
}
