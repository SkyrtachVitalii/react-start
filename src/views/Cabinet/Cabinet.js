import './Cabinet.scss';
import Requests from '../../components/Cabinet/Request/Requests';

function Cabinet(){
    let requests = [
        {
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
        },
        {
            product: {
                name: "Samsung",
                price: '800$',
                comment: 'no comment'
            },
            customer: {
                firstName: "Valerii",
                lastName: 'Gor',
                isRegister: false
            }
        }
    ]
    return(
        <div className="Cabinet">
            <h1>User cabinet</h1>
            {requests.map(request => <Requests request={request}/>)}
        </div>
    );
}

export default Cabinet;