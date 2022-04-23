import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {button} from '../components/user'
import {User} from '../components/User'

// CRA version of data looping

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  console.log("home render")
  useEffect(()=>{
  console.log("useEffect")
  async function loadExternalDataTheCRAWay(){
  
  }
  loadExternalDataTheCRAWay() {
    const res = await fetch()
  }
  })
  return (
  <>
  <PageTitle title="StoreFront" tagline="featured products"/> 
  <div style={{textAlign:"center"}}>
  <Button style={{margin:"2rem 0 0",}} onClick={()=>setIsLoading(true)}>Get Some Data</Button>
  {
  isLoading && <p style={{padding:"1rem"}}>This Is My Output</p>
  }
  </div>
  </>
  )
  }