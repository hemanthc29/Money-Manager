
import './index.css'

const TransactionItem = ({transaction, deleteTransaction}) => {
  const {id, title, amount, type} = transaction

  const onDeleteTransaction = () => {
    deleteTransaction(id, type, amount)
  }

  return (
    <li className="transaction-item">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <button
        className="delete-button"
        type="button"
        onClick={onDeleteTransaction}
        data-testid="delete"
      >
        <img
          className="delete-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
