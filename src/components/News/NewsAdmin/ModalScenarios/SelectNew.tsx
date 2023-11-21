import { Combobox } from "@/components/ui/combobox";

export default function SelectNew({
  setNewItemOption,
}: {
  setNewItemOption: (value: string) => void;
}) {
  const options = [
    {
      value: "news",
      label: "News",
    },
    {
      value: "interest",
      label: "Interest",
    },
    {
      value: "regulation",
      label: "Regulation",
    },
  ];
  return (
    <>
      <section className="flex justify-center align-middle py-10">
        <h3 className="">Choose which item you would like to create</h3>
      </section>
      <section className="flex flex-col justify-center align-middle gap-6">
        <article className="flex justify-center align-middle">
          <Combobox
            options={options}
            setAction={(value: string) => setNewItemOption(value)}
          />
        </article>
        <button>Next</button>
      </section>
    </>
  );
}
