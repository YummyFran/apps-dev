import profilePic from '../assets/profile_picture.jpg'

const ProfilePicture = () => {
  return (
    <div className='profile-picture'>
        <img src={profilePic} alt="My profile pic" />
    </div>
  )
}

export default ProfilePicture