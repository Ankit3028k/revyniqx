export default function Button(props:any) {
    return (
        <button className={props.className || ''} style={props.style} onClick={props.onClick}>{props.text || 'Button'}</button>
    )
}