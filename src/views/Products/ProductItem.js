import './Products.scss';
import { useParams } from 'react-router-dom';

function ProductItem(){
    let {id} = useParams();
    return(
        <div className="ProductItem">
            <p>Product item id: {id}</p>
        </div>
    );
}

export default ProductItem;