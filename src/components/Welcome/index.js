// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  isButtonClicked = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState(prevState => ({isSubscribed: !prevState}))
    } else {
      this.setState(prevState => ({isSubscribed: prevState}))
    }
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Subscribe' : 'Subscribed'

    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>

        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.isButtonClicked}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
