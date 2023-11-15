export interface IInput{
    type:   string;
    value:  string;
    onChange: (value: string) => void;
    placeholder?: string;
}