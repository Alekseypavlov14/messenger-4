import { MESSAGES_COLLECTION } from "./collection"
import { onSnapshot, orderBy, query } from "firebase/firestore"
import { MessageEntity } from '@entities/messages'

type SubscribeCallback = (messages: MessageEntity[]) => void

export function subscribeOnMessages(callback: SubscribeCallback) {
  const messagesQuery = query<MessageEntity>(MESSAGES_COLLECTION, orderBy('time'))

  onSnapshot(messagesQuery, (messages) => {
    const messagesData = messages.docs.map(doc => doc.data())
    callback(messagesData)
  })
}