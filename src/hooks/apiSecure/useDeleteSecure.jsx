import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../axios/useAxiosSecure";

const useDeleteSecure = (queryKeys) => {
  const queryClient = useQueryClient();

  const axiosSecure = useAxiosSecure();

  const { mutateAsync } = useMutation({
    mutationFn: async (endpoint, bodyData = []) => {
      const res = await axiosSecure.delete(endpoint, { data: bodyData });
      return res?.data;
    },
    onSuccess: () => {
      if (queryKeys) {
        queryKeys.forEach((queryKey) => {
          queryClient.invalidateQueries(queryKey);
        });
      }
    },
  });

  return { mutateAsync };
};

export default useDeleteSecure;
