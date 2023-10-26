import Banner from './components/mainPage/Banner'
import MainPageView from './components/mainPage/MainpageView'

export const metadata = {
  title: 'Internet Solutions',
  description: 'We sell quality and brand new mobile phones, tablets, laptops and routers',
}

export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <Banner />
      <MainPageView />
    </main>
  )
}
