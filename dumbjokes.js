const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newh2 = document.createElement('h2');
    jokes.innerText = ''
    newh2.append(jokeText);
    jokes.append(newh2)
    // console.log(jokeText)
}
const getDadJoke = async () => {
    try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return 'no jokes today. check yr internet.'
        
    }
 
}
button.addEventListener('click', addNewJoke)
