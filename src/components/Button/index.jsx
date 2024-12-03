import "./index.css"

export function Button(props) {
    const {variant = "primary", children} = props;

    const className = `my-butt my-butt--${variant}`

    return (
        <button className={className}>{children}</button>
    )
}