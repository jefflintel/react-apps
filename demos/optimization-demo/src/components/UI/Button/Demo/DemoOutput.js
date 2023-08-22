import React from "react";

const DemoOutput = (props) => {
    console.log("This is from demo output");
    return (
        <p>{props.show ? "Hey look, a new paragraph!" : ""}</p>
    );
};

export default React.memo(DemoOutput);