import React from 'react';
import "../css/submitbug.css";
import ReactDOM from 'react-dom';
function Madeup(){
    return(
        <div className = "k" id = "madeup">
            <div className = "left">
                <img style = {{width: '90%'}} src = "https://media.giphy.com/media/gIMwYKYsjE6EZB6zS2/giphy.gif" />
                <img style = {{width: '90%'}}src = "https://media.giphy.com/media/IneAQSWFnyHn2/giphy.gif" />
                <img style = {{width: '90%'}}src = "https://media.giphy.com/media/3ohhwEkV8mGKt12EPC/giphy.gif"/>
                <img style = {{width: '90%'}}src = "https://media.giphy.com/media/kHfCau1G2wIXIe0vGh/giphy.gif" />
            </div>

            <div className = "right">
                <img style = {{width: '90%'}} src = "https://media.giphy.com/media/k6SmJDWCRopihmwnxw/giphy.gif" />
                <img style = {{width: '90%'}}src = "https://media.giphy.com/media/H3RqCzg7ZPmfXpD6b3/giphy.gif" />
                <img style = {{width: '90%'}}src = "https://media.giphy.com/media/fAJ7FMoyKuqkh3zI4e/giphy.gif"/>
                <img style = {{width: '90%'}}src = "https://media.giphy.com/media/cjoWs5ojCcKh01DJCC/giphy.gif"/>
            </div>
            
            <div className = "about" id = "one">
                <h3> What is it</h3>
                <br />
                <p> Bugger is a CRUD app that creates and tracks bugs for a team. This web app is for <span style = {{color: 'red', border: 'none'}}> demonstration </span>  purposes only. Currently there is no login system nor form validation for a team of developers to use properly, however those are coming very soon! </p>
            </div>
            <div className = "about" id = "two">
                <h3> How does it work</h3>
                <br />
                <p> Keeping it super simple, it is a ReactJs application connected to a NodeJs (Express)server. The server and its' database (PostgreSQL) are hosted on heroku. (Hence the 'herokuapp' in the url). On the client side, there are a few API calls here and there with some bootstrap styling to clean it up.  
                </p>
            </div>
            <div className = "about" id = "three">
                <h3> Additional information</h3>
                <br />
                <p> Here is a link to my <a target = "_blank" href = "https://github.com/blambert4/BUGGER"> github </a> where you can check out the code! </p>
            </div>
        </div>
    )
}
export default Madeup;