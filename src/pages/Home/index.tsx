import { Header } from '../../components/Header'
import OrgnizeLogo from '../../assets/white-orgnize-logo.svg'
import { Column } from './components/Column'
import { ColumnStatus } from './columnStatus'
import type { CardProps } from './components/Card'
import { useEffect, useState } from 'react'
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'
import { db } from '../../services'
import { useAuth } from '../../contexts/auth/useAuth'

export default function HomePage() {
  const columns = [
    {
      status: ColumnStatus.BACKLOG,
      title: 'Backlog',
    },
    {
      status: ColumnStatus.DOING,
      title: 'Fazendo',
    },
    {
      status: ColumnStatus.READY,
      title: 'Pronto',
    },
    {
      status: ColumnStatus.IN_TEST,
      title: 'Teste',
    },
    {
      status: ColumnStatus.APPROVED,
      title: 'Aprovado',
    },
  ]

  const [cards, setCards] = useState<CardProps[]>([])

  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) return

    const q = query(
      collection(db, 'cards'),
      where('userId', '==', currentUser.uid)
    )

    const unsubscribe = onSnapshot(q, snapshot => {
      const cards: CardProps[] = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        state: doc.data().state,
        userId: doc.data().userId,
      }))
      setCards(cards)
    })

    return unsubscribe
  }, [currentUser])

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, cardId: string) => {
    e.dataTransfer.setData('cardId', cardId)
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDrop = async (
    e: React.DragEvent<HTMLDivElement>,
    newState: ColumnStatus
  ) => {
    const cardId = e.dataTransfer.getData('cardId')
    const cardRef = doc(db, 'cards', cardId)

    try {
      const snap = await getDoc(cardRef)
      if (!snap.exists()) {
        return
      }

      await updateDoc(cardRef, { state: newState })
    } catch (error) {
      console.error('Erro ao atualizar o card:', error)
    }
  }

  return (
    <>
      <Header />
      <main className="h-[calc(100vh-16.95rem)] w-[71rem] mx-auto pt-[3.8125rem] grid grid-cols-5 overflow-y-auto pb-4 rounded-2xl">
        {columns.map(column => (
          <Column
            cards={cards}
            setCards={setCards}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            key={column.title}
            {...column}
          />
        ))}
      </main>
      <footer className="bg-[#1988E9] py-[5.25rem] flex justify-center w-full bottom-0 relative">
        <img src={OrgnizeLogo} alt="Orgnize Logo" />
      </footer>
    </>
  )
}
