import "./App.css";
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import EmailVerification from "supertokens-auth-react/recipe/emailverification";
import ThirdPartyPasswordless from "supertokens-auth-react/recipe/thirdpartypasswordless";
import Session, { SessionAuth } from "supertokens-auth-react/recipe/session";
import Home from "./Pages/Home";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/core/Footer";
import Header from "./components/core/Header";

export function getApiDomain(): string {
    const apiPort = process.env.REACT_APP_API_PORT || 3001;
    const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`;
    return apiUrl;
}

export function getWebsiteDomain(): string {
    const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`;
    return websiteUrl;
}

type AppData = {
    appName: string;
    apiDomain: string;
    websiteDomain: string;
}

const appInfo: AppData = {
    appName: "Habitopia", // TODO: Your app name
    apiDomain: getApiDomain(), // TODO: Change to your app's API domain
    websiteDomain: getWebsiteDomain(), // TODO: Change to your app's website domain
}

SuperTokens.init({
    appInfo: appInfo,
    recipeList: [
        EmailVerification.init({
            mode: "REQUIRED",
        }),
        ThirdPartyPasswordless.init({
            contactMethod: "PHONE",
            style: {                button: {                    backgroundColor: '#252571',                    border: '0px',                    width: '30%',                    margin: '0 auto'                }            }
        }),
        Session.init(),
    ],
});

function App() {
    return ( 
        <SuperTokensWrapper>
            <div className="App">
                <Router>
                    <Header />
                    {/* <div className="gif-container"> */}
                    <div>
                        <Routes>
                            {/* This shows the login UI on "/auth" route */}
                            {/* {getSuperTokensRoutesForReactRouterDom(require("react-router-dom"))} */}
                            
                            <Route
                                path="/"
                                element={
                                    /* This protects the "/" route so that it shows 
                                        <Home /> only if the user is logged in.
                                        Else it redirects the user to "/auth" */
                                        // <SessionAuth>
                                        <Home />
                                        // </SessionAuth>
                                }
                            />

                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </div>
        </SuperTokensWrapper>
    );
}

export default App;
