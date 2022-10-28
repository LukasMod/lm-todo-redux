import {ITodo} from '../types/Todo'
import {handleAxiosError} from '../utils/axiosError'
import Api from './Api'

export const getTodos = async () => {
  try {
    const response: ITodo[] = await Api.get('/todos', {
      headers: {'Content-Type': 'application/json'},
    })
    return response
  } catch (error) {
    return handleAxiosError('[API ERROR]: getTodos', error)
  }
}
