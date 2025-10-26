import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    amount: 2000,
  }
  onClickWAmount = value => {
    this.setState(prevState => ({
      amount: prevState.amount - value,
    }))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="name-card">
          <div className="name-img">V</div>
          <h1 className="heading">Vivek Aripalli</h1>
        </div>

        <div className="balance-card">
          <p className="balance-head">Your Balance</p>
          <div className="balance-rupee">
            <p className="balance-amount">{amount}</p>
            <p className="para-amount">In Rupees</p>
          </div>
        </div>

        <div className="withdraw-card">
          <p className="withdraw-head">Withdraw</p>
          <p className="para-withdraw">CHOOSE SUM (IN RUPEES) </p>
          <ul>
            {denominationsList.map(eachList => (
              <DenominationItem
                key={eachList.id}
                denomiationDetails={eachList}
                onClickWAmount={this.onClickWAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
