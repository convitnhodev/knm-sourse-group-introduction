import NavBar from '../Components/nav/NavBar';
import IntroGroup from '../Pages/IntroGroup';
import Members from '../Pages/Members';
import Contact from '../Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import VHung from '../Pages/VHung';

function App() {
    return (
        <>
            <Routes>
                <Route path="/vhung" element={<VHung />} />
                <Route
                    path="*"
                    element={
                        <>
                            <NavBar />
                            <IntroGroup />
                            <Members />
                            <Contact />
                        </>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
