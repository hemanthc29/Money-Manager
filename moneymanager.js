// src/components/MoneyManager/index.js
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const MoneyManager = () => {
  const [transactionsList, setTransactionsList] = useState([])
  const [titleInput, setTitleInput] = useState('')
  const [amountInput, setAmountInput] = useState('')
  const [optionId, setOptionId] = useState(transactionTypeOptions[0].optionId)

  const onChangeTitle = event => {
    setTitleInput(event.target.value)
  }

  const onChangeAmount = event => {
    setAmountInput(event.target.value)
  }

  const onChangeOptionId = event => {
    setOptionId(event.target.value)
  }

  const onAddTransaction = event => {
    event.preventDefault()
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    setTransactionsList([...transactionsList, newTransaction])
    setTitleInput('')
    setAmountInput('')
    setOptionId(transactionTypeOptions[0].optionId)
  }

  const deleteTransaction = (id, type, amount) => {
    const updatedTransactionsList = transactionsList.filter(
      each => each.id !== id,
    )
    setTransactionsList(updatedTransactionsList)
  }

  const getBalance = () => {
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })

    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  const getIncome = () => {
    let incomeAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })

    return incomeAmount
  }

  const getExpenses = () => {
    let expensesAmount = 0

    transactionsList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })

    return expensesAmount
  }

  const balanceAmount = getBalance()
  const incomeAmount = getIncome()
  const expensesAmount = getExpenses()

  return (
    <div className="app-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="header-content">
            Welcome back to your{' '}
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balance={balanceAmount}
          income={incomeAmount}
          expenses={expensesAmount}
        />
        <div className="transaction-details">
          <form className="transaction-form" onSubmit={onAddTransaction}>
            <h1 className="transaction-header">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={onChangeTitle}
              className="input"
              placeholder="TITLE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              value={amountInput}
              onChange={onChangeAmount}
              className="input"
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="select">
              TYPE
            </label>
            <select
              id="select"
              className="input"
              value={optionId}
              onChange={onChangeOptionId}
            >
              {transactionTypeOptions.map(eachOption => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transaction={eachTransaction}
                    deleteTransaction={deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoneyManager
