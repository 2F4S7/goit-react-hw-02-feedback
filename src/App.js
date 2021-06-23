import React, { Component } from 'react';
import './MyGit/MyGit.module.css';
import Feedback from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification/Notification';

import MyGit from './MyGit/MyGit';
import HeaderSection from './components/Section/Header/Header';
import Main from './components/Section/Main/Main';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };
  countPositiveState = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveState = this.countPositiveState();
    return (
      <div>
        <MyGit title="React Home Work Feedback 02" />
        <HeaderSection title="Pleaseleave feedback">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </HeaderSection>
        <Main>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveState={positiveState}
            />
          ) : (
            <Notification msg="No feedback given" />
          )}
        </Main>
      </div>
    );
  }
}

export default App;
