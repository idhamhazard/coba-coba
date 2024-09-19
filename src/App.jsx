import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/appLayout.jsx";
import LandingPage from "./pages/landingPage";
import OnBoarding from "./pages/onBoarding";
import Job from "./pages/job";
import JobListing from "./pages/jobListing";
import PostJobs from "./pages/postJobs";
import SavedJobs from "./pages/savedJob";
import MyJobs from "./pages/myJobs";
import { ThemeProvider } from "./components/theme-provider.jsx";
import ProtectedRoute from "./components/protected-route.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/Onboarding",
        element: (
          <ProtectedRoute>
            <OnBoarding />
          </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <JobListing />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/job.:id",
        element: (
          <ProtectedRoute>
            <Job />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoute>
            <PostJobs />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/saved-jobs",
        element: (
          <ProtectedRoute>
            <SavedJobs />,
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
