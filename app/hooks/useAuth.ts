import useSWR from "swr";
import callApi from "../services/callApi";

const useAuth = () => {
  const { data, error } = useSWR("user_me", () => {
    return callApi().get("/user");
  });

  return { user: data?.data?.user, error, loading: !data && !error };
};

export default useAuth;
