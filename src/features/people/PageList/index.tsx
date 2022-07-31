import React from 'react';

import Layout from 'app/Layout';
import PeopleList from '../PeopleList';

const PageList = () => {
  return (
    <Layout>
      <h1>People</h1>
      <div>
        <PeopleList />
      </div>
    </Layout>
  );
};

export default PageList;
