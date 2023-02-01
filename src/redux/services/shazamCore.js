import { createApi, crreateAApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

    export const shazamCoreAPI = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=> {
                headers.set('X-RapidAPI-Key', '..');

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
