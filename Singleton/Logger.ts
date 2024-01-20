class Logger {

	constructor(protected logs: string[] = []) {
		this.info('new instance has been created');
		this.logs = [];
	}

	private log(type: string, message: string) {
		const formattedMessage = `${new Date().toISOString()}|[${type.toUpperCase()}]- ${message}`
		this.logs.push(formattedMessage);
		console.log(this.GetLogsCount(), formattedMessage);
	}

	GetLogsCount() {
		return this.logs.length;
	}

	info(message: string) {
		this.log('info', message)
	}

	trace(message: string) {
		this.log('trace', message)
	}

	warn(message: string) {
		this.log('warn', message)
	}
}

export default Logger;