const initAbout = ()=>
{
    let section=document.createElement("section");
    section.setAttribute("id","third");
    let h1=document.createElement("h1");
    h1.innerHTML="Contact Us";
    section.appendChild(h1);
    //Contact Information - Phone number
    let phoneNumber = document.createElement("h3");
    phoneNumber.setAttribute("class","fas fa-phone-alt");
    phoneNumber.innerHTML="  1-800-669-2722";
    section.appendChild(phoneNumber);
    //Contact Information - EMail
    let email = document.createElement("h3");
    email.setAttribute("class","far fa-envelope");
    email.innerHTML="     youwillnevergetthis@nananana.com";
    section.appendChild(email);
     //Contact Information - Facebook
     let facebook = document.createElement("h3");
     facebook.setAttribute("class","fab fa-facebook");
     facebook.innerHTML=" Nitzan's Place";
     section.appendChild(facebook);
    return section;
}

export{initAbout};