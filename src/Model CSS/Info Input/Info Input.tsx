import { FC,  InputHTMLAttributes } from "react"
import Label from "./Label/Label"
import Input from "./Input/Input"


interface propsInfoInput extends InputHTMLAttributes<HTMLInputElement> {
    nameLabel: string,
    typeInput: string,
    id: string,
}

const InfoInput: FC<propsInfoInput> = ({
    nameLabel,
    typeInput,
    id,
    children,
    ...props
}) => {
    return <div>
        
        <Label htmlFor={id}>
            <div>{nameLabel}</div>
            <div className={`capitalize ${id.trim()}-alert text-[11px] font-normal`}>
                {children}
            </div>
        </Label>
        <Input id={id} {...props} type={typeInput} />
    </div>
}



export default InfoInput