// types
export type { SendMessageData } from './types/SendMessageData'
export type { MessageEntity } from './message.entity'
// api
export { readMessagesFromDatabase } from './api/readMessagesFromDatabase'
export { createMessageInDatabase } from './api/createMessageInDatabase'
export { subscribeOnMessages } from './api/subscribeOnMessages'
export { findMessageById } from './api/findMessageById'
export { updateMessage } from './api/updateMessage'
// utils
export { findLastMessage } from './utils/findLastMessage'