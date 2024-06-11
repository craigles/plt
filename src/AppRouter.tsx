import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Gigs } from './sections/Gigs';

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/gigs" Component={Gigs} />
            </Routes>
        </BrowserRouter>
    );
}