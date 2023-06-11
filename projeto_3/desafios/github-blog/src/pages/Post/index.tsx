import { useEffect, useCallback, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { api } from "../../lib/axios";
import { CardIssue, IssueContent, MainContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm'

interface Issue {
  url: string;
  title: string;
  user: string;
  createdAt: string;
  comments: string;
  content: string;
}

export function Post() {
  const { issueId } = useParams();
  const [issue, setIssue] = useState({} as Issue);

  const fetchIssueById = useCallback(async () => {
    const { data } = await api.get<any>(`/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${issueId}`)
    
    setIssue({
      title: data.title,
      url: data.html_url,
      user: data.user.login,
      createdAt: data.created_at,
      comments: data.comments,
      content: data.body
    })

  }, [issueId])

  useEffect(() => {
    fetchIssueById();
  }, [fetchIssueById])

  return (
    <MainContainer>
      <CardIssue>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </Link>
          <a href={issue.url} target='_new'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            <span>Ver no Github</span>
          </a>
        </div>
        <div>
          <strong>{issue.title}</strong>
        </div>
        <div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.user}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>{issue.createdAt}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments ? `${issue.comments} comentários` : 'Não há comentários'}</span>
          </div>
        </div>
      </CardIssue>

      <IssueContent>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.content}</ReactMarkdown>
      </IssueContent>
    </MainContainer>
  )
}