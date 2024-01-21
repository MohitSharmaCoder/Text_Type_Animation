// let i=0;
// let txt = 'How to create typing animation';
// let speed = 150;

// function type(){
//     document.getElementById('type').innerHTML+=txt.charAt(i)
//     i++;
//     setTimeout(() => {
//         type()
//     }, speed);
// }

// type()


const text = document.querySelector('.sec-text')
const textLoad = ()=>{
    setTimeout(() => {
        text.textContent = 'Freelancer';
    }, 0);
    setTimeout(() => {
        text.textContent = 'Blogger';
    }, 3000);
    setTimeout(() => {
        text.textContent = 'Youtuber';
    }, 6000);
}

textLoad()
setInterval(textLoad,9000)
