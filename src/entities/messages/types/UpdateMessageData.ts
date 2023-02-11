import { MessageEntity } from './../message.entity'

export type UpdateMessageData = Partial<MessageEntity> & Pick<MessageEntity, 'id'>