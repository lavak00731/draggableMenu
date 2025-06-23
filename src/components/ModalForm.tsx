import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

export const ModalForm = ({ isOpened, setisOpened, addPage }: { isOpened: boolean, setisOpened: (value: boolean) => void, addPage: (value:string) => void }) => {
  const [formvalue, setFormvalue] = useState("");
  //focus modal
  const firstFocusable = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(isOpened  && firstFocusable.current ) {
      firstFocusable.current.focus()
    }
  
    return () => {

    }
  }, [isOpened])
  
  const closeModal = () => {
    setisOpened(false)
  }
  const resetForm = ()=>{
    closeModal();
    setFormvalue("")
  }
  const handleSubmit = (e:SubmitEvent) => {
    e.preventDefault();
    addPage(formvalue);
    resetForm();
  }
  return (
    <div
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      aria-labelledby="form-title"
      ref={firstFocusable}
      className={
        isOpened ? "fixed top-0 left-0 w-full h-full right-0 bottom-0 bg-black/50"
                 : "fixed top-0 left-0 w-full h-full right-0 bottom-0 bg-black/50 hidden"
      }
      
    >
      <div className="bg-white fixed p-4 top-3/6 w-10/12 left-1/12 md:w-4/6 md:left-1/6 xl:left-4/12 xl:w-4/12">
        <div className="relative">
          <button type="button" className="absolute right-1 top-1 p-1" onClick={()=>closeModal()}>
            <X size={16} />
            <span className="sr-only">Close Modal</span>
          </button>
          <h2 className="text-3xl mb-2 font-inter" id="form-title">
            Add a New Page
          </h2>
          <form action="" className="" onSubmit={(e)=> handleSubmit(e)}>
            <div className="mb-2">
              <label htmlFor="newpage" className="mb-2 font-inter">
                New Page Name
              </label>
              <input
                className="border-1 border-gray-950 p-2 block w-auto font-inter"
                type="text"
                name="newpage"
                id="newpage"
                required
                onChange={(e) => setFormvalue(e.target.value)}
                value={formvalue}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="py-1.5 px-2.5 border-neutral-200 border-1 rounded-lg  text-slate-500 bg-gray-400/[.15]  hover:bg-gray-400/[.35] focus-within:border-blue-600 focus-within:border-1 focus-within:bg-white focus-within:shadow-[0px_0px_0px_1.5px_#2f27e225] flex flex-row items-center gap-1.5 font-inter leading-5 capitalize font-medium text-sm  focus-visible:text-zinc-900 focus-visible:outline-0 mr-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
