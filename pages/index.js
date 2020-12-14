import React from "react";
import SplitPane from "react-split-pane";

const Index =  () => {
  return (
    <SplitPane split="vertical" minSize={"50%"}>
        <div>Part 1</div>
        <div>Part 2</div>
    </SplitPane>
  );
};

export default Index;