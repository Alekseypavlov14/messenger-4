import { UpdateMessageData } from './../types/UpdateMessageData'
import { getRefById } from './getRefById'
import { updateDoc } from 'firebase/firestore'

export async function updateMessage(newMessageData: UpdateMessageData) {
  const messageRef = await getRefById(newMessageData.id)

  if (!messageRef) return

  await updateDoc(messageRef, newMessageData)
}