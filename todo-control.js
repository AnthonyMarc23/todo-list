"use strict";

// Our controller
function TodoControl($timeout) {
  const vm = this;
  vm.list = [
    {
      task: "Take out the trash",
      completed: true,
    },
    {
      task: "Pay the bills",
      completed: false,
    },
    {
      task: "Make Dinner",
      completed: true,
    },
    {
      task: "Walk the Dog",
      completed: false,
    },
    {
      task: "Tape Wheel of Fortune",
      completed: true,
    }
  ];

  vm.deleteAtEntry = function(item) {  
      let index = vm.list.indexOf(item);
      console.log(index);
      vm.list.splice(index, 1);  
  }


  // vm.taskTodo = "";
  vm.addItem = (item) => {
    vm.list.push({
      task: item,
      completed: false
    });
    // console.log(vm.taskTodo);
    vm.taskTodo = "";
    // console.log(vm.taskTodo);
  }


  vm.updateItem = (index, item) => {
    // Removes an item based on the index
    // Also inserts a brand new object based on what was submitted in the edit form
    vm.list.splice(index, 1, { 
      task: item.task,
      completed: item.completed
    });
  }

  vm.markAsComplete = (index) => {
    console.log(index);
    $timeout(() => {
      vm.list[index].completed = true;
    }, 800)
  }

}

// Using the getter syntax to bring in our module and declaring the controller.
angular
  .module("todoApp")
  .controller("TodoControl", ["$timeout", TodoControl]);