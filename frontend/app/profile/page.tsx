import NavigationMenu from "@/components/profile/NavigationMenu";
import ProfileInformation from "@/components/profile/ProfileInformation";
import RecentOrders from "@/components/profile/RecentOrders";
import UserInfo from "@/components/profile/UserInfo";

const ProfilePage = () => {
  return (
    <main id="UserDashboard" className="bg-gray-100 min-h-screen pt-4">
      <div className="h-16 md:h-16"></div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-64">
            <UserInfo />
            <NavigationMenu />
          </div>
          <div className="flex-1">
            <ProfileInformation />
            <RecentOrders />
          </div>
        </div>
      </div>
      <div className="h-16 md:h-16"></div>
    </main>
  );
};

export default ProfilePage;