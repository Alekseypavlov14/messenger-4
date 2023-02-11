import { readMessagesFromDatabase } from "./read";

export async function findById(messageId: number) {
  const messages = await readMessagesFromDatabase()
  return messages.find(message => message.id === messageId) || null 
}