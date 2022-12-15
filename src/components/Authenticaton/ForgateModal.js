import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiShow } from "react-icons/bi";

const ForgateModal = ({ closeModal, openModal, isOpen }) => {
  const [email, setEmail] = useState(false);
  const [code, setCode] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmailVerificatinHendeler = () => {
    setEmail(true);
  };
  const codeRecieverHendeler = () => {
    setCode(true);
  };
  const newPassRecieverHendeler = () => {
    setNewPass(true);
    setSuccess(true);
  };

  return (
    <div>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full  max-w-md transform overflow-hidden rounded-2xl bg-[#434343] p-6 text-left align-middle shadow-xl transition-all ${
                    code ? (success ? "h-[180px]" : "h-[340px]") : "h-[270px]"
                  } `}
                >
                  {!email && (
                    <div className="">
                      <p className="text-xl text-[#ffffff]  font-medium text-[24px]">
                        Forgot Password
                      </p>
                      <p className="text-[15px] text-gray-300 mt-2">
                        Enter your email for verfiction process, we well send 4
                        digits code to your email
                      </p>
                      <div className="mt-6">
                        <div className="h-[60px] mt-3 relative">
                          <input
                            className=" w-full h-[55px] modalColur placeholder-[#DADADA]  rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
                            type="email"
                            name="email"
                            placeholder="email"
                            id=""
                          />

                          <div>
                            <span className=" text-white  text-3xl absolute top-3 left-4">
                              <AiOutlineMail />
                            </span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <input
                            onClick={() => sendEmailVerificatinHendeler()}
                            className="bg-gradient-to-b  from-[#C52410] to-[#E6550A] w-full  rounded-lg text-white h-[55px]"
                            type="submit"
                            value="Next"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {!code && email && (
                    <div>
                      <p className="text-xl text-[#ffffff]  font-medium text-[24px]">Enter 4 Digit Code</p>
                      <p className="text-[15px] text-gray-300 mt-2">
                        Enter 4 digit code that you recevied on your Email
                        Address
                      </p>
                      <div className="mt-6 flex justify-between">
                        <input
                          className="w-[60px] h-[55px]  text-center  modalColur placeholder-[#DADADA] rounded-lg p-2 text-3xl  outline-[#1E1E1E]"
                          type="number"
                        />
                        <input
                          className="w-[60px] h-[55px]  text-center  modalColur placeholder-[#DADADA] rounded-lg p-2 text-3xl  outline-[#1E1E1E]"
                          type="number"
                        />
                        <input
                          className="w-[60px] h-[55px]  text-center  modalColur placeholder-[#DADADA] rounded-lg p-2 text-3xl  outline-[#1E1E1E]"
                          type="number"
                        />
                        <input
                          className="w-[60px] h-[55px]  text-center  modalColur placeholder-[#DADADA] rounded-lg p-2 text-3xl  outline-[#1E1E1E]"
                          type="number"
                        />
                      </div>
                      <div className="mt-4">
                        <input
                          onClick={() => codeRecieverHendeler()}
                          className="bg-gradient-to-b  from-[#C52410] to-[#E6550A]  w-full  rounded-lg text-white h-[55px]"
                          type="submit"
                          value="Next"
                        />
                      </div>
                    </div>
                  )}

                  {email && code && !newPass && (
                    <div className="">
                      <p className="text-xl text-[#ffffff]  font-medium text-[24px]">Reset Password</p>
                      <p className="text-[15px] text-gray-300 mt-2">
                        Set your new Password for your account so you can login
                        and keep things going.
                      </p>
                      <div className="">
                        <div className="h-[60px] mt-6 relative">
                          <input
                            className=" w-full h-[55px] modalColur placeholder-[#DADADA]   rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
                            type="password"
                            name="password"
                            placeholder="Password"
                            id=""
                          />

                          <div>
                            <span className=" text-white  text-3xl absolute top-3 left-4">
                              <AiOutlineMail />
                            </span>
                            <span className="text-white  text-3xl absolute top-3 right-4">
                              <BiShow />
                            </span>
                          </div>
                        </div>
                        <div className="h-[60px] mt-2 relative">
                          <input
                            className=" w-full h-[55px] modalColur placeholder-[#DADADA]   rounded-lg pl-14 text-lg  outline-[#1E1E1E]"
                            type="password"
                            name="password"
                            placeholder="Confirm Password"
                            id=""
                          />

                          <div>
                            <span className=" text-white  text-3xl absolute top-3 left-4">
                              <AiOutlineMail />
                            </span>
                            <span className="text-white  text-3xl absolute top-3 right-4">
                              <BiShow />
                            </span>
                          </div>
                        </div>

                        <div className="mt-2">
                          <input
                            onClick={() => newPassRecieverHendeler()}
                            className="bg-gradient-to-b  from-[#C52410] to-[#E6550A] w-full  rounded-lg text-white h-[55px]"
                            type="submit"
                            value="Reset Password"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {email && code && newPass && success && (
                    <div className="">
                      <p className="text-xl text-[#ffffff]  font-medium text-[24px]">Reset Password</p>
                      <p className="text-[15px] text-gray-300 mt-2">Password successfull Reset</p>
                      <div className="mt-6">
                        <div className="mt-2">
                          <input
                            onClick={() => closeModal()}
                            className="bg-gradient-to-b  from-[#C52410] to-[#E6550A]  w-full  rounded-lg text-white h-[55px]"
                            type="submit"
                            value="Complete"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ForgateModal;
