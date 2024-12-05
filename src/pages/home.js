import React ,{useEffect} from 'react'
import Layout from '../components/Layout'
import News from '../components/News'

const Home = (props) => {

  useEffect(() => {
    document.title = `Home-NewsNation`; 
  }, [])

  return (
    <div >
      <Layout>
        This is homepage
      </Layout>
    </div>
  )
}

export default Home