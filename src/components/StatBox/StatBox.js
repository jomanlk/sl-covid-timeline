import './statbox.css';

const StatBox = ({ title, icon, stat }) => {
    return (
        <div className="media statbox mb-2">
            <i className={'bi bi-' + icon}></i>
            <div className="media-body">
                <h5 className="mt-0">{stat}</h5>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default StatBox;
