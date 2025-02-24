const ProfileInformation = () => (
    <div className="bg-white rounded-sm shadow-sm p-6 mb-4">
      <h2 className="text-lg font-medium mb-6">Personal Information</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">First Name</label>
            <input type="text" value="John" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Last Name</label>
            <input type="text" value="Doe" className="w-full border rounded p-2" />
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input type="email" value="john.doe@example.com" className="w-full border rounded p-2" />
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Mobile Number</label>
            <input type="tel" value="9876543210" className="w-full border rounded p-2" />
          </div>
        </div>
  
        <div>
          <label className="block text-gray-600 mb-1">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" defaultChecked />
              <span>Male</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" />
              <span>Female</span>
            </label>
          </div>
        </div>
  
        <button className="bg-[#fb641b] text-white px-8 py-2 rounded-sm">Save Changes</button>
      </form>
    </div>
  );
  export default ProfileInformation;