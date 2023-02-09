document.querySelector(".inputFile").addEventListener("change", function () {
  var fr = new FileReader();
  fr.onload = function () {
    document.querySelector(".output").textContent = fr.result;
    console.log(fr.result);
  };
  fr.readAsText(this.files[0]);
});


