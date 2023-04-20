import {useState} from "react";

export const useAsyncState = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);
    const setter = (x: any) =>
        new Promise<void>(resolve => {
            setValue(x);
            resolve();
        });
    return [value, setter];
}