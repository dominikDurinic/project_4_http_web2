function formResponse(grade) {
  localStorage.setItem("grade", grade);
  document.getElementById("form").style.visibility = "hidden";
  document.getElementById("grade").innerText = grade;
}

document.getElementById("grade").innerText =
  localStorage?.getItem("grade") || 0;
