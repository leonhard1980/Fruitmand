import React from "react";

function Button ({clickHandler, type, disabled, children}) {
    return


<button onClick={clickHandler}
type={type}
disabled={disabled || false}>
{children}</children>

}

export default Button;