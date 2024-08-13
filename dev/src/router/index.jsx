import { createStore } from 'alins';

import {Home} from "@/pages/home";
import {About} from "@/pages/about";
import {Button} from "@/pages/button";

export { Link } from './Link'
export { View } from './View'

window.router = createStore({
    state: () => ({
        currentRoute: {},
    }),
    getters:{
        currentView(){
            switch (this.currentRoute?.path ? this.currentRoute.path : location.pathname) {
                case '/':
                    return <Home/>;
                case '/about':
                    return <About/>;
                case '/button':
                    return <Button/>;
                default:
                    return <></>;
            }
        }
    },
    actions: {
        push(route){
            let e = event || window.event;
            e.preventDefault()
            history.pushState({}, null, e.target.href)
            this.currentRoute = route
        }
    },
})();

window.addEventListener('popstate',()=>{
    router.currentRoute = { path: location.pathname }
})








