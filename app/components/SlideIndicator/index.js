import React from 'react';

const Index = ({ activeIndex, totalSlides }) => {
    const indicators = Array.from({ length: totalSlides }, (_, index) => (
        <div
            key={index}
            className={`indicator ${activeIndex === index ? 'active' : ''}`}
        />
    ));

    return <div className="indicators">{indicators}</div>;
};

export default Index;