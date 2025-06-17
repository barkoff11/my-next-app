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
  <section id="about">
    <Researches />
  </section>
  <section id="solutions">
    <Content />
  </section>
  <section id="brand">
    <AssessmentOfBrand />
  </section>
  <section id="methods">
    <Methods />
  </section>
  <section id="examples">
    <Examples />
  </section>
  <section id="news">
    <ExamplesList />
  </section>
  <section id="contacts">
    <Contact />
  </section>
  <BottomHeader />
</main>

  )
}
