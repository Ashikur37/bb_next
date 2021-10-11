import Moment from 'react-moment';
export default function PaymentStatus(props){
    const { Data } = props;
    return (
        <div className="col-lg-8">
            <h5 className="mb-3">Invoice {Data.InvoiceId} Details</h5>
            <table className="table table-sm table-responsive-sm table-bordered table-striped table-hover">
                <tbody>
                    <tr>
                        <td>Name: </td>
                        <td>{Data.CustomerName}</td>
                        <td>Created: </td>
                        <td><Moment format="YYYY/MMM/DD hh:mm:ss A">{Data.CreatedDate}</Moment></td>
                    </tr>
                    <tr>
                        <td>Cell: </td>
                        <td>{Data.CustomerMobile}</td>
                        <td>Email: </td>
                        <td>{Data.CustomerEmail}</td>
                    </tr>
                    <tr>
                        <td>Expiry TimeStamp: </td>
                        <td><Moment format="MMM DD, YYYY hh:mm:ss A">{new Date(Data.ExpiryDate +" "+ Data.ExpiryTime)}</Moment></td>
                        <td>Status: </td>
                        <td>{Data.InvoiceStatus}</td>
                    </tr>
                    <tr>
                        <td>Transaction Status: </td>
                        <td className={`font-weight-bold ${Data.InvoiceTransactions[0]?.TransactionStatus == "Failed" ? "text-danger":"text-success"}`}>{Data.InvoiceTransactions[0]?.TransactionStatus ?? "Unknown"}</td>
                        <td>Amount: </td>
                        <td>{Data.InvoiceDisplayValue}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}