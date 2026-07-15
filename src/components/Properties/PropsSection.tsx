
import type { FieldNode, FieldType } from "../../properties"
import type { ButtonSchema } from "@Leeway001Write/shared-package-mobile-gamepad";
import PropsField from "./PropsField";

type Props = {
    propsFields: ButtonSchema | Record<string, any>,
    editHandler: Function,
    currentPath?: string // Only included in recursive calls. First call generates path root
};

/* React Component that recursively generates nested sections of controller component properties */
export default function PropsSection({propsFields, editHandler, currentPath}: Props) {
    return (
        <>
        { Object.entries(propsFields).map(([key, value]) => {

            if (typeof value !== "object") {
                // Leaf node
                // Needs more specific type identification (can be based on common UI patterns, or built per component type) such as input events, dropdown options, pixels, percents, etc.
                let fieldType: FieldType = 'number';
                switch (typeof value) {
                    case 'boolean':
                        fieldType = 'checkbox';
                        break;
                    case 'string':
                        if (key === "color" || key === "textColor") {
                            fieldType = 'color';
                        } else {
                            fieldType = 'string';
                        }
                        break;
                }

                return (
                    <p className={"props-field"} key={key}>
                        {key}<PropsField type={fieldType} initialVal={value} editHandler={(e: Event) => editHandler(e)} path={currentPath + "." + key} />
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
                        <PropsSection propsFields={ value } editHandler={(e: Event) => editHandler(e)} currentPath={currentPath + "." + key} />
                    </span>
                </div>
            );
        })}
        </>
    )
}

{

}