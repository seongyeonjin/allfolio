import React from 'react';

const PortfolioItem = () => {
    return (
        <li>
            <img src="/images/project/projectImg1.png" alt="" />
            <div className="box">
                <img src="/images/project/profile1.png" alt="" />
                <strong>프로젝트명</strong>
            </div>
        </li>
    );
};

export default PortfolioItem;