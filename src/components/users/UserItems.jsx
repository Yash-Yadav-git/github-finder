import { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/GithubContext";

const UserItems = ({ users: { login, avatar_url } }) => {
  return (
    <>
      <div className="card mt-6 shadow-md compact side bg-base-100">
        <div className="felx-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full shadow w-14 h-14">
                <img src={avatar_url} alt="Profile" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="card-title">{login}</h2>
            <Link
              className="text-base-content text-opacity-40"
              to={`/users/${login}`}
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// UserItems.propTypes = {
//   user: PropTypes.object.isRequired,
// };

export default UserItems;
