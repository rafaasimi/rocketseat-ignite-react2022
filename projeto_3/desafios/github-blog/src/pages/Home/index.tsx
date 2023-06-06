import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { CardProfile, CardProfileAvatar, CardProfileInfo, MainContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

interface User {
  login: string;
  name: string;
  bio: string;
  company: string;
  avatarUrl: string;
  followers: number;
  url: string;
}

export function Home() {
  const [user, setUser] = useState<User>({} as User);

  async function fetchGithubUser() {
    const { data } = await api.get('/users/rafaasimi');

    setUser({
      login: data.login,
      name: data.name,
      bio: data.bio,
      company: data.company,
      avatarUrl: data.avatar_url,
      followers: data.followers,
      url: data.html_url
    });
  }

  useEffect(() => {
    fetchGithubUser();
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        <CardProfile>
          <CardProfileAvatar src={user.avatarUrl} alt={user.name} />
          <CardProfileInfo>
            <div id="title">
              <strong>{user.name}</strong>
              <a href={user.url} target="_new">
                <span>Github</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
            <div id="description">
              <p>{user.bio}</p>
            </div>
            <div id="status">
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <span>{user.login}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} />
                <span>{user.company}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} />
                <span>{user.followers} seguidores</span>
              </div>
            </div>
          </CardProfileInfo>
        </CardProfile>
      </MainContainer>

    </>
  )
}