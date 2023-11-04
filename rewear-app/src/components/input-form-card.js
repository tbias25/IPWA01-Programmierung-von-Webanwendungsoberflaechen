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
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
              <span className="label-text-alt">Alt label</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
            <label className="label">
              <span className="label-text-alt">Alt label</span>
              <span className="label-text-alt">Alt label</span>
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
              <span className="label-text-alt">Alt label</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
            <label className="label">
              <span className="label-text-alt">Alt label</span>
              <span className="label-text-alt">Alt label</span>
            </label>
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
