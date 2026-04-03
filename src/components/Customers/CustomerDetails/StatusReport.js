import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function StatusReport({ customer, orders = [] }) {
  // Dummy/fallback values if no real data available
  const productVisits = customer?.productVisits || 54;
  const productBuy = orders.length;
  const commentCount = customer?.commentCount || 10;
  const totalSpentHours = customer?.totalSpentHours || 1024;

  // Calculated progress percentages (max 100)
  const visitPercent = Math.min(100, (productVisits / 60) * 100);
  const buyPercent = Math.min(100, (productBuy / 50) * 100);
  const commentPercent = Math.min(100, (commentCount / 100) * 100);
  const spentTimePercent = Math.min(100, (totalSpentHours / 1500) * 100);

  return (
    <>
      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
        <h6 className="mb-0 fw-bold">Status report</h6>
      </div>

      <div className="card-body">
        <ul className="list-unstyled mb-0">
          <li className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">{productVisits}</h6>
              <span className="small text-muted">Product Visit</span>
            </div>
            <ProgressBar variant="success" style={{ height: '2px' }} now={visitPercent} />
          </li>
          <li className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">{productBuy}</h6>
              <span className="small text-muted">Product Buy</span>
            </div>
            <ProgressBar variant="info" style={{ height: '2px' }} now={buyPercent} />
          </li>
          <li className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">{commentCount}</h6>
              <span className="small text-muted">Comment on Product</span>
            </div>
            <ProgressBar variant="dark" style={{ height: '2px' }} now={commentPercent} />
          </li>
          <li className="mb-0">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h6 className="mb-0">{totalSpentHours} Hours</h6>
              <span className="small text-muted">Total spent time</span>
            </div>
            <ProgressBar variant="danger" style={{ height: '2px' }} now={spentTimePercent} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default StatusReport;
