import { cva, VariantProps } from "class-variance-authority";
import { FC, LabelHTMLAttributes } from "react";
import { cn } from "../../../Tailwind Merge/cn";


const labelVariants = cva("", {
    variants: {
        colorLabel: {
            default: "text-gray-700",
        },
        textLable: {
            default: "block capitalize text-sm font-bold mb-2"
        }
    },
    defaultVariants: {
        colorLabel: "default",
        textLable: "default",
    }
});

interface PropsLabel extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> { }


const Label: FC<PropsLabel> = ({
    className,
    colorLabel,
    textLable,
    children,
    ...props
}) => {

    return <label className={cn(className, labelVariants({
        colorLabel,
        textLable
    }))} {...props}>
        {children}
    </label>
}


export default Label;