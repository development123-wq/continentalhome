import React from 'react';

function PricingInfo() {
    return (
        <>
            <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                <h6 className="m-0 fw-bold">Pricing Info</h6>
            </div>
            <div className="card-body">
                <div className="row g-3 align-items-center">
                    <div className="col-md-12">
                        <label className="form-label">Product Price Old</label>
                        <input type="text" className="form-control" name="proaddpriceold" placeholder="$0.00" onChange={() => { }} />
                    </div>
                    <div className="col-md-12">
                        <label className="form-label">Product Price New</label>
                        <input type="text" className="form-control" name="proaddpricenew" placeholder="$0.00" onChange={() => { }} />
                    </div>
                    {/* <div className="col-md-12">
                        <label className="form-label">Product Coupon</label>
                        <input type="text" className="form-control" name="proaddpricecoupon" placeholder="$0.00" onChange={() => { }} />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default PricingInfo;