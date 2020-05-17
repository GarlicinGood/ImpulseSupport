import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(Admin only) Deletes the desired message from channel";
    }   

     isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        
        messageObject.delete();

        if(!messageObject.member.hasPermission("ADMINISTRATOR"))
        {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username} :p`)
                .then(message => {
                    (message as Discord.Message).delete(5000);

                });
            return;

        }

        if(!args[0]){
            messageObject.channel.send(`Please give me a number ${messageObject.author.username} :D`)
                .then(message => {
                    (message as Discord.Message).delete(5000);
                });
            return;
        }

        let numberOfMessagesToDelete = Number(args[0]);

        if(isNaN(numberOfMessagesToDelete)) {
            messageObject.channel.send(`I know numbers, and that ain't one of em ${messageObject.author.username}`)
                 .then(message => {
                    (message as Discord.Message).delete(5000);
                 });
            return;

        }

        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);

        messageObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }

    
}