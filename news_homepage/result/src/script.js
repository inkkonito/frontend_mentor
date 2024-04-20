function changeIcon() {
    var img1 = "./img/icon-menu.svg";
    var img2 = "./img/icon-menu-close.svg";
    
    var imgElement = document.getElementById('iconMenu');
 
    imgElement.src = (imgElement.src === img1)? img2 : img1;
    }
