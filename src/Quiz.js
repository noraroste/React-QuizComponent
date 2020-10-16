import React, { Component } from 'react'

let quizData = require('./quiz_data.json')

class Quiz extends Component{
    constructor(props){
        super(props);
        this.state = {quiz_position: 1}
    }

    render(){
        let position = this.state.quiz_position;
        console.log(position);
        let resObj = quizData.quiz_questions.find(o=>o.id===position)
        return(
            <div>
                <div className="QuizQuestion">
                    {resObj.instruction_text}
                </div>
            </div>
        )
    }


}
export default Quiz