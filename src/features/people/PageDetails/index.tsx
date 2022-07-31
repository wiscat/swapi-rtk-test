import { useParams, Navigate, Link } from 'react-router-dom';
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableRow,
  TableCell,
  styled,
  Button,
} from '@mui/material';
import React from 'react';

import Layout from 'app/Layout';
import { useGetCharacterDetailsQuery, Character } from 'features/api';
import { useAppSelector } from 'app/hooks';
import { selectPeople } from 'features/people/peopleSlice';

const Header = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PageDetails = () => {
  const { id } = useParams();

  const peopleMap = useAppSelector(selectPeople);

  const { data, isLoading } = useGetCharacterDetailsQuery(id!, {
    skip: !id,
  });

  if (!id) {
    return <Navigate to="/" />;
  }

  if (!data && !isLoading) {
    return <Navigate to="/" />;
  }

  if (isLoading && !peopleMap[id]) {
    return (
      <Box textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  const person = data || peopleMap[id];

  return (
    <Layout>
      <Header>
        <h1>{person?.name}</h1>
        <Button component={Link} to="/">
          Back
        </Button>
      </Header>
      <Paper elevation={1} sx={{ padding: '24px' }}>
        <Table>
          {Object.keys(person).map((key) => {
            const value = person[key as keyof Character];
            return (
              <TableRow>
                <TableCell>{key}</TableCell>
                <TableCell>
                  {Array.isArray(value) ? value.join(' ') : value}
                </TableCell>
              </TableRow>
            );
          })}
        </Table>
      </Paper>
    </Layout>
  );
};

export default PageDetails;
