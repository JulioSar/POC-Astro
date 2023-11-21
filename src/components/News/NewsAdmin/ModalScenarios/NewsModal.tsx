import { Combobox } from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { DatePicker } from "@/components/ui/datepicker";
import { Textarea } from "flowbite-react";
import InterestsRelation from "../InterestsRelation";
import { useForm, type SubmitHandler } from "react-hook-form";
import Editor from "@/components/ui/RichEditor/editor";

export default function NewsModal() {
  const { register, handleSubmit } = useForm();

  const [selectedOption, setSelectedOption] = useState<string>();

  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("data");
  };

  const options = [
    { label: "Featured", value: "featured" },
    { label: "Standard", value: "standard" },
    { label: "Regulation", value: "regulation" },
  ];
  console.log(selectedOption);
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
                <Combobox options={options} setAction={setSelectedOption} />
              </article>
              <article className="flex flex-col">
                <label
                  htmlFor="DatePicker"
                  className="text-[#757D8A] text-sm block"
                >
                  Date
                </label>
                <DatePicker />
              </article>

              <article className="flex flex-col ">
                <label htmlFor="DatePicker" className="text-[#757D8A] text-sm ">
                  Published
                </label>
                <Switch className="mt-3" name="DatePicker" id="DatePicker" />
              </article>
            </section>
            <section>
              <label className="text-[#757D8A] text-sm" htmlFor="NewsImage">
                Image
                <Input
                  type="file"
                  placeholder="Choose an image "
                  name="NewsImage"
                  id="NewsImage"
                  className=" block w-full text-sm text-slate-500 file:!mr-4 file:py-2 
                  file:text-sm file:font-semibold
                  file:!bg-[#E87722] file:!text-white file:!px-6
                  hover:file:!bg-[#575756] hover:file:!text-black transition duration-300"
                />
              </label>
            </section>
          </section>

          <section className="flex flex-col gap-6">
            <article>
              <label className="text-[#757D8A] text-sm">Title</label>
              <Input type="text" placeholder="" id="NewsTitle" />
            </article>

            <article>
              <label className="text-[#757D8A] text-sm">Descrption</label>
              <Editor />
            </article>
          </section>
        </div>

        <section className="grid grid-cols-4">
          <section className="col-span-3">
            <InterestsRelation />
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
