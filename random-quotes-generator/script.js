const quotes = [
    {
        name: 'Marilyn Monroe',
        quote:"I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    },

    {
        name: 'Oscar Wilde',
        quote: "Be yourself; everyone else is already taken.",
    },

    {
        name: 'Albert Einstein',
        quote: "Two things are infinite: the universe and human stupidity and I'm not sure about the universe.",
    },

    {
        name: 'Marcus Tullius Cicero',
        quote: "A room without books is like a body without a soul."
    },

    {
        name: 'Ralph Waldo Emerson',
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
    },

    {
        name: 'Bhim Rao Ramji Ambedkar',
        quote: "I measure the progress of a community by the degree of progress which women have achieved."
    },

    {
        name: 'Bhim Rao Ramji Ambedkar',
        quote: "Cultivation of mind should be the ultimate aim of human existence."
    },

    {
        name: 'Mark Twain',
        quote: "If you tell the truth, you don't have to remember anything."
    }


];
const button = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quoteAuthor');
const body = document.querySelector('body');

button.addEventListener('click', ()=>{
    let random = Math.floor(Math.random()*quotes.length);

    quoteAuthor.innerHTML = quotes[random].name;
    quote.innerHTML = quotes[random].quote;
    body.style.background = quotes[random].image;

});