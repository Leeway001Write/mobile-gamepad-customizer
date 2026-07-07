
type Props = {
    type: string,
    defaultVal: string | number,
    editHandler: Function,
    path: string
}

export default function PropsField({type, defaultVal, editHandler, path}: Props) {
    switch (type) {
        case 'string': {
            return (<input
                type="text"
                placeholder={defaultVal as string}
                onBlur={(e) => editHandler(e)}
                name={path}
                >
            </input>)
        }
        case 'number': {
            return (<input
                type="text"
                className="number"
                placeholder={defaultVal as string}
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
                    placeholder={defaultVal as string}
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
                    placeholder={defaultVal as string}
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
                    placeholder={defaultVal as string}
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
                    placeholder={defaultVal as string}
                    onBlur={(e) => editHandler(e)}
                    name={path}
                    >
                </input>
            </>)
        }
    }
}