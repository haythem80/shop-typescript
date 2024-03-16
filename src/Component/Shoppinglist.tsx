import React from 'react'
import Shoppingcard from '../Component/Shoppingcard'
import 'bootstrap/dist/css/bootstrap.min.css';

interface list {
    article: shop[];
}
interface shop {
    image:string;
    name:string;
    price:string;
    Description:string;
}

const Shoppinglist: React.FC <list> = ({article}) => {
  return (
    <div>
        {
            React.Children.toArray(
                article.map( el=> <Shoppingcard item={el} />)
            )
        }
    </div>
  );
}

export default Shoppinglist