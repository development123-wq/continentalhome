import React from 'react';

function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '4rem' }}>404</h1>
            <p style={{ fontSize: '1.5rem' }}>Page Not Found</p>
            <a href="/" className="btn btn-primary mt-3">Go to Home</a>
        </div>
    );
}

export default NotFound;
