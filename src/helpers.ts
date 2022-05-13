import Icons from "../src/assets/icons";

const getIconForFile = (fileName: string) => {
  const extension = getFileExtension(fileName);

  switch (extension) {
    case "gitignore":
      return Icons.GitFile;
    case "css":
      return Icons.CssFile;
    case "image":
      return Icons.ImageFile;
    case "js":
      return Icons.JsFile;
    case "json":
      return Icons.JsonFile;
    case "md":
      return Icons.ReadmeFile;
    case "lock":
      return Icons.YarnFile;
    case "png":
    case "svg":
    case "jpg":
      return Icons.ImageFile;
    default:
      return Icons.DefaultFile;
  }
};

const getFileExtension = (filename: string) => {
  return filename.split(".").pop() || "";
};

export { getIconForFile, getFileExtension };
