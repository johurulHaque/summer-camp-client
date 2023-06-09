
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['user'],
        enabled: !loading,      
        queryFn: async () => {
            // const res = await axiosSecure(`/class?email=${user?.email}`)
            const res = await axiosSecure(`/users`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [users, refetch]
};

export default useUser;