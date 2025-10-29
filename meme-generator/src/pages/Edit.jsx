import React, { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
// useSearchParams → gets the url of meme image from query parameter like ?url=image_url.
import Text from "../components/Text";
import { Button } from "react-bootstrap";
import { exportComponentAsJPEG } from "react-component-export-image";
// exportComponentAsJPEG → library function to export any React component as an image (JPEG).

const EditPage = () => {
    const [params] = useSearchParams();

    const [count, setCount] = useState(0);

    const addText = () => {
        setCount(count + 1);
    }

    const memeRef = useRef();

    return (
        <div>
            <div style={{ width: "750px", border: "1px solid" }} ref={memeRef} className="meme m-5">
                <img src={params.get("url")} width="350px" />
                {Array(count).fill(0).map((e, i) => <Text key={i} />)}
                {/* Explain this at below */}
            </div>
            <Button onClick={addText} className="me-2" >Add Text</Button>
            <Button variant="success" onClick={() => { exportComponentAsJPEG(memeRef) }} >Save</Button>
        </div>
    );
};

export default EditPage;

// count = number of text boxes user wants to add
// → It changes whenever you click the “Add Text” button.
// const [count, setCount] = useState(0);
// const addText = () => setCount(count + 1);
// So first click → count = 1
// second click → count = 2, etc.

// Array(count)
// Creates an empty array with length equal to count.
// Example:
// If count = 3, → Array(3) → [ , , ]

// .fill(0)
// Fills that empty array with zeros (or any dummy value)
// [0, 0, 0]
// This step is just to make the array iterable (React won’t map over empty slots).

// .map((e, i) => <Text key={i} />)
// Maps over that array and for each element returns a <Text /> component.
// The key={i} is required so React can uniquely identify each <Text /> in the list.