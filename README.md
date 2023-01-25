# My TO-DO-LIST 

![Screenshot (73)](https://user-images.githubusercontent.com/93249038/214533902-26f1282a-e453-42e8-9f54-09da2f92905f.png)

# Topics Covered:

1) redux package

2) react-redux package
 
3) Redux state vs react component state

4)<Provider> and createStore(reducer)

5) One state object for entire application
6) reducer functions control the values for the state properties.

7) container components are React components that connect to the Redux state

8)actions - objects produced by action creators that will be fed through all reducers.

9) mapStateToProps() & connect

# Description

Initialize Project

Run create-react-app todo to create your starter application.

Now that you have created your todo directory, cd into it.

yarn add redux react-redux or npm install --save redux react-redux This command will install the needed dependencies.

You will create a todo list using React and Redux.

Use the movies project as a reference.

The general flow of steps will be to create your store, create your reducers, create your containers, and then create the action creators.

When you add a new item to the todo array an action containing the new todo object will be dispatched through all of the reducers.

To display the todo list you will create a container that receives the todos array as a prop and then uses map to display it as an unordered list.

# ABOUT TO-DO-LIST   

React
When you type a new todo list item into the input field and press the submit button you should call an action creator that adds a new todo item to the todos array on the application state tree.

When the user presses submit you will invoke the appropriate action creator which will then have its new action fed through all of the reducers.  
   
You will display the todo list by creating a container that receives the application's todos array as a prop. That container then uses map to display the array.        
       
When you click on each todo list item you will dispatch an action that will toggle that todo item's completed property to either true or false. You will need to send the id property along with what completed should be set to.               
The todos reducer will return a brand new array that will replace the old array. We do not mutate the original array but rather replace it with a brand new version.
# TAKEAWAYS/LEARNINGS:

You should only need one reducer. This reducer will control the todos array property on the state tree.

You will have several action creators. One for adding a new todo item and another for toggling each todo item.


Containers require connect and a mapStateToProps(state) function to read from the state tree.

Actions creators should be passed inside an object as the second argument to the connect function inside components that need access to the Redux store.

http://redux.js.org/ has a todo list as an example project in their documentation. Feel free to use this as a reference as well.
