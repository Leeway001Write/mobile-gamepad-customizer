import { useRef, useState } from "react"

import PropsSection from './PropsSection';
import { ButtonData, type ButtonSchema } from "@Leeway001Write/shared-package-mobile-gamepad";
import type { UIComponent } from "@Leeway001Write/shared-package-mobile-gamepad/dist/ui-base";

interface props {
    uiComp: UIComponent
}

export default function PropertiesPane({uiComp}: props) {
    // const [userInput, setUserInput] = useState<Record<string, any>>({}); // Keeps track of values by indexing with string paths. This allows easy checking for redundant edits (may not be necessary)
    // const compConfig = useRef<UIComponent>(uiComp);


    /* Handler for whenever user has updated values */
    function onEdit(e: FocusEvent) {
        const inputEl = e.target as HTMLInputElement;
        const path = inputEl.name; // Recursive rendering sets input element names as paths
        const val = inputEl.value;

        // Debounce empty/redundant edits
        if (val === ""/* || val === userInput[path]*/) {
            return;
        }

        // Validate numeric input
        if (inputEl.classList.contains("number")) {
            // Is a number
            if (Number.isNaN(Number(val))) {
                inputEl.value = "0";
            }

            // Is within given range
            if (inputEl.min !== "" && Number(val) < Number(inputEl.min)) {
                inputEl.value = inputEl.min;
            } else if (inputEl.max !== "" && Number(val) > Number(inputEl.max)) {
                inputEl.value = inputEl.max;
            }
        }

        // Update user input record
        // setUserInput((prev) => {
        //     return {
        //         ...prev,
        //         [inputEl.name]: val // name is a whole path
        //     }
        // });

        // Update overall config data
        let keys = path.split('.');

        let parent: Record<string, any> = uiComp.config as Record<string, any>; // ("trust me bro", config is not undefined. I'll propably implement a constructor in UIComponent superclass to ensure this.)
        for (let i = 1; i < keys.length - 1; i++) { // Iterate into parent of target field
            parent = parent[keys[i]];
        }

        parent[keys[keys.length - 1]] = val; // Rewrite target field
        
        console.log(uiComp.config);
    }

    return (
        <>
            Properties
            <PropsSection propsFields={uiComp.config as Record<string, any>} editHandler={onEdit}/>
        </>
    )
}