import { MessageEntity } from '@entities/messages'
import { SeenStatus } from '../SeenStatus/SeenStatus'
import { authStore } from '@app/auth'
import { Author } from '../Author/Author'
import { Text } from '../Text/Text'
import { Time } from '../Time/Time'
import { FC } from 'react'
import styles from './Message.module.css'
import cn from 'clsx'

interface MessageProps {
  message: MessageEntity
}

export const Message: FC<MessageProps> = ({ message }) => {
  const user = authStore((store) => store.user)

  const isOwnMessage = user?.id === message.userId
  
  const classNames = cn(styles.MessageBlock, isOwnMessage ? styles.Outgoing : styles.Incoming)

  return (
    <div className={classNames}>
      <div className={styles.Message}>
        {!isOwnMessage && <Author authorId={message.userId} />}
        <Text text={message.text} />

        <div className={styles.Data}>
          <Time time={message.time} />
          {isOwnMessage && <SeenStatus seen={message.seen} />}
        </div>
      </div>
    </div>
  )
}