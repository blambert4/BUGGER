import "../css/home.css";
import React from 'react';
import ReactDOM from 'react-dom';
function Home(){
    
    const move = (e) =>{
        const card = document.querySelector('.card');
        console.log("work")
        let Xaxis = (window.innerWidth / 2 - e.pageX)/20;
        let Yaxis = (window.innerHeight / 2 - e.pageY)/20;
        card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
    }
    const move2 = (e) =>{
        const card = document.querySelector('.card2');
        console.log("work")
        let Xaxis = (window.innerWidth / 2 - e.pageX)/20;
        let Yaxis = (window.innerHeight / 2 - e.pageY)/20;
        card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
    }
    const move3 = (e) =>{
        const card = document.querySelector('.card3');
        console.log("work")
        let Xaxis = (window.innerWidth / 2 - e.pageX)/20;
        let Yaxis = (window.innerHeight / 2 - e.pageY)/20;
        card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
    }

    return(
        <div className = "k" id = "home" >
            
        <div class="container">
            <div class="card" onMouseMove = {move}>
                <div class="sneaker">
                    <div class="circle"></div>
                </div>
                <div class="info">
                    <h4 class="title">SUBMIT A BUG </h4>
                    <h3> Haha! You know its baby nigga! </h3>
                </div>
            </div>

            <div class="card2" onMouseMove = {move2}>
                <div class="sneaker">
                    <div class="circle"></div>
                </div>
                <div class="info">
                    <h4 class="title"> VIEW BUGS </h4>
                    <h3> Haha! You know its baby nigga! </h3>
                    
                </div>
            </div>

            <div class="card3" onMouseMove = {move3}>
                <div class="sneaker">
                    <div class="circle"></div>
                </div>
                <div class="info">
                    <h4 class="title">HOW DOES IT WORK</h4>
                    <h3> Haha! You know its baby nigga! </h3>
                </div>
            </div>
        </div>

        </div>
    )
}
export default Home;