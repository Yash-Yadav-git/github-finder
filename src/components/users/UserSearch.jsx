import { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, fetchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  const handleClear = () => {
    clearUsers();
  };

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
        {/* Grid Chikd one */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 bg-gray-200 input input-lg text-black"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />

                <button className="absolute top-0 right-0 w-36 rounded-l-none btn btn-lg">
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Grid child 2 */}
        {users.length > 0 && (
          <div>
            <button className="btn btn-ghost btn-lg" onClick={handleClear}>
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserSearch;
