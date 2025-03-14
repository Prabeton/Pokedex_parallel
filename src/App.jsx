import { AppContextProvider } from "./context/AppContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import RouterApp from "./RouterApp";
import GlobalStyles from "./services/GlobalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "left" }}>
        <QueryClientProvider client={queryClient}>
          <AppContextProvider>
            <GlobalStyles />
            <RouterApp />
          </AppContextProvider>
        </QueryClientProvider>
      </SnackbarProvider>
    </>
  );
}
export default App;
