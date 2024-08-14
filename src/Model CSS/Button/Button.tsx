import { cva, VariantProps } from "class-variance-authority";
import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "../../Tailwind Merge/cn";



const buttonVariants = cva("", {
    variants: {
        backgroundColor: {
            default: "bg-blue-500 hover:bg-blue-700",
            secondary: "bg-gray-200 hover:bg-gray-300",
            success: "bg-green-500 hover:bg-green-700",
            danger: "bg-red-500 hover:bg-red-700",
            warning: "bg-yellow-500 hover:bg-yellow-500"
        },
        textColor: {
            default: "text-white",
        },
        textWeight: {
            default: "font-bold",
        },
        padingButton: {
            default: "py-2 px-4"
        },
        focusedButton: {
            default: "focus:outline-none  focus:shadow-outline"
        },
        roundedButton: {
            default: "rounded"
        }

    },
    defaultVariants: {
        backgroundColor: "default",
        textColor: "default",
        textWeight: "default",
        padingButton: "default",
        focusedButton: "default",
        roundedButton: "default"
    }
})


interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {

}



const Button: FC<PropsButton> = ({
    children,
    className,
    backgroundColor,
    textColor,
    textWeight,
    padingButton,
    roundedButton,
    focusedButton,
    ...props
}) => {

    return <button className={cn(className, buttonVariants({
        className,
        backgroundColor,
        textColor,
        roundedButton,
        textWeight,
        padingButton,
        focusedButton
    }))} {...props}>
        {children}
    </button>
}


export default Button;