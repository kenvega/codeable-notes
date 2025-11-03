import { createContext, useContext, useState } from "react";
import styles from "./Tabs.module.css";

type TabsContextValue = {
  selectedTab: string;
  changeTab: (tab: string) => void;
};

const TabsContext = createContext<TabsContextValue>({
  // initial values (don't matter much because the provider will override them)
  selectedTab: "",
  changeTab: () => {},
});

const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [tabSelected, setTabSelected] = useState("");

  const onChangeTab = (tab: string) => {
    setTabSelected(tab);
  };

  return (
    <TabsContext.Provider
      value={{ selectedTab: tabSelected, changeTab: onChangeTab }}
    >
      <div>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.tabList}>{children}</div>;
};

const TabsTrigger = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const { selectedTab, changeTab } = useContext(TabsContext);

  const handleClick = (value: string) => {
    changeTab(value);
  };

  return (
    <button
      onClick={() => handleClick(value)}
      className={`${styles.tabTrigger} ${
        selectedTab === value ? styles.tabTriggerActive : ""
      } `}
    >
      {children}
    </button>
  );
};

const TabsContent = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const { selectedTab } = useContext(TabsContext);
  // depending on value we get context to show/hide content
  return value === selectedTab ? <div>{children}</div> : null;
};

export default Tabs;

export { Tabs, TabsList, TabsTrigger, TabsContent };
