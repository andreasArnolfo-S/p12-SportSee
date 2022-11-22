import { Route, Routes } from 'react-router-dom';

import Dashboard from './dashboard';
import Home from './home';

const Router = () => {
     return (
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/user/:id" element={<Dashboard />} />
          </Routes>
     );
};

export default Router;
