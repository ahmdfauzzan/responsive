import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { initializeTokenFromCookie } from "../../Redux/action/authLogin";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Data = useSelector((state) => state.auth);

  console.log(Data);

  useEffect(() => {
    if (Data?.token === undefined) {
      navigate("/login");
    }
  }, []);
  // useEffect(() => {
  //   if (!Data.token) {
  //     navigate("/login");
  //   }
  // }, [Data.token, navigate]);

  // useEffect(() => {
  //   dispatch(initializeTokenFromCookie());
  // }, [dispatch]);

  return children;
}

export default TokenProtected;
