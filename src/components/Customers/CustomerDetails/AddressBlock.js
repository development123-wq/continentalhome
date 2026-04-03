import React from 'react';

function AddressBlock({ address }) {
  if (!address) return null;

  return (
    <div className="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-2 row-deck">
      <div className="col">
        <div className="card auth-detailblock">
          <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
            <h6 className="mb-0 fw-bold">Address</h6>
          </div>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Block Number:</label>
                <span><strong>{address.line1 || '-'}</strong></span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Address:</label>
                <span><strong>{address.line2 || '-'}</strong></span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Pincode:</label>
                <span><strong>{address.zip || '-'}</strong></span>
              </div>
              <div className="col-12">
                <label className="form-label col-6 col-sm-5">Phone:</label>
                <span><strong>{address.phone || '-'}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressBlock;
