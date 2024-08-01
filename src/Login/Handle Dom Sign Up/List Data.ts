
const listData: {
    nameItem: string,
    ruleName: string
}[] = [
        {
            nameItem: "length",
            ruleName: "Mật khẩu phải có độ dài từ 8 đến 50 ký tự."
        },
        {
            nameItem: "lowercase",
            ruleName: "Mật khẩu phải chứa ít nhất một chữ cái thường."
        },
        {
            nameItem: "uppercase",
            ruleName: "Mật khẩu phải chứa ít nhất một chữ cái viết hoa."
        },
        {
            nameItem: "number",
            ruleName: "Mật khẩu phải chứa ít nhất một chữ số."
        },
        {
            nameItem: "specialCharacter",
            ruleName: "Mật khẩu phải chứa ít nhất một ký tự đặc biệt (@$!%*?&)."
        }
    ];


interface RulePasswords {
    [key: string]: RegExp;
}

const rulePasswords: RulePasswords = {
    length: /^.{8,50}$/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    number: /\d/,
    specialCharacter: /[@$!%*?&]/
}
export { listData, rulePasswords }


