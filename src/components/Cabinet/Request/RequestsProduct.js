import './Requests.scss';

function RequestsProduct(props) {
    let {name, price, comment} = props.product;
    let {isPayed} = props;
    return (
        <div className="RequestsProduct">
            <h3>Product info</h3>
            <p>Product: {name}</p>
            <p>Price: {price}</p>
            <p>Is payed: {isPayed ? 'Payed' : 'Not payed'}</p>
            <p>Comment: {comment}</p>
        </div>
    )
}

export default RequestsProduct;