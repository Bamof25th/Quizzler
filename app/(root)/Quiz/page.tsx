import HeaderBtns from "@/components/ui/QuizPage/HeaderBtns";
import CategoryContainer from "@/components/ui/QuizPage/CategoryContainer";
import WildcardsRight from "@/components/ui/QuizPage/WildcardsRight";
import FooterBtns from "@/components/ui/QuizPage/FooterBtns";

const randomBg = {
  1: {
    uri: "bg-quiz1",

    color: "bg-quiz1",
  },

  2: {
    uri: "bg-quiz2",

    color: "bg-quiz2",
  },

  3: {
    uri: "bg-quiz3",

    color: "bg-quiz3",
  },

  4: {
    uri: "bg-quiz4",

    color: "bg-quiz4",
  },

  5: {
    uri: "bg-quiz5",

    color: "bg-quiz5",
  },
};

const Page = () => {
  return (
    // main container with different bg after each question

    <div className="flex flex-col h-screen w-full bg-[url('/assets/backgrounds/download.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden relative z-0 bg-[#1f1f1f]">
      <HeaderBtns />
      <div className="absolute left-0 flex h-full items-center gap-4 ml-3 ">
        <CategoryContainer />
      </div>
      <div>{/* question card with options and timer */}</div>

      <div className="flex flex-col-2 h-full absolute right-0 items-center gap-4 mr-3">
        <WildcardsRight />
      </div>
      <FooterBtns />
    </div>
  );
};

export default Page;
