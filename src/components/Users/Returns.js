// Returns.js
import React from 'react';

const Returns = () => {
  return (
    <div>
      <h2>Returns</h2>
      <p>Manage your returns.</p>
      <form>
        <label>
          Return Reason:
          <select name="returnReason">
            <option value="">Select reason</option>
            <option value="damaged">Damaged</option>
            <option value="wrongItem">Wrong Item</option>
            <option value="other">Other</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Returns;
