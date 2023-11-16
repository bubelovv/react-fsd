import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'
import { AboutPage } from '@/pages/about'
import { MainPage } from '@/pages/main'

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
    </Suspense>
)
