import "./Widgetlg.css"

const Widgetlg = () => {
  const Button=({type})=>{
    return <button className={"widgetlgbutton "  + type}>
      {type}
    </button>
  }
  return (
    <div className="Widgetlg">
<h3 className="widgetlgTitle">
  Latest Transactions
</h3>
<table className="widgetlgTable">
  <tbody>
  <tr className="widgetlgTr">
    <th className="widgetlgTh">Customer</th>
    <th className="widgetlgTh">Date</th>
    <th className="widgetlgTh">Amount</th>
    <th className="widgetlgTh">Status</th>
  </tr>
  <tr className="widgetlgTr">
    <td className="widgetlguser">
      <img src="téléchargement.jpeg" alt="" className="widgetlgimg" />
      <span className="widgetlgName">Susan Carol</span>
    </td>
    <td className="widgetlgDate">2 Jun 2021</td>
    <td className="widgetlgAmount">$22.56</td>
    <td className="widgetlgStatus"><Button type="Approved"/></td>
  </tr>

  <tr className="widgetlgTr">
    <td className="widgetlguser">
      <img src="téléchargement.jpeg" alt="" className="widgetlgimg" />
      <span className="widgetlgName">Susan Carol</span>
    </td>
    <td className="widgetlgDate">2 Jun 2021</td>
    <td className="widgetlgAmount">$22.56</td>
    <td className="widgetlgStatus"><Button type="Declained"/></td>
  </tr>

  <tr className="widgetlgTr">
    <td className="widgetlguser">
      <img src="téléchargement.jpeg" alt="" className="widgetlgimg" />
      <span className="widgetlgName">Susan Carol</span>
    </td>
    <td className="widgetlgDate">2 Jun 2021</td>
    <td className="widgetlgAmount">$22.56</td>
    <td className="widgetlgStatus"><Button type="Pending"/></td>
  </tr>

  <tr className="widgetlgTr">
    <td className="widgetlguser">
      <img src="téléchargement.jpeg" alt="" className="widgetlgimg" />
      <span className="widgetlgName">Susan Carol</span>
    </td>
    <td className="widgetlgDate">2 Jun 2021</td>
    <td className="widgetlgAmount">$22.56</td>
    <td className="widgetlgStatus"><Button type="Approved"/></td>
  </tr>
  </tbody>
</table>
    </div>
  )
}

export default Widgetlg