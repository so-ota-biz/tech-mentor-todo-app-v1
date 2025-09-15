// import
import { memo, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'

// components
import { routes } from './routes'
import { HeaderLayout } from '@/components/templates/HeaderLayout'

export const Router: FC = memo(() => {
  return (
    <Routes>
      {routes.map(({ path, component: Component, withHeader }) => (
        <Route
          key={path}
          path={path}
          element={
            withHeader ? (
              <HeaderLayout>
                <Component />
              </HeaderLayout>
            ) : (
              <Component />
            )
          }
        />
      ))}
    </Routes>
  )
})
