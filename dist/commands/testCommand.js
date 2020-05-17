"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "testCommand";
    }
    help() {
        return "This does nothing :D";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        messageObject.delete(0);
        messageObject.channel.send("1");
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdGVzdENvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxhQUFhLENBQUE7SUFxQjdDLENBQUM7SUFuQkcsSUFBSTtRQUNBLE9BQU8sc0JBQXNCLENBQUM7SUFDbEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBRXpCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUlELFVBQVUsQ0FBQyxJQUFjLEVBQUUsYUFBOEIsRUFBRSxNQUFzQjtRQUM3RSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXBDLENBQUM7Q0FHSjtBQXZCRCw4QkF1QkMifQ==