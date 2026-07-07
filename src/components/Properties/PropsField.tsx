
type Props = {
    type: string, // Kind of value of this field
    initialVal: string | number, // Either default value (for a new component) or current value (for an existing one)
    editHandler: Function,
    path: string // The path to this particular property. Used to identify from a root level
}

/* React Component: individual fields/properties of a controller component. */
export default function PropsField({type, initialVal, editHandler, path}: Props) {
    switch (type) {
        case 'string': {
            return (<input
                type="text"
                placeholder={initialVal as string}
                onBlur={(e) => editHandler(e)}
                name={path}
                >
            </input>)
        }
        case 'number': {
            return (<input
                type="text"
                className="number"
                placeholder={initialVal as string}
                size={3}
                onBlur={(e) => editHandler(e)}
                name={path}
                >
            </input>)
        }
        case 'percent': {
            return (<>
                <input
                    type="text"
                    className="number"
                    min={0} max={100}
                    size={2}
                    placeholder={initialVal as string}
                    onBlur={(e) => editHandler(e)}
                    name={path}
                    >
                </input>
                <span className="unit">%</span>
            </>)
        }
        case 'pixels': {
            return (<>
                <input
                    type="text"
                    className="number"
                    size={5}
                    placeholder={initialVal as string}
                    onBlur={(e) => editHandler(e)}
                    name={path}
                    >
                </input>
                <span className="unit"> px</span>
            </>)
        }
        case 'color': {
            return (<>
                <input
                    type="color"
                    placeholder={initialVal as string}
                    onBlur={(e) => editHandler(e)}
                    name={path}
                    >
                </input>
            </>)
        }
        case 'checkbox': {
            return (<>
                <input
                    type="checkbox"
                    placeholder={initialVal as string}
                    onBlur={(e) => editHandler(e)}
                    name={path}
                    >
                </input>
            </>)
        }
    }
}