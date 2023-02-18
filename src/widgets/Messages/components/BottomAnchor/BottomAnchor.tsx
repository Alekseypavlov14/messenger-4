import { useScrollOnMount } from './../../hooks/useScrollOnMount'
import { ScrollAnchor } from '@features/ScrollDown'
import { FC } from 'react'

interface BottomAnchorProps {}

export const BottomAnchor: FC<BottomAnchorProps> = () => {
  const ref = useScrollOnMount()

  return (
    <ScrollAnchor reference={ref} />
  )
}