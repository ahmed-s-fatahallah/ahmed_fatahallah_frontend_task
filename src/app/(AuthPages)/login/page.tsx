import CypartaIcon from "@/assets/images/cypartal_logo.svg";
import Button from "@/Components/Button";
import InputField from "@/Components/InputField";

export default function Login() {
  return (
    <main>
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
            <InputField
              variant="login"
              required
              name="email"
              type="email"
              placeholder="Email Address"
            >
              Email Address
            </InputField>
            <InputField
              variant="login"
              required
              name="password"
              type="password"
              placeholder="Password"
            >
              Password
            </InputField>
          </div>
          <Button variant="login" type="submit">
            Login
          </Button>
        </form>
      </section>
    </main>
  );
}
