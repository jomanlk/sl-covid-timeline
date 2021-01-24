import Loading from '../components/Loader';
import { useEffect, useState } from 'react';
import StatBoxList from './StatBoxList';
import CasesChart from './CasesChart';

const DashboardPage = (props) => {
    let [apiData, setApiData] = useState(null);

    //fetch API data
    useEffect(() => {
        fetch('https://hpb.health.gov.lk/api/get-current-statistical')
            .then((requestRes) => requestRes.json())
            .then((res) => {
                setApiData(res.data);
            });
    }, []);

    if (apiData == null) {
        return <Loading />;
    }

    return (
        <>
            <div className="row mb-3">
                <StatBoxList
                    className="mb-2"
                    stats={getStatListData(apiData)}
                />
            </div>
            <div className="row">
                <div className="col-12">
                    <CasesChart dailyTests={apiData.daily_pcr_testing_data} />
                </div>
            </div>
        </>
    );
};

let getStatListData = function (apiData) {
    return [
        {
            title: 'Active cases',
            icon: 'bug',
            stat: apiData.local_active_cases,
        },
        {
            title: 'Total detected',
            icon: 'arrow-up-right',
            stat: apiData.local_total_cases,
        },
        {
            title: 'Total deaths',
            icon: 'circle-fill',
            stat: apiData.local_deaths,
        },
        {
            title: 'Total recoveries',
            icon: 'heart-fill',
            stat: apiData.local_recovered,
        },
    ];
};

export default DashboardPage;
