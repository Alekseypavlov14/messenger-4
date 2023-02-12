import { MESSAGES_COLLECTION_PATH } from '../const'
import { MESSAGES_COLLECTION } from './collection'
import { MessageEntity } from '../message.entity'
import { doc, getDocs } from 'firebase/firestore'
import { db } from '@shared/firebase'

export async function getMessageRefById(messageId: number) {
  const messageQuerySnapshot = await getDocs<MessageEntity>(MESSAGES_COLLECTION)
  const messageQueryDocumentSnapshot = messageQuerySnapshot.docs.find(doc => doc.data().id === messageId)
  if (!messageQueryDocumentSnapshot) return null

  const messageDocumentRef = doc(db, MESSAGES_COLLECTION_PATH, messageQueryDocumentSnapshot.id)
  return messageDocumentRef
}