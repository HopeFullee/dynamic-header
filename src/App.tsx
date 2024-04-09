import React, { useEffect, useState } from "react";
import Layout from "./components/layout";
import Section01 from "./components/sections/Section-01";
import Section02 from "./components/sections/Section-02";
import Section03 from "./components/sections/Section-03";
import Section04 from "./components/sections/Section-04";
import { useHeaderStore } from "./store/use-header-store";

function App() {
  const [isFirstSection, setIsFirstSection] = useState(false);
  const { headerState, setHeaderState } = useHeaderStore();

  return (
    <div className="App">
      <Layout>
        <Section01 isFirstSection={isFirstSection} />
        <Section02 />
        <Section03 />
        <Section04 />
      </Layout>
    </div>
  );
}

export default App;
