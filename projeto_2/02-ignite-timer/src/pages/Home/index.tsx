import { HandPalm, Play } from 'phosphor-react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Coundown } from './components/Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { CyclesContext } from '../../context/CyclesContext'
import { useContext } from 'react'

// Controlled
// Manter em tempo real os valores atualizados dos inputs em uma variavel-estado
// Pode dar gargalo dependendo da aplicação (Pois a tela irá renderizar sempre que uma variavel-estado mudar)

// Uncontrolled
// Recupero os valores somente no momento do submit
// Perco o beneficio de ter o valor atualizado em tempo real

// Register
// Recebe um valor (nome do campo) e retorna diversos métodos como onChange, onInput

/**
 * function register(name: string) {
 *  return {
 *    onChange: () => void,
 *    onBlur: () => void
 *  }
 * }}
 */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().trim().min(1, 'Informe a tarefa.'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 60 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch /* reset */ } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Coundown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
