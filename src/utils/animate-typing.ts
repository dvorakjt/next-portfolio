import type { Dispatch, SetStateAction } from "react";
import type { AnimatedTextLineState } from "../model/animated-text-line-state";

export const animateTyping = (
  lines: string[],
  i: number,
  j: number,
  textState: AnimatedTextLineState[],
  setTextState: Dispatch<SetStateAction<AnimatedTextLineState[]>>,
  setAnimationStage?: Dispatch<SetStateAction<number>>
) => {
  //i place in the array, j place in the string
  //if there is no string at index i, return
  if (!lines[i]) return;

  //if the currentLine is not flagged as the currentLine, update this
  if (!textState[i].isCurrentLine)
    setTextState(
      textState.map((lineState, index) => {
        if (index === i) {
          return {
            ...lineState,
            isCurrentLine: true,
          };
        }

        return lineState;
      })
    );

  //if j is less than the text array length, update the text state to include textArr[i][j]
  if (j < lines[i].length)
    setTextState([
      ...textState,
      (textState[i].text = lines[i].slice(0, j + 1)),
    ] as unknown as AnimatedTextLineState[]);

  //then set a timeout, call type me again, either updating i or j, return if i is >= textArr.length
  setTimeout(() => {
    if (j < lines[i].length)
      animateTyping(
        lines,
        i,
        j + 1,
        textState,
        setTextState,
        setAnimationStage
      );
    else {
      setAnimationStage && setAnimationStage(i + 1);
      if (i < lines.length) {
        setTextState([
          ...textState,
          (textState[i].isCurrentLine = false),
        ] as unknown as AnimatedTextLineState[]);
        animateTyping(
          lines,
          i + 1,
          0,
          textState,
          setTextState,
          setAnimationStage
        );
      } else {
        return;
      }
    }
  }, 125);
};
