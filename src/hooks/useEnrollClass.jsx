import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
const useEnrollClass = () => {
  const { user, loading } = useAuth();
  // const token = localStorage.getItem('access-token');
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: enrolled = [] } = useQuery({
    queryKey: ["enrollClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      // const res = await axiosSecure(`/class?email=${user?.email}`)
      const res = await axiosSecure(`/enrollClass?email=${user.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });

  return [enrolled, refetch];
};
export default useEnrollClass;
