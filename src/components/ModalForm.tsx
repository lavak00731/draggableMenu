import React from 'react'

export const ModalForm = () => {
  return (
    <div aria-modal="true" role="dialog" tabIndex={-1} aria-labelled="form-title"  className="fixed top-3/6 left-3/12 w-6/12 p-4">
      <h2 className="text-xl" id="form-title">Add a New Page</h2>
      <form action="" className="">
        <div className="mb-2 p-1">
          <label htmlFor=""></label>
          <input type="text" />
        </div>
        <div className="p-1">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
