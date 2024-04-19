import ReactDOM from 'react-dom/client'
import { Main } from '@/app/App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import '@/app/assets/styles/main.css'
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Main />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </QueryClientProvider>,
)
