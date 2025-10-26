import './index.css'

const DenominationItem = props => {
  const {denomiationDetails, onClickWAmount} = props
  const {value} = denomiationDetails
  const onUpdatedAmount = () => {
    onClickWAmount(value)
  }
  return (
    <li className="withdraw-amount-card">
      <button type="button" onClick={onUpdatedAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
