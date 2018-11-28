let loaded = {}

export function addFccScript() {
    let url = 'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'
    // let url = null
    if (!loaded[url] && url)  {
        let script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
        loaded[url] = true;
    }
}
