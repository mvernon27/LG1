import Elements from "./components/elements.js"
import ElementList from "./components/elementlist.js"


pageBuild();

function pageBuild(){
    elements();
};


function elements(){
    const app = document.getElementById('component1');
    const elements = document.getElementById('nav__Elements');
    elements.addEventListener('click', function(){
            app.innerHTML = Elements(ElementList());
    })
};
