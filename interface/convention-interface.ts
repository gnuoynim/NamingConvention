import DepthInterface from "./depth-interface";

interface ConventionInterface {
  keyword: string;
  name: string;
  depth: DepthInterface[];
  like:number;
  tab:number;
}

export default ConventionInterface;