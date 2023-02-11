import { getDocs } from "firebase/firestore"
import { MessageEntity } from "../message.entity"
import { MESSAGES_COLLECTION } from "./collection"

export async function readMessagesFromDatabase() {
  const messageDocs = await getDocs<MessageEntity>(MESSAGES_COLLECTION)
  const messages = messageDocs.docs.map(doc => doc.data())
  return messages
}