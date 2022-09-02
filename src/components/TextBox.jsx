import React from 'react';

const TextBox = ({ Title, Desc }) => {
    return (
        <div className="card bg-dark mb-5 mb-lg-0 p-3">
            <div className="card-body">
                <div className="card-title"> {Title}</div>
                <div className="card-text">{Desc}</div>
            </div>
        </div>
    );
};

export default TextBox;
