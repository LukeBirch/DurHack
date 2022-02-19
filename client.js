

// make button event listeners
let one = document.getElementById("one");
one.addEventListener("click", async function() {
  let fetchResponse = await fetch("http://127.0.0.1:3000/one");
  fetchResponseText = await fetchResponse.text();
  console.log(fetchResponseText)
});

// submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", async function(){
  let timevalue = document.getElementById("timeinput").value;
  await fetch("http://127.0.0.1:3000/timeinput", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({time: timevalue, person: "Mark"})
    });

})