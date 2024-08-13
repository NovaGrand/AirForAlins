import './style'
import './router'

function App(){

    return <div class='dashBoard'>
        <aside>
            <h1>Air for Alins</h1>
            <a href='/' onclick={ router.push({ path:'/' }) }>Home</a>
            <a href='/about' onclick={ router.push({ path:'/about'}) }>About</a>
            <a href='/button' onclick={ router.push({ path:'/button' }) }>Button</a>
        </aside>
        <main class='container'>
            { router.currentView }
        </main>
    </div>
}

<App $mount='#app'/>;