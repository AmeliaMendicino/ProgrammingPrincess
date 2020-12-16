import dynamic from "next/dynamic";

const DynamicJavascriptEditor = dynamic<any>(
  () => import("../components/Editors").then((mod) => mod.JavascriptEditor),
  { ssr: false }
);

const Index = () => {
  return (
    <>
      <div>
        <DynamicJavascriptEditor />
        <div>Hello, World!</div>
      </div>
      <style jsx>{`
        div {
          display: flex;
          background: #272822;
        }
        @media (max-width: 600px) {
          div {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default Index;
