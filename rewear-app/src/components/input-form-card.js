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
    /* modified flex-shrink-0 w-full max-w-md shadow-2xl bg-white */
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-white">
      <div className="card-body">
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">clothing type</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                clothing type
              </option>
              <option>hat</option>
              <option>jacket</option>
              <option>pullover</option>
              <option>trousers</option>
              <option>schoe</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">crisis are</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                crisis area
              </option>
              <option>ukraine</option>
              <option>iraq</option>
              <option>syria</option>
            </select>
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">
              would you like to have the donation picked up?
            </span>
            <input type="checkbox" className="toggle" />
          </label>
        </div>
        <div className="form-control w-full max-w-md">
          <label className="label">
            <span className="label-text">street, number</span>
          </label>
          <input
            type="text"
            placeholder="street, number"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="flex gap-2">
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">postal code</span>
            </label>
            <input
              type="text"
              placeholder="postal code"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">city</span>
            </label>
            <input
              type="text"
              placeholder="city"
              className="input input-bordered w-full max-w-md"
            />
          </div>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-block lowercase">contribute</button>
        </div>
      </div>
    </div>
  );
}
