let btn1 = document.getElementById("btn");
// btn1.addEventListener("click",() =>{
//     changecolor();
// })
// function changecolor() {
//     document.body.style.backgroundColor = "black";
//     let b = document.querySelector('button')
//     b.style.color = "white"
//     b.style.backgroundColor = "black"
//     b.style.border = "1px solid white"
//     let c = document.querySelector('h2')
//     c.style.color = "white";
//     c.textContent = "Swith to Light Mode"
//     let d = document.querySelector('i')
//     d.classList.toggle("fa-solid fa-lightbulb");
// }
document.getElementById('btn').addEventListener('click', function() {
    (document.body.classList.toggle('darkmode'))
    // (document.body.classList.toggle('lightmode'))
    if(document.body.classList.contains('darkmode')){
        document.querySelector('h2').textContent = 'Switch to Light Mode';
        let b = document.querySelector('button')
        b.style.color = "white"
        b.style.backgroundColor = "black"
        b.style.border = "1px solid white"
    }
    else{
        document.querySelector('h2').textContent = 'Switch to Dark Mode';
        let b = document.querySelector('button')
        b.style.color = "black"
        b.style.backgroundColor = "white"
        b.style.border = "1px solid black"
    }
    

});