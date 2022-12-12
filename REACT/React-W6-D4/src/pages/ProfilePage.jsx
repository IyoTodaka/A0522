import React from 'react'
import { useLocation } from 'react-router-dom'
import { getProfile } from '../api'

const ProfilePage = () => {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState("")
    const [profile, setProfile] = React.useState(null)
    const { state: { authorId } } = useLocation()

    React.useEffect(() => {
      setLoading(true)
      getProfile(authorId)
        .then(setProfile)
        .catch(err => setError(err.message))
        .finally(setLoading(false))
    }, [authorId])

  return (
    <>
      {loading && <h3>Loading....</h3>}
      {error && <p>{error}</p>}
      {!error && profile && (
        <>
          <p>{profile.username}</p>
          <p>{profile.phone}</p>
          <p>{profile.email}</p>
        </>
      )}
    </>
  )
}

export default ProfilePage