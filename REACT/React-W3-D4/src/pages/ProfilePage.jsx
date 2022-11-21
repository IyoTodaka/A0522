import React from 'react'
import { useLocation } from 'react-router-dom'
import { getProfile } from '../api'

const ProfilePage = () => {
    const [profile, setProfile] = React.useState(null)
    const { state: { authorId } } = useLocation()

    React.useEffect(() => {
        getProfile(authorId).then(setProfile)
    }, [authorId])

    if(!profile){
        return <h1>Loading....</h1>
    }

  return (
    <>
        <p>{profile.username}</p>
        <p>{profile.phone}</p>
        <p>{profile.email}</p>
    </>
  )
}

export default ProfilePage