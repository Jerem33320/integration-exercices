const img = document.createElement("img");
const imgDot = document.createElement("img");
const src = document.getElementById("phone-center");

img.src = schoesData[0].image;
img.classList.add("transitionEffectShow");
img.style.height = '280px';
src.appendChild(img);

function changeSchoesOnClick(number){
  src.removeChild(img);
  img.src = schoesData[number].image;
  img.classList.add("transitionEffectShow");
  src.appendChild(img);

  imgDot.src = schoesData[number].dot;
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
            changeSchoesOnClick(0);
          break;
          case "nike-black":
            changeSchoesOnClick(1);
          break;
          case "nike-white":
            changeSchoesOnClick(2);
          break;
          case "nike-m2k":
            changeSchoesOnClick(3);
          break;
          default:
            console.log("ERROR while clicking shoes in the phone footer")
        } 
      });
  }
}

addEventListenerByClass('shoes-footer'); 