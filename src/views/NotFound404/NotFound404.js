import './NotFound404.scss';
import { Link } from 'react-router-dom';

function NotFound404(){
    return(
        <div className="NotFound404">
            <h1>NotFound404</h1>
            <p>Page not found <Link to="/">Return to Main</Link></p>
        </div>
    );
}

export default NotFound404;