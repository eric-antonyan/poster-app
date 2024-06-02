import { Button, Input, Navbar, NavbarBrand, NavbarContent, Tabs } from "@nextui-org/react"
import { useEffect, useRef, useState } from "react"
import Tab from "../components/Tab"
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Modal from "../components/Modal"
import AdminTab from "../components/AdminTab"
import axios from "axios"

const AdminPanel = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
  const ref = useRef()
  const [formSize, setFormSize] = useState({
    height: 400,
    scale: 1,
    opacity: 1
  })
  const [admPosition, setAdmPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0
  })
  const [createPostResponse, setCreatePostResponse] = useState({message: null, success: 0})
  const [createImage, setCreateImage] = useState("")
  const [createTitle, setCreateTitle] = useState("")
  const [createDescription, setCreateDescription] = useState("")
  const [page, setPage] = useState(0)
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

  const items = [
    {
      id: 1,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 2,
      src: "https://6448316.fs1.hubspotusercontent-na1.net/hubfs/6448316/what-computer-programming-jobs-offer-remote-work-jpg.jpeg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 3,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 4,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 5,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 6,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 7,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 8,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    },
    {
      id: 9,
      src: "https://www.poweradmin.com/blog/wp-content/uploads/2020/10/1-1.jpg",
      title: "Server room",
      description: "Lorem ipsum"
    }
  ]

  useEffect(() => {
    // This effect runs after the component mounts or updates
    if (ref.current) {
      // Perform some action with the ref
      console.log("Ref current value:", ref.current);
    }
  }, [page]);

  const location = useLocation()
  const pathName = location.pathname

  const createSubmit = async (e) => {
    e.preventDefault()
    const response = await axios.post("/connect/api/create", {
      title: createTitle,
      image: createImage,
      description: createDescription
    })
    const data = response.data;
    setCreatePostResponse(data)
  }

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
      <motion.h1 initial={{ marginTop: "40px", opacity: 0 }} animate={{ marginTop: "55px", opacity: 1 }} className="text-[2rem] text-center font-bold">Admin Panel</motion.h1>
      <motion.div className="max-w-[600px] mx-auto rounded-3xl bg-indigo-500" initial={{ opacity: 0, scale: 0 }} animate={formSize}>
        <ul className="w-[100%] flex relative justify-between p-[20px] px-[30px]">
          <AdminTab setFormSize={setFormSize} formRef={ref} setAdmPosition={setAdmPosition} setPage={setPage} idx={0}>Edit Post</AdminTab>
          <AdminTab setFormSize={setFormSize} formRef={ref} setAdmPosition={setAdmPosition} setPage={setPage} idx={1}>Create Post</AdminTab>
          <AdminTab setFormSize={setFormSize} formRef={ref} setAdmPosition={setAdmPosition} setPage={setPage} idx={2}>Delete Post</AdminTab>
          <motion.div animate={admPosition} className="bg-[#fff] absolute h-[3px] rounded-full bottom-0"></motion.div>
        </ul>
        {
          page === 0 ?
            <motion.form ref={ref} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 30}} exit={{opacity: 0, y: 20}} className="max-w-[400px] gap-4 flex flex-col mx-auto w-full" action="">
              <Input label="Post ID"></Input>
              <Input label="Edit Post Title"></Input>
              <Input label="Edit Post Description"></Input>
              <Button color="success">Save Updates</Button>
            </motion.form>
            : ""
        }
        {
          
          page === 1 ?
            <motion.form onSubmit={createSubmit} ref={ref} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 30}} exit={{opacity: 0, y: 20}} className="max-w-[400px] gap-4 flex flex-col mx-auto w-full" action="">
              <Input onChange={(e) => setCreateImage(e.target.value)} variant="faded" value={createImage} label="Img URI" placeholder="https://example.com/image.jpg"></Input>
              <Input onChange={(e) => setCreateTitle(e.target.value)} variant="faded" value={createTitle} label="Post Title"></Input>
              <Input onChange={(e) => setCreateDescription(e.target.value)} variant="faded" value={createDescription} label="Post Description"></Input>
              <p className={`text-center ${createPostResponse.success ? "text-success" : "text-danger"}`}>{createPostResponse.message}</p>
              <Button type="submit" color="warning">Create Post</Button>
            </motion.form>
            : ""
        }
        {
          page === 2 ?
            <motion.form ref={ref} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 30}} exit={{opacity: 0, y: 20}} className="max-w-[400px] gap-4 flex flex-col mx-auto w-full" action="">
              <Input variant="faded" label="Post Title"></Input>
              <Button type="submit" color="danger">Delete</Button>
            </motion.form>
            : ""
        }
      </motion.div>
    </motion.div>
  )
}

export default AdminPanel