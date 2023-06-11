import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUserAdmin = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: usersAdmin = [] } = useQuery({
        queryKey: ['userAdmin'],
        enabled: !loading,      
        queryFn: async () => {
            // const res = await axiosSecure(`/class?email=${user?.email}`)
            const res = await axiosSecure(`/admin/users`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [usersAdmin, refetch]
};

export default useUserAdmin;