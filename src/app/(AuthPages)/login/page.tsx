import CypartaIcon from "@/assets/images/cypartal_logo.svg";

export default function Login() {
  return (
    <section className="max-w-[616px] mx-auto mt-[189px] ">
      <h1>
        <CypartaIcon className="mx-auto mb-8" />
      </h1>
      <form
        method="POST"
        action=""
        className="border-[0.6px] border-bright-gray rounded-2xl"
      >
        <div className="my-[84px] mx-auto w-fit mr-6 text-[17px] font-semibold leading-8 text-dark-gray-2">
          <div className="mb-5">
            <label className="block" htmlFor="email">
              Email Address
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-[545px] py-3 px-4 border-[1px] border-dark-gray rounded-[10px]"
            />
          </div>
          <div>
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-[545px] py-3 px-4 border-[1px] border-dark-gray rounded-[10px]"
            />
          </div>
        </div>
        <button
          className="mb-[62px] w-[445px] h-14 bg-dark-gray-2 text-white rounded-[10px] block mx-auto"
          type="submit"
        >
          Login
        </button>
      </form>
    </section>
  );
}
