
import "../index.css";
import { logo, resume } from "../assets"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const Navbar = () => {

  const navigation = [
    { name: 'Home', href: '#home', current: true },
    { name: 'About', href: '#about', current: false },
    { name: 'Projects', href: '#projects', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <Disclosure as="nav" className="w-full">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto sm:px-6 lg:p-6">
            <div className="relative flex items-center justify-around h-20">

              {/* Mobile menu*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center md:justify-between md:w-full sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="w-auto h-14"
                    src={logo}
                    alt="Trae Hughes Logo"
                  />
                </div>
                <div className={classNames("hidden sm:block", { "sm:justify-between": false })}>
                  <div className="flex justify-between px-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-[#24a9c0]' : 'text-gray-300 hover:text-[#24a9c0]',
                          'px-6 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <a href={resume} download="Traes-Resume" target="_blank" rel="noreferrer" className='lg:flex w-[80px] h-[20px]  self-center ml-4 mb-2 hidden sm:block md:hidden ss:hidden '>
                      <button className='lg:flex sm:hidden md:hidden ss:hidden bg-[#24a9c0] hover:bg-[#808f85] text-gray-800 text-[16px] h-[30px] font-bold py-1 px-2 rounded inline-flex items-center justify-center'> <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg> <span>Resume </span></button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



export default Navbar;
