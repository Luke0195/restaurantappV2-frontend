import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from '@/app/components/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import '@/app/assets/styles/main.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme>
        <Main />
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>,
)
