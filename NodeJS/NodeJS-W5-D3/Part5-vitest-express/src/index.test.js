import { it, describe, expect } from 'vitest'
import request from 'supertest'

import app from './index'

describe('Testing API', () => {

    it('should get main route', async () => {
        const res = await request(app).get('/')

        expect(res.body).toHaveProperty('message')
        expect(res.body).toEqual({ message: "health check"})
    })
})