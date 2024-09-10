import Header from "@/Header/Header";
import Researches from "@/Researches/Researches";
import Content from "@/Content/Content";
import AssessmentOfBrand from "@/AssessmentOfBrand/AssessmentOfBrand"
import Methods from "@/Methods/Methods";
import Examples from "@/Examples/Examples";
import ExamplesList from "@/News/NewsList";
import exampleData from "@/News/const";
import Contact from "@/Contact/Contact";
import BottomHeader from "@/BottomHeader/BottomHeader";

export default function Home() {
  return (
    <div>
      <Header/>
      <Researches/>
      <Content/>
      <AssessmentOfBrand/>
      <Methods/>
      <Examples/>
      <ExamplesList examples={exampleData} />
      <Contact/>
      <BottomHeader/>
    </div>
  );
}
