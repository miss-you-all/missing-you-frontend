import { Outlet } from 'react-router-dom'
import Header from './components/common/Header/header.tsx'

const Layout = () => (
  <>
    <Header />
    <main className="container grid mx-auto grid-cols-4 xl:grid-cols-12 md:grid-cols-8 gap-x-5 h-[calc(100vh-3.5rem)]">
      <section className="col-span-full md:col-span-4 xl:col-start-5 md:col-start-3 h-full p-7 border-x-[black] border-r border-solid border-l">
        <Outlet />
      </section>
    </main>
  </>
)

export default Layout
