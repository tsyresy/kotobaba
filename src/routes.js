// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "pages",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "A propos de nous",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Nous contacter",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Auteur",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "Accéder à mon compte",
        collapse: [
          {
            name: "Se Connecter",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "services",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Conceptions",
        description: "Voir plus",
        dropdown: true,
        collapse: [
          {
            name: "Maquette UI/UX",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Création de site web",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
          {
            name: "Graphic Design",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "Multimédia & Animation",
        description: "Affichez tous",
        dropdown: true,
        collapse: [
          {
            name: "Spot Publicitaire",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "Montage Vidéo",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "Motion Design",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
          {
            name: "Voix OFF",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "Marketing Digital",
        description: "Voir les prestations",
        dropdown: true,
        collapse: [
          {
            name: "Community Management",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "Social Media Management",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
          {
            name: "SEO & SEM",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "Publicité En ligne",
        description: "Voir les offres",
        dropdown: true,
        collapse: [
          {
            name: "Facebook Ads",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "Google Ads",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "Placement de produit",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "Autres offres & Prestations",
        description: "Affiche plus de prestations",
        dropdown: true,
        collapse: [
          {
            name: "Création compte Paypal",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "Formation Digital",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "Produits & Services",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          // {
          //   name: "buttons",
          //   route: "/sections/elements/buttons",
          //   component: <Buttons />,
          // },
          // {
          //   name: "dropdowns",
          //   route: "/sections/elements/dropdowns",
          //   component: <Dropdowns />,
          // },
          // {
          //   name: "progress bars",
          //   route: "/sections/elements/progress-bars",
          //   component: <ProgressBars />,
          // },
          // {
          //   name: "toggles",
          //   route: "/sections/elements/toggles",
          //   component: <Toggles />,
          // },
          // {
          //   name: "typography",
          //   route: "/sections/elements/typography",
          //   component: <Typography />,
          // },
        ],
      },
    ],
  },
  {
    name: "docs",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Conditions general des ventes",
        description: "All about overview, quick start, license and contents",
        href: "https://www.creative-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      // {
      //   name: "foundation",
      //   description: "See our colors, icons and typography",
      //   href: "https://www.creative-tim.com/learning-lab/react/colors/material-kit/",
      // },
      // {
      //   name: "components",
      //   description: "Explore our collection of fully designed components",
      //   href: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
      // },
      // {
      //   name: "plugins",
      //   description: "Check how you can integrate our plugins",
      //   href: "https://www.creative-tim.com/learning-lab/react/datepicker/material-kit/",
      // },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
];

export default routes;
