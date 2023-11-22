import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { DatePicker } from "@/components/ui/datepicker";
import InterestsRelation from "../InterestsRelation";
import { useForm, type SubmitHandler } from "react-hook-form";
import Editor from "@/components/ui/RichEditor/editor";
import type { News } from "@/types";
import { v4 } from "uuid";
import { NewNewsDetail } from "../Entities/new-newsDetails";
import { useGetSingleNews } from "@/hooks/useNews";
import { news2 } from "@/lib/mockData";

export default function NewsModal({ id }: { id: string }) {
  const { register, handleSubmit } = useForm<News>();

  const [selectedOption, setSelectedOption] = useState<string>();
  const [editorState, setEditorState] = useState<string>("");
  const [chosenDate, setChosenDate] = useState<Date>();
  const [listInterests, setListInterests] = useState<string[]>();

  const mockGetNew = (id: string) => {
    const newsInfo = news2.filter((item) => item.id === id);
    return newsInfo[0];
  };

  // const newsDetails = id != "" ? useGetSingleNews(id) : new NewNewsDetail();
  const newsDetails = id != "" ? mockGetNew(id) : new NewNewsDetail();
  const [switchChecked, setSwitchChecked] = useState(newsDetails?.published);

  const editorProps = {
    editorState,
    setEditorState,
  };

  const onSubmit: SubmitHandler<News> = async (data) => {
    const newsData = newsDetails;
    const newsSave = {
      ...newsData,
      type: selectedOption,
      creation_date: chosenDate,
      published: switchChecked,
      title: data.title,
      content: editorState,
      new_picture: "",
      category: listInterests,
      id: v4(),
    };

    console.log(newsSave);
  };

  const options = [
    { label: "Featured", value: "featured" },
    { label: "Standard", value: "standard" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10">
          <section className="flex flex-col gap-6 ">
            <section className="flex flex-row gap-6">
              <article className="flex flex-col">
                <label htmlFor="NewsOpions" className="text-[#757D8A] text-sm">
                  Type
                </label>
                <Combobox
                  options={options}
                  setAction={setSelectedOption}
                  selectedOption={newsDetails ? newsDetails.type : ""}
                />
              </article>
              <article className="flex flex-col">
                <label
                  htmlFor="DatePicker"
                  className="text-[#757D8A] text-sm block"
                >
                  Date
                </label>
                <DatePicker
                  setChosenDate={setChosenDate}
                  newsDate={newsDetails?.creation_date}
                />
              </article>

              <article className="flex flex-col ">
                <label htmlFor="Published" className="text-[#757D8A] text-sm ">
                  Published
                </label>
                <Switch
                  className={`${
                    switchChecked ? "!bg-[#E87722]" : "bg-gray-500"
                  } mt-3 `}
                  id="published"
                  defaultChecked={switchChecked}
                  onCheckedChange={(checked) => {
                    setSwitchChecked(checked);
                  }}
                />
              </article>
            </section>
            <section>
              <label className="text-[#757D8A] text-sm" htmlFor="NewsImage">
                Image
                <Input
                  type="file"
                  placeholder="Choose an image "
                  id="NewsImage"
                  className=" block w-full text-sm text-slate-500 file:!mr-4 file:py-2 
                  file:text-sm file:font-semibold
                  file:!bg-[#E87722] file:!text-white file:!px-6
                  hover:file:!bg-[#575756] hover:file:!text-black transition duration-300"
                  {...register("news_picture")}
                />
              </label>
            </section>
          </section>

          <section className="flex flex-col gap-6">
            <article>
              <label className="text-[#757D8A] text-sm">Title</label>
              <Input
                type="text"
                placeholder=""
                id="NewsTitle"
                defaultValue={newsDetails?.title}
                {...register("title")}
              />
            </article>

            <article>
              <label className="text-[#757D8A] text-sm">Descrption</label>
              <Editor editorProps={editorProps} />
            </article>
          </section>
        </div>

        <section className="grid grid-cols-4">
          <section className="col-span-3">
            <InterestsRelation setListInterests={setListInterests} />
          </section>
        </section>
        <section className="flex flex-row justify-end align-middle">
          <button
            type="submit"
            className="button-orange-apex mt-8 shadow-gray-400 cursor-pointer h-8 "
          >
            Save
          </button>
        </section>
      </form>
    </>
  );
}
