let expect = require('chai').expect;
import signale from './components/signale/signale';
import bgLogger from './index';
describe('index', ()=>{
    describe('development env',()=>{
        it('current logger is signale', ()=>{
            let logger = new bgLogger();
            expect(logger.logger).to.be.equal(signale);
        });
    })
});