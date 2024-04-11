import React from 'react'
import ReactDOM from 'react-dom/client'
import { Main } from '@/app/components/app'
import '@/app/assets/styles/main.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <Main />
    </Theme>
  </React.StrictMode>,
)
