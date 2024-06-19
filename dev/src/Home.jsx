import './index.scss';

export function Home () {

    let count = 0;
    const msg = 'Alins';
    let a = count + 1

    let parent, _id = 1;
    function addChild(){
        <div $mount={$e.target.parentElement}>
            Dynamic Node {_id++}
        </div>
        // Or use $mount={e.target.parentElement}
    }
    return <div>

        <div>
            <img style={{ width: 200, marginTop: 100 }} src='/alins.png' />
        </div>
        <h1 class='title'>Hello {msg}</h1>
        <button onclick={()=> {
            <div $mount={event.target.parentElement}>
                Dynamic Node {_id++}
            </div>
        }}>addChild
        </button>
    </div>;
}