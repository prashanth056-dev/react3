import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count !== 200) {
      this.setState(prevCount => ({count: prevCount.count + 10}))
    }
  }

  brake = () => {
    const {count} = this.state
    if (count !== 0) {
      this.setState(prevCount => ({count: prevCount.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="mainBg">
        <h1 className="head1">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h3 className="head3">Speed is {count}mph</h3>
        <p className="info">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnCont">
          <button className="btn1" type="submit" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="btn2" type="submit" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
