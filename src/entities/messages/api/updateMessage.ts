import { UpdateMessageData } from '../types/UpdateMessageData'
import { getMessageRefById } from './getMessageRefById'
import { updateDoc } from 'firebase/firestore'

export async function updateMessage(newMessageData: UpdateMessageData) {
  const messageRef = await getMessageRefById(newMessageData.id)

  if (!messageRef) return

  await updateDoc(messageRef, newMessageData)
}