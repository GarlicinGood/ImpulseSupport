import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {

    private readonly _command = "close"

    help(): string {
        return "fuck you";
    }    
    
    isThisCommand(command: string): boolean {
        //3 equals means identical
        return command === this._command;
    }
    
    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {

        let suppliedReason = args.slice(1).join(" ") || "";
        let logChannel =  messageObject.channel

        if(!messageObject.member.hasPermission("ADMINISTRATOR"))
        {
            messageObject.channel.send(`Get an admin role first ${messageObject.author.username}!`)
                .then(message => {
                    (message as Discord.Message).delete(50000)
                })
            return;
        }

 
        messageObject.channel.delete()
           
        

        //TODO-
        //Make channel move to a different category

        //Lets command show if it worked
       
    }


}