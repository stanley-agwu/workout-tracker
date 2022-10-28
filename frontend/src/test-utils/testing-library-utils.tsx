import { FC, ReactElement } from 'react'
import {render, RenderOptions} from '@testing-library/react'
import { AuthContextProvider } from '../context/AuthContext'
import { WorkoutsContextProvider } from '../context/WorkoutsContext'


const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <AuthContextProvider>
      <WorkoutsContextProvider>
        {children}
      </WorkoutsContextProvider>
    </AuthContextProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}