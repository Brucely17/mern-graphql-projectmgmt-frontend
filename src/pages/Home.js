import React from 'react'
import Client from '../components/Client'
import Project from '../components/Project'
import AddClientModal from '../components/AddClientModal'
import AddProjectModal from '../components/AddProjectModal'
function Home() {
  return (
    <>
    <div className='d-flex gap-3 mb-4'>
<AddClientModal/>
<AddProjectModal/>
</div>
    <Project/>
    <hr />
      <Client/>

    </>
  )
}

export default Home
