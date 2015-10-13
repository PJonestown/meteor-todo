Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client

  Template.body.helpers({
    tasks: function() {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser submit
      event.preventDefault();

      // Get value from form element
      var text = event.target.text.value;

      // Insert a task into collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // Current time
      });

      // Clear form
      event.target.text.value ="";
    }
  });
}
