import './Review.scss';
import { useParams } from 'react-router-dom';

function Review(){
    let {productId, reviewId} = useParams();
    return(
        <div className="Review">
            <h1>Product comment ID: {productId}, reviewId: {reviewId}</h1>
        </div>
    );
}

export default Review;