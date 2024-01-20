let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    arr.forEach(function(element){
        if(element.profession === 'developer')
        {
            console.log(element);
        }
    });
}
  
  function addData() {
    //Write your code here, just console.log
    let newData = { id:4, name: 'susan', age:20, profession: 'intern'};
    arr.push(newData);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let newArr = arr.filter(function(element){
        if(element.profession !== 'admin')
        {
            console.log(element);
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let concatArr = [
        { id: 5, name: 'james', age: 28, profession: 'driver' },
        { id: 6, name: 'jacob', age: 30, profession: 'dancer' },
        { id: 7, name: 'kenndy', age: 18, profession: 'advocate' },
    ];

    arr = arr.concat(concatArr);
    console.log(arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }