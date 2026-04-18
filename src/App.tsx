// App.tsx
import MainLayout from "@/layouts/mainlayout";
import ResumePage from "@/pages/resume-page";

function App() {
  const path = window.location.pathname;

  if (path === "/resume") {
    return <ResumePage />;
  }

  return <MainLayout />;
}

export default App;
