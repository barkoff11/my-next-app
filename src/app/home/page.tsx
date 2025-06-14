import dynamic from 'next/dynamic'
import Header from "@/components/Header/Header"
import Researches from "@/components/Researches/Researches"
import Content from '@/components/Content/Content'
import Methods from '@/components/Methods/Methods'
import Examples from '@/components/Examples/Examples'
import ExamplesList from '@/components/News/NewsList'
import Contact from '@/components/Contact/Contact'
import BottomHeader from '@/components/BottomHeader/BottomHeader'
import AssessmentOfBrand from '@/components/AssessmentOfBrand/AssessmentOfBrand'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Researches />
      <Content />
      <AssessmentOfBrand />
      <Methods />
      <Examples />
      <ExamplesList />
      <Contact />
      <BottomHeader />
    </main>
  )
}
