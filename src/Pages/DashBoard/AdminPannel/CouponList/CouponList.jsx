import React, { useState } from "react";
import { useForm } from "react-hook-form";
import deleteIcon from "../../../../assets/icons/delete.svg";
import editIcon from "../../../../assets/icons/edit.svg";
import copyIcon from "../../../../assets/icons/copy.svg";
import { toast } from "react-hot-toast";
import EditCoupon from "./EditCoupon/EditCoupon";
import ReactPaginate from "react-paginate";
const CouponList = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    const couponDetails = {
      couponLabel: data?.CouponLabel,
      creatorEmail: data?.creatorEmail,
      updaterEmail: data?.updaterEmail,
    };

    fetch("https://api.geeksofgurukul.com/api/v1/coupons/all-coupons", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        data: JSON.stringify(couponDetails),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result?.success) {
          setItems(result?.data);
          setLoading(false);
        } else {
          toast.error(result?.message);
          setLoading(false);
        }
        console.log("Server response:", result);
        // Handle the server response
      })
      .catch((error) => {
        console.error(
          "Error occurred while sending data to the server:",
          error
        );
        // Handle the error
      });
    console.log(items);
    // reset();
  };

  // pagenation
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math?.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event?.selected * itemsPerPage) % items?.length;
    console.log(
      `User requested page number ${event?.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      {/* Search Form */}
      <div className="container p-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Text Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div class="w-full mx-auto my-3 font-poppins">
              <label
                for="CouponLabel"
                class="block mb-2 text-md font-poppins font-medium text-gray-900 dark:text-gray-400"
              >
                <div className="flex items-center justify-between">
                  <p>Coupon Label:</p>
                </div>
              </label>
              <input
                id="CouponLabel"
                name="CouponLabel"
                type="text"
                {...register(
                  "CouponLabel"
                  //   {
                  // required: "Coupon Label is required",
                  //   }
                )}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Enter coupon label"
                aria-invalid={errors.CouponLabel ? "true" : "false"}
              ></input>
              {errors.CouponLabel && (
                <p
                  role="alert"
                  className="text-red-500 font-poppins font-medium"
                >
                  {errors.CouponLabel?.message}
                </p>
              )}
            </div>
            <div class="w-full mx-auto my-3 font-poppins">
              <label
                for="creatorNmame"
                class="block mb-2 text-md font-poppins font-medium text-gray-900 dark:text-gray-400"
              >
                <div className="flex items-center justify-between">
                  <p>Creator Email:</p>
                </div>
              </label>
              <input
                id="creatorEmail"
                name="creatorEmail"
                type="email"
                {...register(
                  "creatorEmail"
                  //   {
                  // required: "creator Name is required",
                  //   }
                )}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Write creator email"
                aria-invalid={errors.creatorEmail ? "true" : "false"}
              ></input>
              {errors.creatorEmail && (
                <p
                  role="alert"
                  className="text-red-500 font-poppins font-medium"
                >
                  {errors.creatorEmail?.message}
                </p>
              )}
            </div>
            <div class="w-full mx-auto my-3 font-poppins">
              <label
                for="updaterEmail"
                class="block mb-2 text-md font-poppins font-medium text-gray-900 dark:text-gray-400"
              >
                <div className="flex items-center justify-between">
                  <p>Updater Email:</p>
                </div>
              </label>
              <input
                id="updaterEmail"
                name="updaterEmail"
                type="email"
                {...register(
                  "updaterEmail"
                  //   {
                  // required: "Program Name is required",
                  //   }
                )}
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Write Updater email"
                aria-invalid={errors.updaterEmail ? "true" : "false"}
              ></input>
              {errors.updaterEmail && (
                <p
                  role="alert"
                  className="text-red-500 font-poppins font-medium"
                >
                  {errors.updaterEmail?.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            class="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-lg shadow"
          >
            <div class="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span class="relative text-black group-hover:text-white font-poppins font-medium">
              {loading ? `Searching` : `Search Coupon`}
            </span>
          </button>
        </form>
      </div>
      {/* Search Form */}
      {/* Table */}
      <div class="flex flex-col justify-center h-full mx-auto">
        <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold font-poppins text-gray-800">Coupons</h2>
          </header>
          <div class="p-3">
            <div class="max-w-[90vw] overflow-x-scroll">
              <table class="table-auto w-full font-poppins font-medium overflow-x-auto">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">SL No:</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Coupon Code</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Discount</div>
                    </th>
                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-left">Expire Time</div>
                    </th>

                    <th class="p-2 whitespace-nowrap">
                      <div class="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  {currentItems.map((coupon, i) => (
                    <tr key={i}>
                      <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">{i + 1}</div>
                      </td>
                      <td class="p-2 whitespace-nowrap">
                        {coupon?.couponCode}
                      </td>
                      <td class="p-2 whitespace-nowrap">{coupon?.discount}</td>
                      <td class="p-2 whitespace-nowrap">{coupon?.expireAt}</td>

                      <td class="p-2 whitespace-nowrap flex gap-2">
                        <div class="mx-auto flex w-[100px] gap-2">
                          <button type="button" className="px-1 py-1 ">
                            {/* svg */}
                            <img
                              height="15px"
                              width="15px"
                              src={deleteIcon}
                              alt=""
                            />
                          </button>
                          <button
                            type="button"
                            className="px-1 py-1"
                            onClick={() => setIsEditable(true)}
                          >
                            {/* svg */}
                            <img
                              height="15px"
                              width="15px"
                              src={editIcon}
                              alt=""
                            />
                          </button>
                          {isEditable && (
                            <EditCoupon
                              isEditable={isEditable}
                              setIsEditable={setIsEditable}
                              coupon={coupon}
                            />
                          )}

                          <button
                            data-modal-target="staticModal"
                            data-modal-toggle="staticModal"
                            class="px-1 py-1 "
                            type="button"
                          >
                            {/* svg */}
                            <img
                              height="15px"
                              width="15px"
                              src={copyIcon}
                              alt=""
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* pagination */}

              <div>
                <div className="pagination">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination-menu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Table */}
    </div>
  );
};

export default CouponList;
