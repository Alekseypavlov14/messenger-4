import { FC } from 'react'
import { Link } from '@shared/components/Link'
import styles from './SignInLink.module.css'

interface SignInLinkProps {}

export const SignInLink: FC<SignInLinkProps> = () => {
  return (
    <div className={styles.SignInLink}>
      Already have an account, &nbsp;
      <Link to='/sign-in'>Sign in</Link>
    </div>
  )
}