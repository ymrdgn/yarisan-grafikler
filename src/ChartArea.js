import React from "react";
const ChartArea = (props) => {
    return (
        <div className="area" style={{ height: props.data.length * 40 }}>
            <div>{props.children}</div>
            <div className="first-logo"
                style={{
                    backgroundImage: `url(${props.children[0].props.imageUri})`,
                    backgroundSize: "cover",
                    opacity: 0.3
                }}>
            </div>
        </div>
    )
}
export default ChartArea;