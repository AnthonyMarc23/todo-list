"use strict";

// Our controller
function TodoControl() {
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
  vm.toggleSelect = function(index) {
    vm.list[index].completed = !vm.list[index].completed;
  };

  vm.deleteAtEntry = function(item) {
    vm.list.splice(vm.list.indexOf(item), 1);
  }


}

// Using the getter syntax to bring in our module and declaring the controller.
angular
  .module("todoApp")
  .controller("TodoControl", TodoControl);