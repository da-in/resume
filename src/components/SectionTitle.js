import React from 'react';

function SectionTitle({ children }) {
    return (
        <p
            className="handwriting"
            style={{
                textAlign: 'center',
                paddingTop: '30px',
                paddingBottom: '15px',
                fontSize: '32px',
            }}
        >
            {children}
        </p>
    );
}

export default SectionTitle;
