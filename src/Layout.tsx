import { Outlet } from 'react-router-dom'
import Header from './components/common/Header/header.tsx'

const Layout = () => (
  <>
    <Header />
    <main className="container grid mx-auto grid-cols-4 xl:grid-cols-12 md:grid-cols-8 gap-x-5 h-[calc(100vh-3.5rem)]">
      <section className="col-span-full md:col-span-4 xl:col-start-5 md:col-start-3 bg-blue-50 h-full p-7 ">
        <Outlet />
      </section>
    </main>
  </>
)

export default Layout
