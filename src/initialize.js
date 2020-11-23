import {initNav, initContainer} from './tabsModule'
import {initHome} from './home'
import {initMenu} from './menu'
import {initAbout} from './about'

const init = () =>{
    let body=document.getElementById("main-container");
    body.appendChild(initNav());
    body.appendChild(initContainer());
    body.appendChild(initHome());
    body.appendChild(initMenu());
    body.appendChild(initAbout());
}

export{init}




