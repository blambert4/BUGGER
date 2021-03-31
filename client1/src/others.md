  const [shape, setShape] = useState("");
  const [newshape, setNewShape] = useState("");
  const [size, setSize] = useState("");
  const [newsize, setNewSize] = useState("");
  const [everything, setEverything] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/get").then((response) =>{
      setEverything(response.data.rows);
    })
  })
  const add = () =>{
    axios.post("http://localhost:4000/", {
      shape: shape,
      size: size,
    })
  }

  const changeShape = (id) =>{
    axios.put(`http://localhost:4000/shape/${id}`, {
      shape: newshape,
      size: size,
    })
  }
  const changeSize = (id) =>{
    axios.put(`http://localhost:4000/size/${id}`, {
      shape: shape,
      size: newsize,
    })
  }
  const deleteAll = () =>{
    axios.delete("http://localhost:4000/delete")
  }

  const deleted = (id) =>{
    axios.delete(`http://localhost:4000/delete/${id}`)
  }*/