/* 
Create a program to store and display user profiles for a basic application. Your
program should store and display one profile that contains the following:
● User name
● Age
● Subscription status
● User’s location
● User’s hobbies (at least two)
*/

//Task 1: Create the profile with made up data
let profileArray = {userName: "Batman", age: 35, suscriptionActive: true, city: "Gotham" , hobbies: ["fighting crime", "driving"]};

//Task 2: Access and Log Profile Details
console.log(profileArray.userName); // Log userName
console.log(profileArray.hobbies[1]);  // Log 2nd hobby listed 


//Task 3: Modify the Profile age and change one hobby
profileArray.age = 40;  // change age 35 -> 40
profileArray.hobbies[0] = "fine dining";


//Task 4: Print full profile
console.log("Full user profile: ");
console.log(profileArray);