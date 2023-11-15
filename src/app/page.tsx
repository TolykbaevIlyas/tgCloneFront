import Image from 'next/image'
import styles from './page.module.css'
import { RegisterBlock } from '@/features/register'

export default function Home() {
  return (
    <div>
      <RegisterBlock/>
    </div>
  )
}
