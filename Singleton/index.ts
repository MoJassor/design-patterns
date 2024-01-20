import SingletonLogger from "./SingletonLogger";
import Logger from "./Logger";

const firstLogger = new Logger();
const firstSingletonLogger = new SingletonLogger().getInstance();

firstLogger.info('firstLogger...');
firstSingletonLogger.info('firstSingletonLogger...');

const secondLogger = new Logger();
const secondSingletonLogger = new SingletonLogger().getInstance();

secondLogger.info('secondLogger...');
secondSingletonLogger.info('secondSingletonLogger...');