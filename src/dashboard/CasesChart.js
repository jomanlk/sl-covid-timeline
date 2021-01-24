import LineChart from './../components/Charts/LineChart';

const CasesChart = (props) => {
    return (
        <>
            <LineChart seriesData={props.dailyTests} />
        </>
    );
};

export default CasesChart;
