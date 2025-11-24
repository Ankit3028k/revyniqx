import logo from '../../assets/img/Revyniqx_Logo.png';

export default function Logo(props:any) {
    return (
        <div className={`logo ${props.className || ''}`} style={props.style}>
            <img src={logo} alt="Revyniqx" className="logo-img" width={props.width || '100%'} height={props.height || '100%'} />
        </div>
    )
}

