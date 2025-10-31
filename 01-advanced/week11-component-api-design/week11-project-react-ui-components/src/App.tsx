import "./App.css";
import Button from "./components/Button";
import { Mail } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/Tabs";

function App() {
  return (
    <div>
      <div>
        <h1>Buttons Default Variant</h1>
        <div className="buttonsContainer">
          <div className="buttons">
            <Button variant="default" size="default" href="#">
              Button
            </Button>
            <Button variant="default" size="sm">
              Button
            </Button>
            <Button variant="default" size="lg">
              Button
            </Button>
            <Button variant="default" size="icon">
              <Mail />
            </Button>
          </div>

          <div className="buttons">
            <Button variant="default" size="default" active>
              Button
            </Button>
            <Button variant="default" size="sm" active>
              Button
            </Button>
            <Button variant="default" size="lg" active>
              Button
            </Button>
            <Button variant="default" size="icon" active>
              <Mail />
            </Button>
          </div>

          <div className="buttons">
            <Button variant="default" size="default" disabled>
              Button
            </Button>
            <Button variant="default" size="sm" disabled>
              Button
            </Button>
            <Button variant="default" size="lg" disabled>
              Button
            </Button>
            <Button variant="default" size="icon" disabled>
              <Mail />
            </Button>
          </div>
        </div>

        <h1>Buttons Secondary Variant</h1>
        <div className="buttonsContainer">
          <div className="buttons">
            <Button variant="secondary" size="default" href="#">
              Button
            </Button>
            <Button variant="secondary" size="sm">
              Button
            </Button>
            <Button variant="secondary" size="lg">
              Button
            </Button>
            <Button variant="secondary" size="icon">
              <Mail />
            </Button>
          </div>

          <div className="buttons">
            <Button variant="secondary" size="default" active>
              Button
            </Button>
            <Button variant="secondary" size="sm" active>
              Button
            </Button>
            <Button variant="secondary" size="lg" active>
              Button
            </Button>
            <Button variant="secondary" size="icon" active>
              <Mail />
            </Button>
          </div>

          <div className="buttons">
            <Button variant="secondary" size="default" disabled>
              Button
            </Button>
            <Button variant="secondary" size="sm" disabled>
              Button
            </Button>
            <Button variant="secondary" size="lg" disabled>
              Button
            </Button>
            <Button variant="secondary" size="icon" disabled>
              <Mail />
            </Button>
          </div>
        </div>

        <h1>Buttons Outline Variant</h1>
        <div className="buttonsContainer">
          <div className="buttons">
            <Button variant="outline" size="default">
              Button
            </Button>
            <Button variant="outline" size="sm">
              Button
            </Button>
            <Button variant="outline" size="lg">
              Button
            </Button>
            <Button variant="outline" size="icon">
              <Mail />
            </Button>
          </div>

          <div className="buttons">
            <Button variant="outline" size="default" active>
              Button
            </Button>
            <Button variant="outline" size="sm" active>
              Button
            </Button>
            <Button variant="outline" size="lg" active>
              Button
            </Button>
            <Button variant="outline" size="icon" active>
              <Mail />
            </Button>
          </div>

          <div className="buttons">
            <Button variant="outline" size="default" disabled>
              Button
            </Button>
            <Button variant="outline" size="sm" disabled>
              Button
            </Button>
            <Button variant="outline" size="lg" disabled>
              Button
            </Button>
            <Button variant="outline" size="icon" disabled>
              <Mail />
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "3rem", display: "inline-block" }}>
        <h1>Tabs</h1>
        <Tabs>
          <TabsList>
            <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab-1">
            <h2>Contenido del Tab 1</h2>
            <p>Contenido del tab 1. Lorem ipsum dolor sit amet, consectetur</p>
          </TabsContent>
          <TabsContent value="tab-2">
            <h2>Contenido del Tab 2</h2>
            <p>Contenido del tab 2. Lorem ipsum dolor sit amet, consectetur</p>
          </TabsContent>
          <TabsContent value="tab-3">
            <h2>Contenido del Tab 3</h2>
            <p>Contenido del tab 3. Lorem ipsum dolor sit amet, consectetur</p>
          </TabsContent>
        </Tabs>
      </div>
      <br />
      <div style={{ marginTop: "3rem", display: "inline-block", width: "80%" }}>
        <h1>Tabs con otros elementos</h1>
        <Tabs>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <TabsList>
              <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
            </TabsList>
            <img src="https://placehold.co/48x48" alt="profile image" />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <aside>
              <img src="https://placehold.co/131x192" alt="ad image" />
            </aside>
            <TabsContent value="tab-1">
              <h2>Contenido del Tab 1</h2>
              <p>
                Contenido del tab 1. Lorem ipsum dolor sit amet, consectetur
              </p>
            </TabsContent>
            <TabsContent value="tab-2">
              <h2>Contenido del Tab 2</h2>
              <p>
                Contenido del tab 2. Lorem ipsum dolor sit amet, consectetur
              </p>
            </TabsContent>
            <TabsContent value="tab-3">
              <h2>Contenido del Tab 3</h2>
              <p>
                Contenido del tab 3. Lorem ipsum dolor sit amet, consectetur
              </p>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
