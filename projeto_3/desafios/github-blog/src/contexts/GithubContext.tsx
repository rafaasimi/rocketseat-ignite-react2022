import { ReactNode, createContext, useEffect, useState } from "react";
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

interface GithubContextType {
  user: User;
  fetchGithubUser: () => Promise<void>;
}

interface GithubProviderProps {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({children}: GithubProviderProps) {
  const [user, setUser] = useState({} as User);
  
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
    <GithubContext.Provider value={{user, fetchGithubUser}}>
      {children}
    </GithubContext.Provider>
  )
}
