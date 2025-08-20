import ProfileSidebar from "./ProfileSidebar"
import ProfileMainSection from "./ProfileMainSection"

const UserProfile = () =>{
    return(
        <>
            <div className="profile-page-container">
                <ProfileSidebar/>
                <ProfileMainSection/>
            </div>
        </>
    )
}
export default UserProfile
