import { LocalStorage } from "@shared/utils/localStorage"
import { UserEntity } from '@entities/users'

export const AuthStorage = new LocalStorage<UserEntity>('user')