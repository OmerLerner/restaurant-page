//Creates 4 radio buttons for each of the tabs, with ids [1,2,3,4]

const initNav = () =>{

    let nav=document.createElement("nav");
    //Manage icons here & order of tabs
    let icons=["fas fa-home","fas fa-utensils","far fa-address-card"];
    let tabOrder=["#first","#second","#third"];
    for (let i=0;i<3;i++)
    {
        //Create <a href=" ">
        let aElement=document.createElement("a");
        aElement.setAttribute("href",tabOrder[i]);
        //Create <i class="">
        let iElement=document.createElement("i");
        iElement.setAttribute("class",icons[i]);
        
        aElement.appendChild(iElement);
        nav.appendChild(aElement);
    }
    return nav;
}

const initContainer = ()=>{
    let container=document.createElement("div");
    container.setAttribute("class","container");
    return container;
}


export {initNav, initContainer}
