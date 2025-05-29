import React from "react";

function commonHeader(props) {
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    );
}

export default commonHeader;
