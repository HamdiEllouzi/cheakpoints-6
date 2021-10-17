import logo from './logo.svg';
import './App.css';
import React from 'react';
const style = {
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Person:{ 
        fullName:'hamdi',
        bio:'random text', 
        imgSrc: logo,
        profession:'web dev'},
        show:false,
        count: 0
    }
  }
  componentDidMount() {
     setInterval(
      () => this.count(),
      1000
    );
  }
  count() {
    this.setState({
      count: this.state.count + 1
    });
  }

stateViewToggle = () => this.setState({show:!this.state.show})
  render() {
    const {fullName,bio,imgSrc,profession} = this.state.Person
    const {show,count}= this.state
    return <div style={style}>
      <h2>It is {count}s</h2>
      {(show && (
        <div style={style}>
          <img src={imgSrc} alt='logo' className='App-logo'/>
          <span>{fullName}</span>
          <span>{profession}</span>
          <span>{bio}</span>
        </div>
      ))}
      <button onClick={this.stateViewToggle}>{(!show)?'Show State':'hide State'}</button>
    </div>
  }
}

export default App;
