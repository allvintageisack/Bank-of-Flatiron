import React,{useState} from "react";

function AddTransactionForm() {
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState("")

  function handleSubmit(o) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: { "content-Type": "application/json" },

      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount:amount,
      }),
    })
  alert("Added innit")
  }
  
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit}  className="ui form">
        <div className="inline fields">
          <input value={date} onChange={(o)=>setDate(o.target.value)} type="date" name="date" />
          <input value={description} onChange={(o)=>setDescription(o.target.value)} type="text" name="description" placeholder="Description" />
          <input value={category} onChange={(o)=>setCategory(o.target.value)} type="text" name="category" placeholder="Category" />
          <input value={amount} onChange={(o)=>setAmount(o.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
