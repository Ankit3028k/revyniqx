import { Link } from 'react-router-dom'
export default function LinkText(props:any) {
    return (
        <Link to={props.to || '#'} className={props.className || ''} style={props.style}>{props.text || 'Link Text'}</Link>
    )
}