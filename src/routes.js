/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import Dashboard from "views/Dashboard.jsx";
import One from "views/1xx.jsx";
import Two from "views/2xx.jsx";
import Three from "views/3xx.jsx";
import Four from "views/4xx.jsx";
import Five from "views/5xx.jsx";



const dashboardRoutes = [
  {
    path: "/informational",
    name: "Informational",
    icon: "pe-7s-angle-right-circle",
    component: One,
    layout: "/admin"
  },
  {
    path: "/success",
    name: "Success",
    icon: "pe-7s-angle-right-circle",
    component: Two,
    layout: "/admin"
  },
  {
    path: "/redirection",
    name: "Redirection",
    icon: "pe-7s-angle-right-circle",
    component: Three,
    layout: "/admin"
  },
  {
    path: "/client",
    name: "Client Error",
    icon: "pe-7s-angle-right-circle",
    component: Four,
    layout: "/admin"
  },
  {
    path: "/server",
    name: "Server Error",
    icon: "pe-7s-angle-right-circle",
    component: Five,
    layout: "/admin"
  }
];

export default dashboardRoutes;
