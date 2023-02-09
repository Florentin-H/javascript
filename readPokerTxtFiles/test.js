document.querySelector(".inputFile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    document.querySelector(".output").textContent = fr.result;
  };
//   console.log(fr);
  fr.readAsText(this.files[0]);
});

var reader = new FileReader();
reader.onload = function (event) {
  var contents = event.target.result;
  var lines = contents.split("\n");
//   var username = "";
  lines.forEach((line) => {
    var [key, value] = line.split(":"); // splits the line into an array breaking on the colon
    if (key === "Tournament" || key === "***") {
      // checks for the keys so that any other key:value in subsequent lines will not be added to the username
      username = username + " " + value.trim(); // to remove trailing whitespaces, if any, from the value
    }
  });
//   document.getElementById("username").innerHTML = username;
};
reader.readAsText(file);
