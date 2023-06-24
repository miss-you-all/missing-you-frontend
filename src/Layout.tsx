import { Outlet } from 'react-router-dom'

const Layout = () => (
  <>
    <div className="max-w-[980px] mx-auto">
      <nav className="bg-red-500 w-full">hihi</nav> // header
      <div className="bg-blue-500">
        <Outlet />
      </div>
    </div>
  </>
)

export default Layout
