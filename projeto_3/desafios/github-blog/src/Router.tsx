import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post/:issueId" element={<Post />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
