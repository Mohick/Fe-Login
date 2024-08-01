import { cva, VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
import { cn } from "../../Tailwind Merge/cn"




const titleVariants = cva("text-3xl font-bold mb-4", {
    variants: {
        colorText: {
            default: "text-black",
            white: "text-[#fff]"
        },
        size: {
            default: "text-3xl",
            small: "text-2xl",
            extraLarge: "text-4xl"
        },
        styleText: {
            default: "not-italic",
            large: "italic",
        },
        weight: {
            default: "font-bold",
            small: "font-normal",
            extraLarge: "font-black"
        }
    },
    defaultVariants: {
        colorText: "default",
        size: "default",
        styleText: "default",
        weight: "default"
    }
})

interface PropsTitle extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof titleVariants> {

}




const Title: FC<PropsTitle> = ({
    children,
    className,
    colorText,
    size,
    styleText,
    weight,
    ...props
}) => {

    return <h1 {...props} className={cn(
        className, titleVariants({
            colorText,
            size,
            styleText,
            weight
        })
    )}>
        {children}
    </h1>
}



export default Title