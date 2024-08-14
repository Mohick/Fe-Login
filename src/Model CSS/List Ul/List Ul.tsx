import { cva, VariantProps } from "class-variance-authority"
import { FC, HTMLAttributes } from "react"
import { cn } from "../../Tailwind Merge/cn"


const listUlVariants = cva("px-4", {
    variants: {
        typeList: {
            default: "list-none",
            dot: "list-disc",
            number: "list-decimal"
        },
        textSize: {
            default: "text-[10px]",
            medium: "text-sm",
            large: "text-base"
        },
        textColor: {
            default: "text-gray-700",
            primary: "text-blue-500",
            secondary: "text-gray-400"
        }
    },  
    defaultVariants: {
        typeList: "dot",
        textSize: "default",
        textColor: "default"
    }
})


interface PropsListUl extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listUlVariants> {
    listData: {
        nameItem: string,
        ruleName: string,
    }[],
    classItems: string
}
const ListUl: FC<PropsListUl> = (
    { listData, className, typeList, textSize, textColor, classItems }
) => {
    return <ul className={cn("w-full", className, listUlVariants({
        typeList
    }))}>
        {
            listData.map((item, index) => (

                <li data-name={item.nameItem} className={cn("w-full", classItems, listUlVariants({
                    textSize, textColor
                }))} key={index}>{item.ruleName}</li>
            ))
        }
    </ul>
}



export default ListUl