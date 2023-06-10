import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/axios";

interface User {
  login: string;
  name: string;
  bio: string;
  company: string;
  avatarUrl: string;
  followers: number;
  url: string;
}

export interface Issue {
  id: number;
  title: string;
  url: string;
  author: string;
  content: string;
  createdAt: string;
  comments: number;
}

interface GithubFetchIssues {
  total_count: number;
  items: [];
}

interface GithubContextType {
  user: User;
  issues: Issue[];
  issuesCount: number;
  fetchGithubUser: () => Promise<void>;
  fetchGithubIssues: (query?: string) => Promise<void>;
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({children}: GithubProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [issuesCount, setIssuesCount] = useState(0);
  
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

  async function fetchGithubIssues(query?: string) {
    const {data: { items }} = await api.get<GithubFetchIssues>('/search/issues', {
      params: {
        q: `${query ? query : ''}repo:rocketseat-education/reactjs-github-blog-challenge`
      }
    });

    const issuesTreated = items.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        content: item.body,
        author: item.user.login,
        createdAt: item.created_at,
        url: item.html_url,
        comments: item.comments,
      } as Issue
    }).filter((item: any) => {
      if(item.content) {
        return item
      }
    })

    setIssuesCount(issuesTreated.length);
    setIssues(issuesTreated);
  }
  
  return (
    <GithubContext.Provider value={{user, issues, issuesCount, fetchGithubUser, fetchGithubIssues}}>
      {children}
    </GithubContext.Provider>
  )
}
