import { React, useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
    const nodeRef = useRef(null);

    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double Click to Edit");

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
                {editMode ? (
                    <input
                        onDoubleClick={(e) => setEditMode(false)}
                        value={val}
                        onChange={(e) => setVal(e.target.value)}
                    />
                ) : (
                    <h4 onDoubleClick={(e) => setEditMode(true)}>{val}</h4>
                )}
                {/* Explain Below */}
            </div>
        </Draggable>
    );
};

export default Text;

// useState(editMode) → toggles between text & input mode
// useState(val) → stores current text value
// useRef(nodeRef) → connects div to Draggable (needed in React 18)
// <Draggable> → allows text box to be freely moved
// Double-click → switches between editing & viewing mode
