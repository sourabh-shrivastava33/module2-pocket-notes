import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/homepage/HomePage";
import NoNote from "./components/notes-container/NoNote";
import Notes from "./components/notes-container/Notes";
import { GroupsProvider } from "./contexts/GroupsProvider";

import ProtectedRoute from "./components/protected route/ProtectedRoute";
import Error from "./components/error/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <GroupsProvider>
              <HomePage />
            </GroupsProvider>
          }
        >
          <Route index element={<NoNote />} />
          <Route
            path="/:group"
            element={
              <ProtectedRoute>
                <Notes />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
