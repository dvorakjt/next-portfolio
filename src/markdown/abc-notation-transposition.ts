export const ABC_NOTATION_TRANSPOSITION = `
# ABC Notation Transposition

Abc notation is text-based music notation code developed by Chris Walshaw which can be interpreted by software and rendered as sheet music.
This module takes in a string in valid abc syntax and an integer number of half steps (positive for ascending, negative for descending) and 
returns a new abc string transposed by that amount. 

Various options are available for fine-grained control over the transposition. The module can transpose both tonal and atonal music.

Internally, the module implements circular arrays to represent collections of musical
pitches such as scales and cycle through them. Regular expressions are used to identify symbols within ABC notation that require 
transposition, indicate key changes, etc.

## Tech Stack
JavaScript | Node.js | Jest | Github Actions
`;
