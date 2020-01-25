let dateBox = document.querySelector(".main-get-time");

if(dateBox) {
  let date = new Date();
  dateBox.innerhtml(date);
} else {
  console.log("Не смог найти .main-get-time");
}
