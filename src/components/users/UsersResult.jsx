import { useContext } from "react";
import UserItems from "./UserItems";
import GithubContext from "../../context/github/GithubContext";
const UsersResult = () => {
  const { users } = useContext(GithubContext);
  // console.log(users);
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   setUsers(data);
  //   setLoading(false);
  //   // setTimeout(() => {}, 5000);
  // };
  // console.log(users);
  return (
    <>
      <div className="grid grid-colos-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users?.map((userData) => {
          return <UserItems users={userData} />;
        })}
      </div>
    </>
  );
};

export default UsersResult;
