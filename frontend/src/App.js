import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import MyPage from "./pages/mypage/MyPage";
import UserModify from "./pages/usermodify/UserModify";
import Pieces from "./pages/pieces/Pieces";
import Piece from "./pages/piece/Piece";
import Filter from "./pages/filter/Filter";
import PieceDetail from "./pages/piecedetail/PieceDetail";

import NotFound from "./pages/not-found/NotFound";

import GlobalStyle from "./GlobalStyle";
import PieceCommit from "./pages/piececommit/PieceCommit";
import StyleTransfer from "./pages/styletransfer/StyleTransfer";
import Scent from "./pages/scent/Scent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/usermodify",
    element: <UserModify />,
  },
  {
    path: "/mypage/:targetUserSeq",
    element: <MyPage />,
  },
  {
    path: "/pieces",
    element: <Pieces />,
  },
  {
    path: "/pieces/:pieceSeq",
    // element: <PieceDetail />,
    // element: <TailwindPieceDetail />,
    element: <Piece />,
  },
  {
    path: "/filter",
    element: <Filter />,
  },
  {
    path: "/register",
    element: <PieceCommit />,
  },
  {
    path: "/styletransfer",
    element: <StyleTransfer />,
  },
  {
    path: "/scent",
    element: <Scent />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default App;
