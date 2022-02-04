import React from 'react';
import Statistics from '../Statistics/Statistics.jsx';
import Notification from 'components/Notification/Notification.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Section from 'components/Section/Section.jsx';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //state это объект с локальными свойсвами, которые в дальнейшем можем менять.
  //чтоб поменять stateб мы используем метод this.setState/
  increasesFeedback = e => {
    this.setState(prevState => {
      if (e.target.id === 'good') {
        return { good: prevState.good + 1 };
      }
      if (e.target.id === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (e.target.id === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positivePersentage = this.countTotalFeedback()
      ? Math.ceil((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
    return positivePersentage;
  };
  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.increasesFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
