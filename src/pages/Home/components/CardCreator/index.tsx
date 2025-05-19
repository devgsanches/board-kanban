import { useState } from 'react'
import plusIcon from '../../../../assets/plus-icon.svg'
import { ColumnStatus } from '../../columnStatus'
import { useAuth } from '../../../../contexts/auth/useAuth'
import { db } from '../../../../services'
import { addDoc, collection } from 'firebase/firestore'

export const CardCreator = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [verification, setVerification] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const { currentUser } = useAuth()

  function handler() {
    setIsEditing(prevState => !prevState)
  }

  async function createTask() {
    if (!title || !description) {
      setVerification(true)
      return
    }

    setVerification(false)

    await addDoc(collection(db, 'cards'), {
      title,
      description,
      state: ColumnStatus.BACKLOG,
      userId: currentUser?.uid,
    })

    setTitle('')
    setDescription('')

    handler()
  }

  if (!isEditing) {
    return (
      <button
        className="w-[12.8rem] py-[2.5rem] border-2 border-dashed border-[#000] rounded-2xl flex flex-col justify-center items-center font-semibold gap-2 cursor-pointer"
        onClick={handler}
      >
        <img src={plusIcon} alt=" Ícone de Mais" className="h-[1.7rem]" />
      </button>
    )
  }

  return (
    <div className="text-sm w-[12.8rem] py-[1rem] border border-[#A7A7A7] rounded-2xl flex flex-col justify-center items-center font-semibold gap-3 cursor-pointer">
      <input
        className="border border-[#000] w-4/5 rounded p-1 font-medium"
        placeholder="Qual a task?"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        className="border border-[#000] w-4/5 rounded p-1 font-medium"
        placeholder="Conte mais.."
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      {verification && (
        <p className="text-red-700 text-xs text-start w-full px-5">
          Preencha os campos.
        </p>
      )}

      <div className="w-full flex justify-end px-5">
        <button
          className="bg-gray-300 p-1.5 px-2 rounded cursor-pointer hover:shadow-md"
          onClick={createTask}
        >
          Create
        </button>
      </div>
    </div>
  )
}
