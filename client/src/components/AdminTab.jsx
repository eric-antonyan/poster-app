import React, { useRef } from 'react'

const AdminTab = ({ setAdmPosition, children, setPage, idx, setFormSize, formRef }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} onClick={() => {
      if (!ref.current) return
      const { width } = ref.current.getBoundingClientRect()
      setAdmPosition({
        width,
        opacity: 1,
        left: ref.current.offsetLeft
      })
      const { height } = formRef.current.getBoundingClientRect()
      setFormSize({
        height: formRef.current.offsetHeight + 150,
        scale: 1,
        opacity: 1
      })
      setPage(idx)
    }} className="text-xl font-bold cursor-pointer text-white">{children}</li>
  )
}

export default AdminTab