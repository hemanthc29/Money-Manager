
import './index.css'

const MoneyDetails = ({balance, income, expenses}) => (
  <div className="money-details-container">
    <div className="balance-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
        className="details-img"
      />
      <div>
        <p className="details-text">Your Balance</p>
        <p className="details-money" data-testid="balanceAmount">
          Rs {balance}
        </p>
      </div>
    </div>
    <div className="income-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
        className="details-img"
      />
      <div>
        <p className="details-text">Your Income</p>
        <p className="details-money" data-testid="incomeAmount">
          Rs {income}
        </p>
      </div>
    </div>
    <div className="expenses-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
        className="details-img"
      />
      <div>
        <p className="details-text">Your Expenses</p>
        <p className="details-money" data-testid="expensesAmount">
          Rs {expenses}
        </p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
