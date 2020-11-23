const initHome = ()=>
{
    let section=document.createElement("section");
    section.setAttribute("id","first");
    let h1=document.createElement("h1");
    h1.innerHTML="Nitzan's Place";
    section.appendChild(h1);

    let br=document.createElement("br");
    section.appendChild(br);
    let homePicture=document.createElement("img");
    homePicture.setAttribute("id","welcome-picture");
    homePicture.setAttribute("src","../dist/images/homePicture.jpg")
    section.appendChild(homePicture);
    //Text for the page
    let text=document.createElement("h3");
    text.innerHTML="Join us for a once in a lifetime dining experience. With the freshest of ingredients, ambience that will make you feel "+
                  "thousands of kilometers away from home,<br>you'll wonder why you didn't let us spoil you sooner.";
    section.appendChild(text);
    return section;

}

export{initHome};
