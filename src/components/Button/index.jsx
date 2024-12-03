import "./index.css"

export function Button(props) {
    const {variant = "primary", children} = props;
    return (
        <button className={"my-butt " + variant}>{children}</button>
    )
}