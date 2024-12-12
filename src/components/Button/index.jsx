import "./index.css"

export function Button(props) {
    const {size="md", variant = "primary", type="button", onClick, disabled, children} = props;
    // size = sm, md, lg

    const className = `my-butt my-butt--${variant} my-butt--${size}`

    return (<button className={className} onClick={onClick} type={type} disabled={disabled}>{children}</button>)
}