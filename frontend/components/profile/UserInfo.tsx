const UserInfo = () => (
    <div className="bg-white rounded-sm shadow-sm p-4 mb-4">
      <div className="flex items-center gap-4">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="User"
          className="w-12 h-12 rounded-full transition-opacity duration-300 opacity-100"
          loading="lazy"
        />
        <div>
          <h2 className="font-medium">Hello,</h2>
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
  export default UserInfo;