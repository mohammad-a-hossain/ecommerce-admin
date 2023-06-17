import { apiSlice } from './apiSlice';

const ADMIN_URL = 'http://localhost:8008/api/admin'

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) =>({
        login: builder.mutation({
            query:(data) => ({
                url:`${ADMIN_URL}/login`,
                method:'POST',
                body:data,
            }),
        }),
        registration: builder.mutation({
            query: (data) => ({
              url: `${ADMIN_URL}/register`,
              method: 'POST',
              body: data,
            }),
          }),
    })
})

export const { useLoginMutation, 
              useRegistrationMutation } = adminApiSlice;