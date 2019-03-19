import signale from './components/signale/signale';
import winston from './components/winston/winston';
let instance = null;

export default class BgLogger {
    constructor(options = { env: 'development' }) {
        if (!instance) {
            instance = this;
        }
        switch (options.env) {
            case 'production':
                this.logger = winston;
                break;
            default:
                this.logger = signale;
                break;
        }

        return instance;
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
