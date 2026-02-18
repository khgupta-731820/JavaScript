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
    