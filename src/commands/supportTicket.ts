import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import { create } from "domain";

export default class testCommand implements IBotCommand {

    private readonly _command = "supportTicket"

    help(): string {
        return "Creates a private text channel for help.";
    }

    isThisCommand(command: string): boolean {

        return command === this._command;
    }

    runCommand(args: string[], messageObject: Discord.Message, client: Discord.Client): void {
        let guild = messageObject.guild;
        let currentUser = client.user;
        messageObject.delete(0);

       

        //GuildChannel
        var logsChannel = guild.channels.find(channel => channel.id == "bot-logs");
        var whatever = messageObject.channel;
        let admin = messageObject.member.hasPermission('ADMINISTRATOR')

        whatever.fetchMessage("709250470652280894")
            .then(message => {
                console.log("I found da message")
                
                var id:number = Number(message.content)
                var name = `support-ticket-${id.toString()}`;
                guild.createChannel(
                    name,
                    {
                        type: 'text',
                        permissionOverwrites: [
                            { id: messageObject.author.id,
                             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']},

                            {id: message.guild.id,
                             deny: ['VIEW_CHANNEL', 'READ_MESSAGES']},
                            
                            {id: ('685311285902049280'),
                             allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']},
                           
                            
                                
                            
                            

                             

                        ],
                        parent: '685414464006258698'

                        

                    }
                    
                    
                )
                

                id = id + 1;
                message.edit((id).toString())
            })
            .catch(error => console.log(error))
            ;

            


       

        // DONE - 
        //Hide channel from everyone else, 
        // parent into support catergory, 
        
        
        //TODO --
        //assure admins are allowed into text channel, 
        //upload the number to an online database



        //642183412907507721 (<==id of support category)





        //rick roll user who made this channel

    }




}