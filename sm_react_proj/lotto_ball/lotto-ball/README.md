The purpose of this project is to practice state design 
(minimizing state as well as centralizing state in parents to support downward data flow),
and creating flexible, reusable components.
The app, Lotto Ball offers two options for generating lottery numbers by clicking a "Generate" button.
1. 6 lotto balls containing numbers from 1 - 40
2. Mini-daily - 4 lotto balls containing numbers from 1 - 10

The only state in the app is an array of numbers in the Lottery component that are regenerated
by an event (Generate button). The numbers are then passed as props to the Ball component.
The Ball component is a display component.
Ball contains a prop called num, no state or events.
