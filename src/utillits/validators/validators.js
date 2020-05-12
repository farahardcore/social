export const required = value =>{
    if(value)return undefined;
    return "Field is required";
};
export const maxLengthCreator = (MaxLength) => (value)=>{
    if(value.length>MaxLength) return `max length is ${MaxLength} symbols`;
    return undefined;

}
