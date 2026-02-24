/*WHY? → Node.js is ASYNCHRONOUS by nature
      → Database queries, file reads, API calls - ALL are async
      → You MUST understand this before touching Node.js
      */
// Advanced JavaScript (Critical for Node.js)
// Understand Sync and async
  //SYnc (blocking)- Each line waits for the previous line to finish before executing.

  console.log("Line 1");
  // imagine a database query taking 2 seconds here
  console.log("Line 2");
  // wait for 2 seconds .2-> everything stops.
    //Async (non-blocking)- Lines can execute without waiting for the previous line to finish.  
    console.log("1 start");
    setTimeout(
        ()=>{
            console.log("2 middle");
        },2000);
        console.log("3 end");
    // Output:
    // 1 start
    // 3 end
    // 2 middle (after 2 seconds)

    // Promises
   // crreating a promise
   //regular function
   function calculateBMI(weight,height){
    return weight/(height*height);
   }
   console.log(calculateBMI(70,1.75)); // 22.86
    // Object and Destructuring

    const patient={
        id:1,
        name:"Harish",
        age:23,
        weight:70,
        height: 5.8,
        bloodgroup : "NA",
        Address: {
            city:"Rockville",
            state:"MD",
            zip:"20897"
        }
    };
    console.log(patient.name);
    console.log(patient.Address.city);

    // destructuring- extrcating values into variables
    const{name:patientname,age:patientage,Address:patientaddress}=patient
    console.log(patientname);

    console.log(patientage);
    console.log(patientaddress.state);
    // Arrays and Array Method
    const patients=[
        {
            id:1,
            name:"Sunil",
            age:25,
            weight:80,
            status :"recovered"
        },
        {
            id:2,
            name:"SKG",
            age:24,
            weight:50,
            status :"recovered"
        },
        {
            id:3,
            name:"HKG",
            age:22,
            weight:55,
            status :"Admitted"
        },
    ];
    // filter -get subset
 const recoveredPatients=patients.filter(p=>p.status=="recovered");
 console.log(recoveredPatients);

 // find - get first element matching condition
 const bob = patients.find(p=>p.name=="HKG");
 console.log(bob);

// reduce- calculate somthing from array

