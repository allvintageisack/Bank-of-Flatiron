import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch("http://localhost:8001/transactions" + query)
      .then((resp) => resp.json())
      .then(transaction => setTransaction(transaction))
  },
[query])

  function handlesearch(o) {
  setQuery(o.target.value)
  }
  return (
    <div>
      <Search handlesearch={handlesearch} />
      <AddTransactionForm />
      <TransactionsList transaction={transaction } />
    </div>
  );
}

export default AccountContainer;
