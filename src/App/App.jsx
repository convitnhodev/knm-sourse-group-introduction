import NavBar from '../Components/nav/NavBar';
import IntroGroup from '../Pages/IntroGroup';
import Members from '../Pages/Members';
import Contact from '../Pages/Contact';
import { Route, Routes } from 'react-router-dom';
import MemberInfo from '../Pages/MemberInfo';
import { members } from '../Constants/constants';

function App() {
    return (
        <>
            <Routes>
                {members.map((member, index) => (
                    <Route key={index} path={`/${member.id}`} element={<MemberInfo id={member.id} />} />
                ))}
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
