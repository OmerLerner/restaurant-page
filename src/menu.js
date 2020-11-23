const initMenu = ()=>
{
    let section=document.createElement("section");
    section.setAttribute("id","second");
    let menu=document.createElement("div");
    menu.setAttribute("id","menu-items");
    let h1=document.createElement("h1");
    h1.innerHTML="Menu";
    menu.appendChild(h1);
    //Appetizers
    let appetizers=document.createElement("div");
    appetizers.setAttribute("id","appetizers");
    let h3=document.createElement("h3");
    h3.innerHTML="Appetizers";
    menu.appendChild(h3);
    let appetizerMenu=[
        ["Steak Fries", "<br>Some people say that steak fries are a waste, we say: More room for ketchup!", "7$"],
        ["Edemame", "<br>Feel good about yourself for eating something green, ignore the fact that it came fresh out of the freezer.","7$"],
        ["Kibbeh","<br>You probably don't know what this is, let us enlighten you (6 pieces).","9$"],
        ["Stir Fried Mushrooms","<br>Wine & Butter sauce, and if that wasn't enough, here's 24 sprinkles of Parmesan cheese.", "8$"],
        ["Fried Calamari","<br>We're talking about rings. ONLY RINGS.", "10$"],
        ["Israeli Salad","<br>We're a simple people. The freshest of cucumbers and tomatoes neatly diced with a spritz of lemon on top.", "8$"],
        ["Soup of the Day", "<br>It's always Matzo Ball Soup. Until it's not, then it's just Chicken Noodle Soup.", "6$"],
        ["House Bread","<br>Whatever we have left in the pantry. Served with almost expired butter and olive oil & balsamic sauce.", "5$"]
    ]
    for (let i=0;i<appetizerMenu.length; i++)
    {
        let menuItem=appetizerMenu[i];
        let menuObject=createMenuItem(menuItem[0],menuItem[1],menuItem[2]);
        appetizers.appendChild(menuObject.item);
        appetizers.appendChild(menuObject.price);
    }
    menu.appendChild(appetizers);
    //Main Courses
    let mainCourses=document.createElement("div");
    mainCourses.setAttribute("id","main-courses");
    let h3_2=document.createElement("h3");
    h3_2.innerHTML="Main Courses";
    menu.appendChild(h3_2);
    let mainCourseMenu=[
        ["Stir Fry Noodles","An actual dish so that the menu seems legit.","11$"],
        ["Chataiaki","Served with sweet & sour sauce, this is an original dish for a dish that is unknown and does not exist.", "10$"],
        ["Inside Out Roll", "Seaweed, rice and the freshest of vegetables and fish waiting for your consumption. Includes 2 vegetables, Fish-3$.", "8$"],
        ["Chichchana San","Served with our secret sauce, this is another dish that doesn't exist and serves the purpose of filling the page.", "12$"],
        ["Cheeseburger","Because it only makes sense that a restaurant serving Asian food have this on the menu, right?", "12$"]
    ];
    for (let i=0;i<mainCourseMenu.length; i++)
    {
        let menuItem=mainCourseMenu[i];
        let menuObject=createMenuItem(menuItem[0],menuItem[1],menuItem[2]);
        mainCourses.appendChild(menuObject.item);
        mainCourses.appendChild(menuObject.price);
    }
    menu.appendChild(mainCourses);
    section.appendChild(menu);
    return section;
}

let menuId=0;

const createMenuItem = (name,description,price) =>{
    let menuItem= document.createElement("div");
    menuItem.innerHTML=name+"<br>"+description;
    menuItem.setAttribute("id","menuItem");
    menuId++;
    let priceItem=document.createElement("div");
    priceItem.innerHTML= price;
    priceItem.setAttribute("id","priceItem");
    menuId++;
    return {item:menuItem,price:priceItem};
}
export{initMenu};