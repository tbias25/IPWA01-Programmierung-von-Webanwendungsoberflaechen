/*
    https://daisyui.com/components/card/
    card with image overlay

    https://daisyui.com/components/input/
    with form-control and labels

    https://daisyui.com/components/toggle/
    with label and form-control

    https://daisyui.com/components/button/
    button block
*/

export default function InputFormCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">type of clothing</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">crisis area</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">would you like to have the donation picked up?</span>
            <input type="checkbox" className="toggle"/>
          </label>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">street, number</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">postal code</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">city</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <button className="btn btn-block">block</button>
      </div>
    </div>
  );
}
