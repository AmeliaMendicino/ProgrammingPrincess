import dynamic from 'next/dynamic'
import SplitPane from 'react-split-pane';

const DynamicJavascriptEditor = dynamic<any>(
  () => import('../components/Editors').then(mod => mod.JavascriptEditor),
  { ssr: false }
)

const Index = () => {
  return (
    <SplitPane split="vertical" minSize={"50%"}>
      <DynamicJavascriptEditor />
      <div>Hello, World!</div>
    </SplitPane>
  );
};

export default Index;
