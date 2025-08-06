import ProfilePicture from './ProfilePicture'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Button from './Button'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="container">
            <ProfilePicture />
            <div className="details">
                <AboutMe />
                <Skills />
                <Button />
            </div>
        </div>
    </div>
  )
}

export default Profile