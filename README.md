## Confusing points
Several semantics or details are easy to conflate in this codebase, due to the sematics of React and my poor choice of naming while building the controller app.
- "React Component" and "controller component" are different
- Schemas for a controller component are different between the controller app and this editor. "Properties" in the app refers to that controller schema, here it refers to the editor schema.  
The difference in schema allows me more granular control over internal vs external (user-facing) naming of properties, as well as over how the user's configuration of properties actually interfaces with the component and its behavior. Unfortunately, this does require that I translate back and forth between schema.