export default function App() {
  return (
    <div className="w-full mx-auto flex flex-col gap-4">
      <h1 className="text-3xl text-center my-6">Login</h1>
      <form className="flex w-full flex-col items-center mb-6  gap-4">
        {/* <Input size={size} type="email" label="Email" /> */}
        <input
          className="w-96 mx-auto"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          className="w-96 mx-auto"
          type="password"
          placeholder="Enter your password"
          required
        />
        <input
          className="w-96 mx-auto"
          type="password"
          placeholder="Confirm your password"
          required
        />
        <input
          className="w-96 mx-auto"
          type="text"
          placeholder="Enter your name"
          required
        />
        <button
          type="submit"
          className="button bg-green-200 px-4 py-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
