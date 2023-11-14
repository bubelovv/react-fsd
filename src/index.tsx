import { createRoot } from 'react-dom/client'
import { App } from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AboutPage } from './pages/about'
import { MainPage } from './pages/main'
import { Suspense } from 'react'

const container = document.getElementById('root')

if (!container) throw Error('root element not found')

const root = createRoot(container)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/main',
                element: <MainPage/>,
            },
            {
                path: '/about',
                element: <AboutPage/>,
            },
        ],
    },
])

root.render(
    <Suspense fallback={'Loading'}>
        <RouterProvider router={router}/>
    </Suspense>,
)
