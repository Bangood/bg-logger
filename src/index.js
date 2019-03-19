import signale from './components/signale/signale';
import winston from './components/winston/winston';

export default class BgLogger {
    constructor(options = { env: 'development' }) {
        if (!BgLogger.instance) {
            BgLogger.instance = this;
        }
        switch (options.env) {
            case 'production':
                winston.init();
                this.logger = winston;
                break;
            default:
                this.logger = signale;
                break;
        }
        return BgLogger.instance;
    }
    info(arg) {
        this.logger.info(arg);
    }
    error(arg) {
        this.logger.error(arg);
    }
    success(arg) {
        this.logger.success(arg);
    }
};