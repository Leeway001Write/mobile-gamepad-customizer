
type Props = {
    type: string,
    defaultVal: string | number
}

export default function PropsField({type, defaultVal}: Props) {
    switch (type) {
        case 'string': {
            return (<input type="text" placeholder={defaultVal as string}></input>)
        }
        case 'number': {
            return (<input type="text" placeholder={defaultVal as string} size={3}></input>)
        }
        case 'percent': {
            return (<>
                <input type="text" placeholder={defaultVal as string} size={2}></input>
                <span className="unit">%</span>
            </>)
        }
        case 'pixels': {
            return (<>
                <input type="text" size={5} placeholder={defaultVal as string}></input>
                <span className="unit"> px</span>
            </>)
        }
        case 'color': {
            return (<>
                <input type="color" placeholder={defaultVal as string}></input>
            </>)
        }
        case 'checkbox': {
            return (<>
                <input type="checkbox" placeholder={defaultVal as string}></input>
            </>)
        }
    }
}