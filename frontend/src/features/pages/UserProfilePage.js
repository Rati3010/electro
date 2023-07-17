import NavBar from "../navbar/Navbar";
import UserProfile from "../user/components/UserProfile";

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <h1 className="mx-auto text-2xl">My Profile</h1>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;
