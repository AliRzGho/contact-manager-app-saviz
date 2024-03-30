import { useMutation, useQuery } from "@tanstack/react-query";
import { Contact } from "../models/contacts";
import Service from "./service";
import { queryClient } from "./QueryProvider";

const QUERY_KEY = "contacts";

export function useGetContacts() {
  let totalRecords = 0;
  const { isPending, isFetching, isError, data } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => Service.contact.get(),
    select: (result) => {
      totalRecords = result.length;
      return result;
    },
  });

  return {
    isPending,
    isFetching,
    isError,
    data,
    totalRecords,
  };
}
