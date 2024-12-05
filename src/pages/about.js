import React ,{useEffect} from 'react'
import Layout from '../components/Layout'

const About = () => {

  useEffect(() => {
    document.title = `About-NewsNation`; 
  }, [])

  return (
    <div>
      <Layout>
        This is about
      </Layout>
    </div>
  )
}

export default About