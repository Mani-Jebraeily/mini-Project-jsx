import './App.css'
import{useState} from "react"
import Topheader from './Topheader'

function App() {
  const [isShow1,setShow1]=useState(true)
  const [isShow2,setShow2]=useState(false)
  const [isShow3,setShow3]=useState(false)
  const [isShow4,setShow4]=useState(false)

  function hideHandeler1(){
    setShow1(true)
    hiderHandeler2()
    hiderHandeler3()
    hiderHandeler4()

  }

  function hideHandeler2(){
    hiderHandeler1()
    setShow2(true)
    hiderHandeler3()
    hiderHandeler4()

  }

  function hideHandeler3(){
    hiderHandeler1()
    hiderHandeler2()
    setShow3(true)
    hiderHandeler4()

  }

  function hideHandeler4(){
    hiderHandeler1()
    hiderHandeler2()
    hiderHandeler3()
    setShow4(true)

  }


  const hiderHandeler1=()=>setShow1(false)
  const hiderHandeler2=()=>setShow2(false)
  const hiderHandeler3=()=>setShow3(false)
  const hiderHandeler4=()=>setShow4(false)
  return (
    <>

    {/* <Topheader /> */}
    <div className='header'>
    <h1>
        Tabs Component with React
    </h1>
    <ul>
      <li><button onClick={hideHandeler1}>tab1</button></li>
      <li><button onClick={hideHandeler2}>tab2</button></li>
      <li><button onClick={hideHandeler3}>tab3</button></li>
      <li><button onClick={hideHandeler4}>tab4</button></li>
    </ul>

    </div>
 
  

    <div className='main'>
     {isShow1?<> <h1>Content 1</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsum modi et repellat asperiores itaque fugit autem numquam soluta molestiae tempore, quis hic quas eveniet porro a. Adipisci obcaecati doloribus officiis ut dolorem dolore, ducimus iste nesciunt porro est blanditiis explicabo ipsum perspiciatis cum aut dolor velit labore nostrum ad eveniet beatae id animi! Ex officiis soluta, facilis adipisci distinctio corrupti nemo quibusdam tenetur iusto odio iste suscipit!</p>   
     </>     
     :null}

     {isShow2? <> <h1>Content 2</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ipsum modi et repellat asperiores itaque fugit soluta molestiae tempore, quis hic quas eveniet porro a. Adipisci obcaecati doloribus officiis ut dolorem dolore, ducimus iste nesciunt porro est blanditiis explicabo ipsum perspiciatis cum aut dolor velit labore nostrum ad eveniet beatae id animi! Ex officiis soluta, facilis adipisci distinctio corrupti nemo quibusdam tenetur iusto odio iste suscipit!</p>   
     </>
     :null}

     {isShow3? <> <h1>Content 3</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum itaque fugit autem numquam soluta molestiae tempore, quis hic quas eveniet porro a. Adipisci obcaecati doloribus officiis ut dolorem dolore, ducimus iste nesciunt porro est blanditiis explicabo ipsum perspiciatis cum aut dolor velit labore nostrum ad eveniet beatae id animi! Ex officiis soluta, facilis adipisci distinctio corrupti nemo quibusdam tenetur iusto odio iste suscipit!</p>   
     </>
     :null}

     {isShow4? <> <h1>Content 4</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum  et repellat asperiores itaque fugit autem numquam soluta molestiae tempore, quis hic quas eveniet porro a. Adipisci obcaecati doloribus officiis ut dolorem dolore, ducimus iste nesciunt porro est blanditiis explicabo ipsum perspiciatis cum aut dolor velit labore nostrum ad eveniet beatae id animi! Ex officiis soluta, facilis adipisci distinctio corrupti nemo quibusdam tenetur iusto odio iste suscipit!</p>   
     </>
     :null}
    </div>
    </>
  )
}

export default App
