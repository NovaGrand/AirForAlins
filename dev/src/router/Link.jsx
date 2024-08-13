

export function Link({ route }, children) {

    return <a href={route.path} onclick={()=>{ router.push(route) }}>{ children }</a>
}