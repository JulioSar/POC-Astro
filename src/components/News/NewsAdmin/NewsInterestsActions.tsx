import { TableAdmin } from "@/components/Table/TableAdmin";
import Search from "@/components/ui/search";
import { useEffect, useState } from "react";
import { columns } from "./ColumnsTableNews";
import { useToast } from "@/components/ui/use-toast";
import { news, news2 } from "@/lib/mockData";
import { DownloadIcon } from "@/lib/icons";
import { Toaster } from "@/components/ui/toaster";
import NewsInterestsModal from "@/components/News/NewsAdmin/NewsInterestsModal";

export default function NewsInterestsActions() {
  const [clickId, setClickId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [sectionActive, setSectionActive] = useState("Interests");
  const [tableData, setTableData] = useState(news);
  const [isNewItem, setIsNewItem] = useState(false);

  const infoProps = {
    clickId,
    setClickId,
    sectionActive,
    isNewItem,
    setIsNewItem,
  };
  const modalProps = { openModal, setOpenModal };

  const { toast } = useToast();
  const toastInfo = {
    title: "",
    description: "",
  };

  const searchProps = {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
  };

  const isSectionActive =
    "bg-[#999999] rounded-3xl text-white transition duration-300";

  useEffect(() => {
    if (sectionActive === "Interests") {
      setTableData(news);
    } else if (sectionActive === "News") {
      setTableData(news2);
    } else if (sectionActive === "Regulations") {
      //setTableData();
      console.log("Regulations");
    } else {
      console.log("ERROR"); // Throw Error
    }
  }, [sectionActive]);

  const handleNewClick = () => {
    setOpenModal("size");
    setIsNewItem(true);
  };

  const handleEditClick = (id: string) => {
    setClickId(id);
    setOpenModal("size");
  };

  const handleDeleteClick = async (id: string) => {
    try {
      toastInfo.title = "User deleted successfully";
      toastInfo.description =
        "The user data has been deleted from data base correctly.";
    } catch (error) {
      toastInfo.title = "Unable to delete user data";
      toastInfo.description = `There has been an error while deleting data. Please try again.${error}`;
    }
    toast(toastInfo);
  };

  return (
    <>
      <div>
        <section className="gap-6 p-6">PATH</section>
        <section className="flex flex-row justify-between gap-6 p-6">
          <section className="flex flex-row gap-6 ">
            <button
              className="px-12 h-8 rounded-3xl bg-[#E87722] text-white shadow-lg hover:scale-105 transition duration-300 "
              onClick={handleNewClick}
            >
              New
            </button>
            <button className="hover:scale-105 transition duration-300 h-8">
              <DownloadIcon />
            </button>
          </section>

          <section className="flex flex-row  bg-[#f4f4f4] rounded-xl text-[#D9D9D9] h-8">
            <button
              className={`${
                sectionActive === "Interests" && isSectionActive
              } px-6 `}
              onClick={() => setSectionActive("Interests")}
            >
              Interests
            </button>
            <button
              className={`${sectionActive === "News" && isSectionActive} px-6 `}
              onClick={() => setSectionActive("News")}
            >
              News
            </button>
            <button
              className={`${
                sectionActive === "Regulations" && isSectionActive
              } px-6`}
              onClick={() => setSectionActive("Regulations")}
            >
              Regulations
            </button>
          </section>

          <section className="flex flex-row gap-6 h-8">
            <Search searchProps={searchProps} />
          </section>
        </section>
        <section className="">
          <TableAdmin
            columns={columns({ handleEditClick, handleDeleteClick })}
            data={tableData ? tableData : []}
          />
        </section>
        {openModal && (
          <section className="transition duration-300">
            <NewsInterestsModal infoProps={infoProps} modalProps={modalProps} />
          </section>
        )}
        <Toaster />
      </div>
    </>
  );
}
