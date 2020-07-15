

import React, { Component } from 'react';
import axios from "axios";

import './App.css';




class App extends Component {

    state= {advice:""};

    componentDidMount(){
        this.fetchAdvice();        
    }

    fetchAdvice = ()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=>{
            const {advice}= res.data.slip;
            this.setState({advice})            

        })
        .catch((err)=>{
            console.log(err);            

        })
    }


    render() {
        const {advice}=this.state;
        return (
            <div className="app">
                <div className="card">
                    <h2 className="heading">{advice}</h2>

                    <button className="button">
                        <span>Give me advice!</span>
                    </button>
                </div>
            </div>
           
        )
    }
}

export default App;
