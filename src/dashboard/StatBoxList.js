import StatBox from './../components/StatBox/StatBox';
const StatBoxList = (props) => {
    return props.stats.map((stat, i) => {
        return (
            <div key={i} className="col-sm-6 col-md-3">
                <StatBox {...stat} />
            </div>
        );
    });
};

export default StatBoxList;
