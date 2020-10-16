import React, {Component} from 'react'

class QuizQuestion extends Component{

    render(){
        return(
            <main>
                <section>
                    <p>// instruction text goes here</p>
                </section>
                <section className="buttons">
                  <ul>
                    <li>
                        {this.props[1].quiz_question}
                    </li>
                    //quiz question button logic goes here
                  </ul>
                </section>
              </main>
        )
    }
}
export default QuizQuestion