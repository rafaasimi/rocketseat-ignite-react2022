import { useContext } from 'react'
import { GithubContext } from '../../contexts/GithubContext';
import { FormContainer, SearchFormContainer, SearchFormHeader } from './styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>


export function SearchForm() {
  const { issuesCount, fetchGithubIssues } = useContext(GithubContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({resolver: zodResolver(searchFormSchema)})

  async function handleFetchGithubIssues(data: SearchFormInputs) {
    await fetchGithubIssues(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleFetchGithubIssues)}>
      <SearchFormHeader>
        <p>Publicações</p>
        <span>{issuesCount ? `${issuesCount} publicações` : 'Não há publicações'}</span>
      </SearchFormHeader>

      <FormContainer>
        <input
          type="text"
          placeholder="Buscar conteúdo" 
          {...register('query')}
        />
      </FormContainer>
    </SearchFormContainer>
  );
}
