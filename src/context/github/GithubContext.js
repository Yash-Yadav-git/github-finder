import { createContext, useReducer } from "react";
import githubReducer from "../GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialSate = {
    users: [],
    user: {},
    repo: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialSate);

  //Get Search Results
  const fetchUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${params}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const { items } = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //Get Single User
  const fetchUser = async (login) => {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  //Get Repos

  const fetchRepo = async (login) => {
    const response = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
        clearUsers,
        user: state.user,
        fetchUser,
        repo: state.repo,
        fetchRepo,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
