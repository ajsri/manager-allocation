#allocator
###Overview
Need an application that can calculate a department/managers monthly expense allocation based on number and types of employees. 

Uses facebook's react - production app would use Redux for state

###Requirements
- Managers can have QA, Devs, and other managers report to them
- Only managers can have people report to them
- Employee can only report to one direct manager
- Users can determine monthly expenses manager warrants who has various employee types reporting to them. Flexible depth/hierarchy.

###Example
Manager A <- Manager B <-- Dev | QA (I have no idea how to format this) would be $2100

###Numerical Worth (faithful to real life)
- Developer - $1000
- QA Tester - $500
- Manager - $300

###Usage
- Clone the repo
- Run `npm install` and `npm run dev`