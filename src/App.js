import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import CreateEvent from "./pages/dashboard/create-events/create-event";
import AllEvents from "./pages/dashboard/explore-all-events/all-events";
import AllEventDetail from "./pages/dashboard/explore-all-events/all-event-detail";
import ManageEvents from "./pages/dashboard/manage-events/manage-events";
import ManageEventDetails from "./pages/dashboard/manage-events/manage-event-details";
import Dashboard from "./pages/dashboard/dashboard";
import Events from "./pages/events";
import MyTickets from "./pages/dashboard/my-tickets/my-tickets";

function App() {
  return (
    <>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/all-events" element={<AllEvents />} />
          <Route path="/all-events/:id" element={<AllEventDetail />} />
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path="/manage-events/:id" element={<ManageEventDetails />} />
          <Route path="/tickets-poa" element={<MyTickets />} />
        </Routes>
      </ChakraProvider>
    </>
  );
}

export default App;
