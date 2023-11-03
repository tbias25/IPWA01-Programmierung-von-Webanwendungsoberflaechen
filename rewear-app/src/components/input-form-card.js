/*
    https://daisyui.com/components/card/
    card with image overlay

    https://daisyui.com/components/input/
    with form-control and labels
*/

export default function InputFormCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
            <span className="label-text-alt">Top Right label</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">Bottom Left label</span>
            <span className="label-text-alt">Bottom Right label</span>
          </label>
        </div>
      </div>
    </div>
  );
}
