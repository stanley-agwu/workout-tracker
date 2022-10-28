// src/mocks/handlers.js
import { rest } from 'msw'
import { ENDPOINTS } from '../constants'

export const handlers = [
  rest.post(ENDPOINTS.SIGNIN, (req, res, ctx) => {
    return res(
      // Respond with a 400 status code
      ctx.status(200),
    )
  }),

  rest.post(ENDPOINTS.BASE_URL, (req, res, ctx) => {
    // const { title, repetitions, load } = req.text();
    return res(
      ctx.status(202, 'Mocked status'),
      ctx.json({
        title: "Power Lifting 2000kg",
        repetitions: '355',
        load: '20000',
        createdAt: "2022-10-07T09:39:42.138Z",
        updatedAt: "2022-10-19T19:29:45.653Z",
        _id: "633ff3dedfa60e8e88c274c5",
      }),
    )
  })
]