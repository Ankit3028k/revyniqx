export default function Lightcard(props:any) {
    return (
        <div className={`lightcard ${props.className || ''}`} style={{
            borderRadius: '20px', 
            backgroundColor: 'var(--light-bg)',
            ...props.style,
        }}>
            {props.children}
        </div>
    )
}