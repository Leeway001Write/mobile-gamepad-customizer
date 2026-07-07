
import type { FieldNode } from "../../properties"
import PropsField from "./PropsField";

type Props = {
    propsFields: Record<string, FieldNode>,
    editHandler: Function,
    currentPath?: string // Only included in recursive calls. First call generates path root
};

/* React Component that recursively generates nested sections of controller component properties */
export default function PropsSection({propsFields, editHandler, currentPath}: Props) {
    return (
        <>
        { Object.entries(propsFields).map(([key, field]) => {

            if ('type' in field) {
                // Leaf node
                return (
                    <p className={"props-field"} key={key}>
                        {key}<PropsField type={field.type} initialVal={field.default as string} editHandler={(e: Event) => editHandler(e)} path={currentPath + "." + key} />
                    </p>
                );
            }
            // Parent node
            if (currentPath === undefined) {
                currentPath = "";
            }
            return (
                <div className="props-group" key={key}>
                    <span className="props-header">{key}</span>
                    <span className="props-fields">
                        <PropsSection propsFields={ field.fields as Record<string, FieldNode> } editHandler={(e: Event) => editHandler(e)} currentPath={currentPath + "." + key} />
                    </span>
                </div>
            );
        })}
        </>
    )
}

{

}