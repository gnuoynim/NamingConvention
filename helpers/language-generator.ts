import ConventionInterface from "../interface/convention-interface";
import LanguageInterface from "../interface/language-interface";

const conventionGenerator = (item: LanguageInterface) => {
  return item.depth.map((i) => {
    let content = "";
    switch (item.tab) {
      case 0:
        content =`${item.variable}`
        break;

      case 1:
        break;
    }
    return { content };
  });
};

export default conventionGenerator;
