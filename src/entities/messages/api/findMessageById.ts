import { readMessagesFromDatabase } from "./readMessagesFromDatabase";

export async function findMessageById(messageId: number) {
  const messages = await readMessagesFromDatabase()
  return messages.find(message => message.id === messageId) || null 
}