import { motion } from "framer-motion";

const Modal = ({ selected, setSelected }) => {
  if (!selected) return;
  function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
  }
  return (
    <div onClick={() => setSelected(null)} className='fixed backdrop-blur-md inset-0 w-full h-full bg-black/50 z-50 cursor-pointer overflow-y-scroll'>
      <motion.div onClick={(e) => e.stopPropagation()} className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default">
        <motion.div
          initial={{
            opacity: 0,
            y: -50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -50
          }}
          transition={{
            duration: 0.5
          }}
          className="p-6 w-[100%] text-[1.5rem] font-bold text-center bg-[#fff] rounded-t-2xl">
          {

            Intl.DateTimeFormat('en-GB', {
              dateStyle: 'full',
            }).format(new Date(selected.createdAt))
          }
          {
            isSameDay(new Date(), new Date(selected.createdAt)) ? <span className="text-danger"> today</span> : ""
          }
        </motion.div>
        <motion.img layoutId={`card-${selected._id}`} src={selected.image} alt="" />
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
          <p className="text-slate-500 text-small text-center mt-[20px]">Post ID: {selected._id}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Modal