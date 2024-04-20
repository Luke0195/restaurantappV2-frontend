import { Category } from '@/entities/category'

export interface CategoryUseCases {
  getCategories(): Promise<Category[]>
}
