import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"

const Tab = ({ idx, setPosition, isPage, item }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} key={idx} className="text-center">
      <motion.span transition={{ duration: 5 }}>
        <NavLink onClick={() => {
          if (!ref.current) return;

          const { width } = ref.current.getBoundingClientRect()
          setPosition({
            width,
            opacity: 1,
            left: ref.current.offsetLeft,
          })
        }} className={`font-bold ${isPage ? "text-primary" : ""}`} style={{ transition: "0.5s" }} to={item.to}>{item.text}</NavLink>
        </motion.span>
    </li>
  )
}

export default Tab