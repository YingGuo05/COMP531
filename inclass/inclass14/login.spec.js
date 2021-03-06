import { expect } from 'chai'
import { go, sleep, findId, findCSS, By } from './selenium'
import common from './common'

describe('Test Dummy Server Example Page', () => {

    const preamble = 'you are logged in as'

    before('should log in', (done) => {
        go().then(common.login).then(done)
    })

    it('should log in as the test user', (done) => {
        sleep(500)
            .then(findId('message').getText()
                .then(text => {
                    expect(text.indexOf(preamble)).to.equal(0)
                })
                .then(done))
    })

    it("Update the headline and verify the change", (done) => {
        // IMPLEMENT ME
        let oldHeadline = 'old headline'
        let newHeadline = 'new headline'
        // find the headline input
         // .sendKeys(new headline message)
        sleep(500)
        .then(findId('newHeadline').clear())
        .then(findId('newHeadline').sendKeys(newHeadline))
        .then(findId('headline').click())
        .then(sleep(1000))
        // verify the headline is updated
        .then(findId('message').getText()
        .then(text=>{expect(text).to.equal("new headline: " + newHeadline)})
    )
        .then(sleep(1000))
        // .sendKeys(the old headline message)
        .then(findId('newHeadline').clear())
        .then(findId('newHeadline').sendKeys(oldHeadline))
        .then(findId('headline').click())
        .then(sleep(1000))
        // verify the headline is updated
        .then(findId('message').getText()
        .then(text=>{
            expect(text).to.equal("new headline: " + oldHeadline)
        })
        .then(done))  
        })

    after('should log out', (done) => {
        common.logout().then(done)
    })
})
