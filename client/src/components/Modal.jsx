import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
  if (!selected) return;
  return (
    <div onClick={() => setSelected(null)} className='fixed backdrop-blur-md inset-0 w-full h-full bg-black/50 z-50 cursor-pointer overflow-y-scroll'>
      <motion.div onClick={(e) => e.stopPropagation()} className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default">
        <motion.img className="rounded-t-2xl" layoutId={`card-${selected.id}`} src={selected.image} alt="" />
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}

          animate={{
            opacity: 1,
            y: 0
          }}

          exit={{
            opacity: 0,
            y: 50
          }}

          transition={{
            duration: 0.5
          }}
          className="bg-white p-6 rounded-b-2xl">
          <h2 className="text-2xl font-bold">{selected.title}</h2>
          <p>{selected.description}</p>
          <button className="bg-primary w-[100%] h-[50px] text-white mt-[20px] rounded-lg">View</button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Modal