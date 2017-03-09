var obj = {
  name: 'Cristian',
  printName: function () {
    console.log(`My name is ${this.name}`);
  }
};

obj.printName();
setTimeout(obj.printName.bind({name: 'Emanuel'}), 1000);
