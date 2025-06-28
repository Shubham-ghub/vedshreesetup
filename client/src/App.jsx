import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ConsultancyPage from "./pages/ConsultancyPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./index.css";
import DashboardLayout from "./adminlayouts/DashboardLayout"
import Dashboard from "./adminpages/Dashboard";
import Categories from "./adminpages/Categories";
import Products from "./adminpages/Products";
import About from "./adminpages/About";
import PrivacyPolicy from "./adminpages/PrivacyPolicy";
import TermsConditions from "./adminpages/TermsConditions";
import Contact from "./adminpages/Contact";
import Hero from "./adminpages/Hero";
import Order from "./adminpages/Order";
import AdminProfile from "./adminpages/AdminProfile";
import Consultants from "./adminpages/Consultants";
import Testimonials from "./adminpages/Testimonials";



const App = () =>{

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: HomePage },
        {path: "about", Component: AboutPage },
        {path: "consultancy", Component: ConsultancyPage },
        {path: "products", Component: ProductsPage },
        {path: "products/:productId", Component: ProductDetailPage },
        {path: "contact", Component: ContactPage },
        {path: "policy", Component: PolicyPage },
        {path: "terms", Component: TermsPage },
        {path: "profile", Component: ProfilePage },
        {path: "login", Component: LoginPage },
        {path: "signup", Component: RegisterPage },{path: "*", Component: NotFoundPage }
      ]
    },
    {
      path: "dashboardlayout",
      Component: DashboardLayout,
      children: [
        { index: true, Component: Dashboard },
        {path: "dashboard", Component: Dashboard },
        {path: "categories", Component: Categories },
        {path: "products", Component: Products },
        {path: "about", Component: About },
        {path: "privacy", Component: PrivacyPolicy },
        {path: "terms", Component: TermsConditions },
        {path: "contact", Component: Contact },
        {path: "testimonials", Component: Testimonials }, 
        {path: "consultants", Component: Consultants }, 
        {path: "hero", Component: Hero },
        {path: "order", Component: Order },
        {path: "adminProfile", Component: AdminProfile },
        {path: "*", Component: () => <div>Page Not Found</div>}
      ] 
    }
  ]);

  return < RouterProvider  router={router}/>
}


export default App;
