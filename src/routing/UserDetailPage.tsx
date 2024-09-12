import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  // console.log("useParams-Hook : ", params);
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log("useSearchParams-Hook : ", searchParams);
  // console.log("useSearchParams.toString()-Hook : ", searchParams.toString());
  console.log("useSearchParams.get()-Hook : ", searchParams.get("name"));
  const location = useLocation();
  console.log("location-Hook : ", location);

  return <p>User</p>;
};

export default UserDetailPage;
