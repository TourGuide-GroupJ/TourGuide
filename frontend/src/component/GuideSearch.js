import React from "react";

export default function GuideSearch() {
  return (
    <div className="bg-slate-700 rounded-2xl">
      <div>
        <span className="text-xl">Find Your Guide</span>
      </div>
      <form action="" className="bg-stone-400">
        <table className="p-10">
        <tr>
        <td><span>Enter The Tour Guide Name</span></td>
          <td> <input type="text" placeholder="Enter the name" className="px-4 py-2 form-input rounded-2xl cursor-text" /> </td>
        </tr>
        <tr>
        <td><span>Enter The Tour Guide Id</span></td>
        <td><input type="text" placeholder="Enter the id" className="px-4 py-2 form-input rounded-2xl cursor-text" /></td>
        </tr>
        <tr>
        <td><span>Guide Type</span></td> 
          <td> <select size="1" className="px-8 py-2 cursor-pointer form-input rounded-2xl"> 
					<option>2016/2017</option>
					<option>2017/2018</option>
					<option>2018/2019</option>
					<option>2019/2020</option>
					</select></td>
        </tr>
        <tr>
          <td><span>Language</span></td>
          <td><select size="1" className="px-8 py-2 cursor-pointer form-input rounded-2xl"> 
					<option>2016/2017</option>
					<option>2017/2018</option>
					<option>2018/2019</option>
					<option>2019/2020</option>
					</select></td>
        </tr>
        <tr className="col-span-2">
        <button type='submit' className='bg-zinc-600 rounded-2xl flex px-[8px] py-[6px] cursor-pointer hover:max-lg'><span>Search</span></button>
        </tr>
        </table>
      </form>
    </div>
  );
}
