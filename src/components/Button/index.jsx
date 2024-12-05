import "./index.css"

export function Button(props) {
    const {size="md", variant = "primary", children} = props;
    // size = sm, md, lg

    const className = `my-butt my-butt--${variant} my-butt--${size}`

    return (
        <button className={className}>{children}</button>
    )
}