import { findById, UserEntity } from '@entities/users'
import { defaultChatName } from '../../const'
import { ChatEntity } from '@entities/chats'

export async function getChatTitle(chat: ChatEntity, user: UserEntity) {
  if (chat.name) return chat.name

  if (chat.usersId.length !== 2) return defaultChatName

  const opponentId = chat.usersId.find(id => id !== user.id) as number
  const opponent = await findById(opponentId)

  return opponent?.login || defaultChatName
}