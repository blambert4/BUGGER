import "../css/home.css";
import React from 'react';
import ReactDOM from 'react-dom';
function Home(props){
    
    const move = (e) =>{
        const card = document.querySelector('.card');
        console.log("work")
        let Xaxis = (window.innerWidth / 2 - e.pageX)/20;
        let Yaxis = (window.innerHeight / 2 - e.pageY)/20;
        card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
    }
    const move2 = (e) =>{
        const card = document.querySelector('.card2');
        let Xaxis = (window.innerWidth / 2 - e.pageX)/20;
        let Yaxis = (window.innerHeight / 2 - e.pageY)/20;
        card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
    }
    const move3 = (e) =>{
        const card = document.querySelector('.card3');
        let Xaxis = (window.innerWidth / 2 - e.pageX)/20;
        let Yaxis = (window.innerHeight / 2 - e.pageY)/20;
        card.style.transform = `rotateX(${Yaxis}deg) rotateY(${Xaxis}deg)`;
    }

    return(
        <div className = "k" id = "home" >
            
        <div class="container">
            <div class="card" onMouseMove = {move}>
                <div class="sneaker">
                    {/*<div class="circle"></div>*/}
                    <img src = "https://media2.giphy.com/media/xT9IgNPVbGsa0Wd8li/giphy.gif?cid=ecf05e47arj8cw73ticckbgkrecq1fz5qb81rbirxukcdjxm&rid=giphy.gif&ct=g" />
                </div>
                <div class="info">
                    <h4 class="title">SUBMIT A BUG </h4>
                    <p> click <a href ="#" onClick = {()=>{props.click()}}> here </a> to submit the bug you are having </p>
                </div>
            </div>

            <div class="card2" onMouseMove = {move2}>
                <div class="sneaker">
                    <img src = "https://media0.giphy.com/media/3o7aCUQ7TsQ3cndExq/giphy.gif?cid=ecf05e47arj8cw73ticckbgkrecq1fz5qb81rbirxukcdjxm&rid=giphy.gif&ct=g" />
                </div>
                <div class="info">
                    <h4 class="title"> VIEW BUGS </h4>
                    <p> click <a href = "#" onClick = {()=>{props.clicker(); props.clickilicki()}}>here</a> to view all the current bugs</p>
                    
                </div>
            </div>

            <div class="card3" onMouseMove = {move3}>
                <div class="sneaker">
                    <img src = "https://media.giphy.com/media/487L0pNZKONFN01oHO/giphy.gif" />
                </div>
                <div class="info">
                    <h4 class="title">HOW DOES IT WORK</h4>
                    <p> click <a href = "#" onClick = {()=>{props.clickio()}}>here</a> to view understand how Bugger works</p>
                </div>
            </div>
        </div>

        </div>
    )
}
export default Home;