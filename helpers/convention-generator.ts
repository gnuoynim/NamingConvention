import ConventionInterface from "../interface/convention-interface";

const conventionGenerator = (item: ConventionInterface) => {

  return item.depth.map((i) => {
    let content = "";
    switch (item.name) {
      case "snake_casing":
        content = `${item.keyword}_${i.text}`;
        break;

      case "camelCasing":
        content = `
          ${item.keyword.charAt(0).toLowerCase()}${item.keyword.slice(
          1,
          item.keyword.length
        )}${i.text.charAt(0).toUpperCase()}${i.text.slice(1, i.text.length)}`;
        break;

      case "PascalCase":
        content = `
          ${item.keyword.charAt(0).toUpperCase()}${item.keyword.slice(
          1,
          item.keyword.length
        )}${i.text.charAt(0).toUpperCase()}${i.text.slice(1, i.text.length)}`;
        break;

      case "kebab-case":
        content = `${item.keyword}-${i.text}`;
        break;
    }
    return { content };
  });
};

export default conventionGenerator;
