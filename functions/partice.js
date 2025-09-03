function greet (name="dear") {
    a  = "Good Morning " + name
    console.log(a)
}
greet()



// increment and decrement

let value = 0;

    function increment() {
      value++;
      document.getElementById("count").innerText = value;
    }

    function decrement() {
      value--;
      document.getElementById("count").innerText = value;
    }