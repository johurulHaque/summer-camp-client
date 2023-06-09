
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
const useAllClasses = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['class'],
        enabled: !loading,      
        queryFn: async () => {
            // const res = await axiosSecure(`/class?email=${user?.email}`)
            const res = await axiosSecure(`/allClass`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [allClasses, refetch]

}
export default useAllClasses;