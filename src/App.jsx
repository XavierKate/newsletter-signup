import { useState } from "react"
import emailList from "./database.js"
import Form from "./Components/Form"
import Table from "./Components/Table"
import logo from "./images/logo.png"

function App() {
  const [emails, setEmails] = useState(emailList)

  const addNewSubscriber = (newEmail) => {
    const newSubscriber = {
      id: emails.length + 1,
      email: newEmail,
    }

    setEmails([...emails, newSubscriber])
  }

  return (
    <div className="container">
      <img src={logo} alt="Family Recipes Logo" />
      <h2>Newsletter Signup!</h2>
      <Form addNewSubscriber={addNewSubscriber} />
      <Table emails={emails} />
    </div>
  )
}

export default App
