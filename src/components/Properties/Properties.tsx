import { useState } from "react"

import { schemas } from "../../properties"
import PropsSection from './PropsSection';

export default function Properties() {
    const [userInput, setUserInput] = useState<Record<string, any>>({});

    function onEdit(e: FocusEvent) {
        const inputEl = e.target as HTMLInputElement;
        const path = inputEl.name;
        const val = inputEl.value;

        // Debounce empty/redundant edits
        if (val === "" || val === userInput[path]) {
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

        // Update user input state
        setUserInput((prev) => {
            return {
                ...prev,
                [inputEl.name]: val // name is a whole path
            }
        });
    }

    return (
        <>
            Properties
            <PropsSection propsFields={schemas.Button} editHandler={onEdit}/>
        </>
    )
}