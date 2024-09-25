import React from 'react'
import UpdateProfileForm from '../../../components/Channel/Edit/UpdateProfileForm'

const EditProfile = () => {
  return (
    <div className='my-2'>
      <h1 className='text-lg font-Roboto font-semibold'>Update Profile</h1>
      <div className='max-w-screen-sm w-full border border-white/10 py-4 sm:py-8 mx-auto my-4'>
        <UpdateProfileForm />
      </div>
    </div>
  )
}

export default EditProfile