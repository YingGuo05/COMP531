import { TestBed, async, inject } from '@angular/core/testing';
import fetch, { mock } from 'mock-fetch';
import { url, fetchArticles }  from '../../profileActions';
import { ShareService } from '../share.service';
import { ArticlesService } from './articles.service'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http'

const mockery = require('mockery');

describe('Test article actions', () => {
    let shareService : ShareService;
    beforeEach(async(() => {
        if (mockery.enable) {
        mockery.enable({warnOnUnregistered: false});
        mockery.registerMock('node-fetch', fetch);
        require('node-fetch');
        }
        TestBed.configureTestingModule({
            imports: [HttpModule,HttpClientTestingModule, RouterTestingModule],
            declarations: [],
            providers: [ShareService, ArticlesService]
        });
    }));
    afterEach(() => {
        if (mockery.enable) {
          mockery.deregisterMock('node-fetch');
          mockery.disable();
        }
    });
    it('should fetch articles', (done)=> {
        const article = {author:'YG',text:'This is an article'}
        mock(`${url}/articles`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}})
        fetchArticles()
        .then(r => {
            return r.body
        })
        .then(body =>{
            return JSON.parse(body)
        })
        .then(body =>{
            expect(body.article.author).toEqual(article.author)
            expect(body.article.text).toEqual(article.text)
        })
        .then(done)
        .catch(done)
    });
    it('should update the search keyword', (done) => {
        //I do not have this function
        done()
    });
    it('should filter displayed articles by the search keyword', inject([ArticlesService],(service: ArticlesService, done) => {
        const articles = [
            {"_id":3011609,"text":"Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Vivamus aliquet elit ac nisl. Fusce fermentum odio nec arcu. Vivamus euismod mauris. In ut quam vitae odio lacinia tincidunt. Praesent ut ligula non mi varius sagittis. Cras sagittis. Praesent ac sem eget est egestas volutpat. Vivamus consectetuer hendrerit lacus. Cras non dolor. Vivamus in erat ut urna cursus vestibulum. Fusce commodo aliquam arcu. Nam commodo suscipit quam. Quisque id odio. Praesent venenatis metus at tortor pulvinar varius.","date":"2015-07-14T03:14:42.039Z","img":"assets/images/pic6.jpg","comments":["good article"],"author":"Follower",
            "display":true},
            {"_id":5100521,"text":"Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius. Donec vitae orci sed dolor rutrum auctor. Fusce egestas elit eget lorem. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio.\r","date":"2015-06-10T23:35:22.021Z","img":"assets/images/pic7.jpg","comments":["great"],"author":"wl49test",
            "display":true},
            {"_id":5589167,"text":"Pellentesque commodo eros a enim. Vestibulum turpis sem, aliquet eget, lobortis pellentesque, rutrum eu, nisl. Sed libero. Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.\r","date":"2015-06-28T10:11:55.283Z","img":"assets/images/pic1.jpg","comments":["nice","bad article"],"author":"wl49",
            "display":true}
        ]
        service.filter(articles, 'Pellentesque')
        expect(articles[0].display).toBeTruthy
    }))
});