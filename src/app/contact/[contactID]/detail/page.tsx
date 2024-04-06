import { Metadata } from "next";
import DetailPage from "./DetailPage";

export const metadata: Metadata = {
  title: "جزئیات",
};

const Detail = ({ params }: { params: { contactID: string } }) => {
  return <DetailPage id={Number(params.contactID)}/>;
};
export default Detail;