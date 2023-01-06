import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../css/addProject.css'

const AddProject = () => {
  return (
    <div className='add-Pr'>
      <div className='cmd-b'> Add Project</div>
      <Outlet />
    </div>
  )
}

export default AddProject;