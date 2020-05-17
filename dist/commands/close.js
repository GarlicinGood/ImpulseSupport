"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "close";
    }
    help() {
        return "fuck you";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let suppliedReason = args.slice(1).join(" ") || "";
        let logChannel = messageObject.channel;
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username}!`)
                .then(message => {
                message.delete(50000);
            });
            return;
        }
        messageObject.channel.delete();
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvY2xvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixXQUFXO0lBQWhDO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFzQ3ZDLENBQUM7SUFwQ0csSUFBSTtRQUNBLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFFN0UsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25ELElBQUksVUFBVSxHQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUE7UUFFdkMsSUFBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUN2RDtZQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDO2lCQUNsRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBMkIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDOUMsQ0FBQyxDQUFDLENBQUE7WUFDTixPQUFPO1NBQ1Y7UUFHRCxhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBU2xDLENBQUM7Q0FHSjtBQXhDRCw4QkF3Q0MifQ==