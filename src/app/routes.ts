import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import DailyReading from "./components/DailyReading";
import ZodiacSelection from "./components/ZodiacSelection";
import Journal from "./components/Journal";
import Profile from "./components/Profile";
import PersonalizedReading from "./components/PersonalizedReading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/daily-reading",
    Component: DailyReading,
  },
  {
    path: "/zodiac",
    Component: ZodiacSelection,
  },
  {
    path: "/zodiac/:zodiacSign",
    Component: PersonalizedReading,
  },
  {
    path: "/journal",
    Component: Journal,
  },
  {
    path: "/profile",
    Component: Profile,
  },
]);