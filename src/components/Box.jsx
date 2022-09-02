import React from 'react';

const Box = ({ Img, Text }) => {
    return (
        <div className="card mb-5 mb-lg-0 bg-transparent" style={{ width: '18rem' }}>
            <img src={Img} className="card-img-top" alt="" />
            <div className="card-body">
                <div className="card-title text-center">{Text}</div>
            </div>
        </div>
    );
};

export default Box;
