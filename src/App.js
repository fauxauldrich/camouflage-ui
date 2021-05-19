import React, { Component } from "react";
import { FileManager, FileNavigator } from "@opuscapita/react-filemanager";
import connectorNodeV1 from "@opuscapita/react-filemanager-connector-node-v1";

export class App extends Component {
  constructor(props) {
    super(props);
    const apiRoot = `${window.location.protocol}//${window.location.host}`;
    this.state = {
      apiOptions: {
        ...connectorNodeV1.apiOptions,
        apiRoot: apiRoot,
      },
    };
  }

  handleChange = (e) => {
    var apiOptions = { ...this.state.apiOptions };
    apiOptions.apiRoot = e.target.value;
    this.setState({ apiOptions });
  };
  handleClick = (e) => {
    localStorage.setItem("apiRoot", this.state.apiOptions.apiRoot);
    window.location.reload();
  };
  render() {
    return (
      <div style={{ height: "95vh", backgroundColor: "#fff" }}>
        {/* <label class="field field_v1">
          <input
            class="field__input"
            onChange={(e) => {
              this.handleChange(e);
            }}
            value={this.state.apiOptions.apiRoot}
            style={{ width: "100vw" }}
          />
          <span class="field__label-wrap">
            <span class="field__label">Camouflage Server Location</span>
          </span>
        </label>
        <button
          class="block"
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          Submit
        </button> */}
        <FileManager>
          <FileNavigator
            id="filemanager-1"
            api={connectorNodeV1.api}
            apiOptions={this.state.apiOptions}
            capabilities={connectorNodeV1.capabilities}
            listViewLayout={connectorNodeV1.listViewLayout}
            viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
          />
        </FileManager>
      </div>
    );
  }
}

export default App;
