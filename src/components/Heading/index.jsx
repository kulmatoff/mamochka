const types = {
    "1": <h1/>,
    "2": h2,
    "3": h3,
    "4": h4,
    "5": h5,
    "6": h6,
}

export function Heading(props) {
    const {level="1", children} = props;

    const tag = types[level];

    return (
        <tag>{children}</tag>
    )
}