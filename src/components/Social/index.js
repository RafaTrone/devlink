import './social.css'

export function Social( {url, children }){
    return(
        <a className="Social" href={url} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}