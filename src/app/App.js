import './App.css';
import Header from './Header';

import DashboardPage from '../dashboard/DashboardPage';

function App() {
    return (
        <>
            <Header />
            <main role="main" className="container">
                <DashboardPage />
            </main>
        </>
    );
}

export default App;
