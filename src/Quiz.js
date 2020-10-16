import React, { Component } from 'react'
import QuizQuestion from "./QuizQuestion"
let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1}
    }

    render(){
        let position = this.state.quiz_position;
        let resObj = quizData.quiz_questions[position-1];
        console.log(resObj);
        return(
            <div>
                <QuizQuestion quiz_questions={resObj}/>
            </div>
        )
    }


}
export default Quiz