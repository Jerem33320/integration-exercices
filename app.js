const img = document.createElement("img");
const imgDot = document.createElement("img");
const src = document.getElementById("phone-center");

img.src = schoesData[0].image;
// img.id = schoesData[0].id;
img.classList.add("transitionEffectShow");
img.style.height = '280px';
src.appendChild(img);

function changeSchoesOnFooterClick(id){
  src.removeChild(img);
  img.src = schoesData[id].image;
  img.id = schoesData[id].id;
  img.classList.add("transitionEffectShow");
  src.appendChild(img);

  img.onclick = function () {
    location.href = `${schoesData[id].name}.html`;
  }

  imgDot.src = schoesData[id].dot;
  imgDot.style.position = 'absolute';
  imgDot.style.height = "110px";
  imgDot.style.top = "-16%";
  imgDot.style.right = "-96%";
  src.appendChild(imgDot);
}

function addEventListenerByClass(className) {
  const list = document.getElementsByClassName(className);
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', (e) => {

        switch(e.target.id) {
          case "falcon":
            changeSchoesOnFooterClick(0);
          break;
          case "nike-black":
            changeSchoesOnFooterClick(1);
          break;
          case "nike-white":
            changeSchoesOnFooterClick(2);
          break;
          case "nike-m2k":
            changeSchoesOnFooterClick(3);
          break;
          default:
            console.log("ERROR while clicking shoes in the phone footer")
        } 
      });
  }
}

addEventListenerByClass('shoes-footer');