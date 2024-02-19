import { useEffect, useState } from "react";
import { user } from "../interfaces/user";

import { getUsers } from "../services/UserService";

function UserData() {
  const [userData, setUserData] = useState<user[]>([]);

  const fetchUserData = async () => {
    const userData = await getUsers();
    setUserData(userData);
  };

  useEffect(() => {
    console.log("on mount");

    const timeout = setTimeout(() => {
      fetchUserData();
      console.log("timeout");
    }, 2000);



    return () => {
      clearTimeout(timeout);
      setUserData([]);
      console.log("unmounted");
    };
  }, []);

  return (
    <>
      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">User List</h1>
          <div>
            {userData.map((user, index) => (
              <div key={index} className="bg-blue-200 rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-blue-800 mb-4">
                  User ID: {user.id}
                </h2>
                <p className="text-blue-700">Name: {user.name}</p>
                <p className="text-blue-700">Email: {user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default UserData;
