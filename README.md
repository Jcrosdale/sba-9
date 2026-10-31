How you implemented React and TypeScript features.

To start, I implemented React and TypeScript using Vite. I used components that were built from Lab 9.3 to provide the foundation for this project. However, I did add new components like filters, a task dashboard, a task form, and task form props. Through TypeScript, I was able to catch a lot more errors, and as the code went along, I was able to debug and fix errors as I went through the browser and terminal. 

The challenges you encountered and how you overcame them.

As I was completing the project, I ran into a lot of duplicate declarations, especially as I was adding different properties and states within different components. Sometimes this involved removing the local state and handlers and letting a component only receive props. I also ran into type mismatches, so I needed to adjust those so that there were no errors, which involved me needing to rearrange certain props or certain interfaces to prevent any type errors. Overall, keeping up with all the different names and components that were being used proved to be very challenging. 

Your approach to component composition and state management.

To create the components, I used Lab 9.3 as a foundation to start. I used useState for tasks, filters, and form data, alongside using useEffect to save tasks to local storage. After each change in the form, I also added each input's value from the state through a handleChange function. I used .map for status changes, .filter for anything that needs to be deleted, and spread syntax for any additions, so that React could re-render those changes. I wanted to keep as much reusable logic, such as filtering, validation, or storage helpers, in the utils file to keep the components at a smaller size. 

