export const FULLY_FORMED = `
# Fully Formed

Fully Formed provides powerful, type-safe, style-agnostic form state management for React with TypeScript. Fully Formed embraces the following principles:

### Forms are completely type-safe.
Forms are aware of the names of their constituents and the types of values each of those constituents contain, and construct a type representing their own value based on the types of these constituents. This makes it possible to verify the structure of the data of the form against the structure that an API route expects to receive.

### Value and validity are synchronized.

The value of a field is always set simultaneously with its validity.

### Forms are instantiated in a declarative manner.

This improves code readability and facilitates a layered approach to forms, in which their data and the components that present it are distinct.

### Forms should be powerful and flexible.

With Fully Formed, fields can control other fields, groups of fields can be created to provide an additional layer of validation, values of form elements can be adapted prior to their inclusion in value of a parent form, values to be displayed to the user or to control the UI can be derived from the state of the form and its constituents, and forms can be nested within other forms. This power and flexibility can be harnessed to provide a rich and pain-free user experience to end-users and developers alike.

### Style agnosticism.

In addition to providing the tools to structure your form data and define what makes it valid, Fully Formed provides numerous hooks for interacting with this data, controlling the UI, etc. This allows you to create any visual design you can imagine by declaratively describing how the form data controls this design.


## Tech stack
React | TypeScript | RxJS | Vitest | Github Actions
`;
