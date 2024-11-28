let dataSet;

async function init(id) {
  //podaci iz json file se prezentiraju na stranici
  await fetch("/public/https.json")
    .then((response) => response.json())
    .then((data) => {
      dataSet = data;
    })
    .catch((error) => console.error("Error fetching the JSON file:", error));
  console.log(dataSet);
  document.getElementById("descript-title").innerText = dataSet[id].name;
  document.getElementById("tipPodatka").innerText = dataSet[id].dataType;
  document.getElementById("prijenosPodatka").innerText = dataSet[id].transport;
  document.getElementById("multipleks").innerText = dataSet[id].multiplex;
  document.getElementById("zaglavlje").innerText = dataSet[id].header;
  document.getElementById("sigurnost").innerText = dataSet[id].security;
  document.getElementById("dodatno").innerText = dataSet[id].moreInfo;
  document.getElementById(
    "layersImg"
  ).src = `/public/image/${dataSet[id].images[0]}`;
  if (dataSet[id].images.length > 1) {
    document.getElementById(
      "dataTransferImg"
    ).src = `/public/image/${dataSet[id].images[1]}`;
    document.getElementById("dataTransferImg").classList.remove("blank");
    document.getElementById(
      "multiplexImg"
    ).src = `/public/image/${dataSet[id].images[2]}`;
    document.getElementById("multiplexImg").classList.remove("blank");
  } else {
    document.getElementById("dataTransferImg").src = `/public/image/blank.png`;
    document.getElementById("dataTransferImg").classList.add("blank");
    document.getElementById("multiplexImg").src = `/public/image/blank.png`;
    document.getElementById("multiplexImg").classList.add("blank");
  }
}

init(0); //pocetna inicijalizacija

function selectBtn(id) {
  switch (id) {
    case 1: //http1
      document.getElementById("http1btn").classList.add("selected");
      document.getElementById("http2btn").classList.remove("selected");
      document.getElementById("http3btn").classList.remove("selected");
      init(0);
      break;
    case 2: //http2
      document.getElementById("http1btn").classList.remove("selected");
      document.getElementById("http2btn").classList.add("selected");
      document.getElementById("http3btn").classList.remove("selected");
      init(1);
      break;
    case 3: //http3
      document.getElementById("http1btn").classList.remove("selected");
      document.getElementById("http2btn").classList.remove("selected");
      document.getElementById("http3btn").classList.add("selected");
      init(2);
      break;
  }
}
