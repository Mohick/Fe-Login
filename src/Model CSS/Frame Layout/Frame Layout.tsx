import { cva, VariantProps } from "class-variance-authority"
import { ClassProp } from "class-variance-authority/types"
import { FC, HTMLAttributes } from "react"
import { cn } from "../../Tailwind Merge/cn"




const layoutVariants = cva("bg-#fff p-[20px] overflow-hidden  rounded-md border-2 divide-slate-200 ", {
    variants: {
        backgroundColor: {
            default: "bg-[#fff]",
            dark: "bg-black"
        },
        border: {
            default: "divide-slate-200",
            bordered: "border-[1px solid #ddd]"
        },
        padding: {
            default: "p-[20px]",
            large: "p-[40px]",
            extraLarge: "p-[60px]"
        },
        borderSize: {
            default: "border-2",
            large: "border-4"
        },
        radius: {
            default: "rounded-md",
            large: "rounded-lg"
        }
    },
    defaultVariants: {
        // backgroundColor: "default",
        border: "default",
        padding: "default",
        borderSize: "default",
        radius: "default"
    }
})

interface PropsFrameLayout extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {

}




const FrameLayout: FC<PropsFrameLayout> = ({
    children,
    className,
    backgroundColor,
    border,
    padding,
    ...props
}) => {

    return <div {...props} className={cn(
        className, layoutVariants({
            backgroundColor,
            border,
            padding
        })
    )}>
        {children}
    </div>
}



export default FrameLayout