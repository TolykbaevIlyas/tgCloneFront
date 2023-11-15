import { IInput } from "./model/types";
import style from './assets/css/style.module.css'

export default function MyInput({value,onChange,type,placeholder}: IInput){
  return(
    <input className={style.MyInput} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  )
}