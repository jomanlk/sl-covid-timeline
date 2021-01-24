import Chart from 'react-apexcharts';

const LineChart = (props) => {
    let chartState = getChartState(props.seriesData);
    return (
        <>
            <Chart
                options={chartState.options}
                series={chartState.series}
                type="line"
                height="300px"
            />
        </>
    );
};

let getChartState = function (dailyTests) {
    //separate the dates and counts
    let combinedData = [];

    dailyTests.forEach((obj) => {
        let dt = new Date(obj.date).getTime();
        combinedData.push([dt, obj.count]);
    });

    let chartState = {
        options: {
            chart: {
                id: 'positive_pcr_tests_',
            },
            title: {
                text: 'Positive Test Cases',
                align: 'left',
            },
            stroke: { curve: 'straight', width: 2 },
            xaxis: {
                type: 'datetime',
            },
        },
        series: [
            {
                name: 'Positive cases',
                data: combinedData,
            },
        ],
    };

    return chartState;
};

export default LineChart;
