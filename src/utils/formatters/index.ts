import validators from '@/utils/validators'

class Formatters {
  notEmptyStringOrDefault(value: any = ''): string {
    return validators.isString(value) ? value : '-'
  }
}

export default new Formatters()
