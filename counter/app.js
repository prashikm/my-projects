const counter = document.querySelector('.counter');
const addCount = document.querySelector('#upperCountBtn');
const lowCount = document.querySelector('#lowerCountBtn');

let count = 0;

addCount.addEventListener('click', ()=> {
    count++;
    counter.innerHTML = count;

    if (counter.innerHTML>'0') {
        counter.style.color = 'blue';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#eeeeee';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration: 500, fill:'forwards'});
});

lowCount.addEventListener('click', ()=> {
    count--;
    counter.innerHTML = count;

    if (counter.innerHTML<'0') {
        counter.style.color = 'red';
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = '#eeeeee';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}], {duration: 500, fill:'forwards'});
});