import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { updatePeople } from 'features/people/peopleSlice';

export type Character = {
  name: string;
  url: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
};

type ListResponse<T> = {
  count: number;
  next: string | null; // https://swapi.dev/api/people/?page=2
  previous: string | null;
  results: T[];
};

// https://swapi.dev/api/people
export const swapi = createApi({
  reducerPath: 'swapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    listPeople: builder.query<ListResponse<Character>, number | void>({
      query: (page = 1) => `people?page=${page}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data: people } = await queryFulfilled;

          (people?.results || []).forEach((person) => {
            const id = person.url.replace(/\/$/, '').split('/').reverse()[0];
            dispatch(updatePeople({ id, person }));
          });
        } catch (e) {
          console.log(e);
        }
      },
    }),
    getCharacterDetails: builder.query<Character, string>({
      query: (id: string) => `people/${id}`,
    }),
  }),
});

export const { useListPeopleQuery, useGetCharacterDetailsQuery } = swapi;
