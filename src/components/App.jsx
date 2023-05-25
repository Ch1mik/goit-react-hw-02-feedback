import React, { Component } from "react";
import s from './App.module.css';
import Feedback from "./Feedback/Feedback";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }))
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
 countPositiveFeedbackPercentage() {
    const { good } = this.state;
  const totalFeedback = this.countTotalFeedback();
  return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#93c5fa'
      }}
    >
      <div className={s.container}>
        <Section title="Please leave feedback">
          <Feedback
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          </Section>
          <Section title="Statistics">
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
               <Notification message="There is no feedback"></Notification> 
            )}
          </Section>
        </div>
      </div>
    )
  }
};


// return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Feedback/>
//     </div>
//   );