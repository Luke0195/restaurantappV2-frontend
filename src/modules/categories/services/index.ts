import { Category } from '@/entities/category'
import { CategoryUseCases } from '../usecases'
import { axiosInstance } from '@/shared'

import axios from 'axios'

class CategoryService implements CategoryUseCases {
  async getCategories(): Promise<Category[]> {
    const response = await axiosInstance.get('/categories')
    console.log(response)
    return response.data
  }
}

const categoryService = new CategoryService()

export { categoryService }
