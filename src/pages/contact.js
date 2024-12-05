import React,{useEffect} from 'react'
import Layout from '../components/Layout'

const Contact = () => {

  useEffect(() => {
    document.title = `Contact-NewsNation`; 
  }, [])

  return (
    <div>
      <Layout>
        This is contact
      </Layout>
    </div>
  )
}

export default Contact