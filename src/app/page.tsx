import Header from "@/Header/Header";
import Researches from "@/Researches/Researches";
import Content from "@/Content/Content";
import AssessmentOfBrand from "@/AssessmentOfBrand/AssessmentOfBrand"
import Methods from "@/Methods/Methods";
import Examples from "@/Examples/Examples";

export default function Home() {
  return (
    <div>
      <Header/>
      <Researches/>
      <Content/>
      <AssessmentOfBrand/>
      <Methods/>
      <Examples/>
    </div>
  );
}
