import React, { useState } from 'react';
import { Box, CircularProgress, Pagination, Stack } from '@mui/material';

import { useListPeopleQuery } from 'features/api';
import PersonListItem from '../PersonListItem';

const PeopleList = () => {
  const [page, setPage] = useState(1);
  const { data: people, isLoading } = useListPeopleQuery(page);

  if (isLoading) {
    return (
      <Box textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  if (!people?.results) {
    return <div>No people :(</div>;
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pagesCount = people?.count ? Math.ceil(people.count / 10) : 0;

  return (
    <div>
      <Stack spacing={2}>
        {people.results.map(({ name, ...data }) => (
          <PersonListItem key={name} name={name} {...data} />
        ))}
      </Stack>
      {pagesCount && (
        <Box mt={3}>
          <Pagination
            count={pagesCount}
            page={page}
            onChange={handleChange}
            sx={{
              justifyContent: 'center',
              display: 'flex',
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default PeopleList;
