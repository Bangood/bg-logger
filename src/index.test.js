let expect = require('chai').expect;
import signale from './components/signale/signale';
import winston from './components/winston/winston';
import bgLogger from './index';
describe('index', () => {
    it('is a singleton',()=>{
        let logger = new bgLogger();
        let prodLogger = new bgLogger({env:'production'});
        expect(logger.logger).to.equal(prodLogger.logger);
    });
    describe('development env', () => {
        let logger = new bgLogger();
        it('current logger is signale', () => {
            expect(logger.logger).to.be.equal(signale);
        });
        it('info', () => {
            logger.info('info');
        });
        it('success', () => {
            logger.success('success');
        });
        it('error', () => {
            logger.error('error');
        });
    })

    describe('production env', () => {
        delete bgLogger.instance;
        let logger = new bgLogger({ env: 'production' });
        it('current logger is winston', () => {
            expect(logger.logger).to.be.equal(winston);
        });
        it('info', () => {
            logger.info('info');
        });
        it('success', () => {
            logger.success('success');
        });
        it('error', () => {
            logger.error('error');
        });
    })
});