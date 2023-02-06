import { LocalStorage } from "@shared/utils/localStorage"
import { UserEntity } from '@entities/users'

export const SignInStorage = new LocalStorage<UserEntity>('user')