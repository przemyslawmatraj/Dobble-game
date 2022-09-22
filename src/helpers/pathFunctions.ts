export function checkPathName(pathname: string): string {
  const pathArr = pathname.split("/");
  return pathArr.includes("dobble")
    ? "MEMORY"
    : pathArr.includes("quiz")
    ? "QUIZ"
    : "";
}
