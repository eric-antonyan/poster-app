import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react"
import { useEffect, useState } from "react"
import Tab from "../components/Tab"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Modal from "../components/Modal"
import axios from "axios"

const HomePage = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 1
  })
  const [selected, setSelected] = useState(null)
  const links = [
    {
      text: "General",
      to: "/"
    },
    {
      text: "Getting start",
      to: "/reg"
    },
    {
      text: "Log in",
      to: "/auth"
    },
    {
      text: "Admin Panel",
      to: "/admin"
    }
  ]

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/connect/api/posts")
      const data = response.data
      setPosts(data)
    }

    fetchData()
  }, [posts])

  const location = useLocation()
  const pathName = location.pathname

  return (
    <motion.div className="relative">
      <Navbar>
        <NavbarBrand>
          <p className="font-bold">ACME</p>
        </NavbarBrand>
        <NavbarContent className="relative" justify="end">
          {
            links.map((item, idx) => {
              const isPage = pathName === item.to;
              return <Tab key={idx} setPosition={setPosition} item={item} idx={idx} isPage={isPage} />
            })
          }
          <motion.div layoutId="navswiper" animate={position} className="bg-primary bottom-[10px] h-[3px] rounded-full absolute"></motion.div>
        </NavbarContent>
      </Navbar>
      <motion.h1 initial={{ marginTop: "40px", opacity: 0 }} animate={{ marginTop: "55px", opacity: 1 }} className="text-[2rem] text-center font-bold">Products</motion.h1>
      <motion.div className="w-[100%] gap-4 grid grid-cols-3 h-[100px] p-[25px] mx-auto" style={{ maxWidth: "1140px" }}>
        {
          posts.map((item, i) => {
            return (
              posts.length === 0 ? <motion.div className="text-primary">No Posts</motion.div> : <motion.img
                layoutId={`card-${item.id}`}
                onClick={() => setSelected(item)}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={`w-full aspect-video object-cover ${i % 3 === 0 ? "rounded-tl-[10px] rounded-bl-[10px]" : ""
                  } ${i % 3 === 2 ? "rounded-tr-[10px] rounded-br-[10px]" : ""}`}
                key={i}
                src={item.image}
                alt=""
              />
            );
          })
        }
        <Modal selected={selected} setSelected={setSelected} />
      </motion.div>
    </motion.div>
  )
}

export default HomePage