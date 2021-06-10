import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { renderEditStyles } from "./styles";

export default function Edit(props) {
  const { data, editButton } = props;
  const [title, setTitle] = useState(data.title);
  const [start, setStart] = useState(data.start);
  const [end, setEnd] = useState(data.end);

  const handleClick = (e) => {
    e.preventDefault();
    editButton(data.id, title, start, end, data.clicked);
    console.log("Updating success");
  };

  return (
    <div>
      <div>
        <div style={renderEditStyles()}>
          <form onSubmit={handleClick}>
            <div>
              <label>Title : </label>
              <input
                type="text"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <br />
            <div>
              <label>
                Starting Date :{" "}
                <input
                  type="text"
                  value={start}
                  onChange={(e) => setStart(e.target.value)}
                />{" "}
              </label>
            </div>
            <br />
            <div>
              <label>
                Finished Date :{" "}
                <input
                  type="text"
                  value={end}
                  onChange={(e) => setEnd(e.target.value)}
                />{" "}
              </label>
            </div>
            <br />
            <Button
              className="add-btn"
              type="submit"
              style={{ marginTop: "1em" }}
            >
              Save
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
