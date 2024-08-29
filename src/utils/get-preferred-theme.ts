export function getPreferredTheme(): "light" | "dark" {
  console.log(window.matchMedia("(prefers-color-scheme: dark)"));

  return window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
