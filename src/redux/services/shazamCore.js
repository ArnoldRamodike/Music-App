import { createApi, crreateAApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

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
            getTopCharts: builder.query({query: () => '/charts/world'}),
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreAPI