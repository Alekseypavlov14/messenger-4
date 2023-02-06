import { FC } from 'react'
import { Link } from '@shared/components/Link'
import styles from './SignUpLink.module.css'

interface SignUpLinkProps {}

export const SignUpLink: FC<SignUpLinkProps> = () => {
  return (
    <div className={styles.SignUpLink}>
      Don't have an account, &nbsp;
      <Link to='/sign-up'>Sign up</Link>
    </div>
  )
}