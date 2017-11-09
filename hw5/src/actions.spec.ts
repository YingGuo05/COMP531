import {resource,url,resource_test ,login,fetchArticles,error,correct,navigate} from './profileActions'
import fetch, { mock } from 'mock-fetch';
import { TestBed, async, inject } from '@angular/core/testing';
const mockery = require('mockery');
//check if it is a resource
describe('Test Actions', () => {
    beforeEach(async(() => {
        if (mockery.enable) {
        mockery.enable({warnOnUnregistered: false});
        mockery.registerMock('node-fetch', fetch);
        require('node-fetch');
        }
        
    }));
    afterEach(() => {
        if (mockery.enable) {
          mockery.deregisterMock('node-fetch');
          mockery.disable();
        }
    });


// check if it give back a http error
it('resource should give me the http error', (done)=> {
    fetchArticles()
    .catch(e=>
        expect(e).not.toEqual(null)
    )
    .then(done)
});
//check if it is postable
it('resource should be POSTable', (done)=> {
    const username = 'username'
    const password = 'password'
    const user={
        name:username,
        password:password
    }
    mock(`${url}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        json: {
            usr:{username, password}
        }
    })
    
    login(username, password)
    .then( r => {
        expect(r.usr.password).toEqual(user.password)
        expect(r.usr.username).toEqual(user.name)
    })
    .then(done)
    .catch(done)
});
it('resource should be a resource', (done)=> {
    mock(`${url}/resource_test`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    resource_test('test resource should be a resource')
    .then(r => {
        expect(r.body).toEqual('{"test":"test resource should be a resource"}')
    })
    .then(done)
    .catch(done)
});
it('should display error info to user', (done)=> {
    mock(`${url}/error`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    error('error info')
    .then(r => {
        expect(r.body).toEqual('{"error":"error info"}')
    })
    .then(done)
    .catch(done)
});
it('should display correct info to user', (done)=> {
    mock(`${url}/correct`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    correct('correct info')
    .then(r => {
        expect(r.body).toEqual('{"correct":"correct info"}')
    })
    .then(done)
    .catch(done)
});
it('should navigate to other page', (done)=> {
    const url = '{"cur_url":"main"}'
    mock(`${url}/navigate`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    navigate()
    .then(res =>{
        return res.body
    })
    .then(r => {
        expect(r).toEqual(url)
    })
    .then(done)
    .catch(done)
});

})


	

