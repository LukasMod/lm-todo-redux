import {AxiosResponse} from 'axios'
import {ITodo} from '../types/Todo'
import {handleAxiosError} from '../utils/axiosError'
import Api from './Api'

export const getTodos = async () => {
  try {
    const response: AxiosResponse<ITodo[]> = await Api.get('/todos', {
      headers: {'Content-Type': 'application/json'},
    })
    return response.data
  } catch (error) {
    return handleAxiosError('[API ERROR]: getTodos', error)
  }
}

export const createTodo = async (todo: ITodo) => {
  try {
    await Api.post(
      '/todos',
      {
        ...todo,
      },
      {
        headers: {'Content-Type': 'application/json'},
      },
    )
  } catch (error) {
    return handleAxiosError('[API ERROR]: createTodo', error)
  }
}

export const finishTodo = async (todoId: number) => {
  try {
    await Api.patch(
      `/todos/${todoId}`,
      {
        done: true,
      },
      {
        headers: {'Content-Type': 'application/json'},
      },
    )
  } catch (error) {
    return handleAxiosError('[API ERROR]: createTodo', error)
  }
}
