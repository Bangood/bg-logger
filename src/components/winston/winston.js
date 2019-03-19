import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
const myFormat = format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
const allLoggerTransport = new transports.DailyRotateFile({
    dirname: 'logs/all',
    filename: '%DATE%.log',
    level: 'info',
    colorize: true,
    maxSize: '5m',
    maxFiles: '7d',
    datePattern: 'YYYY-MM-DD-HH',
    label: `pid:${process.pid}`,
});
const errorTransport = new transports.File({
    name: 'error',
    filename: 'logs/error.log',
    level: 'error',
    colorize: true,
});
const logger = createLogger({
    format: format.combine(
        format.label({ label: `pid:${process.pid}` }),
        format.timestamp(),
        myFormat
    ),
    transports: [
        allLoggerTransport,
        errorTransport
    ],
    exceptionHandlers: [
        new transports.File({ filename: 'logs/exceptions.log' })
    ]
});
export default {
    info: (arg) => {
        logger.info(arg);
    },
    success: (arg) => {
        logger.info(arg);
    },
    error: (arg) => {
        logger.error(arg);
    }
};