
import type { FieldNode } from "../properties"
import PropsField from "./PropsField";

type Props = {
    propsFields: Record<string, FieldNode>
};

export default function PropsSection({propsFields}: Props) {
    return (
        <>
        { Object.entries(propsFields).map(([key, field]) => {
            if ('type' in field) {
                // Leaf node
                return (
                    <p className={"props-field"} key={key}>
                        {key}<PropsField type={field.type} />
                    </p>
                );
            }
            // Parent node
            return (
                <div className="props-group" key={key}>
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