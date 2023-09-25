import './Requests.scss';


function RequestsCustomer(props){
    let {firstName, lastName, isRegister} = props.customer;
    return(
        <div className="RequestsCustomer">
            <h3>Customer info</h3>
            <p>Name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Registration: {isRegister ? 'Yes': 'No'}</p>
        </div>
    )
}

export default RequestsCustomer;