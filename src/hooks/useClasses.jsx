
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
const useClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['class', user?.email],
        enabled: !loading,      
        queryFn: async () => {
            const res = await axiosSecure(`/class?email=${user?.email}`)
            // console.log('res from axios', res)
            return res.data;
        },
    })

    return [classes, refetch]

}
export default useClasses;