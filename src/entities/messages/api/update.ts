import { UpdateMessageData } from './../types/UpdateMessageData'
import { updateDoc } from 'firebase/firestore'
import { getRefById } from './getRefById'

export async function updateMessage(newMessageData: UpdateMessageData) {
  const messageRef = await getRefById(newMessageData.id)

  if (!messageRef) return

  await updateDoc(messageRef, newMessageData)
}