
import { Route, Routes } from 'react-router-dom';
import NotFound from './../components/NotFound/NotFound';
import Home from './home';
import Dashboard from './dashboard';

const Router = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/user/:id" element={<Dashboard />} />
               <Route path="/*" element={<NotFound />} />
          </Routes>
     );
};

export default Router;