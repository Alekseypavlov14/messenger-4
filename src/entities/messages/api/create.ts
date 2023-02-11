import { MESSAGES_COLLECTION } from "./collection"
import { SendMessageData } from "../types/SendMessageData"
import { MessageEntity } from "../message.entity"
import { generateId } from "@shared/utils/generateId"
import { findById } from "./findById"
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

  const message = await findById(newMessageId) as MessageEntity

  return message
}