'use client'
import { ConfigProvider, theme } from 'antd'
export function Providers({ children }) {
  return (
    <>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </>
  )
}
