class Logger {
    private static instance: Logger;
    private messageCount: number = 0;

    private constructor() {}

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        this.messageCount++;
        console.log(`Mensaje ${this.messageCount}: ${message}`);
    }
}

const logger1 = Logger.getInstance();
logger1.log("Este es el primer mensaje.");

const logger2 = Logger.getInstance();
logger2.log("Este es el segundo mensaje.");