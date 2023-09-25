import React from 'react';
import './Requests.scss';
import RequestsProduct from './RequestsProduct';
import RequestsCustomer from './RequestsCustomer';

class Requests extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            status: 'In work',
            isPayed: false
        }
        this.cancelOrder = this.cancelOrder.bind(this);
        this.pay = this.pay.bind(this);
    }

    cancelOrder() {
        this.setState({status: 'Canceled'})
        console.log('Cancel order');
        console.log(this);
    }

    takeToWork(){
        this.setState({status: "Taken to work"})
        console.log('takeToWork');
        console.log(this);
    }

    pay(){
        this.setState({isPayed: !this.state.isPayed})
    }

    render(){
        let request = {
            product: {
                name: "iPhone",
                price: '1000$',
                comment: 'only black'
            },
            customer: {
                firstName: "Vitalii",
                lastName: 'Skyrtach',
                isRegister: true
            }
        }

        return(
            <div className="Requests">
                <div className="Requests__status">{this.state.status}</div>
                <RequestsProduct product={request.product} isPayed={this.state.isPayed}/>
                <RequestsCustomer customer={request.customer}/>
                <div className="Requests__actions">
                <button type='button' onClick={this.pay}>Payed</button>
                    <button type='button' onClick={()=>this.takeToWork()}>Take to work</button>
                    <button type='button' onClick={this.cancelOrder}>Abort order</button>
                </div>
            </div>
        )
    }
}

export default Requests;