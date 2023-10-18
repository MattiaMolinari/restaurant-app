import { FormEvent } from "react";

export default function Reservation({ id }: { id: string }) {
  return (
    <>
      <h2 id={id} className="section-title">
        RESERVATION
      </h2>

      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          setTimeout(() => {
            alert("Your reservation has been made!");
          }, 1000);
        }}
      >
        <div className="space-y-12 border-white">
          <div className="grid grid-cols-2 mt-10 gap-x-6 gap-y-8 justify-around">
            <div className="">
              <label className="block text-sm font-medium leading-6 text-white">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="first-name"
                  placeholder="John"
                  className="block w-full rounded-md border-0 py-1.5
                   text-black text-center shadow-sm ring-2 ring-inset
                    ring-gray-300 placeholder:text-gray-400 focus:ring-inset
                    focus:ring-white invalid:ring-red-600"
                  required
                />
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-white">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="last-name"
                  placeholder="Smith"
                  className="block w-full rounded-md border-0 py-1.5 text-black
                  text-center shadow-sm ring-inset ring-gray-300 placeholder:text-gray-400
                  ring-2 focus:ring-inset focus:ring-white invalid:ring-red-600"
                  required
                />
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  placeholder="email@email.com"
                  className="block w-full rounded-md border-0 py-1.5 text-black text-center
                  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                  focus:ring-2 focus:ring-inset focus:ring-white"
                />
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-white">
                Telephone number
              </label>
              <div className="mt-2">
                <input
                  id="tel"
                  type="tel"
                  placeholder="+00 00000000"
                  className="block w-full rounded-md border-0 py-1.5 text-black
                  text-center shadow-sm ring-2 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-inset
                  focus:ring-white invalid:ring-red-600"
                  required
                />
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-white">
                Number of people
              </label>
              <div className="mt-2">
                <input
                  id="people"
                  type="number"
                  min="0"
                  max="10"
                  className="block w-full rounded-md border-0 py-1.5 text-black
                  text-center shadow-sm ring-2 ring-inset ring-gray-30
                   placeholder:text-gray-400focus:ring-inset
                   focus:ring-white invalid:ring-red-600"
                  required
                />
              </div>
            </div>

            <div className="">
              <label className="block text-sm font-medium leading-6 text-white">
                Telephone number
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  type="datetime-local"
                  className="block w-full rounded-md border-0 py-1.5 text-black
                  text-center shadow-sm ring-2 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-inset
                  focus:ring-white invalid:ring-red-600"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200"
            >
              Make reservation
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
