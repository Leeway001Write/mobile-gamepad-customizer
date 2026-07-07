
import type { FieldNode } from "../properties"

type Props = {
    propsFields: Record<string, FieldNode>
};

export default function PropsSection({propsFields}: Props) {
    console.log("propsFields: ", propsFields);
    return (
        <>
        { Object.entries(propsFields).map(([key, field]) => {
            if ('type' in field) {
                // Leaf node
                console.log(`Rendered: ${key} (${field.type})`);
                return (
                    <p className={"props-field"} id={key}>
                        {key}
                    </p>
                );
            }
            // Parent node
            return (
                <div className="props-group">
                    <span className="props-header">{key}</span>
                    <span className="props-fields">
                        <PropsSection propsFields={ field.fields as Record<string, FieldNode> } />
                    </span>
                </div>
            );
        })}
        </>
    )
}

{

}