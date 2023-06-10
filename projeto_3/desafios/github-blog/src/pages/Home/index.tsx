import { useContext, useEffect } from "react";
import { GithubContext } from '../../contexts/GithubContext'
import { Header } from "../../components/Header";
import { CardProfile, CardProfileAvatar, CardProfileInfo, IssuesList, MainContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { PostCard } from "../../components/PostCard";
import { SearchForm } from "../../components/SearchForm";


export function Home() {
  const {user, issues, fetchGithubUser, fetchGithubIssues} = useContext(GithubContext);

  useEffect(() => {
    fetchGithubUser();
    fetchGithubIssues();
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

        <SearchForm />

        <IssuesList>
          {issues.map((issue) => {
            return (issue.content && <PostCard key={issue.id} issue={issue}/>)
          })}
        </IssuesList>
      </MainContainer>

    </>
  )
}