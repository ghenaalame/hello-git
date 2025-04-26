
import fs from 'fs';
import path from 'path';
import winston from 'winston';
import config from '../config';

// Destructure needed config values
const { isDev, logDir } = config;

// Ensure the log directory exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Define file log format
const fileLogFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.splat(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

// Define console log format (more readable with colors)
const consoleLogFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.splat(),
  winston.format.printf(({ timestamp, level, message, stack }) => {
    return stack
      ? `[${timestamp}] ${level}: ${message}\n${stack}`
      : `[${timestamp}] ${level}: ${message}`;
  })
);

// Create Winston logger instance
const logger = winston.createLogger({
  level: isDev ? 'debug' : 'info',
  format: fileLogFormat,
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      dirname: logDir,
      level: 'error',
      format: fileLogFormat,
    }),
    new winston.transports.File({
      filename: 'logs/all.log',
      dirname: logDir,
      format: fileLogFormat,
    }),
  ],
  exceptionHandlers: [
    new winston.transports.File({
      filename: 'logs/exceptions.log',
      dirname: logDir,
    }),
  ],
});

// If in development, also log to the console
if (isDev) {
  logger.add(new winston.transports.Console({
    format: consoleLogFormat,
  }));
}

export default logger;
