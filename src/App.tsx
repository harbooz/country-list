import { GraphQLClient, ClientContext } from "graphql-hooks";
import CountriesComponent from "./components/Countries";
import Header from "./components/Header";

const client = new GraphQLClient({
  url: "https://admin-core.test.virtaglobal.com/public",
});

function App() {
  return (
    <ClientContext.Provider value={client}>
      <div className="app-wrapper">
        <div className="app__content">
          <div className="left__content">
            <div className="logo"></div>
          </div>
          <div className="content__details">
            <Header />
            <div className="country__section">
              <h2 className="country__title">Compatible countries</h2>
              <div className="country__table">
                <CountriesComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientContext.Provider>
  );
}

export default App;
