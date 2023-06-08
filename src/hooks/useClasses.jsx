
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
const useClasses = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,      
        queryFn: async () => {
            // const res = await axiosSecure(`/class?email=${user?.email}`)
            const res = await axiosSecure(`/class?email=jony@gmail.com`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [classes, refetch]

}
export default useClasses;