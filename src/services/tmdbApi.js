import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = '6fa908e5750ec66fc37674ee00edac74'

const params = (params) => {
    return {
        api_key: API_KEY,
        language: 'en-US',
        ...params
    }
}

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,

    }),

    endpoints: (builder) => ({
        popular: builder.query({
            query: () => ({
                url: "/movie/popular",
                params: params()
            })
        }),
        genre: builder.query({
            query: () => ({
                url: "/genre/movie/list",
                params: params()
            })
        }),
        nowPlaying: builder.query({
            query: () => ({
                url: "/movie/now_playing",
                params: params()
            })
        }),
        topRated: builder.query({
            query: () => ({
                url: "/movie/top_rated",
                params: params()
            })
        }),
        movieById: builder.query({
            query: ({ id }) => {
                return {
                    url: `/movie/${id}`,
                    params: params({
                        'append_to_response': 'videos,reviews'
                    })
                }
            },

        })
    })
})

export const { usePopularQuery, useMovieByIdQuery, useNowPlayingQuery, useGenreQuery, useTopRatedQuery } = tmdbApi