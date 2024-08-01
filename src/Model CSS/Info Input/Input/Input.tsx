import { cva, VariantProps } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../../Tailwind Merge/cn";



const inputVariants = cva("", {
    variants: {
        textInput: {
            default: "text-gray-700"
        },
        styleInput: {
            default: "shadow   appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none  focus:shadow-outline"
        }
    },
    defaultVariants: {
        textInput: "default",
        styleInput: "default"
    }
})


interface PropsInput extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {

}



const Input: FC<PropsInput> = ({
    className,
    textInput,
    styleInput,
    id,
    ...props
}) => {

    return <input id={id} className={cn(className, inputVariants({
        textInput,
        styleInput
    }))} {...props} />
}


export default Input;