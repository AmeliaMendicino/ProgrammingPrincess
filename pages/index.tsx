import SplitPane from "react-split-pane";

import { Editor } from "../components/Editors";

const Index =  () => {
  return (
    <SplitPane split="vertical" minSize={"50%"}>
        <Editor title="ES6"/>
        <div>Hello, World!</div>
    </SplitPane>
  );
};

export default Index;