import React, { Component } from 'react';
import Clock from './Clock';
import StopWatch from './StopWatch';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      deadline: 'January 26, 2020',
      newDeadline: '',
      stopdeadline: '00:00:00',
      newStopDeadline: ''
      // counter: 0
    }
  }
  changeDeadline(){
    // console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
    // this.setState({deadline: 'November 25, 2019'})
    // this.state.deadline ='November 25, 2019';
    // this.state.counter +=1;
  }
  changeStopDeadline(){
    this.setState({stopdeadline:this.state.newStopDeadline});
  }

  render() {
    return(
      <div className="App">
        <div className="App-title">
        Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
      <Form inline>
      <FormControl
       className="Input"
        placeholder='new date'
        onChange={event => this.setState({newDeadline: event.target.value})}
      />
      <Button onClick={() => this.changeDeadline()}>
        Submit
      </Button>
      </Form>
      <div className="App-title1">
      StopWatch to {this.state.stopdeadline}
      </div>
        <StopWatch
            deadline={this.state.deadline}
        />
        <Form inline>
        <FormControl
         className="Input"
          placeholder='Time'
          onChange={event => this.setState({newStopDeadline: event.target.value})}
        />
        <Button onClick={() => this.changeStopDeadline()}>
          Submit
        </Button>
        </Form>


      </div>
    )
  }
}

export default App;
