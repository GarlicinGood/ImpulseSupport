"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class purge {
    constructor() {
        this._command = "purge";
    }
    help() {
        return "(Admin only) Deletes the desired message from channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, messageObject, client) {
        messageObject.delete();
        if (!messageObject.member.hasPermission("ADMINISTRATOR")) {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username} :p`)
                .then(message => {
                message.delete(5000);
            });
            return;
        }
        if (!args[0]) {
            messageObject.channel.send(`Please give me a number ${messageObject.author.username} :D`)
                .then(message => {
                message.delete(5000);
            });
            return;
        }
        let numberOfMessagesToDelete = Number(args[0]);
        if (isNaN(numberOfMessagesToDelete)) {
            messageObject.channel.send(`I know numbers, and that ain't one of em ${messageObject.author.username}`)
                .then(message => {
                message.delete(5000);
            });
            return;
        }
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
        messageObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }
}
exports.default = purge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVyZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvcHVyZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFtRHZDLENBQUM7SUFqREcsSUFBSTtRQUNBLE9BQU8sdURBQXVELENBQUM7SUFDbkUsQ0FBQztJQUVBLGFBQWEsQ0FBQyxPQUFlO1FBQzFCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjLEVBQUUsYUFBOEIsRUFBRSxNQUFzQjtRQUU3RSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFdkIsSUFBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUN2RDtZQUNJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDJCQUEyQixhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxDQUFDO2lCQUNwRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1gsT0FBMkIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxPQUFPO1NBRVY7UUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDO1lBQ1IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUM7aUJBQ3BGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUEyQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztZQUNQLE9BQU87U0FDVjtRQUVELElBQUksd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9DLElBQUcsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQUU7WUFDaEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDWixPQUEyQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztZQUNSLE9BQU87U0FFVjtRQUVELHdCQUF3QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVoRSxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzthQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FHSjtBQXJERCx3QkFxREMifQ==