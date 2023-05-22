import Panel from './componentes/Panel';

import { Route, Routes, Link } from 'react-router-dom';
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Panel />} />
            </Routes>

        </>
    )
}
export default App