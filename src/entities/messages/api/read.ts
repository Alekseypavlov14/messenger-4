import { MESSAGES_COLLECTION } from "./collection"
import { MessageEntity } from "../message.entity"
import { getDocs } from "firebase/firestore"

export async function readMessagesFromDatabase() {
  const messageDocs = await getDocs<MessageEntity>(MESSAGES_COLLECTION)
  const messages = messageDocs.docs.map(doc => doc.data())
  return messages
}