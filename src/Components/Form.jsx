import { useState } from "react"

function Form({ addNewSubscriber }) {
  const [newEmail, setNewEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addNewSubscriber(newEmail)
    setNewEmail("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        name="email"
        value={newEmail}
        onChange={(e) => {
          setNewEmail(e.target.value)
        }}
      />
      <button type="submit">Subscribe</button>
    </form>
  )
}

export default Form
