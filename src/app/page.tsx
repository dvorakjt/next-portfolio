import { ThemeContextProvider } from "@/contexts/theme-context";
import { AnimationContextProvider } from "@/contexts/animation-context";
import { Home } from "@/components/home";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Connect } from "@/components/connect";
import { ThemeToggler } from "@/components/theme-toggler";

function App() {
  return (
    <ThemeContextProvider>
      <AnimationContextProvider>
        <Home />
        <About />
        <Projects />
        <Connect />
        <ThemeToggler />
      </AnimationContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
