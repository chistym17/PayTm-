
import { cookies } from "next/headers";

const getuserinfo = () => {
    const cookiestore=cookies();
    const id=cookiestore.get('user');
    return Number(id?.value);
        
};

export default getuserinfo;