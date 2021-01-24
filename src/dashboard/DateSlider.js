import { useState } from 'react';

const DateSlider = ({ dailyTests }) => {
    let [currentDate, setCurrentDate] = useState(dailyTests[0]);
    let [currentIndex, setCurrentIndex] = useState(0);

    let handleSliderChange = function (e) {
        if (!dailyTests[e.target.value]) {
            return;
        }
        setCurrentDate(dailyTests[e.target.value]);
        setCurrentIndex(e.target.value);
    };

    return (
        <>
            {currentDate.date}
            <input
                type="range"
                min="0"
                max={dailyTests.length - 1}
                value={currentIndex}
                onChange={handleSliderChange}
            />
        </>
    );
};

export default DateSlider;
