import React from 'react'
import { Outlet } from 'react-router-dom'
import 'twin.macro'

const Layout = () => (
  <>
    <div tw="max-w-[980px] mx-auto">
      <nav tw="bg-red-500 w-full">hihi</nav>
      <div>
        <Outlet />
      </div>
    </div>
  </>
)

export default Layout
