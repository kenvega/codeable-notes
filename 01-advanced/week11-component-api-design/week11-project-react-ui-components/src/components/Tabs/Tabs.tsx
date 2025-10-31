import { createContext, useContext, useState } from "react";
import styles from "./Tabs.module.css";
import { clsx } from "clsx";

const TabsContext = createContext({
  // initial values
  selectedTab: "",
  changeTab: (tab: string) => {},
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
  console.log("selectedTab on <TabsTrigger>: ", selectedTab);
  console.log("value on <TabsTrigger>: ", value);

  const handleClick = (value: string) => {
    console.log("Clicked tab on <TabsTrigger>: ", value);
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
  console.log("selectedTab on <TabsContent>: ", selectedTab);
  console.log("value on <TabsContent>: ", value);
  // depending on value we get context to show/hide content
  return value === selectedTab ? <div>{children}</div> : null;
};

export default Tabs;

export { Tabs, TabsList, TabsTrigger, TabsContent };
