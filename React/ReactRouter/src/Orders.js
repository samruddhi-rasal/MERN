import React from 'react';
import Order from './Order';
import data from './data/Orders.json';

class Orders extends React.Component {
  render() {
    const orders = data;

    return (
      <div>
        {
          orders.map((item) => (
            <Order
              key={item.id}
              id={item.id}
              customer={item.customer}
              orderdate={item.orderdate}
              amount={item.amount}
              status={item.status}
            />
          ))
        }
      </div>
    );
  }
}

export default Orders;