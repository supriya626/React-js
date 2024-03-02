const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            { id: "h1" },
            ["Hello react from js!", "Hello react from js!"]
        )
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);