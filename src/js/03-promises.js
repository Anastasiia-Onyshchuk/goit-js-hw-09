import Notiflix, { Notify } from "notiflix";

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name ="delay"]'), 
  step: document.querySelector('input[name = "step"]'),
  amount: document.querySelector('input[name = "amount"]'),
}

refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let delayValue = parseInt(refs.delay.value);
  const stepValue = parseInt(refs.step.value);
  const amountValue = parseInt(refs.amount.value);

  createNewPromises({delay: delayValue, step: stepValue, amount: amountValue});
});

function createNewPromises({ delay, step, amount }) {
  for (let position = 1; position <= amount; position++) {
    createPromise({ position, delay }).then(onSuccess).catch(onError);
    delay += step;
  }
}

function createPromise({ position, delay }) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position: position, delay: delay });
      } else {
        reject({ position: position, delay: delay });
      }
    }, delay);
  });
}
function onSuccess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
};

function onError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
}

