import React from 'react'
import { AuthenticationParams } from '../protocols'
import { UseFormReturn } from 'react-hook-form'

export type AuthenticationHookProps = {
  loadingProps: {
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  }
  form: UseFormReturn<AuthenticationParams, any, undefined>
  onSubmit: ({ email, password }: AuthenticationParams) => Promise<void>
}
