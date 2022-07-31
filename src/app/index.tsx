import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import PeoplePageDetails from 'features/people/PageDetails';
import PeoplePageList from 'features/people/PageList';

const App = () => {
  let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/people/:id" element={<PeoplePageDetails />} />
      <Route path="*" element={<PeoplePageList />} />
    </Routes>
  );
};

export default App;
