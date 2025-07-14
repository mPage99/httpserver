import { describe, expect, it } from 'vitest'
import { Pages } from './schemas/routingSchemas'

const request1  = {
    requestLine: { method: 'GET', path: '/home', version: 'HTTP/1.1' },
    headers: { host: 'localhost:8124', userAgent: 'curl/8.7.1', accept: '*/*' }
}

const request2  = {
    requestLine: { method: 'GET', path: '/login', version: 'HTTP/1.1' },
    headers: { host: 'localhost:8124', userAgent: 'curl/8.7.1', accept: '*/*' }
}
describe('Routing Validation', () => {
    it('should check if the path is valid', () => {
        expect(() => Pages.parse('/home')).to.not.throw()
        expect(() => Pages.parse('/login')).to.not.throw()
    })
})