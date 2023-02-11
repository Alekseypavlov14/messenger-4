import { MESSAGES_COLLECTION_PATH } from '../const'
import { MessageEntity } from './../message.entity'
import { collection } from 'firebase/firestore'
import { converter } from '@shared/firebase'
import { db } from '@shared/firebase'

export const MESSAGES_COLLECTION = collection(db, MESSAGES_COLLECTION_PATH)
  .withConverter(converter<MessageEntity>())