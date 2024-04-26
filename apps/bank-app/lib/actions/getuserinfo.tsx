import { cookies } from "next/headers";

const getuserinfo = () => {
    const cookiestore = cookies();
    const id = cookiestore.get('user');
    console.log(id)
    const token = cookiestore.get('token');
    return {
        id: Number(id?.value), 
        token: token?.value
    };        
};

export default getuserinfo;
