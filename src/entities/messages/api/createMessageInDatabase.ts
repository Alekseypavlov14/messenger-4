import { MESSAGES_COLLECTION } from "./collection"
import { SendMessageData } from "../types/SendMessageData"
import { findMessageById } from "./findMessageById"
import { MessageEntity } from "../message.entity"
import { generateId } from "@shared/utils/generateId"
import { addDoc } from "firebase/firestore"

export async function createMessageInDatabase(messageData: SendMessageData) {
  const newMessageId = generateId()

  const newMessage: MessageEntity = {
    ...messageData,
    id: newMessageId,
    seen: false,
    time: Date.now()
  }

  await addDoc(MESSAGES_COLLECTION, newMessage)

  const message = await findMessageById(newMessageId) as MessageEntity

  return message
}