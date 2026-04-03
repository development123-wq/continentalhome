import React from 'react';

function CardBlock({ order }) {
    const cardData = [
        {
            name: 'Order Status',
            secondName: order?.order_status || 'N/A',
            icon: 'icofont-check-circled',
            bgColor: 'bg-success',
            mainbgColor: 'alert-success'
        },
        {
            name: 'Total Items',
            secondName: `${order?.total_quantity || 0} Products`,
            icon: 'icofont-shopping-cart',
            bgColor: 'bg-primary',
            mainbgColor: 'alert-primary'
        },
        {
            name: 'Total Payable',
            secondName: `$${order?.order_total_inc_tax || '0.00'}`,
            icon: 'icofont-currency-dollar',
            bgColor: 'bg-warning',
            mainbgColor: 'alert-warning'
        },
        {
            name: 'Order Date',
            secondName: new Date(order?.order_date).toLocaleDateString(),
            icon: 'icofont-calendar',
            bgColor: 'bg-info',
            mainbgColor: 'alert-info'
        }
    ];

    return (
        <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
            {cardData.map((d, i) => (
                <div key={'s' + i} className="col">
                    <div className={`${d.mainbgColor} alert mb-0`}>
                        <div className="d-flex align-items-center">
                            <div className={`avatar rounded no-thumbnail ${d.bgColor} text-light`}>
                                <i className={d.icon}></i>
                            </div>
                            <div className="flex-fill ms-3 text-truncate">
                                <div className="h6 mb-0">{d.name}</div>
                                <span className="small">{d.secondName}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardBlock;
