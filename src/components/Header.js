import { useState } from "react";
const Header = () => {

    const [hover, setHover] = useState(0);

    return(
        <>
            <div className="header">
                <h1>Header</h1>
            </div>
        </>
    );
}
export default Header;