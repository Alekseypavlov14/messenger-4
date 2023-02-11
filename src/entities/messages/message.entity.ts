export interface MessageEntity {
  id: number
  userId: number
  chatId: number
  text: string
  sent: number
  seen: boolean
}