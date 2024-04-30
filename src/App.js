import { Suspense, lazy } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import { configureWeb3Modal } from "./connection";
import MintPOAP from "./pages/dashboard/mint-poap/MintPOAP";
const LandingPage = lazy(() => import("./pages/landing-page"));
const CreateEvent = lazy(() => import("./pages/dashboard/create-events/create-event"));
const AllEvents = lazy(() => import("./pages/dashboard/explore-all-events/all-events"));
const AllEventDetail = lazy(() => import("./pages/dashboard/explore-all-events/all-event-detail"));
const ManageEvents = lazy(() => import("./pages/dashboard/manage-events/manage-events"));
const ManageEventDetails = lazy(() => import("./pages/dashboard/manage-events/manage-event-details"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const Events = lazy(() => import("./pages/events"));
const MyTickets = lazy(() => import("./pages/dashboard/my-tickets/my-tickets"));
const Preloader = lazy(() => import("./components/PreLoader"));


function App() {
  configureWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();


  return (
    <>
      <ChakraProvider>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={isConnected ? <Navigate to="/dashboard" /> : <LandingPage />} />
            <Route path="/events" element= {isConnected ? <Navigate to="/dashboard" /> : <Events />} />
            <Route path="/dashboard" element={isConnected ? <Dashboard />: <Navigate to="/" /> } />
            <Route path="/create-event" element={isConnected ?<CreateEvent />: <Navigate to="/" />} />
            <Route path="/all-events" element={isConnected ?<AllEvents />: <Navigate to="/" />} />
            <Route path="/all-events/:id" element={isConnected ?<AllEventDetail />: <Navigate to="/" />}/>
            <Route path="/manage-events" element={isConnected ?<ManageEvents />: <Navigate to="/" />}/>
            <Route path="/manage-events/:id" element={isConnected ?<ManageEventDetails />: <Navigate to="/" />} />
            <Route path="/tickets-poap" element={isConnected ?<MyTickets />: <Navigate to="/" />} />
            <Route path="/mint-poap" element={isConnected ?<MintPOAP />: <Navigate to="/" />} />
          </Routes>
        </Suspense>
      </ChakraProvider>
    </>
  );
}

export default App;
