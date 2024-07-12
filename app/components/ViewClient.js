"use client";
import { Fragment, useState } from "react";
import { Listbox, Menu, Transition } from "@headlessui/react";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  FaceFrownIcon,
  FaceSmileIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  PaperClipIcon,
  UserCircleIcon,
  XMarkIcon as XMarkIconMini,
} from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const campaigns = {
  items: [
    {
      id: 1,
      title: "Guest Post Outreach",
      description: "Local Blogs",
      hours: "3",
      rate: "1",
    },
    {
      id: 2,
      title: "Competitor Outreach",
      description: "Competitor Links",
      hours: "1",
      rate: "0",
    },
  ],
};

const activity = [
  {
    id: 1,
    type: "created client",
    person: { name: "Chelsea Hagon" },
    date: "7d ago",
    dateTime: "2023-01-23T10:32",
  },
  {
    id: 2,
    type: "edited client",
    person: { name: "Chelsea Hagon" },
    date: "6d ago",
    dateTime: "2023-01-23T11:03",
  },
  {
    id: 3,
    type: "sent a message",
    person: { name: "Chelsea Hagon" },
    date: "6d ago",
    dateTime: "2023-01-23T11:24",
  },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment: "Logged some more links in the competitor campaign.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
];

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: FaceSmileIcon,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: FaceFrownIcon,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: HandThumbUpIcon,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: XMarkIconMini,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ViewClient = () => {
  const [selected, setSelected] = useState(moods[5]);
  return (
    <main>
      <header className='relative isolate pt-16'>
        <div
          className='absolute inset-0 -z-10 overflow-hidden'
          aria-hidden='true'
        >
          <div className='absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80'>
            <div
              className='aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]'
              style={{
                clipPath:
                  "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
              }}
            />
          </div>
          <div className='absolute inset-x-0 bottom-0 h-px bg-gray-900/5' />
        </div>

        <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
          <div className='mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none'>
            <div className='flex items-center gap-x-6'>
              <img
                src='https://tailwindui.com/img/logos/48x48/tuple.svg'
                alt=''
                className='h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10'
              />
              <h1>
                <div className='mt-1 text-base font-semibold leading-6 text-gray-900'>
                  Echo AFC
                </div>
              </h1>
            </div>
            <div className='flex items-center gap-x-4 sm:gap-x-6'>
              <a
                href='#'
                className='hidden text-sm font-semibold leading-6 text-gray-900 sm:block'
              >
                Delete Client
              </a>
              <a
                href='#'
                className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Edit Client
              </a>

              <Menu as='div' className='relative sm:hidden'>
                <Menu.Button className='-m-3 block p-3'>
                  <span className='sr-only'>More</span>
                  <EllipsisVerticalIcon
                    className='h-5 w-5 text-gray-500'
                    aria-hidden='true'
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-100'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900"
                          )}
                        >
                          Copy URL
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </header>

      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {/* Invoice summary */}
          <div className='lg:col-start-3 lg:row-end-1'>
            <h2 className='sr-only'>Summary</h2>
            <div className='rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5'>
              <dl className='flex flex-wrap'>
                <div className='flex-auto pl-6 pt-6'>
                  <dt className='text-sm font-semibold leading-6 text-gray-900'>
                    Outreach Email
                  </dt>
                  <dd className='mt-1 text-base font-semibold leading-6 text-gray-900'>
                    echoafcseo@gmail.com
                  </dd>
                </div>
                <div className='flex-none self-end px-6 pt-4'>
                  <dt className='sr-only'>Status</dt>
                  <dd className='rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20'>
                    Connected
                  </dd>
                </div>
              </dl>
              <div className='mt-6 border-t border-gray-900/5 px-6 py-6'>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Access Email <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Invoice */}
          <div className='-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16'>
            <table className='w-full whitespace-nowrap text-left text-sm leading-6'>
              <colgroup>
                <col className='w-full' />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className='border-b border-gray-200 text-gray-900'>
                <tr>
                  <th scope='col' className='px-0 py-3 font-semibold'>
                    Campaign Name
                  </th>
                  <th
                    scope='col'
                    className='hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell'
                  >
                    Links Pending
                  </th>
                  <th
                    scope='col'
                    className='hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell'
                  >
                    Links Earned
                  </th>
                </tr>
              </thead>
              <tbody>
                {campaigns.items.map((item) => (
                  <tr key={item.id} className='border-b border-gray-100'>
                    <td className='max-w-0 px-0 py-5 align-top'>
                      <div className='truncate font-medium text-gray-900'>
                        {item.title}
                      </div>
                      <div className='truncate text-gray-500'>
                        {item.description}
                      </div>
                    </td>
                    <td className='hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell'>
                      {item.hours}
                    </td>
                    <td className='hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell'>
                      {item.rate}
                    </td>

                    <td className='hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell'>
                      <a
                        href='#'
                        className='text-indigo-600 hover:text-indigo-900'
                      >
                        View<span className='sr-only'>, {item.title}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='lg:col-start-3'>
            {/* Activity feed */}
            <h2 className='text-sm font-semibold leading-6 text-gray-900'>
              Activity
            </h2>
            <ul role='list' className='mt-6 space-y-6'>
              {activity.map((activityItem, activityItemIdx) => (
                <li key={activityItem.id} className='relative flex gap-x-4'>
                  <div
                    className={classNames(
                      activityItemIdx === activity.length - 1
                        ? "h-6"
                        : "-bottom-6",
                      "absolute left-0 top-0 flex w-6 justify-center"
                    )}
                  >
                    <div className='w-px bg-gray-200' />
                  </div>
                  {activityItem.type === "commented" ? (
                    <>
                      <img
                        src={activityItem.person.imageUrl}
                        alt=''
                        className='relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50'
                      />
                      <div className='flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200'>
                        <div className='flex justify-between gap-x-4'>
                          <div className='py-0.5 text-xs leading-5 text-gray-500'>
                            <span className='font-medium text-gray-900'>
                              {activityItem.person.name}
                            </span>{" "}
                            commented
                          </div>
                          <time
                            dateTime={activityItem.dateTime}
                            className='flex-none py-0.5 text-xs leading-5 text-gray-500'
                          >
                            {activityItem.date}
                          </time>
                        </div>
                        <p className='text-sm leading-6 text-gray-500'>
                          {activityItem.comment}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='relative flex h-6 w-6 flex-none items-center justify-center bg-white'>
                        {activityItem.type === "paid" ? (
                          <CheckCircleIcon
                            className='h-6 w-6 text-indigo-600'
                            aria-hidden='true'
                          />
                        ) : (
                          <div className='h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300' />
                        )}
                      </div>
                      <p className='flex-auto py-0.5 text-xs leading-5 text-gray-500'>
                        <span className='font-medium text-gray-900'>
                          {activityItem.person.name}
                        </span>{" "}
                        {activityItem.type}.
                      </p>
                      <time
                        dateTime={activityItem.dateTime}
                        className='flex-none py-0.5 text-xs leading-5 text-gray-500'
                      >
                        {activityItem.date}
                      </time>
                    </>
                  )}
                </li>
              ))}
            </ul>

            {/* New comment form */}
            <div className='mt-6 flex gap-x-3'>
              <img
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
                className='h-6 w-6 flex-none rounded-full bg-gray-50'
              />
              <form action='#' className='relative flex-auto'>
                <div className='overflow-hidden rounded-lg pb-12 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600'>
                  <label htmlFor='comment' className='sr-only'>
                    Add your comment
                  </label>
                  <textarea
                    rows={2}
                    name='comment'
                    id='comment'
                    className='block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                    placeholder='Add your comment...'
                    defaultValue={""}
                  />
                </div>

                <div className='absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2'>
                  <div className='flex items-center space-x-5'>
                    <div className='flex items-center'>
                      <button
                        type='button'
                        className='-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500'
                      >
                        <PaperClipIcon className='h-5 w-5' aria-hidden='true' />
                        <span className='sr-only'>Attach a file</span>
                      </button>
                    </div>
                    <div className='flex items-center'>
                      <Listbox value={selected} onChange={setSelected}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className='sr-only'>
                              Your mood
                            </Listbox.Label>
                            <div className='relative'>
                              <Listbox.Button className='relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500'>
                                <span className='flex items-center justify-center'>
                                  {selected.value === null ? (
                                    <span>
                                      <FaceSmileIcon
                                        className='h-5 w-5 flex-shrink-0'
                                        aria-hidden='true'
                                      />
                                      <span className='sr-only'>
                                        Add your mood
                                      </span>
                                    </span>
                                  ) : (
                                    <span>
                                      <span
                                        className={classNames(
                                          selected.bgColor,
                                          "flex h-8 w-8 items-center justify-center rounded-full"
                                        )}
                                      >
                                        <selected.icon
                                          className='h-5 w-5 flex-shrink-0 text-white'
                                          aria-hidden='true'
                                        />
                                      </span>
                                      <span className='sr-only'>
                                        {selected.name}
                                      </span>
                                    </span>
                                  )}
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave='transition ease-in duration-100'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Listbox.Options className='absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm'>
                                  {moods.map((mood) => (
                                    <Listbox.Option
                                      key={mood.value}
                                      className={({ active }) =>
                                        classNames(
                                          active ? "bg-gray-100" : "bg-white",
                                          "relative cursor-default select-none px-3 py-2"
                                        )
                                      }
                                      value={mood}
                                    >
                                      <div className='flex items-center'>
                                        <div
                                          className={classNames(
                                            mood.bgColor,
                                            "flex h-8 w-8 items-center justify-center rounded-full"
                                          )}
                                        >
                                          <mood.icon
                                            className={classNames(
                                              mood.iconColor,
                                              "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden='true'
                                          />
                                        </div>
                                        <span className='ml-3 block truncate font-medium'>
                                          {mood.name}
                                        </span>
                                      </div>
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                  >
                    Comment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewClient;
