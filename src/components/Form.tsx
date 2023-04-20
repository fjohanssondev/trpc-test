import { Field as HouseField, Form as HouseForm } from "houseform";
import { z } from "zod";

const Form = () => {
  return (
    <HouseForm onSubmit={(values) => alert(values)}>
    {({ submit }) => (
      <div className="flex flex-col gap-4">
        <HouseField name="title" initialValue={""}>
          {({ value, setValue, onBlur }) => (
            <>
              <label className="text-slate-200 text-sm">Title</label>
              <input
              className="bg-transparent/40 text-slate-300 text-sm focus:bg-transparent/10 border rounded-sm py-2 px-4 border-slate-400"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={onBlur}
            />
            </>
          )}
        </HouseField>
        <button className="bg-slate-300 hover:bg-slate-200 rounded-sm px-4 py-2" onClick={submit}>Add post</button>
      </div>
    )}
  </HouseForm>
  )
}

export default Form