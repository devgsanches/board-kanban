import { deleteDoc, doc } from 'firebase/firestore'
import trashIcon from '../../../../assets/trash-icon.svg'
import { db } from '../../../../services'


export const CardDelete = () => {
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    const cardId = e.dataTransfer.getData('cardId')
    const cardRef = doc(db, 'cards', cardId)

    try {
      await deleteDoc(cardRef)
    } catch (error) {
      if (error) return
    }
  }

  return (
    <div
      className="bg-[#cd050540] w-[12.8rem] py-[2.5rem] border-3 border-dashed border-[#cd050571] rounded-2xl flex flex-col justify-center items-center font-semibold cursor-pointer gap-2"
      onDragOver={onDragOver}
      onDrop={e => onDrop(e)}
    >
      <button className="cursor-pointer ">
        <img src={trashIcon} alt=" Ícone de Lixeira" className="h-[1.7rem] " />
      </button>
    </div>
  )
}
