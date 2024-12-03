const number = document.querySelector('h1');
const adviceText = document.querySelector('p');
const button = document.querySelector('.dice');


const addNewAdvice = async () => {
    const advice = await getAdvice();
    number.textContent = `Advice #${advice.slip.id}`;
    adviceText.textContent = advice.slip.advice;
}

const getAdvice = async () => {
    try {
        const res = await axios.get('https://api.adviceslip.com/advice');
        return res.data;
    } catch (e) {
        console.log("Error!")
        console.log(e);
    }
}

button.addEventListener('click', addNewAdvice);


