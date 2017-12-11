import { TestBed, async, inject } from '@angular/core/testing';
import fetch, { mock } from 'mock-fetch';
import { url, login, logout }  from '../../profileActions';
import { LoginService } from './login.service';

import { NavService } from '../main/nav.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './auth.component';
const mockery = require('mockery');

describe('Test the log in and log out action', () => {
    let shareService : ShareService;
    const users = [{name: 'yg45', password: '12345' }]

    beforeEach(async(() => {
        if (mockery.enable) {
        mockery.enable({warnOnUnregistered: false});
        mockery.registerMock('node-fetch', fetch);
        require('node-fetch');
        }
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [],
            providers: [ShareService, LoginService, NavService]
        });
    }));
    afterEach(() => {
        if (mockery.enable) {
          mockery.deregisterMock('node-fetch');
          mockery.disable();
        }
    });

    it('should log the user in', inject([LoginService], (service: LoginService, done)=> {
        const username = 'yg45'
        const password = '12345'
        mock(`${url}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            json: { username, password }
        })

        login(username, password)
            .then( r => {
                expect(service.loginValidate(users, username,password)).toEqual(true)
            })
            .then(done)
            .catch(done)
    }));
    
    it('should not log invalid user in', inject([LoginService], (service: LoginService, done) => {
        const username = 'wrong'
        const password = 'wrong'
        mock(`${url}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            status: 404,
            json: { username, password }
        })
        login(username, password)
        
        .then(r => {
            expect(service.loginValidate(users, username, password)).toEqual(false)
        })
        .then(done)
        .catch(done)
    }));
    it(`should log the user out`, inject([NavService], (service: NavService, done) => {
        mock(`${url}/logout`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
        });
        logout()
            .then(_ => {
                service.changeState()
                expect(localStorage.getItem('state')).toEqual('logout')
            })
            .then(done)
            .catch(done)
        }));
   
});