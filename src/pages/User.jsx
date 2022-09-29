import { useEffect, useContext, useState } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";

const User = () => {
  const { user, fetchUser, repo, fetchRepo } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    fetchUser(params.login);
  }, []);

  const handleRepos = () => {
    fetchRepo(params.login);
  };

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="flex flex-row">
          <div>
            <figure>
              <img src={user.avatar_url} alt="" />
            </figure>
          </div>
          <div className="card-body">
            <div className="flex justify-between content-start ">
              <div className="flex flex-col space-y-20">
                <div className="text-3xl">Name : {user.login}</div>
                <div className="text-3xl">Followers : {user.followers}</div>
                <div className="text-3xl">Following : {user.following}</div>
                <div className="text-3xl">Email : {user.email}</div>
              </div>
              <div className="felx flex-col space-y-20 items-end">
                <div className="text-3xl text-end mr-6">
                  {user.public_repos}
                </div>
                <div
                  className="btn btn-ghost btn-lg shadow-xl"
                  onClick={handleRepos}
                >
                  Get Repos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
