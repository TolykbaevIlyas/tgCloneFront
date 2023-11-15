import axios from "axios";

interface IData {
    name: string;
    email: string;
    password: string;
}

export const requestToRegister = async ({name, email, password}: IData) => {
    try {
        const response = await axios.post("http://localhost:3000/register", {
            name,
            email,
            password
        });
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}