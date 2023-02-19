import { useNavigate } from 'react-router-dom'

export function useNavigation() {
  const navigate = useNavigate()

  return {
    navigateHomePage: () => navigate('/'),
    navigateSearchPage: () => navigate('/search'),
    navigateSignUpPage: () => navigate('/sign-up'),
    navigateChatPage: (id: number) => navigate(`/chat/${id}`),
    navigateSettingsPage: () => navigate('/settings')
  }
}