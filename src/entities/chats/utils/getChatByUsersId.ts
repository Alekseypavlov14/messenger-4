import { ChatEntity } from "../chat.entity"

export function getChatByUsersId(chats: ChatEntity[], usersId: number[]) {
  const chatsWithSameUsersAmount = chats.filter(chat => chat.usersId.length === usersId.length)
  const chat = chatsWithSameUsersAmount.find(chat => usersId.every(id => chat.usersId.includes(id)))
  return chat || null
}