import React from 'react';

function SectionTitle({ children }) {
    return (
        <p
            className="handwriting"
            style={{
                textAlign: 'center',
                paddingTop: '30px',
                paddingBottom: '15px',
            }}
        >
            {children}
        </p>
    );
}

export default SectionTitle;
