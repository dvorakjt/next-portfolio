"use client";
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
  type PropsWithChildren,
} from "react";

interface AnimationContextType {
  animationStage: number;
  setAnimationStage: Dispatch<SetStateAction<number>>;
}

export const AnimationContext = createContext<AnimationContextType | null>(
  null
);

export const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [animationStage, setAnimationStage] = useState(0);

  return (
    <AnimationContext.Provider value={{ animationStage, setAnimationStage }}>
      {children}
    </AnimationContext.Provider>
  );
};
