import { CHATS_COLLECTION_PATH } from '../const'
import { collection } from 'firebase/firestore'
import { ChatEntity } from '../chat.entity'
import { converter } from '@shared/firebase'
import { db } from '@shared/firebase'

export const CHAT_COLLECTION = collection(db, CHATS_COLLECTION_PATH)
  .withConverter(converter<ChatEntity>())