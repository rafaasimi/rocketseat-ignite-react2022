import { Issue } from '../../contexts/GithubContext';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PostCardContainer, PostCardDescription, PostCardHeader } from './styles';

import remarkStripHtml from 'remark-strip-html'

interface PostCardProps {
  issue: Issue;
}

export function PostCard({ issue }: PostCardProps) {
  const { title, createdAt, content, id } = issue;

  const publishedDateRelativeToNow = formatDistanceToNow(new Date(createdAt), {
    locale: ptBR,
    addSuffix: true,
  });

  return (
      <PostCardContainer to={`/post/${id}`}>
        <PostCardHeader>
          <strong>{title}</strong>
          <span>{publishedDateRelativeToNow}</span>
        </PostCardHeader>
        <PostCardDescription>
          <ReactMarkdown remarkPlugins={[remarkStripHtml]}>{content}</ReactMarkdown>
        </PostCardDescription>
      </PostCardContainer>
  );
}
