import React from 'react';

function AddressBlock({ order }) {
    if (!order) return null;

    const addressData = [
        {
            addressName: 'Billing Address',
            blockNumber: order.billing_company,
            address: `${order.billing_street_1}, ${order.billing_street_2 || ''}, ${order.billing_suburb}, ${order.billing_state}, ${order.billing_country}`,
            pincode: order.billing_zip,
            phone: order.billing_phone
        },
        {
            addressName: 'Shipping Address',
            blockNumber: order.shipping_company,
            address: `${order.shipping_street_1}, ${order.shipping_street_2 || ''}, ${order.shipping_suburb}, ${order.shipping_state}, ${order.shipping_country}`,
            pincode: order.shipping_zip,
            phone: order.shipping_phone
        }
    ];

    return (
        <>
            {addressData.map((d, i) => (
                <div key={'s' + i} className="col">
                    <div className="card">
                        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                            <h6 className="mb-0 fw-bold">{d.addressName}</h6>
                            <a href="#!" className="text-muted">Edit</a>
                        </div>
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label className="form-label col-6 col-sm-5">Block Number:</label>
                                    <span><strong>{d.blockNumber}</strong></span>
                                </div>
                                <div className="col-12">
                                    <label className="form-label col-6 col-sm-5">Address:</label>
                                    <span><strong>{d.address}</strong></span>
                                </div>
                                <div className="col-12">
                                    <label className="form-label col-6 col-sm-5">Pincode:</label>
                                    <span><strong>{d.pincode}</strong></span>
                                </div>
                                <div className="col-12">
                                    <label className="form-label col-6 col-sm-5">Phone:</label>
                                    <span><strong>{d.phone}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default AddressBlock;
