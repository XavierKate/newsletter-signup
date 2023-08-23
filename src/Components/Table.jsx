import TableRow from "./TableRow"

function Table({ emails }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Newsletter Subscribers</th>
        </tr>
      </thead>
      <tbody>
        {emails.map((email) => (
          <TableRow key={email.id} email={email} />
        ))}
      </tbody>
    </table>
  )
}

export default Table
