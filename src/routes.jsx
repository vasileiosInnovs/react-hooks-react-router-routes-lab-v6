import Movie from "./pages/Movie"
import Directors from "./pages/Directors"
import Actors from "./pages/Actors";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";

const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, 
       element: <Home />},
      {path: "movie/:id",
       element: <Movie />
      },
      {path: "directors",
       element: <Directors />
      },
      {path: "actors",
       element: <Actors />
      }
    ]
   }
]
   
export default routes;