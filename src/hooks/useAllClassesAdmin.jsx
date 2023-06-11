import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllClassesAdmin = () => {
    const { user, loading } = useAuth();
    // const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: adminClasses = [] } = useQuery({
        queryKey: ['adminClass'],
        enabled: !loading,      
        queryFn: async () => {
            // const res = await axiosSecure(`/class?email=${user?.email}`)
            const res = await axiosSecure(`/admin/allClass`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [adminClasses, refetch]
};

export default useAllClassesAdmin;