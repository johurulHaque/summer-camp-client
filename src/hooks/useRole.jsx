import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: role  = [], isLoading: isRoleLoading} = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            // console.log('is admin response', res)
            return res.data.role;
        }
    })
    return [role, isRoleLoading]
};

export default useRole;
