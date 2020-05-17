"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class testCommand {
    constructor() {
        this._command = "supportTicket";
    }
    help() {
        return "Creates a private text channel for help.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        let guild = messageObject.guild;
        let currentUser = client.user;
        messageObject.delete(0);
        var logsChannel = guild.channels.find(channel => channel.id == "bot-logs");
        var whatever = messageObject.channel;
        let admin = messageObject.member.hasPermission('ADMINISTRATOR');
        whatever.fetchMessage("709250470652280894")
            .then(message => {
            console.log("I found da message");
            var id = Number(message.content);
            var name = `support-ticket-${id.toString()}`;
            guild.createChannel(name, {
                type: 'text',
                permissionOverwrites: [
                    { id: messageObject.author.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                    { id: message.guild.id,
                        deny: ['VIEW_CHANNEL', 'READ_MESSAGES'] },
                    { id: ('685311285902049280'),
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] },
                ],
                parent: '685414464006258698'
            });
            id = id + 1;
            message.edit((id).toString());
        })
            .catch(error => console.log(error));
    }
}
exports.default = testCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydFRpY2tldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zdXBwb3J0VGlja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsV0FBVztJQUFoQztRQUVxQixhQUFRLEdBQUcsZUFBZSxDQUFBO0lBZ0cvQyxDQUFDO0lBOUZHLElBQUk7UUFDQSxPQUFPLDBDQUEwQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLGFBQThCLEVBQUUsTUFBc0I7UUFDN0UsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQzlCLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFLeEIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLElBQUksUUFBUSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUE7UUFFL0QsUUFBUSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQzthQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUE7WUFFakMsSUFBSSxFQUFFLEdBQVUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN2QyxJQUFJLElBQUksR0FBRyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7WUFDN0MsS0FBSyxDQUFDLGFBQWEsQ0FDZixJQUFJLEVBQ0o7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osb0JBQW9CLEVBQUU7b0JBQ2xCLEVBQUUsRUFBRSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDNUIsS0FBSyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFDO29CQUUxQyxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3BCLElBQUksRUFBRSxDQUFDLGNBQWMsRUFBRSxlQUFlLENBQUMsRUFBQztvQkFFekMsRUFBQyxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDMUIsS0FBSyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsQ0FBQyxFQUFDO2lCQVM3QztnQkFDRCxNQUFNLEVBQUUsb0JBQW9CO2FBSS9CLENBR0osQ0FBQTtZQUdELEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7UUFDakMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNsQztJQTBCVCxDQUFDO0NBS0o7QUFsR0QsOEJBa0dDIn0=