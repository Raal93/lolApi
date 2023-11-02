import { useAPI } from "../../API/useAPI";
import { useEffect } from "react";

const AboutSitePage = () => {

  const { getAllUsers, allUsers } = useAPI();

  useEffect(() => {
    getAllUsers()
  }, [])

  console.log(allUsers);
  return (
    <div>
      {
        allUsers?.map(user => {
          return (
            <div key={user.id}>
              <span>id: {user.id}</span>
              <span>age {user.age}</span>
              <span>user name: {user.username}</span>
            </div>
          )
        })
      }
    </div>
  );
}

export default AboutSitePage;