import HeaderBtns from "@/components/ui/QuizPage/HeaderBtns";
import CategoryContainer from "@/components/ui/QuizPage/CategoryContainer";
import WildcardsRight from "@/components/ui/QuizPage/WildcardsRight";
import FooterBtns from "@/components/ui/QuizPage/FooterBtns";
import QuestionCard from "@/components/ui/Questions/QuestionCard";

const  bgColor = "#f05050"

const Page = () => {
  return (
    // main container with different bg after each question

    <div
      className="flex flex-col h-screen w-full bg-quiz overflow-hidden relative z-0"
      style={{ backgroundColor: bgColor }}
    >
      <HeaderBtns />
      <div className="absolute left-0 flex h-full items-center gap-4 ml-3">
      <CategoryContainer />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full">
      <QuestionCard />
      </div>

      <div className="flex flex-col-2 h-full absolute right-0 items-center gap-4 mr-3">
      <WildcardsRight />
      </div>
      <FooterBtns />
    </div>
  );
};

export default Page;
