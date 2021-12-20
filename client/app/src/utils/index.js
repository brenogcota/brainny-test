/* escapeOnEnter(e, inputRef) */
export const escapeOnEnter = (event, ref) => {
    if(event.keyCode === 13) ref.current.blur();
}

/* onEnter(e, () => onChange(e.target.value)) */
export const onEnter = (event, cb) => {
    if(event.keyCode === 13) cb()
}

/*onCtrlEnter(e, () => onChange(e.target.value)) */
export const onCtrlEnter = (event, cb) => {
    if(event.ctrlKey && event.keyCode === 13) cb()
}

export const onSlashKey = (event, cb) => {
    if(event.ctrlKey && event.keyCode === 220) cb(false) 
    if(event.ctrlKey && event.keyCode === 191) { 
        event.preventDefault();
        cb(true);
    }
}

export const isEmptyObject = (object) => {
    return '{}' == JSON.stringify(object);
}

export const randomColor = () => {
   return "#" + ((1<<24)*Math.random() | 0).toString(16)
}

export const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export const hexToRgb = (hex) =>  {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if(result) {
        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);
        return r+","+g+","+b;
    } 
    return "255,255,255";
}

export const parseColor = (hex) => {
    const [red, green, blue ] = hexToRgb(hex).split(',');
    return (red*0.299 + green*0.587 + blue*0.114) > 186 ? '#666' : '#fff';
}

export const generateIndex = (index) => {
    return index.toString(36) + index;
}

export const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text)
}

export const setUserLogged = (user) => {
    return localStorage.setItem('@auth/user', JSON.stringify(user));
}

export const getUserLogged = () => {
    return JSON.parse(localStorage.getItem('@auth/user')) || {};
}

export const getWorkspace = () => {
    const url = new URL(window.location.href)
    if(url.searchParams.get('account')) return { id: url.searchParams.get('account') }
    return JSON.parse(localStorage.getItem('@workspace/account')) || {};
}

export const parseMarkdown = (markdownText) => {
	const htmlText = markdownText
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')

	return htmlText.trim()
}

export const emptyArray = (arr) => {
    return !!arr.length <= 0;
}

export const getUrlParam = (param) => {
    const url = new URL(window.location.href)
    return url.searchParams.get(param)
}