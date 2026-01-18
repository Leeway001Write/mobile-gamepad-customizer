export interface ButtonProps {
    appearance: {
        position: {
            x: number | 0,
            y: number | 0,
        },
        scale: {
            x: number | 20,
            y: number | 20,
        },
        circle: boolean | false,
        forceAspectRatio: boolean | false,
        unpressed: {
            color: string,
            opacity: number | 1,
            border: {
                color: string,
                thickness: number | 0,
                radius: number | 0,
            },

            text: string | undefined,
            textColor: string,
            fontFamily: string,
            fontSize: number,
            textAlignX: 'left' | 'right' | 'center',
            textAlignY: 'top' | 'bottom' | 'center',

            image: {
                source: string | undefined,
                fit: "contain" | "cover",
                opacity: number | 1,
            } | undefined,
        },
        pressed: {
            color: string,
            opacity: number | 1,
            border: {
                color: string,
                thickness: number | 0,
                radius: number | 0,
            },

            text: string | undefined,
            textColor: string,
            fontFamily: string,
            fontSize: number,
            textAlignX: 'left' | 'right' | 'center',
            textAlignY: 'top' | 'bottom' | 'center',

            image: {
                source: string | undefined,
                fit: "contain" | "cover",
                opacity: number | 1,
            } | undefined,
        },

        animationTime: number | 0,
        zIndex: number | 0,
    },
}

export default function Screen(props: ButtonProps) {
    // Configure style
    let style = props.appearance.unpressed;
    const ratio = (props.appearance.forceAspectRatio) ? 1 : 'unset';
    const borderRadius = (props.appearance.circle) ? 1000 : style.border.radius;
    let justifyContent;
    switch (style.textAlignY) {
        case 'top':
            justifyContent = "flex-start";
            break;
        case 'bottom':
            justifyContent = "flex-end";
            break;
        case 'center':
            justifyContent = "center";
            break;
        default:
            justifyContent = "unset";
    }

    return (
        <div className="button"
            style={{
                position: 'relative',
                display: "flex",
                flexDirection: 'column',
                left: props.appearance.position.x + "%",
                top: props.appearance.position.y + "%",
                width: props.appearance.scale.x + "%",
                height: props.appearance.scale.y + "%",

                aspectRatio: ratio,

                backgroundColor: "#" + style.color,
                opacity: style.opacity,

                justifyContent: justifyContent,
                
                borderStyle: 'solid',
                borderColor: style.border.color,
                borderWidth: style.border.thickness,
                borderRadius: borderRadius,
                
                transition: props.appearance.animationTime + "s ease all",
                
                zIndex: props.appearance.zIndex,
            }}>
                <p style={{
                    zIndex: props.appearance.zIndex + 1,
                    color: style.textColor,
                    fontFamily: style.fontFamily,
                    fontSize: style.fontSize,
                    textAlign: style.textAlignX,
                }}>
                    {style.text}
                </p>
                {style.image !== undefined && style.image.source !== "" && <img src={style.image.source} style={{position: 'absolute', width: "100%", height: "100%", objectFit: style.image.fit, opacity: style.image.opacity, borderRadius: borderRadius}}/>}
        </div>
    )
}