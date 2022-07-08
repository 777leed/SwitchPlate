
  var site = document.getElementById("center");
      var link1 = document.createElement("a");
      link1.setAttribute('href',"https://www.youtube.com/playlist?list=PLJqNBbTKRgM8hTh3NiFmP1CZ3Gk2by8Yj");
      var link2 = document.createElement("a");
      link2.setAttribute('href',"https://www.youtube.com/playlist?list=PLJqNBbTKRgM8hTh3NiFmP1CZ3Gk2by8Yj");
      var link3 = document.createElement("a");
      link3.setAttribute('href',"https://www.youtube.com/playlist?list=PLJqNBbTKRgM8hTh3NiFmP1CZ3Gk2by8Yj");
      var link4 = document.createElement("a");
      link4.setAttribute('href',"https://www.youtube.com/playlist?list=PLJqNBbTKRgM8hTh3NiFmP1CZ3Gk2by8Yj");
      var img1 = document.createElement("img");
      img1.src = "https://cdn-icons-png.flaticon.com/512/871/871377.png";
      img1.style.height = '16px';
      img1.style.width = '16px';
      img1.style.marginLeft = "20px";
      link1.appendChild(img1)
      site.appendChild(link1);
      var img2 = document.createElement("img");
      img2.src = "https://cdn-icons-png.flaticon.com/512/7941/7941708.png";
      img2.style.height = '16px';
      img2.style.width = '16px';
      img2.style.marginLeft = "20px";
      link2.appendChild(img2)
      site.appendChild(link2);
      var img3 = document.createElement("img");
      img3.src = "https://cdn-icons.flaticon.com/png/512/2995/premium/2995101.png?token=exp=1656706914~hmac=badc4f2c092a260b416bdfe4580421da";
      img3.style.height = '16px';
      img3.style.width = '16px';
      img3.style.marginLeft = "20px";
      link3.appendChild(img3)
      site.appendChild(link3);
      var img4 = document.createElement("img");
      img4.src = "https://cdn-icons-png.flaticon.com/512/7944/7944113.png";
      img4.style.height = '16px';
      img4.style.width = '16px';
      img4.style.marginLeft = "20px";
      link4.appendChild(img4)
      site.appendChild(link4);

      link1.onclick = () => {
        window.open("https://youtube.com/playlist?list=PLJqNBbTKRgM8hTh3NiFmP1CZ3Gk2by8Yj");
}
