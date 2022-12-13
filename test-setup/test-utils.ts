import {constantHTML} from "./constantHTML"

// import api...

export const render = (content) => {
    document.body.innerHTML = constantHTML
    const app: any = document.querySelector('#app');
    app.innerHTML = content
}

