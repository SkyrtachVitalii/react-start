import './Cabinet.scss';
import Requests from '../../components/Cabinet/Request/Requests';

function Cabinet(){
    return(
        <div className="Cabinet">
            <h1>User cabinet</h1>
            <Requests/>
        </div>
    );
}

export default Cabinet;