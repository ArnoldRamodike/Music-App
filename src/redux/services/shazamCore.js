import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

    export const shazamCoreAPI = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=> {
                headers.set('X-RapidAPI-Key', 'ac6b1f1b2bmsh4f598a216b3acc2p1af414jsnebe50520f28f');

                return headers;
            },
        }),
        endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),

        getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
       
        getSongDetails: builder.query({ query: ({songid}) => `/tracks/details?track_id=${songid}` }),

        getSongRelated: builder.query({ query: ({songid}) => `/tracks/related?track_id=${songid}`}),

        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}`}),

        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}`}),

        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),

         }),
    });

    export const {
        useGetTopChartsQuery,
        useGetSongsByGenreQuery,
        useGetSongDetailsQuery,
        useGetSongRelatedQuery,
        useGetArtistDetailsQuery,
        useGetSongsByCountryQuery,
        useGetSongsBySearchQuery,
    } = shazamCoreAPI;