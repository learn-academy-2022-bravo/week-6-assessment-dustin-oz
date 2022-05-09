# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: Interestingly, I made this same mistake recently when making the Wildlife Tracker. To resolve this challenge question, I would simply run the following 2 terminal commands: `rails g migration adds_foreign_key_to_students` Afterwards I would run `rails db:migrate` Since Cohort has many students, foreign key in this case gets added to Students. 

  Researched answer: In order to research this question and since this was the exact mistake I made in the Wildlife Tracker, I went back ton research how I handled this issue specificly. It is worth noting, that I believe in this challenege question and based on how i handled Wildlife tracker, i believe inside the migration file, in the change method students should be verified to be plural. Since we are talking about keys, it is also worth noting that the primary key in this example would reside with the Cohort model.



2. Which RESTful routes must always be passed params? Why?

  Your answer: There are two RESTful routes that require params. "Edit" and "Create". It becomes clear why this is the case when you look at all the routes. Edit and Create and creating NEW data in the database. Whether it is legitimately new or whether it has been edited, this also makes it new data and in this case, the way to get this data is via paramaters being passed into the route.

  Researched answer: There are two RESTful routes that require params. "Edit" and "Create". It becomes clear why this is the case when you look at all the routes. Edit and Create and creating NEW data in the database. Whether it is legitimately new or whether it has been edited, this also makes it new data and in this case, the way to get this data is via paramaters being passed into the route. **New** Another way to look at params is params are how we make our routes dynamic. With a few standard routes, we can dynamically change the parameters to affect the database and therefore our app in almost countless ways.



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer:



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          

action: "POST"   location: /students       

action: "GET"    location: /students/new

action: "GET"    location: /students/2  

action: "GET"    location: /students/2/edit    

action: "PATCH"  location: /students/2      

action: "DELETE" location: /students/2      



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
