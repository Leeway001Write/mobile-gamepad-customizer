
type Props = {
    type: string
}

export default function PropsField({type}: Props) {
    switch (type) {
        case 'string': {
            return (<input type="text"></input>)
        }
        case 'number': {
            return (<input type="text" placeholder="0" size={3}></input>)
        }
        case 'percent': {
            return (<>
                <input type="text" placeholder="0" size={2}></input>
                <span className="unit">%</span>
            </>)
        }
        case 'pixels': {
            return (<>
                <input type="text" size={5}></input>
                <span className="unit"> px</span>
            </>)
        }
        case 'color': {
            return (<>
                <input type="color"></input>
            </>)
        }
        case 'checkbox': {
            return (<>
                <input type="checkbox"></input>
            </>)
        }
    }
}