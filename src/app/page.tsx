import dynamic from 'next/dynamic';
import Header from "@/Header/Header";
import Researches from "@/Researches/Researches";
import Content from '@/Content/Content';
import Methods from '@/Methods/Methods';
import Examples from '@/Examples/Examples';
import ExamplesList from '@/News/NewsList';
import Contact from '@/Contact/Contact';
import BottomHeader from '@/BottomHeader/BottomHeader';
import AssessmentOfBrand from '@/AssessmentOfBrand/AssessmentOfBrand';
// Импортируйте остальные компоненты аналогично

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
  );
}