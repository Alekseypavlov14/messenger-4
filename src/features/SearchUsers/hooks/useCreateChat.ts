import { createOrFindChatByUsersId } from "@entities/chats"
import { useNavigation } from "@app/navigation"
import { authStore } from "@app/auth"

export function useCreateChat(searchedUserId: number) {
  const user = authStore((store) => store.user)
  const { navigateChatPage } = useNavigation()

  return async () => {
    if (!user) return

    const usersId = [searchedUserId, user.id]
    const chat = await createOrFindChatByUsersId(usersId)
    
    navigateChatPage(chat.id)
  }
}