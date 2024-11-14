var Logger = /** @class */ (function () {
    function Logger() {
        this.messageCount = 0;
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.log = function (message) {
        this.messageCount++;
        console.log("Mensaje ".concat(this.messageCount, ": ").concat(message));
    };
    return Logger;
}());
var logger1 = Logger.getInstance();
logger1.log("Este es el primer mensaje.");
var logger2 = Logger.getInstance();
logger2.log("Este es el segundo mensaje.");
