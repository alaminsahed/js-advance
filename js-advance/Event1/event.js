//event capturing

document.getElementById('grandfather').addEventListener('click', (e) => {
    console.log('grandfather');
    e.stopPropagation()
}, true)
document.getElementById('child').addEventListener('click', (e) => {
    console.log('child');
    //e.stopPropagation();
}, true)

document.getElementById('father').addEventListener('click', (e) => {
    console.log('father');
    //  e.stopPropagation();
}, true)



//event bubbling

// document.getElementById('child').addEventListener('click', () => {
//     console.log('child');
// })

// document.getElementById('father').addEventListener('click', () => {
//     console.log('father');
// })

// document.getElementById('grandfather').addEventListener('click', () => {
//     console.log('grandfather');
// })
